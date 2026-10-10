import express from 'express';
import type { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { getFewShotExamples } from './data/referenceLibrary.ts';
import { MINECRAFT_PALETTES } from './data/paletteLibrary.ts';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const app = express();

// Increase JSON body limits for base64 image uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Material profiles defining authentic Minecraft color ramps and generic textural behaviors
interface MaterialProfile {
  family: string;
  paletteKey: string;
  behavior?: string;
}

const MATERIAL_PROFILES: Record<string, MaterialProfile> = {
  'echo shard': {
    family: 'sculk',
    paletteKey: 'sculk',
    behavior: 'Deep midnight-navy/near-black substrate speckled with 1-2 pixel bioluminescent cyan/teal glowing spots.'
  },
  'sculk': {
    family: 'sculk',
    paletteKey: 'sculk',
    behavior: 'Deep midnight-navy/near-black substrate speckled with 1-2 pixel bioluminescent cyan/teal glowing spots.'
  },
  'oxidized copper': {
    family: 'copper',
    paletteKey: 'copper',
    behavior: 'Weathered copper mottled with crusty seafoam-turquoise/verdigris oxidation spots across a warm reddish-brown base.'
  },
  'weathered copper': {
    family: 'copper',
    paletteKey: 'copper',
    behavior: 'Weathered copper mottled with crusty seafoam-turquoise/verdigris oxidation spots across a warm reddish-brown base.'
  },
  'copper': {
    family: 'copper',
    paletteKey: 'copper',
    behavior: 'Warm burnished metallic orange-brown with distinct reflective highlights.'
  },
  'iron': {
    family: 'iron',
    paletteKey: 'iron',
    behavior: 'Clean silvery-grey metal with bright edge glints and high-contrast stepped shading.'
  },
  'steel': {
    family: 'iron',
    paletteKey: 'iron',
    behavior: 'Clean silvery-grey metal with bright edge glints and high-contrast stepped shading.'
  },
  'gold': {
    family: 'gold',
    paletteKey: 'gold',
    behavior: 'Vibrant golden yellow with warm orange-brown shadows and bright specular gleam.'
  },
  'golden': {
    family: 'gold',
    paletteKey: 'gold',
    behavior: 'Vibrant golden yellow with warm orange-brown shadows and bright specular gleam.'
  },
  'diamond': {
    family: 'diamond',
    paletteKey: 'diamond',
    behavior: 'Luminous cyan-aqua crystalline surface with pure white facet highlights.'
  },
  'netherite': {
    family: 'netherite',
    paletteKey: 'netherite',
    behavior: 'Heavy dark matte alloy with subtle charcoal undertones and sharp rim highlights.'
  },
  'amethyst': {
    family: 'amethyst',
    paletteKey: 'amethyst',
    behavior: 'Faceted purple crystal geometry with bright lavender-white edge highlights on vertices.'
  },
  'emerald': {
    family: 'emerald',
    paletteKey: 'emerald',
    behavior: 'Deep saturated green crystal planes with vivid lime-white specular glints.'
  },
  'prismarine': {
    family: 'prismarine',
    paletteKey: 'prismarine',
    behavior: 'Segmented aquatic seafoam-to-deep-teal stone with subtle color mottling.'
  },
  'wood': {
    family: 'wood',
    paletteKey: 'wood',
    behavior: 'Organic fibrous grain with directional 1-pixel striations and darker contour edges.'
  },
  'wooden': {
    family: 'wood',
    paletteKey: 'wood',
    behavior: 'Organic fibrous grain with directional 1-pixel striations and darker contour edges.'
  },
  'stone': {
    family: 'stone',
    paletteKey: 'stone',
    behavior: 'Chunky neutral grey mineral clusters with rough fractured edges.'
  },
  'cobblestone': {
    family: 'stone',
    paletteKey: 'stone',
    behavior: 'Chunky neutral grey mineral clusters with rough fractured edges.'
  },
  'redstone': {
    family: 'redstone',
    paletteKey: 'redstone',
    behavior: 'Deep crimson substrate with intense scarlet-ruby glowing crystalline speckles.'
  },
  'lapis': {
    family: 'lapis',
    paletteKey: 'lapis',
    behavior: 'Rich ultramarine deep-blue mineral stone with subtle lighter flecks.'
  }
};

// Initialize server-side Gemini client with user-agent telemetry
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// API: Get available models and API status
app.get('/api/models', async (_req: Request, res: Response) => {
  try {
    const listRes = await ai.models.list();
    const models = (listRes && listRes.models)
      ? listRes.models.map((m: { name: string }) => m.name.replace('models/', ''))
      : [];
    res.json({
      hasApiKey: !!process.env.GEMINI_API_KEY,
      models: models.length > 0 ? models : [
        'gemini-3.1-flash-image',
        'gemini-3.1-flash-lite-image',
        'gemini-3-pro-image',
        'gemini-2.5-flash-image'
      ]
    });
  } catch {
    res.json({
      hasApiKey: !!process.env.GEMINI_API_KEY,
      models: [
        'gemini-3.1-flash-image',
        'gemini-3.1-flash-lite-image',
        'gemini-3-pro-image',
        'gemini-2.5-flash-image'
      ]
    });
  }
});

// API: Generate Sprite
app.post('/api/generate-sprite', async (req: Request, res: Response) => {
  try {
    const { prompt, params = {}, structureImage, paletteImage, extractedPaletteHexes = [], isRevision = false } = req.body;
    
    // Check if simulation mode or no API key is present
    if (params.simulateNoKey || !process.env.GEMINI_API_KEY) {
      console.log('Simulating No-Key / Free fallback generation for prompt:', prompt);
      const examples = getFewShotExamples(prompt, params.itemType, params.material);
      const chosen = examples[0];
      if (chosen && chosen.base64Scaled) {
        return res.json({
          imageUrl: `data:image/png;base64,${chosen.base64Scaled}`,
          simulation: true,
          fallbackItem: chosen.id
        });
      }
    }

    // Choose model; prefer gemini-3.1-flash-image if available
    const selectedModel = params.model || 'gemini-3.1-flash-image';

    let outlineInstruction = '';
    if (params.outlineStyle === 'adaptive') {
      outlineInstruction = 'OUTLINES: Adaptive selective outlining. Emphasize silhouette readability on exterior shadow sides, but DO NOT add thick wrapping pixels to thin features like hilts, wires, or prongs.';
    } else {
      switch (params.outlineStyle) {
        case 'bold': 
          outlineInstruction = 'OUTLINES: HIGH CONTRAST. Use deep dark borders for the outer silhouette perimeter pixels.'; 
          break;
        case 'none': 
          outlineInstruction = 'OUTLINES: BORDERLESS. No distinct dark outline. Use only internal shading and color value shifts to define the shape.'; 
          break;
        default:
          outlineInstruction = 'OUTLINES: MODERN JAPPA SELECTIVE OUTLINE ("Sel-out"). Define the silhouette with deep, saturated versions of the adjacent inner colors on shadow edges. Light-facing edges and thin hilts/handles/wires should remain clean and natural without bloated dark wraparounds.'; 
          break;
      }
    }

    // Detect specific standard vanilla materials called out in user prompt
    const promptLower = (prompt || '').toLowerCase();
    const detectedMaterials: { keyword: string; family: string; palette: string[]; behavior?: string }[] = [];
    for (const [kw, profile] of Object.entries(MATERIAL_PROFILES)) {
      const regex = new RegExp(`\\b${kw.replace(/\s+/g, '\\s+')}\\b`, 'i');
      if (regex.test(promptLower)) {
        const pal = MINECRAFT_PALETTES[profile.paletteKey];
        if (pal && !detectedMaterials.some(m => m.family === profile.family)) {
          detectedMaterials.push({ 
            keyword: kw, 
            family: profile.family, 
            palette: pal, 
            behavior: profile.behavior 
          });
        }
      }
    }

    const systemContext = `You are a world-class Minecraft pixel artist specializing in the modern "Jappa" style (official Minecraft vanilla art style).
Your mission is to forge a professional 16x16 item sprite.

FORM FACTOR RULES:
- ${params.itemType === 'adaptive' ? 'ITEM TYPE: OPEN-ENDED. Freely infer the item form from the prompt (weapons, tools, food, crystals, relics, spawn eggs, potions, keys, armor, devices, or any custom Minecraft item).' : `FORCED TYPE: ${params.itemType}`}
- ${params.material === 'adaptive' ? 'MATERIAL COMPOSITION: Infer materials naturally from the user prompt and reference palette.' : `FORCED MATERIAL: ${params.material}`}

CLEANLINESS & STRUCTURE (NON-NEGOTIABLE):
1. NO NOISE: Absolutely NO "orphan pixels" or single-pixel speckles. Every pixel must belong to a "cluster" (a contiguous group of pixels of similar colors).
2. SYMMETRY: Frontal items (coins, armor, amulets, gems) must have a clean, balanced silhouette.
3. SCALE & FRAMING: The item MUST fill the 16x16 canvas. The object should dominate the frame and touch or nearly touch at least 2 edges of the canvas. Do NOT create tiny icons floating in the center.
4. SHAPE DYNAMICS:
   - MANUFACTURED ITEMS (Weapons, Tools, Ingots, Devices): Use straight lines, clear geometry, and rigid 45-degree angles.
   - ORGANIC ITEMS (Food, Plants, Creature Drops): Use CURVES, natural bending, and asymmetry.
5. COLOR PALETTE RESTRICTION: Limit the sprite to a tight, disciplined palette (typically 4 to 8 colors total per material). Use stepped color ramps (dark outline -> dark shadow -> midtone -> highlight -> specular shine). NO continuous gradients.
6. BINARY OPACITY (NON-NEGOTIABLE): 100% SOLID PIXELS ONLY. Minecraft items NEVER have translucent, semi-transparent, or glowing optical haze. Even fire, magma, and energy effects in Minecraft are composed of 100% solid, fully opaque pixels. Never render soft transparent particle fades.

VANILLA STYLE RULES:
1. GRID: Absolute 16x16 pixel art feel. Render with bold, crisp, chunky pixels on a PURE SOLID BLACK (#000000) background.
2. LINE QUALITY: NO "doubles" (unnecessary thick corners). Crisp 1-pixel steps only.
3. ${outlineInstruction}
4. SHADING: Use "Pixel Clusters". No dithering. Use hue or brightness shifting.
5. HUE SHIFTING: Warm highlights (yellow/white), Cool shadows (blue/purple).
6. BACKGROUND: PURE SOLID BLACK (#000000) ONLY with zero glow or ambient lighting. Never render on white or gray canvas.
7. STYLE: JAPPA. Smooth, painterly shading. Low contrast noise. Readable silhouettes. Stepped gradients.`;

    const taskDescription = isRevision 
      ? `REFINE existing sprite based on: "${prompt}". Focus on structural balance and cleaning up noisy pixels while keeping the core silhouette.`
      : `MANIFEST a new sprite based on: "${prompt}". Ensure a clean, balanced silhouette and vanilla-accurate color palettes.`;

    const finalPrompt = `${systemContext} 
TASK: ${taskDescription}
COMPLEXITY: ${params.complexity === 'adaptive' ? 'Infer from description' : params.complexity}.
ORIENTATION: ${params.orientation === 'adaptive' ? 'Infer from description' : (params.orientation === 'diagonal' ? 'DIAGONAL (Bottom-Left to Top-Right)' : params.orientation)}.`;

    const contents: { parts: { text?: string; inlineData?: { data: string; mimeType: string } }[] } = { parts: [] };
    
    // 1. System Prompt
    contents.parts.push({ text: finalPrompt });

    // 2. Palette Source & Multi-Material Logic
    if (paletteImage) {
      const extractedColorsText = extractedPaletteHexes.length > 0 ? ` (${extractedPaletteHexes.join(', ')})` : '';

      if (detectedMaterials.length > 0) {
        const materialDirectives = detectedMaterials.map(m => {
          const behaviorNote = m.behavior ? ` (Behavior: ${m.behavior})` : '';
          return `  * For parts explicitly designated as "${m.keyword}": USE AUTHENTIC ${m.family.toUpperCase()} PALETTE: ${m.palette.slice(0, 6).join(', ')}${behaviorNote}.`;
        }).join('\n');

        contents.parts.push({ 
          text: `DUAL-PALETTE & MULTI-MATERIAL INSTRUCTIONS:
1. SPECIFIED VANILLA MATERIALS IN PROMPT:
${materialDirectives}
2. CUSTOM / UNSPECIFIED / MAGIC ELEMENTS:
  * For all custom, fantasy, magical, crystal, blade, or unspecified parts of the item, USE THE COLORS EXTRACTED FROM THE PALETTE SOURCE IMAGE${extractedColorsText}.
Preserve both the authentic vanilla colors for the specified components and the reference palette for the custom elements!` 
        });
      } else {
        contents.parts.push({ 
          text: `COLOR PALETTE SOURCE / REQUIRED THEME:
Extract and strictly inherit the exact colors, highlights, shading tones, and hues from this image${extractedColorsText}. Paint the item using these colors while maintaining Jappa-style contrast and shading.` 
        });
      }

      contents.parts.push({
        inlineData: {
          data: paletteImage.split(',')[1] || paletteImage,
          mimeType: 'image/png'
        }
      });
    } else if (detectedMaterials.length > 0) {
      const materialDirectives = detectedMaterials.map(m => {
        const behaviorNote = m.behavior ? ` - Behavior: ${m.behavior}` : '';
        return `- ${m.keyword.toUpperCase()}: Authentic Minecraft ramp: ${m.palette.slice(0, 6).join(', ')}${behaviorNote}`;
      }).join('\n');

      contents.parts.push({
        text: `AUTHENTIC VANILLA PALETTES & TEXTURAL BEHAVIORS DETECTED FOR PROMPT:\n${materialDirectives}\nUse these exact stepped tones and natural pixel behaviors for the respective parts of the item.`
      });
    }

    // 4. Structure Image (if revision or remix)
    if (structureImage) {
      contents.parts.push({ text: "STRUCTURE & SHAPE REFERENCE: Use this image as the structural foundation (silhouette, shape outline, orientation, layout), but apply any prompt changes or variant requests to it:" });
      contents.parts.push({
        inlineData: {
          data: structureImage.split(',')[1] || structureImage,
          mimeType: 'image/png'
        }
      });
    }

    const config: { imageConfig: { aspectRatio: string; imageSize?: string } } = {
      imageConfig: {
        aspectRatio: '1:1'
      }
    };
    if (selectedModel === 'gemini-3.1-flash-image' || selectedModel === 'gemini-3-pro-image') {
      config.imageConfig.imageSize = '1K';
    }

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config
    });

    let imageUrl = '';
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        imageUrl = `data:image/png;base64,${part.inlineData.data}`;
        break;
      }
    }

    if (!imageUrl) {
      return res.status(500).json({ error: 'No image generated by model' });
    }

    res.json({ imageUrl });
  } catch (error: unknown) {
    console.warn('Gemini Generation failed, attempting library fallback:', (error as Error)?.message);
    try {
      const fallbackExamples = getFewShotExamples(req.body.prompt || '', req.body.params?.itemType, req.body.params?.material);
      if (fallbackExamples.length > 0 && fallbackExamples[0].base64Scaled) {
        return res.json({
          imageUrl: `data:image/png;base64,${fallbackExamples[0].base64Scaled}`,
          simulation: true,
          fallbackItem: fallbackExamples[0].id
        });
      }
    } catch (fallbackError) {
      console.error('Fallback generation also failed:', fallbackError);
    }
    res.status(500).json({ error: (error as Error)?.message || 'Generation failed' });
  }
});

