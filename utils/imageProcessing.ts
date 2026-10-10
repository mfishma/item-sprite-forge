import { SpriteIteration } from '../types';

/**
 * Color Quantizer using Median Cut algorithm.
 * Reduces an arbitrary set of RGB colors to a cohesive, limited palette (typical for 16x16 Minecraft items).
 */
interface RGB {
  r: number;
  g: number;
  b: number;
}

function colorDistanceSq(c1: RGB, c2: RGB): number {
  const dr = c1.r - c2.r;
  const dg = c1.g - c2.g;
  const db = c1.b - c2.b;
  return dr * dr + dg * dg + db * db;
}

function quantizeColors(pixels: RGB[], maxColors: number = 10): Map<string, RGB> {
  if (pixels.length === 0) return new Map();

  // Deduplicate initial colors with counts
  const colorMap = new Map<string, { rgb: RGB; count: number }>();
  for (const p of pixels) {
    const key = `${p.r},${p.g},${p.b}`;
    const existing = colorMap.get(key);
    if (existing) {
      existing.count++;
    } else {
      colorMap.set(key, { rgb: { ...p }, count: 1 });
    }
  }

  const uniqueColors = Array.from(colorMap.values());
  if (uniqueColors.length <= maxColors) {
    const lookup = new Map<string, RGB>();
    for (const u of uniqueColors) {
      lookup.set(`${u.rgb.r},${u.rgb.g},${u.rgb.b}`, u.rgb);
    }
    return lookup;
  }

  // Median Cut Boxes
  interface Box {
    colors: { rgb: RGB; count: number }[];
    volume: number;
  }

  function getBoxVolume(boxColors: { rgb: RGB; count: number }[]): { minR: number; maxR: number; minG: number; maxG: number; minB: number; maxB: number; rangeR: number; rangeG: number; rangeB: number; volume: number } {
    let minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;
    for (const c of boxColors) {
      if (c.rgb.r < minR) minR = c.rgb.r;
      if (c.rgb.r > maxR) maxR = c.rgb.r;
      if (c.rgb.g < minG) minG = c.rgb.g;
      if (c.rgb.g > maxG) maxG = c.rgb.g;
      if (c.rgb.b < minB) minB = c.rgb.b;
      if (c.rgb.b > maxB) maxB = c.rgb.b;
    }
    const rangeR = maxR - minR;
    const rangeG = maxG - minG;
    const rangeB = maxB - minB;
    return { minR, maxR, minG, maxG, minB, maxB, rangeR, rangeG, rangeB, volume: rangeR * rangeG * rangeB };
  }

  const boxes: Box[] = [{ colors: uniqueColors, volume: getBoxVolume(uniqueColors).volume }];

  while (boxes.length < maxColors) {
    // Pick box with largest range in any dimension
    let splitIdx = -1;
    let maxRange = -1;
    let splitDim: 'r' | 'g' | 'b' = 'r';

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].colors.length <= 1) continue;
      const v = getBoxVolume(boxes[i].colors);
      const biggestDimRange = Math.max(v.rangeR, v.rangeG, v.rangeB);
      if (biggestDimRange > maxRange) {
        maxRange = biggestDimRange;
        splitIdx = i;
        if (v.rangeR >= v.rangeG && v.rangeR >= v.rangeB) splitDim = 'r';
        else if (v.rangeG >= v.rangeR && v.rangeG >= v.rangeB) splitDim = 'g';
        else splitDim = 'b';
      }
    }

    if (splitIdx === -1 || maxRange <= 2) break; // Cannot split further meaningfully

    const boxToSplit = boxes.splice(splitIdx, 1)[0];
    boxToSplit.colors.sort((a, b) => a.rgb[splitDim] - b.rgb[splitDim]);

    const mid = Math.floor(boxToSplit.colors.length / 2);
    const part1 = boxToSplit.colors.slice(0, mid);
    const part2 = boxToSplit.colors.slice(mid);

    boxes.push({ colors: part1, volume: getBoxVolume(part1).volume });
    boxes.push({ colors: part2, volume: getBoxVolume(part2).volume });
  }

  // Calculate representative palette centroids
  const paletteCentroids: RGB[] = boxes.map(b => {
    let totalCount = 0;
    let sumR = 0, sumG = 0, sumB = 0;
    for (const c of b.colors) {
      sumR += c.rgb.r * c.count;
      sumG += c.rgb.g * c.count;
      sumB += c.rgb.b * c.count;
      totalCount += c.count;
    }
    return {
      r: Math.round(sumR / totalCount),
      g: Math.round(sumG / totalCount),
      b: Math.round(sumB / totalCount)
    };
  });

  // Build mapping from every unique original color to nearest centroid
  const mapping = new Map<string, RGB>();
  for (const u of uniqueColors) {
    let closest = paletteCentroids[0];
    let minDist = Infinity;
    for (const cent of paletteCentroids) {
      const d = colorDistanceSq(u.rgb, cent);
      if (d < minDist) {
        minDist = d;
        closest = cent;
      }
    }
    mapping.set(`${u.rgb.r},${u.rgb.g},${u.rgb.b}`, closest);
  }

  return mapping;
}

