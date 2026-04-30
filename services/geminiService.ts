
import { GoogleGenAI } from "@google/genai";
import { SpriteParams } from "../types";
import { getFewShotExamples } from "../data/referenceLibrary";

const TEXT_MODEL_NAME = 'gemini-3-flash-preview';

const getApiKey = () => {
  const localKey = localStorage.getItem('GEMINI_API_KEY');
  return localKey || process.env.GEMINI_API_KEY || '';
};

export const generateSprite = async (prompt: string, params: SpriteParams, referenceImage?: string, isRevision: boolean = false) => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  
  // Use the selected model, or fallback to 2.5 if undefined
  const selectedModel = params.model || 'gemini-2.5-flash-image';
  
  let outlineInstruction = '';
  if (params.outlineStyle === 'adaptive') {
    outlineInstruction = 'OUTLINES: Choose the best outline approach for the specific item type. For example, swords need clear outlines, while a piece of paper or cloud might need softer edges.';
  } else {
    switch (params.outlineStyle) {
      case 'bold': 
        outlineInstruction = 'OUTLINES: HIGH CONTRAST. Use pure black (#000000) or very dark gray for the outer perimeter pixels. Make the silhouette extremely sharp.'; 
        break;
      case 'none': 
        outlineInstruction = 'OUTLINES: BORDERLESS. No distinct dark outline. Use only internal shading and color value shifts to define the shape.'; 
        break;
      default: // 'default' forces Jappa-style Selective Outlining
        // Updated to prioritize consistency and reduce contrast variance in outlines
        outlineInstruction = 'OUTLINES: MODERN JAPPA STYLE. The outline must be a CONSISTENT, dark border that defines the silhouette. Do NOT use pure black (#000000). Use deep, saturated versions of the adjacent inner color. CRITICAL: Avoid high-contrast jumps between neighboring outline pixels to prevent the shape from breaking visually on different backgrounds. The outline must be significantly darker than the interior shading to ensure readability.'; 
        break;
    }
  }

  const systemContext = `You are a world-class Minecraft pixel artist specializing in the modern "Jappa" style.
    Your mission is to forge a professional 16x16 item sprite.
    
    FORM FACTOR RULES:
    - ${params.itemType === 'adaptive' ? 'INFER the item form (Weapon, Currency, Scroll, Tool, etc.) from the user prompt.' : `FORCED TYPE: ${params.itemType} (If Weapon: Sword, Axe, Mace, Trident, etc)`}
    - ${params.material === 'adaptive' ? 'INFER the best material (Gold, Iron, Netherite, etc.) from the user prompt.' : `FORCED MATERIAL: ${params.material}`}
    
    CLEANLINESS & STRUCTURE (NON-NEGOTIABLE):
    1. NO NOISE: Avoid "orphan pixels". Every pixel must belong to a "cluster" (a group of pixels of similar colors).
    2. SYMMETRY: Frontal items (coins, armor, amulets) must have a perfectly symmetrical silhouette.
    3. SCALE & FRAMING: The item MUST fill the 16x16 grid. Do NOT leave excessive empty space. The object should touch at least 2 edges of the canvas (or come within 1 pixel). A "large" item implies it dominates the frame.
    4. SHAPE DYNAMICS:
       - MANUFACTURED ITEMS (Weapons, Tools, Ingots, Books): Use straight lines, clear geometry, and rigid 45-degree angles.
       - ORGANIC ITEMS (Food, Plants, Creature Parts): Use CURVES, natural bending, and asymmetry. A "diagonal" sausage or root should curve naturally. Do NOT force organic items to be straight 45-degree lines.
    5. PALETTE EXTRACTION: If a reference image is provided, PRIORITIZE its color palette. Extract key colors from the reference and apply them to the new item. However, respect explicit color instructions in the prompt (e.g., if prompt says "blue coin" and reference is red, make it blue but maybe use the red's saturation/shading style).
    
    VANILLA STYLE RULES:
    1. GRID: Absolute 16x16 pixels. The output image will be downscaled, so draw with "BIG PIXELS". 
    2. LINE QUALITY: NO "doubles". Crisp 1-pixel steps only.
    3. ${outlineInstruction}
    4. SHADING: Use "Pixel Clusters". No dithering. Use hue or brightness shifting.
    5. HUE SHIFTING: Warm highlights (yellow/white), Cool shadows (blue/purple).
    6. BACKGROUND: PURE SOLID BLACK (#000000) ONLY.
    7. STYLE: JAPPA. Smooth, painterly shading. Low contrast noise. Readable silhouettes. Stepped gradients.
    
    CRITICAL: The output must look like a low-resolution 16x16 icon. Do not generate high-fidelity art. Use a limited color palette.`;

  const taskDescription = isRevision 
    ? `REFINE existing sprite based on: "${prompt}". Focus on structural balance and cleaning up noisy pixels while keeping the core silhouette.`
    : `MANIFEST a new sprite based on: "${prompt}". Ensure a clean, balanced silhouette and vanilla-accurate color palettes.`;

  const finalPrompt = `${systemContext} 
    TASK: ${taskDescription}
    COMPLEXITY: ${params.complexity === 'adaptive' ? 'Infer from description' : params.complexity}.
    ORIENTATION: ${params.orientation === 'adaptive' ? 'Infer from description' : (params.orientation === 'diagonal' ? 'DIAGONAL (Bottom-Left to Top-Right)' : params.orientation)}.`;

  // --- FEW-SHOT LEARNING INJECTION ---
  const contents: { parts: { text?: string; inlineData?: { data: string; mimeType: string } }[] } = { parts: [] };
  
  // 1. Add System Prompt
  contents.parts.push({ text: finalPrompt });

  // 2. Add Reference Library Examples (Grounding)
  // We strictly pull examples that match the requested Type or Material to guide the AI style.
  const examples = getFewShotExamples(params.itemType, params.material);
  if (examples.length > 0) {
    contents.parts.push({ text: "Here are EXAMPLES of High-Quality Vanilla items. Emulate their line quality, shading technique, and lack of noise:" });
    examples.forEach(ex => {
      contents.parts.push({ text: `EXAMPLE (${ex.description}):` });
      contents.parts.push({ 
        inlineData: {
          data: ex.base64, // The data is already pure base64 in the library
          mimeType: 'image/png'
        }
      });
    });
  }

  // 3. Add User Reference Image (if any)
  if (referenceImage) {
    contents.parts.push({ text: "VISUAL REFERENCE provided by user (Use this for palette/shape inspiration):" });
    contents.parts.push({
      inlineData: {
        data: referenceImage.split(',')[1],
        mimeType: 'image/png'
      }
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config: { imageConfig: { aspectRatio: "1:1" } }
    });

    let imageUrl = '';
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        imageUrl = `data:image/png;base64,${part.inlineData.data}`;
        break;
      }
    }
    if (!imageUrl) throw new Error("No image generated");
    return imageUrl;
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};