// API: Refine Sprite
app.post('/api/refine-sprite', async (req: Request, res: Response) => {
  try {
    const { baseImage, instruction, originalPrompt, model = 'gemini-3.1-flash-image', simulateNoKey = false } = req.body;

    if (simulateNoKey || !process.env.GEMINI_API_KEY) {
      console.log('Simulating No-Key / Free fallback for refine sprite');
      return res.json({ imageUrl: baseImage, simulation: true });
    }

    const lowerInst = (instruction || '').toLowerCase();
    let technicalDirective = '';

    if (lowerInst.includes('noise') || lowerInst.includes('clean') || lowerInst.includes('simplify')) {
      technicalDirective = "AGGRESSIVELY SIMPLIFY. Reduce the color palette to max 4-5 distinct colors. ELIMINATE DITHERING. Group pixels into solid clusters.";
    } else if (lowerInst.includes('scale') || lowerInst.includes('size') || lowerInst.includes('larger') || lowerInst.includes('bigger') || lowerInst.includes('fill')) {
      technicalDirective = "AGGRESSIVELY RESCALE. Expand the pixels to touch the 16x16 canvas edges. Eliminate void space.";
    } else if (lowerInst.includes('symmetry') || lowerInst.includes('mirror')) {
      technicalDirective = "FORCE PERFECT GEOMETRIC SYMMETRY. Copy the left side shape to the right side (or vice versa).";
    } else if (lowerInst.includes('outline')) {
      technicalDirective = "REINFORCE JAPPA OUTLINES. Ensure selective dark border on outer edges, preserving thin features.";
    } else if (lowerInst.includes('curve') || lowerInst.includes('bend') || lowerInst.includes('organic')) {
      technicalDirective = "INTRODUCE CURVATURE. Break straight lines. Bend the object naturally.";
    }

    const contextContext = originalPrompt ? `ORIGINAL CONTEXT: The image was generated from: "${originalPrompt}".` : '';

    const promptText = `You are a master of Jappa-style Minecraft pixel art.
TASK: Edit this 16x16 sprite based on: "${instruction}".
${contextContext}

CRITICAL DIRECTIVE: ${technicalDirective || "Apply the changes visibly."}

IMPORTANT: Do not be conservative. If the user asks to change the size or shape, YOU MUST CHANGE THE PIXELS.

GENERAL RULES:
1. RESOLUTION: Output must remain visually compatible with 16x16 grid.
2. BACKGROUND: Pure Black (#000000).
3. TECHNIQUE: Use pixel clustering. Avoid dithering.
4. ORIENTATION: PRESERVE THE ORIGINAL ORIENTATION unless explicitly asked.`;

    const config: { imageConfig: { aspectRatio: string; imageSize?: string } } = {
      imageConfig: { aspectRatio: '1:1' }
    };
    if (model === 'gemini-3.1-flash-image' || model === 'gemini-3-pro-image') {
      config.imageConfig.imageSize = '1K';
    }

    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [
          { inlineData: { data: baseImage.split(',')[1] || baseImage, mimeType: 'image/png' } },
          { text: promptText }
        ]
      },
      config
    });

    let imageUrl = '';
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        imageUrl = `data:image/png;base64,${part.inlineData.data}`;
        break;
      }
    }

    if (!imageUrl) {
      return res.status(500).json({ error: 'No image generated during refinement' });
    }

    res.json({ imageUrl });
  } catch (error: unknown) {
    console.error('Gemini Refinement Error:', error);
    res.status(500).json({ error: (error as Error)?.message || 'Refinement failed' });
  }
});