/**
 * Helper: RGB to HSL
 */
function rgbToHsl(r: number, g: number, b: number) {
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
}

/**
 * Helper: HSL to RGB
 */
function hslToRgb(h: number, s: number, l: number): RGB {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

interface DetectedGrid {
  cellW: number;
  cellH: number;
  startX: number;
  startY: number;
  confidence: number;
}

/**
 * Algorithmic Grid Phase Detection:
 * Uses 1D spatial derivative profiles and autocorrelation consensus to detect the intrinsic
 * pseudo-pixel grid pitch (cell size) and spatial phase offset (grid line starting position).
 * Prevents phase misalignment artifacts where naive uniform division cuts through cells,
 * creating uneven pixel widths or sheared diagonal staircase outlines.
 *
 * Adapted from the open-source grid-detection principles in:
 * "Retro-Diffusion/pixel-art-fixer" (MIT License)
 * Repository: https://github.com/Retro-Diffusion/pixel-art-fixer
 * Copyright (c) 2024-2025 Retro Diffusion / Astropulse
 */
function detectGridPhase(
  srcData: Uint8ClampedArray,
  srcW: number,
  srcH: number,
  isOuterBg: Uint8Array,
  targetSize: number = 16
): DetectedGrid {
  let minX = srcW, maxX = 0, minY = srcH, maxY = 0;
  let fgPixels = 0;

  for (let y = 0; y < srcH; y++) {
    const rowOffset = y * srcW;
    for (let x = 0; x < srcW; x++) {
      if (isOuterBg[rowOffset + x] === 0) {
        fgPixels++;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // If no content or degenerate bounds, fall back to simple canvas division
  if (fgPixels === 0 || minX >= maxX || minY >= maxY) {
    const defaultCell = srcW / targetSize;
    return { cellW: defaultCell, cellH: defaultCell, startX: 0, startY: 0, confidence: 0 };
  }

  const pxProfile = new Float64Array(srcW);
  const pyProfile = new Float64Array(srcH);

  // Compute directional color difference derivatives across foreground
  for (let y = Math.max(1, minY); y < Math.min(srcH - 1, maxY); y++) {
    const rowOffset = y * srcW;
    for (let x = Math.max(1, minX); x < Math.min(srcW - 1, maxX); x++) {
      if (isOuterBg[rowOffset + x] === 0) {
        const left = (rowOffset + x - 1) * 4;
        const right = (rowOffset + x + 1) * 4;
        const top = ((y - 1) * srcW + x) * 4;
        const bottom = ((y + 1) * srcW + x) * 4;

        const gx = Math.abs(srcData[right] - srcData[left]) +
                   Math.abs(srcData[right + 1] - srcData[left + 1]) +
                   Math.abs(srcData[right + 2] - srcData[left + 2]);
        const gy = Math.abs(srcData[bottom] - srcData[top]) +
                   Math.abs(srcData[bottom + 1] - srcData[top + 1]) +
                   Math.abs(srcData[bottom + 2] - srcData[top + 2]);

        pxProfile[x] += gx;
        pyProfile[y] += gy;
      }
    }
  }

  const fgDim = Math.max(maxX - minX + 1, maxY - minY + 1);
  const minPitch = Math.max(12, Math.floor(fgDim / 18));
  const maxPitch = Math.min(Math.floor(srcW / 10), Math.ceil(fgDim / 9));

  function autocorrelate(profile: Float64Array, minT: number, maxT: number) {
    let bestTau = minT;
    let maxCorr = -1;
    const n = profile.length;
    for (let tau = minT; tau <= maxT; tau++) {
      let sumProd = 0, sumSq1 = 0, sumSq2 = 0;
      for (let i = 0; i < n - tau; i++) {
        const v1 = profile[i];
        const v2 = profile[i + tau];
        sumProd += v1 * v2;
        sumSq1 += v1 * v1;
        sumSq2 += v2 * v2;
      }
      const denom = Math.sqrt(sumSq1 * sumSq2) || 1e-6;
      const corr = sumProd / denom;
      if (corr > maxCorr) {
        maxCorr = corr;
        bestTau = tau;
      }
    }
    return { tau: bestTau, corr: maxCorr };
  }

  const ax = autocorrelate(pxProfile, minPitch, maxPitch);
  const ay = autocorrelate(pyProfile, minPitch, maxPitch);

  let cellPitch: number;
  let confidence: number;

  // Determine grid consensus (Minecraft items strictly use square pixels)
  if (ax.corr > 0.15 && ay.corr > 0.15 && Math.abs(ax.tau - ay.tau) <= 4) {
    cellPitch = Math.round((ax.tau + ay.tau) / 2);
    confidence = (ax.corr + ay.corr) / 2;
  } else if (ax.corr > ay.corr && ax.corr > 0.2) {
    cellPitch = ax.tau;
    confidence = ax.corr;
  } else if (ay.corr > 0.2) {
    cellPitch = ay.tau;
    confidence = ay.corr;
  } else {
    // Graceful fallback: scale to fit 14 cells within foreground to ensure 1px border margin
    cellPitch = Math.max(1, Math.round(fgDim / 14));
    confidence = 0;
  }

  function detectPhase(profile: Float64Array, pitch: number): number {
    let bestPhase = 0;
    let maxScore = -1;
    for (let phi = 0; phi < pitch; phi++) {
      let score = 0;
      for (let k = phi; k < profile.length; k += pitch) {
        score += profile[k];
      }
      if (score > maxScore) {
        maxScore = score;
        bestPhase = phi;
      }
    }
    return bestPhase;
  }

  const phaseX = confidence > 0.15 ? detectPhase(pxProfile, cellPitch) : (minX % cellPitch);
  const phaseY = confidence > 0.15 ? detectPhase(pyProfile, cellPitch) : (minY % cellPitch);

  // Center 16-cell window precisely over foreground bounding center
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;

  const kMidX = Math.round((centerX - (phaseX + 0.5 * cellPitch)) / cellPitch);
  const kMidY = Math.round((centerY - (phaseY + 0.5 * cellPitch)) / cellPitch);

  const kStartX = kMidX - Math.floor(targetSize / 2);
  const kStartY = kMidY - Math.floor(targetSize / 2);

  const startX = phaseX + kStartX * cellPitch;
  const startY = phaseY + kStartY * cellPitch;

  return { cellW: cellPitch, cellH: cellPitch, startX, startY, confidence };
}

/**
 * Downscales an AI-generated image to 16x16 using:
 * 1. Multi-sample cell area evaluation (no 1-point nearest neighbor misses)
 * 2. Outer boundary flood-fill (preserves dark outlines and internal details)
 * 3. Pure foreground averaging (prevents dark muddy edge bleeding)
 * 4. Median-Cut Color Quantization (unifies palette to authentic Minecraft ramps)
 * 5. Stray single-pixel noise filter
 */
export const pixelateImage = (
  dataUrl: string, 
  size: number = 16, 
  outlineStyle: 'default' | 'bold' | 'none' | 'adaptive' = 'default'
): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // If already a 16x16 image, do simple verification and pass through
      if (img.width === size && img.height === size) {
        const c = document.createElement('canvas');
        c.width = size;
        c.height = size;
        const ctx = c.getContext('2d');
        if (!ctx) return resolve(dataUrl);
        ctx.drawImage(img, 0, 0);
        return resolve(c.toDataURL('image/png'));
      }

      // Step 1: Draw high-res source to offscreen canvas
      const srcW = Math.min(img.width || 512, 512);
      const srcH = Math.min(img.height || 512, 512);
      const srcCanvas = document.createElement('canvas');
      srcCanvas.width = srcW;
      srcCanvas.height = srcH;
      const srcCtx = srcCanvas.getContext('2d');
      if (!srcCtx) return resolve(dataUrl);

      srcCtx.drawImage(img, 0, 0, srcW, srcH);
      const srcData = srcCtx.getImageData(0, 0, srcW, srcH).data;

      // Step 2: Flood-fill outer background from image corners/borders
      // Detect whether the outer canvas is solid black, pure white, or transparent
      const isOuterBg = new Uint8Array(srcW * srcH); // 1 = outer background, 0 = foreground / interior
      const queue: number[] = [];

      const sampleCorner = (x: number, y: number) => {
        const idx = (y * srcW + x) * 4;
        return {
          r: srcData[idx],
          g: srcData[idx + 1],
          b: srcData[idx + 2],
          a: srcData[idx + 3]
        };
      };

      const corners = [
        sampleCorner(0, 0),
        sampleCorner(srcW - 1, 0),
        sampleCorner(0, srcH - 1),
        sampleCorner(srcW - 1, srcH - 1)
      ];

      const whiteCorners = corners.filter(c => c.a >= 30 && c.r > 215 && c.g > 215 && c.b > 215).length;
      const isWhiteBg = whiteCorners >= 2;

      const isBgPixel = (idx: number) => {
        const a = srcData[idx + 3];
        if (a < 30) return true;
        const r = srcData[idx];
        const g = srcData[idx + 1];
        const b = srcData[idx + 2];
        if (isWhiteBg) {
          // If outer canvas is white, any pixel that is near-white or bleached background is outer canvas
          return (r > 230 && g > 230 && b > 230) || (r > 215 && g > 215 && b > 215 && Math.abs(r - g) < 15 && Math.abs(g - b) < 15);
        }
        // Strict black background threshold: pure solid black canvas only (< 10).
        // Dark Jappa outlines (e.g. echo shard #0D1217, netherite #160814, coal #101015)
        // must NEVER be treated as background.
        return r < 10 && g < 10 && b < 10;
      };

      // Seed queue from top/bottom borders and left/right borders
      for (let x = 0; x < srcW; x++) {
        const topIdx = (0 * srcW + x) * 4;
        if (isBgPixel(topIdx)) {
          isOuterBg[0 * srcW + x] = 1;
          queue.push(0 * srcW + x);
        }
        const btmIdx = ((srcH - 1) * srcW + x) * 4;
        if (isBgPixel(btmIdx)) {
          isOuterBg[(srcH - 1) * srcW + x] = 1;
          queue.push((srcH - 1) * srcW + x);
        }
      }
      for (let y = 0; y < srcH; y++) {
        const leftIdx = (y * srcW + 0) * 4;
        if (!isOuterBg[y * srcW + 0] && isBgPixel(leftIdx)) {
          isOuterBg[y * srcW + 0] = 1;
          queue.push(y * srcW + 0);
        }
        const rightIdx = (y * srcW + (srcW - 1)) * 4;
        if (!isOuterBg[y * srcW + (srcW - 1)] && isBgPixel(rightIdx)) {
          isOuterBg[y * srcW + (srcW - 1)] = 1;
          queue.push(y * srcW + (srcW - 1));
        }
      }

      // BFS to mark all connected outer background
      let qHead = 0;
      while (qHead < queue.length) {
        const cur = queue[qHead++];
        const cx = cur % srcW;
        const cy = Math.floor(cur / srcW);

        const neighbors = [
          { nx: cx + 1, ny: cy },
          { nx: cx - 1, ny: cy },
          { nx: cx, ny: cy + 1 },
          { nx: cx, ny: cy - 1 },
        ];

        for (const { nx, ny } of neighbors) {
          if (nx >= 0 && nx < srcW && ny >= 0 && ny < srcH) {
            const nIdxCoord = ny * srcW + nx;
            if (!isOuterBg[nIdxCoord]) {
              const nIdxData = nIdxCoord * 4;
              if (isBgPixel(nIdxData)) {
                isOuterBg[nIdxCoord] = 1;
                queue.push(nIdxCoord);
              }
            }
          }
        }
      }

      // Step 3: Algorithmic Grid Phase Detection & Area Box Sampling onto 16x16 Grid
      const detectedGrid = detectGridPhase(srcData, srcW, srcH, isOuterBg, size);
      const { cellW, cellH, startX, startY } = detectedGrid;

      const spriteGrid: ({ r: number; g: number; b: number; a: number } | null)[][] = [];
      const collectedForegroundColors: RGB[] = [];

      // Samples per cell: 8x8 = 64 sub-samples per cell
      const SUB_SAMPLES = 8;

      for (let gy = 0; gy < size; gy++) {
        spriteGrid[gy] = [];
        for (let gx = 0; gx < size; gx++) {
          let fgCount = 0;
          let sumR = 0, sumG = 0, sumB = 0;
          const totalSamples = SUB_SAMPLES * SUB_SAMPLES;

          const cellLeft = startX + gx * cellW;
          const cellTop = startY + gy * cellH;

          for (let sy = 0; sy < SUB_SAMPLES; sy++) {
            for (let sx = 0; sx < SUB_SAMPLES; sx++) {
              const sampleX = cellLeft + ((sx + 0.5) / SUB_SAMPLES) * cellW;
              const sampleY = cellTop + ((sy + 0.5) / SUB_SAMPLES) * cellH;
              const px = Math.max(0, Math.min(srcW - 1, Math.floor(sampleX)));
              const py = Math.max(0, Math.min(srcH - 1, Math.floor(sampleY)));
              const pixelCoord = py * srcW + px;

              if (!isOuterBg[pixelCoord]) {
                const dataIdx = pixelCoord * 4;
                sumR += srcData[dataIdx];
                sumG += srcData[dataIdx + 1];
                sumB += srcData[dataIdx + 2];
                fgCount++;
              }
            }
          }

          // A cell is considered foreground if at least 25% of sub-samples are content
          if (fgCount >= Math.floor(totalSamples * 0.25)) {
            let avgR = Math.round(sumR / fgCount);
            let avgG = Math.round(sumG / fgCount);
            let avgB = Math.round(sumB / fgCount);

            // If white background was present, de-blend bleached edge or flame glow
            if (isWhiteBg) {
              if (avgR > 180 && avgG > 70 && avgB > 30 && avgR > avgB) {
                const whiteTint = Math.min(avgR, avgG, avgB);
                if (whiteTint > 40) {
                  avgR = Math.min(255, avgR + Math.round((255 - avgB) * 0.15));
                  avgG = Math.min(255, Math.max(0, avgG - Math.round(whiteTint * 0.4)));
                  avgB = Math.max(0, avgB - Math.round(whiteTint * 0.8));
                }
              }
            }

            spriteGrid[gy][gx] = { r: avgR, g: avgG, b: avgB, a: 255 };
            collectedForegroundColors.push({ r: avgR, g: avgG, b: avgB });
          } else {
            spriteGrid[gy][gx] = null; // Transparent background
          }
        }
      }

      // Step 4: Color Quantization (Limit to ~10 dominant Minecraft-style palette steps)
      const colorMapping = quantizeColors(collectedForegroundColors, 10);

      // Step 5: Clean Stray Orphan Pixels (1-pixel noise filter)
      // If a pixel has 0 orthogonal neighbors, it is likely an artifact of downsampling
      for (let gy = 0; gy < size; gy++) {
        for (let gx = 0; gx < size; gx++) {
          if (spriteGrid[gy][gx]) {
            const hasTop = gy > 0 && spriteGrid[gy - 1][gx] !== null;
            const hasBottom = gy < size - 1 && spriteGrid[gy + 1][gx] !== null;
            const hasLeft = gx > 0 && spriteGrid[gy][gx - 1] !== null;
            const hasRight = gx < size - 1 && spriteGrid[gy][gx + 1] !== null;

            if (!hasTop && !hasBottom && !hasLeft && !hasRight) {
              // Completely isolated orphan pixel
              spriteGrid[gy][gx] = null;
            }
          }
        }
      }

      // Step 6: Render to crisp 16x16 output canvas
      const destCanvas = document.createElement('canvas');
      destCanvas.width = size;
      destCanvas.height = size;
      const destCtx = destCanvas.getContext('2d');
      if (!destCtx) return resolve(dataUrl);

      const destImgData = destCtx.createImageData(size, size);
      const destData = destImgData.data;

      for (let gy = 0; gy < size; gy++) {
        for (let gx = 0; gx < size; gx++) {
          const cell = spriteGrid[gy][gx];
          const outIdx = (gy * size + gx) * 4;

          if (cell) {
            const key = `${cell.r},${cell.g},${cell.b}`;
            const mapped = colorMapping.get(key) || cell;
            destData[outIdx] = mapped.r;
            destData[outIdx + 1] = mapped.g;
            destData[outIdx + 2] = mapped.b;
            destData[outIdx + 3] = 255;
          } else {
            destData[outIdx] = 0;
            destData[outIdx + 1] = 0;
            destData[outIdx + 2] = 0;
            destData[outIdx + 3] = 0;
          }
        }
      }

      // Step 7: Intelligent Jappa Selective Outlining ("Sel-out")
      if (outlineStyle === 'none') {
        destCtx.putImageData(destImgData, 0, 0);
        return resolve(destCanvas.toDataURL('image/png'));
      }

      // Authentic Jappa pixel art is strictly SELECTIVE, not a blunt wrapping stroke:
      // 1. THIN STEM / HILT PROTECTION: 1px-wide features (hilts, handles, wires, prongs, strings)
      //    are NEVER darkened. They represent the thin feature itself, avoiding bloated/crushed hilts.
      // 2. SPECULAR GLINT PROTECTION: Light-facing highlights and shiny tips (l > 0.62)
      //    directly touch the empty canvas to create metallic pop and sharpness.
      // 3. EXISTING OUTLINE PRESERVATION: If the pixel is already an outline (l < 0.25),
      //    it is kept intact without over-darkening.
      // 4. SHADOW EDGE EMPHASIS: Only broad body masses on shadow-facing edges receive selective darkening.
      const isContentPixel = (x: number, y: number) => {
        if (x < 0 || x >= size || y < 0 || y >= size) return false;
        return destData[(y * size + x) * 4 + 3] > 20;
      };

      const isBold = outlineStyle === 'bold';

      for (let gy = 0; gy < size; gy++) {
        for (let gx = 0; gx < size; gx++) {
          const idx = (gy * size + gx) * 4;
          if (destData[idx + 3] === 0) continue;

          const hasTop = isContentPixel(gx, gy - 1);
          const hasBottom = isContentPixel(gx, gy + 1);
          const hasLeft = isContentPixel(gx - 1, gy);
          const hasRight = isContentPixel(gx + 1, gy);

          const neighborCount = (hasTop ? 1 : 0) + (hasBottom ? 1 : 0) + (hasLeft ? 1 : 0) + (hasRight ? 1 : 0);
          const touchesEmpty = neighborCount < 4;
          if (!touchesEmpty) continue;

          // Rule 1: Thin-stem / single-pixel bridge protection
          // (e.g. sword hilts, tool handles, wires, or prongs where opposite sides are empty)
          const isThinBridge = (!hasLeft && !hasRight) || (!hasTop && !hasBottom) || neighborCount <= 1;
          if (isThinBridge) continue;

          const r = destData[idx];
          const g = destData[idx + 1];
          const b = destData[idx + 2];
          let { h, s, l } = rgbToHsl(r, g, b);

          // Rule 2: Specular highlight & glint protection (shine hits void directly)
          if (l > 0.62) continue;

          // Rule 3: If already dark enough to be an outline, do not crush it further
          if (l < 0.25) continue;

          // Rule 4: Directional shadow bias — prefer deepening bottom/right shadow edges
          const isShadowSide = gx >= gy || (hasTop && hasLeft && (!hasBottom || !hasRight));
          if (!isShadowSide && l > 0.45) continue;

          // Apply Jappa selective hue shift towards cool/rich shadow
          const SHIFT = 0.05;
          if (h >= 0.25 && h <= 0.85) {
            h += SHIFT;
          } else {
            h -= SHIFT;
          }
          if (h < 0) h += 1;
          if (h > 1) h -= 1;

          if (s > 0.08) s = Math.min(s * 1.25 + 0.05, 1.0);

          // Gentle darkening for standard Jappa, deeper darkening for bold
          l = isBold ? Math.max(l * 0.3, 0.05) : Math.max(l * 0.55, 0.12);

          const outlined = hslToRgb(h, s, l);
          destData[idx] = outlined.r;
          destData[idx + 1] = outlined.g;
          destData[idx + 2] = outlined.b;
        }
      }

      destCtx.putImageData(destImgData, 0, 0);
      resolve(destCanvas.toDataURL('image/png'));
    };
    img.src = dataUrl;
  });
};

