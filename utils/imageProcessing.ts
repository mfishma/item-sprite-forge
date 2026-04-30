
import { SpriteIteration } from '../types';

/**
 * Downscales an image to 16x16 and ensures crisp pixels.
 * Removes the solid background (targeting pure black #000000).
 */
export const pixelateImage = (dataUrl: string, size: number = 16): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) return resolve(dataUrl);

      // 1. Draw crisp pixelated image
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, size, size);
      
      // 2. Process transparency
      const imageData = ctx.getImageData(0, 0, size, size);
      const data = imageData.data;
      
      // We explicitly target black #000000 for keying.
      const bgR = 0;
      const bgG = 0;
      const bgB = 0;
      const tolerance = 15; 

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        
        const diff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
        
        // Key out the background
        if (diff < tolerance) {
          data[i + 3] = 0; 
        } else {
             // Hard alpha thresholding to ensure crisp edges
             if (a < 128) {
                 data[i + 3] = 0;
             } else {
                 data[i + 3] = 255;
             }
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.src = dataUrl;
  });
};

/**
 * Crops the sprite to its visible content and scales it up to fit the 16x16 frame.
 */
export const maximizeSprite = (dataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const size = 16;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            if (!ctx) return resolve(dataUrl);

            // Draw original first to analyze
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, size, size);
            const data = imageData.data;

            // Find bounds
            let minX = size, minY = size, maxX = 0, maxY = 0;
            let hasPixels = false;

            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    const alpha = data[(y * size + x) * 4 + 3];
                    if (alpha > 0) {
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                        hasPixels = true;
                    }
                }
            }

            if (!hasPixels) return resolve(dataUrl);

            // Calculate dimensions of content
            const contentWidth = maxX - minX + 1;
            const contentHeight = maxY - minY + 1;

            // Determine scale to fit (keep aspect ratio)
            // We want to fill at least one dimension to 14px (leaving 1px padding on each side)
            // This allows room for outlines to be added later without cutting off.
            const targetSize = 14; 
            const scaleX = targetSize / contentWidth;
            const scaleY = targetSize / contentHeight;
            const scale = Math.min(scaleX, scaleY);

            // New dimensions
            const newWidth = Math.floor(contentWidth * scale);
            const newHeight = Math.floor(contentHeight * scale);

            // Center position (centering within 16x16)
            const offsetX = Math.floor((size - newWidth) / 2);
            const offsetY = Math.floor((size - newHeight) / 2);

            // Clear and redraw scaled
            ctx.clearRect(0, 0, size, size);
            ctx.imageSmoothingEnabled = false; // Keep pixelated look
            
            // We need to draw the cropped region scaled up
            ctx.drawImage(
                img, 
                minX, minY, contentWidth, contentHeight, // Source crop
                offsetX, offsetY, newWidth, newHeight    // Dest rect
            );

            resolve(canvas.toDataURL('image/png'));
        };
        img.src = dataUrl;
    });
};

/**
 * Enforces geometric symmetry on the SILHOUETTE only.
 * Mirrors the Left shape to the Right.
 * - If Left has pixel and Right is empty -> Copy Left pixel (fill gap).
 * - If Left is empty and Right has pixel -> Clear Right pixel (trim excess).
 * - If Left has pixel and Right has pixel -> KEEP Right pixel (preserve shading/highlights).
 */
export const enforceSymmetry = (dataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const size = 16;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            if (!ctx) return resolve(dataUrl);

            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, size, size);
            const data = imageData.data;

            // Mirror Left Shape to Right
            // Center is between pixel 7 and 8 (0-indexed)
            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size / 2; x++) {
                    const leftIdx = (y * size + x) * 4;
                    const rightX = size - 1 - x;
                    const rightIdx = (y * size + rightX) * 4;

                    const leftAlpha = data[leftIdx + 3];
                    const rightAlpha = data[rightIdx + 3];

                    const leftExists = leftAlpha > 10;
                    const rightExists = rightAlpha > 10;

                    if (leftExists && !rightExists) {
                        // GAP: Fill Right with Left's color (best guess)
                        data[rightIdx] = data[leftIdx];
                        data[rightIdx + 1] = data[leftIdx + 1];
                        data[rightIdx + 2] = data[leftIdx + 2];
                        data[rightIdx + 3] = data[leftIdx + 3];
                    } else if (!leftExists && rightExists) {
                        // EXCESS: Trim Right
                        data[rightIdx + 3] = 0;
                    }
                    // If both exist, DO NOTHING. Preserve the right side's unique shading.
                }
            }

            ctx.putImageData(imageData, 0, 0);
            resolve(canvas.toDataURL('image/png'));
        };
        img.src = dataUrl;
    });
};

