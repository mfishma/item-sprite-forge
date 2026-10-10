import { SpriteParams } from "../types";
import { extractPaletteFromImage } from "../utils/imageProcessing";

export const generateSprite = async (
  prompt: string, 
  params: SpriteParams, 
  structureImage?: string, 
  paletteImage?: string, 
  isRevision: boolean = false
): Promise<string> => {
  let extractedPaletteHexes: string[] = [];
  if (paletteImage) {
    try {
      extractedPaletteHexes = await extractPaletteFromImage(paletteImage, 6);
    } catch {
      // fallback
    }
  }

  const response = await fetch('/api/generate-sprite', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt,
      params,
      structureImage,
      paletteImage,
      extractedPaletteHexes,
      isRevision
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Failed to generate sprite' }));
    throw new Error(errorData.error || `HTTP ${response.status}`);
  }

  const data = await response.json();
  return data.imageUrl;
};

export const refineSprite = async (
  baseImage: string, 
  instruction: string, 
  originalPrompt?: string, 
  model: string = 'gemini-3.1-flash-image',
  simulateNoKey: boolean = false
): Promise<string> => {
  const response = await fetch('/api/refine-sprite', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      baseImage,
      instruction,
      originalPrompt,
      model,
      simulateNoKey
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ error: 'Failed to refine sprite' }));
    throw new Error(errorData.error || `HTTP ${response.status}`);
  }

  const data = await response.json();
  return data.imageUrl;
};

export const suggestItemName = async (
  prompt: string, 
  currentName: string = '', 
  mode: 'new' | 'refine' | 'remix' = 'new',
  simulateNoKey: boolean = false
): Promise<string> => {
  try {
    const response = await fetch('/api/suggest-name', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        currentName,
        mode,
        simulateNoKey
      })
    });

    if (!response.ok) return currentName || 'item_sprite';
    const data = await response.json();
    return data.name || currentName || 'item';
  } catch (e) {
    console.warn("Failed to suggest name", e);
    return currentName || 'item_sprite';
  }
};

export const checkModelAvailability = async (): Promise<string[]> => {
  try {
    const res = await fetch('/api/models');
    if (!res.ok) {
      return [
        'gemini-3.1-flash-image',
        'gemini-3.1-flash-lite-image',
        'gemini-3-pro-image',
        'gemini-2.5-flash-image'
      ];
    }
    const data = await res.json();
    return data.models || [
      'gemini-3.1-flash-image',
      'gemini-3.1-flash-lite-image',
      'gemini-3-pro-image',
      'gemini-2.5-flash-image'
    ];
  } catch (e) {
    console.warn("Model list fetch failed", e);
    return [
      'gemini-3.1-flash-image',
      'gemini-3.1-flash-lite-image',
      'gemini-3-pro-image',
      'gemini-2.5-flash-image'
    ];
  }
};