// API: Suggest Name
app.post('/api/suggest-name', async (req: Request, res: Response) => {
  try {
    const { prompt = '', currentName = '', mode = 'new', simulateNoKey = false, model: paramsModel } = req.body;

    if (simulateNoKey || !process.env.GEMINI_API_KEY) {
      const tokens = prompt
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter((t: string) => !['the', 'a', 'an', 'with', 'and', 'for', 'of', 'in', 'on', 'at', 'to', 'make', 'create', 'is', 'it'].includes(t) && t.length > 1)
        .slice(0, 3)
        .join('_');
      return res.json({ name: tokens || currentName || 'item_sprite', simulation: true });
    }

    const systemPrompt = `You are a naming assistant for a Minecraft asset generator.
Your goal is to create a clean, snake_case filename (max 1-3 words) for the item.

INPUTS:
- User Prompt: "${prompt}"
- Previous Name: "${currentName}"
- Mode: ${mode}

RULES:
1. OUTPUT ONLY the filename string. No Markdown. No Explanation.
2. FORMAT: snake_case (e.g., void_sword, ruby_amulet, echo_battery).
3. IF 'refine' Mode: 
   - Keep the Previous Name if the prompt only describes shape/polish (e.g. "curve it", "fix noise").
   - Change the Previous Name ONLY if the material/subject changes.
4. IF 'remix' Mode:
   - Update the name if the prompt suggests a variation (e.g. "ruby version" -> ruby_sword).
5. FILTERING:
   - Ignore conversational filler ("it's", "the", "make a", "looks like").`;

    // Use gemini-flash-latest alias or allow override
    const textModel = req.body.textModel || (paramsModel?.includes('2.5') ? 'gemini-2.5-flash' : 'gemini-flash-latest');

    const response = await ai.models.generateContent({
      model: textModel,
      contents: systemPrompt
    });

    const name = response.text?.trim().replace(/`/g, '').replace(/\n/g, '') || currentName || 'item';
    res.json({ name });
  } catch (error: unknown) {
    console.warn('Suggest name fallback:', (error as Error)?.message);
    res.json({ name: req.body.currentName || 'item_sprite' });
  }
});

// Setup Vite middleware in dev, or serve static assets in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.use((_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