/**
 * Extracts the dominant color palette from an uploaded reference or palette image.
 * Excludes background black/transparent pixels and returns clean HEX codes.
 */
export const extractPaletteFromImage = (dataUrl: string, maxColors: number = 6): Promise<string[]> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const c = document.createElement('canvas');
      const w = Math.min(img.width || 64, 64);
      const h = Math.min(img.height || 64, 64);
      c.width = w;
      c.height = h;
      const ctx = c.getContext('2d');
      if (!ctx) return resolve([]);

      ctx.drawImage(img, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h).data;
      const validPixels: RGB[] = [];

      for (let i = 0; i < data.length; i += 4) {
        const a = data[i + 3];
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Ignore transparent or pure dark background
        if (a > 50 && (r > 28 || g > 28 || b > 28)) {
          validPixels.push({ r, g, b });
        }
      }

      if (validPixels.length === 0) return resolve([]);

      const mapping = quantizeColors(validPixels, maxColors);
      const uniqueMapped = Array.from(new Set(Array.from(mapping.values())));

      // Convert to Hex and sort by luminance
      const hexList = uniqueMapped
        .map(rgb => `#${((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1).toUpperCase()}`)
        .sort((a, b) => {
          const rA = parseInt(a.slice(1, 3), 16), gA = parseInt(a.slice(3, 5), 16), bA = parseInt(a.slice(5, 7), 16);
          const rB = parseInt(b.slice(1, 3), 16), gB = parseInt(b.slice(3, 5), 16), bB = parseInt(b.slice(5, 7), 16);
          return (0.299 * rA + 0.587 * gA + 0.114 * bA) - (0.299 * rB + 0.587 * gB + 0.114 * bB);
        });

      resolve(hexList);
    };
    img.onerror = () => resolve([]);
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

      const contentWidth = maxX - minX + 1;
      const contentHeight = maxY - minY + 1;

      // Target size 14px leaving room for clean borders
      const targetSize = 14;
      const scaleX = targetSize / contentWidth;
      const scaleY = targetSize / contentHeight;
      const scale = Math.min(scaleX, scaleY);

      const newWidth = Math.max(1, Math.floor(contentWidth * scale));
      const newHeight = Math.max(1, Math.floor(contentHeight * scale));

      const offsetX = Math.floor((size - newWidth) / 2);
      const offsetY = Math.floor((size - newHeight) / 2);

      ctx.clearRect(0, 0, size, size);
      ctx.imageSmoothingEnabled = false;

      ctx.drawImage(
        img,
        minX, minY, contentWidth, contentHeight,
        offsetX, offsetY, newWidth, newHeight
      );

      resolve(canvas.toDataURL('image/png'));
    };
    img.src = dataUrl;
  });
};