export const refineSprite = async (baseImage: string, instruction: string, originalPrompt?: string, model: string = 'gemini-2.5-flash-image') => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });

  // DETECT INTENT FOR STRONGER TECHNICAL DIRECTIVES
  const lowerInst = instruction.toLowerCase();
  let technicalDirective = "";

  // Increased aggression in the directives
  if (lowerInst.includes("noise") || lowerInst.includes("clean") || lowerInst.includes("simplify")) {
    technicalDirective = "AGGRESSIVELY SIMPLIFY. Reduce the color palette to max 4-5 distinct colors. ELIMINATE DITHERING. Group pixels into large, solid clusters. Use a 'cartoon' shading style with clear separation between light, mid, and dark tones. Do not use single-pixel noise.";
  } else if (lowerInst.includes("scale") || lowerInst.includes("size") || lowerInst.includes("larger") || lowerInst.includes("bigger") || lowerInst.includes("fill")) {
    technicalDirective = "AGGRESSIVELY RESCALE. The item IS TOO SMALL. Expand the pixels to touch the 16x16 canvas edges. Do NOT preserve the current size. Eliminate void space.";
  } else if (lowerInst.includes("symmetry") || lowerInst.includes("mirror")) {
    technicalDirective = "FORCE PERFECT GEOMETRIC SYMMETRY. Copy the left side shape to the right side (or vice versa). The silhouette MUST be identical on both sides.";
  } else if (lowerInst.includes("outline")) {
    technicalDirective = "REINFORCE OUTLINES. The outline pixels must be CONSISTENT in value. Remove high-contrast jumps between neighboring outline pixels to stabilize the silhouette.";
  } else if (lowerInst.includes("curve") || lowerInst.includes("bend") || lowerInst.includes("organic")) {
    technicalDirective = "INTRODUCE CURVATURE. Break straight lines. Bend the object naturally. Use irregular organic pixel stepping instead of rigid diagonals.";
  }

  const contextContext = originalPrompt ? `ORIGINAL CONTEXT: The image was generated from: "${originalPrompt}".` : '';

  const prompt = `You are a master of Jappa-style pixel art.
    TASK: Edit this 16x16 sprite based on: "${instruction}".
    ${contextContext}
    
    CRITICAL DIRECTIVE: ${technicalDirective || "Apply the changes visibly."}
    
    IMPORTANT: Do not be conservative. If the user asks to change the size or shape, YOU MUST CHANGE THE PIXELS. Do not return the same image.

    GENERAL RULES:
    1. RESOLUTION: Output must remain visually compatible with 16x16 grid.
    2. BACKGROUND: Pure Black (#000000).
    3. TECHNIQUE: Use pixel clustering. Avoid dithering.
    4. ORIENTATION: PRESERVE THE ORIGINAL ORIENTATION. If the input is diagonal, keep it diagonal. If it is frontal, keep it frontal. Do NOT rotate the item unless explicitly asked.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          { inlineData: { data: baseImage.split(',')[1], mimeType: 'image/png' } },
          { text: prompt }
        ]
      },
      config: { imageConfig: { aspectRatio: "1:1" } }
    });

    let imageUrl = '';
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        imageUrl = `data:image/png;base64,${part.inlineData.data}`;
        break;
      }
    }
    return imageUrl;
  } catch (error) {
    console.error("Gemini Refinement Error:", error);
    throw error;
  }
};

/**
 * Uses a lightweight text model to determine a "delightful" filename.
 * It ignores grammar words and focuses on the subject.
 */
export const suggestItemName = async (prompt: string, currentName: string = '', mode: 'new' | 'refine' | 'remix' = 'new') => {
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    
    const systemPrompt = `You are a naming assistant for a Minecraft asset generator.
    Your goal is to create a clean, snake_case filename (max 1-3 words) for the item.
    
    INPUTS:
    - User Prompt: "${prompt}"
    - Previous Name: "${currentName}"
    - Mode: ${mode}
    
    RULES:
    1. OUTPUT ONLY the filename string. No Markdown. No Explanation.
    2. FORMAT: snake_case (e.g., void_sword, ruby_amulet, caddozzo).
    3. IF 'Refine' Mode: 
       - Keep the Previous Name if the prompt only describes shape/polish (e.g. "curve it", "fix noise").
       - Change the Previous Name ONLY if the material/subject changes (e.g. "make it gold").
    4. IF 'Remix' Mode:
       - Update the name if the prompt suggests a variation (e.g. "ruby version" -> ruby_sword).
    5. FILTERING:
       - Ignore conversational filler ("it's", "the", "make a", "looks like").
       - If prompt is "The Caddozzo -- it's curved", extract "caddozzo".
    `;

    try {
        const response = await ai.models.generateContent({
            model: TEXT_MODEL_NAME,
            contents: systemPrompt
        });
        return response.text?.trim().replace(/`/g, '').replace(/\n/g, '') || currentName || 'item';
    } catch (e) {
        console.warn("Failed to suggest name", e);
        return currentName || 'item_sprite';
    }
}

export const checkModelAvailability = async (): Promise<string[]> => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  try {
    const response = await ai.models.list();
    if (response && response.models) {
        // Strip 'models/' prefix if present and return names
        return response.models.map((m: { name: string }) => m.name.replace('models/', ''));
    }
    return [];
  } catch (e) {
    console.warn("Model list failed", e);
    return [];
  }
};