/**
 * Programmatically regenerates the outline to match Jappa style.
 * - Identifies edge pixels.
 * - Samples adjacent "inner" pixels.
 * - Applies HUE SHIFTING: Darker + Cooler (Shift hue towards Blue/Purple) + Increased Saturation.
 */
export const regenerateOutline = (dataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const size = 16;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            if (!ctx) return resolve(dataUrl);

            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, size, size);
            const data = imageData.data;
            const originalData = new Uint8ClampedArray(data); // Read-only copy

            // 1. Identify "content" pixels (alpha > 10)
            const isContentPixel = (x: number, y: number) => {
                if (x < 0 || x >= size || y < 0 || y >= size) return false;
                const idx = (y * size + x) * 4;
                return originalData[idx + 3] > 10;
            };

            // 2. Identify "empty" pixels that are adjacent to content (The Outline Zone)
            const isOutlineZone = (x: number, y: number) => {
                if (isContentPixel(x, y)) return false; // It's already content, don't overwrite unless we want inner outlines (which we don't for this request)
                
                // Check 4 neighbors. If any neighbor is content, this empty pixel is an outline candidate.
                const neighbors = [
                    {x: x+1, y: y}, {x: x-1, y: y},
                    {x: x, y: y+1}, {x: x, y: y-1}
                ];
                return neighbors.some(n => isContentPixel(n.x, n.y));
            };

            // Helper: RGB to HSL
            const rgbToHsl = (r: number, g: number, b: number) => {
                r /= 255; g /= 255; b /= 255;
                const max = Math.max(r, g, b), min = Math.min(r, g, b);
                const l = (max + min) / 2;
                let h = 0, s = 0;

                if (max !== min) {
                    const d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch (max) {
                        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                        case g: h = (b - r) / d + 2; break;
                        case b: h = (r - g) / d + 4; break;
                    }
                    h /= 6;
                }
                return { h, s, l };
            };

            // Helper: HSL to RGB
            const hslToRgb = (h: number, s: number, l: number) => {
                let r, g, b;
                if (s === 0) {
                    r = g = b = l;
                } else {
                    const hue2rgb = (p: number, q: number, t: number) => {
                        if (t < 0) t += 1;
                        if (t > 1) t -= 1;
                        if (t < 1/6) return p + (q - p) * 6 * t;
                        if (t < 1/2) return q;
                        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                        return p;
                    };
                    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    const p = 2 * l - q;
                    r = hue2rgb(p, q, h + 1/3);
                    g = hue2rgb(p, q, h);
                    b = hue2rgb(p, q, h - 1/3);
                }
                return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
            };

            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    // We now target EMPTY pixels that are next to content
                    if (isOutlineZone(x, y)) {
                        const idx = (y * size + x) * 4;
                        
                        // Find the nearest CONTENT neighbor to sample color from
                        let innerColor = null;
                        
                        // Search neighbors for content
                        const neighbors = [
                            {x: x+1, y: y}, {x: x-1, y: y},
                            {x: x, y: y+1}, {x: x, y: y-1}
                        ];
                        
                        for (const n of neighbors) {
                            if (isContentPixel(n.x, n.y)) {
                                const nIdx = (n.y * size + n.x) * 4;
                                innerColor = {
                                    r: originalData[nIdx],
                                    g: originalData[nIdx+1],
                                    b: originalData[nIdx+2]
                                };
                                break; // Just take the first one found
                            }
                        }

                        if (!innerColor) continue; // Should be impossible given isOutlineZone check

                        // --- JAPPA HUE SHIFT LOGIC v2 ---
                        // 1. Convert to HSL
                        let { h, s, l } = rgbToHsl(innerColor.r, innerColor.g, innerColor.b);

                        // 2. Saturation: Multiplicative boost instead of additive
                        // This prevents greys (low S) from becoming vibrant blue/green
                        // We apply a boost to make colors richer, but respect the original "greyness"
                        if (s < 0.1) {
                            // If it's basically grey, keep it grey (maybe tiny boost)
                            s = Math.min(s * 1.2, 1.0);
                        } else {
                            // If it has color, make the outline richer
                            s = Math.min(s * 1.4 + 0.1, 1.0);
                        }

                        // 3. Hue Shift: Smart Cool Shift
                        // Goal: Shift towards "Cool" (Blue/Purple) but take the correct path.
                        // Avoid Yellow -> Green. Yellow should go to Orange.
                        // Green should go to Teal/Blue.
                        
                        const SHIFT = 0.05; // ~18 degrees

                        // Logic:
                        // Red/Yellow (Warm) -> Shift DOWN towards Red/Purple
                        // Green/Blue (Cool) -> Shift UP towards Blue/Purple
                        // Boundary is roughly Green-Yellow (0.25) and Magenta (0.85)
                        
                        if (h >= 0.25 && h <= 0.85) {
                            // Green, Cyan, Blue, Purple -> Shift UP (towards Blue/Purple)
                            h += SHIFT;
                        } else {
                            // Red, Orange, Yellow -> Shift DOWN (towards Red/Purple)
                            h -= SHIFT;
                        }

                        // Handle Wrap
                        if (h < 0) h += 1;
                        if (h > 1) h -= 1;

                        // 4. Lightness: Darken significantly
                        // Jappa outlines are dark.
                        let lightnessFactor = 0.35; 
                        
                        // Directional Light: Top-Left is lighter
                        const dist = (x + y) / (size * 2); 
                        // Range: 0.45 (TL) to 0.25 (BR)
                        lightnessFactor = 0.45 - (dist * 0.2);

                        l = Math.max(l * lightnessFactor, 0.05); // Ensure not pure black

                        // 5. Convert back to RGB
                        const newColor = hslToRgb(h, s, l);

                        data[idx] = newColor.r;
                        data[idx + 1] = newColor.g;
                        data[idx + 2] = newColor.b;
                        data[idx + 3] = 255; // Make it fully opaque
                    }
                }
            }

            ctx.putImageData(imageData, 0, 0);
            resolve(canvas.toDataURL('image/png'));
        };
        img.src = dataUrl;
    });
};