/**
 * Enforces geometric symmetry on the SILHOUETTE for frontal items.
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

      // Center is between pixel 7 and 8
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
            data[rightIdx] = data[leftIdx];
            data[rightIdx + 1] = data[leftIdx + 1];
            data[rightIdx + 2] = data[leftIdx + 2];
            data[rightIdx + 3] = data[leftIdx + 3];
          } else if (!leftExists && rightExists) {
            data[rightIdx + 3] = 0;
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
 * Programmatically regenerates the outer silhouette outline to match authentic Jappa style.
 * - Modifies the PERIMETER pixels of the sprite (preserving sprite dimensions, no bloat)
 * - Shits hue toward cool shadows (darker, richer, hue shifted)
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
      const original = new Uint8ClampedArray(data);

      const isContent = (x: number, y: number) => {
        if (x < 0 || x >= size || y < 0 || y >= size) return false;
        return original[(y * size + x) * 4 + 3] > 20;
      };

      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (!isContent(x, y)) continue;

          // Perimeter check: does this content pixel touch the border or an empty space?
          const touchesEmpty =
            !isContent(x + 1, y) ||
            !isContent(x - 1, y) ||
            !isContent(x, y + 1) ||
            !isContent(x, y - 1);

          if (touchesEmpty) {
            const idx = (y * size + x) * 4;
            const r = original[idx];
            const g = original[idx + 1];
            const b = original[idx + 2];

            let { h, s, l } = rgbToHsl(r, g, b);

            // Jappa Hue Shift
            const SHIFT = 0.05;
            if (h >= 0.25 && h <= 0.85) {
              h += SHIFT; // Cool shift towards blue/purple
            } else {
              h -= SHIFT; // Warm shift towards red/purple
            }
            if (h < 0) h += 1;
            if (h > 1) h -= 1;

            // Saturation boost
            if (s > 0.08) {
              s = Math.min(s * 1.35 + 0.1, 1.0);
            }

            // Directional light darkening (Top-Left lighter, Bottom-Right darker)
            const dist = (x + y) / (size * 2);
            const lightnessFactor = 0.45 - dist * 0.18;
            l = Math.max(l * lightnessFactor, 0.08);

            const outlined = hslToRgb(h, s, l);
            data[idx] = outlined.r;
            data[idx + 1] = outlined.g;
            data[idx + 2] = outlined.b;
            data[idx + 3] = 255;
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
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Generates a clean filename.
 */
export const generateSmartFilename = (iteration: SpriteIteration): string => {
  if (iteration.name) {
    return iteration.name;
  }

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

  const tokens = clean.split(/\s+/).filter((t) => t && !stopWords.has(t));
  if (tokens.length === 0) return `item_${Math.floor(Math.random() * 1000)}`;

  const parts = tokens.slice(0, 2);
  if (tokens[2] && (tokens[2].length <= 3 || /\d/.test(tokens[2]))) {
    parts.push(tokens[2]);
  }

  return parts.join('_');
};