/**
 * Triggers a browser download for the provided data URL.
 */
export const downloadImage = (dataUrl: string, filename: string) => {
  const link = document.createElement('a');
  link.href = dataUrl;
  // Ensure we don't double extension if passed, but typically input is without extension
  const cleanName = filename.replace(/\.png$/i, '');
  link.download = `${cleanName}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

/**
 * Generates a "delightful" smart filename.
 * Leverages the semantic name generated by Gemini if available.
 */
export const generateSmartFilename = (iteration: SpriteIteration): string => {
  // 1. Prefer the AI-generated name or user-defined name
  if (iteration.name) {
      return iteration.name;
  }

  // 2. Fallback logic (should rarely be hit if API works)
  const { prompt, params } = iteration;
  
  const isSystemPrompt = !prompt || prompt.startsWith('Remix:') || prompt.includes('Force') || prompt.length < 3;
  let textToProcess = prompt;
  
  if (isSystemPrompt) {
     const mat = params.material === 'adaptive' ? '' : params.material;
     const type = params.itemType === 'adaptive' ? 'item' : params.itemType;
     textToProcess = `${mat} ${type}`.trim();
  }

  const clean = textToProcess.toLowerCase().replace(/[^a-z0-9\s_]/g, '');
  const stopWords = new Set([
      'a', 'an', 'the', 'of', 'with', 'in', 'on', 'to', 'for', 'my', 'your',
      'make', 'create', 'generate', 'remix', 'edit', 'change', 'turn', 'into',
      'look', 'like', 'style', 'version', 'pixel', 'art', 'sprite', 'texture', 'minecraft',
      'image', 'picture', 'icon', 'item', 'object', 'be', 'is', 'context'
  ]);

  const tokens = clean.split(/\s+/).filter(t => t && !stopWords.has(t));

  if (tokens.length === 0) return `item_${Math.floor(Math.random() * 1000)}`;

  const parts = tokens.slice(0, 2);
  if (tokens[2] && (tokens[2].length <= 3 || /\d/.test(tokens[2]))) {
      parts.push(tokens[2]);
  }

  return parts.join('_');
};
