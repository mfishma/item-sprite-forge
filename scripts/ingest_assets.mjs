import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';

// Selected representative vanilla Minecraft items across categories
const TARGET_ITEMS = [
  // Weapons
  { id: 'diamond_sword', tags: ['weapon', 'sword', 'diamond', 'cyan', 'diagonal'], type: 'weapon', material: 'diamond', desc: 'Diamond Sword: Cyan/aqua hue ramp, 45-degree diagonal, dark teal selective outline, bright white tip highlight.' },
  { id: 'iron_sword', tags: ['weapon', 'sword', 'iron', 'metal', 'diagonal'], type: 'weapon', material: 'iron', desc: 'Iron Sword: Light grey metallic blade, dark grey outline, high contrast specularity on blade edge.' },
  { id: 'golden_sword', tags: ['weapon', 'sword', 'gold', 'yellow', 'diagonal'], type: 'weapon', material: 'gold', desc: 'Golden Sword: Warm yellow to amber tones, dark brown-gold outline, vibrant specular sheen.' },
  { id: 'netherite_sword', tags: ['weapon', 'sword', 'netherite', 'dark_gray', 'diagonal'], type: 'weapon', material: 'netherite', desc: 'Netherite Sword: Deep charcoal-grey alloy with subtle purple/warm undertones, smooth dark outline.' },
  { id: 'wooden_sword', tags: ['weapon', 'sword', 'wood', 'brown', 'diagonal'], type: 'weapon', material: 'wood', desc: 'Wooden Sword: Oak wood plank color palette, warm browns, stepped pixel bevels.' },
  { id: 'stone_sword', tags: ['weapon', 'sword', 'stone', 'gray', 'diagonal'], type: 'weapon', material: 'stone', desc: 'Stone Sword: Rough cobblestone gray tones with dark charcoal border.' },
  { id: 'trident', tags: ['weapon', 'trident', 'prismarine', 'cyan', 'diagonal'], type: 'weapon', material: 'prismarine', desc: 'Trident: Three prongs, cyan prismarine and brass accent, 45-degree angle.' },
  { id: 'mace', tags: ['weapon', 'mace', 'heavy', 'metal', 'diagonal'], type: 'weapon', material: 'iron', desc: 'Heavy Mace: Heavy cuboid head, heavy dark metallic bevels, cylindrical handle.' },
  { id: 'bow', tags: ['weapon', 'ranged', 'bow', 'wood', 'diagonal'], type: 'weapon', material: 'wood', desc: 'Bow: Curved wooden arc, straight white bowstring, smooth diagonal curvature.' },

  // Tools
  { id: 'diamond_pickaxe', tags: ['tool', 'pickaxe', 'diamond', 'cyan', 'diagonal'], type: 'tool', material: 'diamond', desc: 'Diamond Pickaxe: Curved cyan pick head, wood handle, selective outline.' },
  { id: 'iron_pickaxe', tags: ['tool', 'pickaxe', 'iron', 'metal', 'diagonal'], type: 'tool', material: 'iron', desc: 'Iron Pickaxe: Metallic silver-grey pick head, wood handle, crisp 1-pixel steps.' },
  { id: 'golden_pickaxe', tags: ['tool', 'pickaxe', 'gold', 'yellow', 'diagonal'], type: 'tool', material: 'gold', desc: 'Golden Pickaxe: Butter-yellow pick head, warm wooden stick.' },
  { id: 'netherite_pickaxe', tags: ['tool', 'pickaxe', 'netherite', 'dark_gray', 'diagonal'], type: 'tool', material: 'netherite', desc: 'Netherite Pickaxe: Dark heavy matte finish, thick silhouette.' },
  { id: 'diamond_axe', tags: ['tool', 'weapon', 'axe', 'diamond', 'cyan', 'diagonal'], type: 'tool', material: 'diamond', desc: 'Diamond Axe: Broad wedge head, cyan palette, wooden shaft.' },
  { id: 'iron_axe', tags: ['tool', 'weapon', 'axe', 'iron', 'metal', 'diagonal'], type: 'tool', material: 'iron', desc: 'Iron Axe: Wedge-shaped blade, high-contrast bevel, clean outline.' },
  { id: 'netherite_axe', tags: ['tool', 'weapon', 'axe', 'netherite', 'dark_gray', 'diagonal'], type: 'tool', material: 'netherite', desc: 'Netherite Axe: Heavy dark axe blade, rich dark charcoal outline.' },
  { id: 'diamond_shovel', tags: ['tool', 'shovel', 'diamond', 'cyan', 'diagonal'], type: 'tool', material: 'diamond', desc: 'Diamond Shovel: Single scoop blade, diagonal shaft, clean cluster shading.' },
  { id: 'shears', tags: ['tool', 'shears', 'iron', 'metal', 'diagonal'], type: 'tool', material: 'iron', desc: 'Shears: Two interlocking curved metal blades, central rivet, diagonal orientation.' },
  { id: 'flint_and_steel', tags: ['tool', 'utility', 'iron', 'fire', 'diagonal'], type: 'tool', material: 'iron', desc: 'Flint and Steel: Curved steel arc holding dark flint piece.' },
  { id: 'spyglass', tags: ['tool', 'copper', 'amethyst', 'diagonal'], type: 'tool', material: 'copper', desc: 'Spyglass: Cylindrical copper barrel with purple amethyst lens.' },

  // Resources / Gems / Ingots
  { id: 'diamond', tags: ['resource', 'gem', 'diamond', 'cyan', 'currency', 'frontal'], type: 'resource', material: 'diamond', desc: 'Diamond Gem: Iconic multifaceted jewel, bright specular highlight, symmetrical frontal view.' },
  { id: 'emerald', tags: ['resource', 'gem', 'emerald', 'green', 'currency', 'frontal'], type: 'resource', material: 'emerald', desc: 'Emerald Gem: Deep lush green hues, bright glint, clean geometric facets.' },
  { id: 'amethyst_shard', tags: ['resource', 'gem', 'amethyst', 'purple', 'diagonal'], type: 'resource', material: 'amethyst', desc: 'Amethyst Shard: Sharp crystalline spike, translucent violet to lavender ramp.' },
  { id: 'iron_ingot', tags: ['resource', 'ingot', 'iron', 'metal', 'diagonal'], type: 'resource', material: 'iron', desc: 'Iron Ingot: Rounded metal brick, silver bevels, soft selective outline.' },
  { id: 'gold_ingot', tags: ['resource', 'ingot', 'gold', 'yellow', 'currency', 'diagonal'], type: 'resource', material: 'gold', desc: 'Gold Ingot: Warm butter-yellow brick, high-contrast shine, amber shadows.' },
  { id: 'netherite_ingot', tags: ['resource', 'ingot', 'netherite', 'dark_gray', 'diagonal'], type: 'resource', material: 'netherite', desc: 'Netherite Ingot: Heavy dark charcoal brick with subtle brownish alloy glint.' },
  { id: 'copper_ingot', tags: ['resource', 'ingot', 'copper', 'orange', 'diagonal'], type: 'resource', material: 'copper', desc: 'Copper Ingot: Reddish-orange metallic bar with dark copper outline.' },
  { id: 'nether_star', tags: ['resource', 'artifact', 'nether_star', 'white', 'frontal'], type: 'resource', material: 'magic', desc: 'Nether Star: Four-pointed radiant star, pulsing white/cyan core, soft outer aura.' },
  { id: 'echo_shard', tags: ['resource', 'sculk', 'echo_shard', 'cyan', 'dark', 'diagonal'], type: 'resource', material: 'sculk', desc: 'Echo Shard: Deep navy to neon sculk-teal fragment, mysterious dark silhouette.' },
  { id: 'prismarine_shard', tags: ['resource', 'prismarine', 'cyan', 'gem', 'diagonal'], type: 'resource', material: 'prismarine', desc: 'Prismarine Shard: Seafoam green to aqua jagged shard.' },
  { id: 'redstone', tags: ['resource', 'dust', 'redstone', 'red', 'magic'], type: 'resource', material: 'redstone', desc: 'Redstone Dust: Granular pile of glowing crimson dust.' },
  { id: 'lapis_lazuli', tags: ['resource', 'gem', 'lapis', 'blue', 'magic'], type: 'resource', material: 'lapis', desc: 'Lapis Lazuli: Ultramarine blue nugget with deep royal blue shadows and gold flecks.' },
  { id: 'coal', tags: ['resource', 'fuel', 'coal', 'black', 'organic'], type: 'resource', material: 'coal', desc: 'Coal: Chunky jagged charcoal-black lump with subtle grey specular facets.' },
  { id: 'glowstone_dust', tags: ['resource', 'dust', 'glowstone', 'yellow', 'gold', 'magic'], type: 'resource', material: 'gold', desc: 'Glowstone Dust: Shimmering gold and brilliant yellow luminous dust grains.' },
  { id: 'slime_ball', tags: ['resource', 'slime', 'green', 'bouncy', 'organic'], type: 'resource', material: 'organic', desc: 'Slimeball: Translucent bouncy lime-green jelly sphere.' },
  { id: 'magma_cream', tags: ['resource', 'magma', 'fire', 'orange', 'red', 'orb'], type: 'resource', material: 'blaze', desc: 'Magma Cream: Swirling hot magma core enveloped in volcanic crust.' },

  // Woods: Poplar, Pale Oak, Oak, Signs & Doors
  { id: 'poplar_hanging_sign', tags: ['wood', 'poplar', 'hanging_sign', 'sign', 'yellow_wood', 'utility'], type: 'utility', material: 'wood', desc: 'Poplar Hanging Sign: Warm honey-yellow poplar wood plank suspended by dark iron chain links.' },
  { id: 'pale_oak_hanging_sign', tags: ['wood', 'pale_oak', 'hanging_sign', 'sign', 'pale_wood', 'ash', 'utility'], type: 'utility', material: 'wood', desc: 'Pale Oak Hanging Sign: Ash-white and silvery pale oak board with iron hanging brackets.' },
  { id: 'pale_oak_door', tags: ['wood', 'pale_oak', 'door', 'ash', 'pale_wood', 'utility'], type: 'utility', material: 'wood', desc: 'Pale Oak Door: Ghostly desaturated off-white wooden door panel with slender vertical slits.' },
  { id: 'oak_door', tags: ['wood', 'door', 'oak', 'brown', 'utility'], type: 'utility', material: 'wood', desc: 'Oak Door: Classic warm brown wooden door with rectangular window insets.' },

  // Leaves & Flora
  { id: 'oak_leaves', tags: ['leaf', 'leaves', 'foliage', 'green', 'organic', 'plant'], type: 'organic', material: 'organic', sourceFolder: 'block', desc: 'Oak Leaves: 16x16 natural foliage clusters, crisp multi-shade green canopy with organic edge cutouts.' },
  { id: 'pale_oak_leaves', tags: ['leaf', 'leaves', 'foliage', 'pale_oak', 'pale_green', 'ash', 'organic'], type: 'organic', material: 'organic', sourceFolder: 'block', desc: 'Pale Oak Leaves: Desaturated silvery-sage and olive muted leaf canopy with eerie calm tones.' },
  { id: 'leaf_litter', tags: ['leaf', 'leaves', 'foliage', 'litter', 'green', 'organic'], type: 'organic', material: 'organic', desc: 'Leaf Litter: Natural carpet of fallen forest leaves in vibrant woodland greens.' },
  { id: 'sugar_cane', tags: ['plant', 'organic', 'green', 'sugar_cane', 'stalk', 'diagonal'], type: 'organic', material: 'organic', desc: 'Sugar Cane: Slender jointed green organic reed stalk with natural notches.' },
  { id: 'sea_pickle', tags: ['plant', 'sea_pickle', 'organic', 'green', 'marine', 'frontal'], type: 'organic', material: 'organic', desc: 'Sea Pickle: Cylindrical ribbed olive-green marine organism with luminescent tip.' },
  { id: 'nether_wart', tags: ['plant', 'nether_wart', 'crimson', 'fungi', 'red', 'magic'], type: 'resource', material: 'organic', desc: 'Nether Wart: Bulbous dark crimson underworld fungus bulb.' },

  // Nautilus Armor & Marine Relics
  { id: 'copper_nautilus_armor', tags: ['armor', 'nautilus', 'nautilus_armor', 'copper', 'marine', 'diagonal'], type: 'armor', material: 'copper', desc: 'Copper Nautilus Armor: Unoxidized warm ochre-copper curved shell armor plating with metallic trim.' },
  { id: 'netherite_nautilus_armor', tags: ['armor', 'nautilus', 'nautilus_armor', 'netherite', 'dark_gray', 'diagonal'], type: 'armor', material: 'netherite', desc: 'Netherite Nautilus Armor: Heavy reinforced dark charcoal alloy shell plate with deep purple undertones.' },
  { id: 'diamond_nautilus_armor', tags: ['armor', 'nautilus', 'nautilus_armor', 'diamond', 'cyan', 'diagonal'], type: 'armor', material: 'diamond', desc: 'Diamond Nautilus Armor: Brilliant cyan gem-encrusted nautilus shell cuirass.' },
  { id: 'nautilus_shell', tags: ['resource', 'sea', 'nautilus', 'white', 'pink', 'diagonal'], type: 'resource', material: 'organic', desc: 'Nautilus Shell: Spiral sea shell with pastel peach and coral ridges.' },
  { id: 'heart_of_the_sea', tags: ['magic', 'heart_of_the_sea', 'blue', 'orb', 'frontal', 'marine'], type: 'magic', material: 'prismarine', desc: 'Heart of the Sea: Luminous cobalt and aqua sphere containing ancient oceanic power.' },

  // Weathered & Oxidized Copper
  { id: 'weathered_copper_door', tags: ['copper', 'weathered_copper', 'door', 'patina', 'teal', 'utility'], type: 'utility', material: 'copper', desc: 'Weathered Copper Door: Aged copper with dramatic turquoise-green verdigris oxidation patterns.' },
  { id: 'weathered_copper_lantern', tags: ['copper', 'weathered_copper', 'lantern', 'teal', 'glow', 'utility'], type: 'utility', material: 'copper', desc: 'Weathered Copper Lantern: Patina verdigris copper cage framing glowing warm interior core.' },
  { id: 'oxidized_copper_door', tags: ['copper', 'oxidized_copper', 'door', 'cyan', 'green', 'utility'], type: 'utility', material: 'copper', desc: 'Oxidized Copper Door: Fully verdigris jade-cyan aged copper door panel with weathered studs.' },

  // Resin, Wind & Trial Items
  { id: 'resin_clump', tags: ['resource', 'resin', 'resin_clump', 'orange', 'amber', 'diagonal'], type: 'resource', material: 'copper', desc: 'Resin Clump: Organic irregular chunk of raw bright orange tree resin.' },
  { id: 'resin_brick', tags: ['resource', 'resin', 'brick', 'terracotta', 'orange', 'diagonal'], type: 'resource', material: 'copper', desc: 'Resin Brick: Fired burnt-orange and terracotta composite architectural brick.' },
  { id: 'wind_charge', tags: ['magic', 'wind_charge', 'breeze', 'projectile', 'white', 'cyan', 'frontal'], type: 'magic', material: 'wind', desc: 'Wind Charge: Swirling vortex of pressurized white and light sky-blue compressed air currents.' },
  { id: 'breeze_rod', tags: ['magic', 'breeze_rod', 'breeze', 'wind', 'purple', 'cyan', 'diagonal'], type: 'magic', material: 'wind', desc: 'Breeze Rod: Twisted spiral rod pulsing with lilac, aqua, and kinetic wind force.' },
  { id: 'trial_key', tags: ['magic', 'utility', 'trial_key', 'copper', 'key', 'diagonal'], type: 'magic', material: 'copper', desc: 'Trial Key: Heavy copper skeleton key with skull-like teeth and glowing cyan gem.' },
  { id: 'ominous_trial_key', tags: ['magic', 'utility', 'trial_key', 'ominous', 'purple', 'crimson', 'diagonal'], type: 'magic', material: 'magic', desc: 'Ominous Trial Key: Darkened ominous key shrouded in cursed magenta and soul-red fire.' },
  { id: 'silence_armor_trim_smithing_template', tags: ['utility', 'smithing_template', 'armor_trim', 'stone', 'blue', 'diagonal'], type: 'utility', material: 'stone', desc: 'Silence Armor Trim Template: Ancient dark stone tablet engraved with silent cyan runic inlays.' },
  { id: 'snout_armor_trim_smithing_template', tags: ['utility', 'smithing_template', 'armor_trim', 'stone', 'piglin', 'diagonal'], type: 'utility', material: 'stone', desc: 'Snout Armor Trim Template: Carved nether stone tablet depicting a piglin snout crest.' },

  // Food / Organic
  { id: 'apple', tags: ['food', 'organic', 'apple', 'red', 'fruit', 'frontal'], type: 'food', material: 'organic', desc: 'Red Apple: Smooth rounded fruit, bright highlight, tiny brown stem at top.' },
  { id: 'golden_apple', tags: ['food', 'gold', 'apple', 'yellow', 'magic', 'frontal'], type: 'food', material: 'gold', desc: 'Golden Apple: Glowing yellow-gold apple with rich amber shading.' },
  { id: 'bread', tags: ['food', 'organic', 'bread', 'wheat', 'tan', 'diagonal'], type: 'food', material: 'organic', desc: 'Loaf of Bread: Golden-brown crust with baked scoring marks across the top.' },
  { id: 'cooked_beef', tags: ['food', 'organic', 'meat', 'beef', 'brown', 'diagonal'], type: 'food', material: 'organic', desc: 'Steak: Char-grilled beef cutlet, dark grill marks, rich savory browns.' },
  { id: 'sweet_berries', tags: ['food', 'organic', 'berries', 'red', 'bush'], type: 'food', material: 'organic', desc: 'Sweet Berries: Cluster of three plump red berries with green leaves.' },
  { id: 'honey_bottle', tags: ['food', 'drink', 'honey', 'yellow', 'glass', 'bottle', 'frontal'], type: 'food', material: 'glass', desc: 'Honey Bottle: Square glass flask with thick amber-yellow honey inside.' },
  { id: 'honeycomb', tags: ['food', 'resource', 'honeycomb', 'yellow', 'wax', 'organic'], type: 'resource', material: 'organic', desc: 'Honeycomb: Golden hexagonal wax honeycomb dripping with sweet honey.' },
  { id: 'suspicious_stew', tags: ['food', 'stew', 'soup', 'wood', 'bowl', 'magic', 'frontal'], type: 'food', material: 'organic', desc: 'Suspicious Stew: Hearty vegetable brew in carved wooden bowl with hidden potion effect.' },

  // Armor, Scutes & Wearables
  { id: 'diamond_chestplate', tags: ['armor', 'chestplate', 'diamond', 'cyan', 'frontal'], type: 'armor', material: 'diamond', desc: 'Diamond Chestplate: Symmetrical cuirass, broad shoulder pauldrons, cyan palette.' },
  { id: 'iron_chestplate', tags: ['armor', 'chestplate', 'iron', 'metal', 'frontal'], type: 'armor', material: 'iron', desc: 'Iron Chestplate: Symmetrical silver cuirass with defined neck and shoulder cuts.' },
  { id: 'netherite_chestplate', tags: ['armor', 'chestplate', 'netherite', 'dark_gray', 'frontal'], type: 'armor', material: 'netherite', desc: 'Netherite Chestplate: Heavy dark armor plate with deep charcoal shading.' },
  { id: 'armadillo_scute', tags: ['resource', 'scute', 'armadillo', 'brown', 'organic'], type: 'resource', material: 'organic', desc: 'Armadillo Scute: Hard textured leathery brown dorsal protective plate.' },
  { id: 'turtle_scute', tags: ['resource', 'scute', 'turtle', 'green', 'organic'], type: 'resource', material: 'scute', desc: 'Turtle Scute: Scaled moss-green sea turtle shell segment.' },
  { id: 'wolf_armor', tags: ['armor', 'wolf_armor', 'armadillo', 'leather', 'brown'], type: 'armor', material: 'leather', desc: 'Wolf Armor: Tailored canine armor forged from linked armadillo scute scales.' },
  { id: 'elytra', tags: ['armor', 'wings', 'elytra', 'gray', 'purple', 'diagonal'], type: 'armor', material: 'organic', desc: 'Elytra Wings: Folded beetle-wing flight gliders in dusky charcoal and lavender.' },

  // Magic & Special Items
  { id: 'totem_of_undying', tags: ['magic', 'totem', 'gold', 'emerald', 'artifact', 'frontal'], type: 'magic', material: 'gold', desc: 'Totem of Undying: Golden winged figure clutching green emerald eyes, magical relic.' },
  { id: 'ender_pearl', tags: ['magic', 'ender_pearl', 'cyan', 'dark_green', 'orb', 'frontal'], type: 'magic', material: 'ender', desc: 'Ender Pearl: Mysterious dark teal-green orb with cyan glowing center.' },
  { id: 'blaze_rod', tags: ['magic', 'blaze_rod', 'fire', 'orange', 'yellow', 'diagonal'], type: 'magic', material: 'blaze', desc: 'Blaze Rod: Glowing fiery cylindrical wand, bright yellow to scorching orange.' },
  { id: 'potion', tags: ['magic', 'potion', 'bottle', 'glass', 'frontal'], type: 'magic', material: 'glass', desc: 'Glass Potion Bottle: Corked neck, glass highlights, liquid volume inside.' },
  { id: 'book', tags: ['document', 'book', 'leather', 'paper', 'brown', 'diagonal'], type: 'document', material: 'leather', desc: 'Vanilla Book: Brown leather binding, cream parchment pages, crisp angled edge.' },
  { id: 'music_disc_pigstep', tags: ['utility', 'music_disc', 'record', 'black', 'red', 'frontal'], type: 'utility', material: 'netherite', desc: 'Pigstep Music Disc: Grooved black vinyl record featuring a blood-red Nether center label.' },
  { id: 'spectral_arrow', tags: ['weapon', 'arrow', 'spectral', 'gold', 'magic', 'diagonal'], type: 'weapon', material: 'gold', desc: 'Spectral Arrow: Broad arrowhead infused with shimmering gold outline tracking luminescence.' }
];

const ITEM_BASE_URL = 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.3/assets/minecraft/textures/item/';
const BLOCK_BASE_URL = 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.3/assets/minecraft/textures/block/';

async function fetchBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// Scales 16x16 PNG buffer to 256x256 nearest-neighbor PNG on solid black background
function upscaleTo256OnBlack(png16) {
  const scale = 16;
  const outPng = new PNG({ width: 256, height: 256 });

  // Fill outPng with solid black
  for (let i = 0; i < outPng.data.length; i += 4) {
    outPng.data[i] = 0;     // R
    outPng.data[i + 1] = 0; // G
    outPng.data[i + 2] = 0; // B
    outPng.data[i + 3] = 255; // A (solid black background)
  }

  // Draw scaled pixels
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const srcIdx = (y * 16 + x) * 4;
      const r = png16.data[srcIdx];
      const g = png16.data[srcIdx + 1];
      const b = png16.data[srcIdx + 2];
      const a = png16.data[srcIdx + 3];

      if (a > 10) {
        // Copy this 1 pixel to a 16x16 block
        for (let dy = 0; dy < scale; dy++) {
          for (let dx = 0; dx < scale; dx++) {
            const destX = x * scale + dx;
            const destY = y * scale + dy;
            const destIdx = (destY * 256 + destX) * 4;
            outPng.data[destIdx] = r;
            outPng.data[destIdx + 1] = g;
            outPng.data[destIdx + 2] = b;
            outPng.data[destIdx + 3] = 255;
          }
        }
      }
    }
  }

  return PNG.sync.write(outPng);
}

// Extract distinct color palette from 16x16 PNG
function extractPalette(png16) {
  const colorCounts = new Map();

  for (let i = 0; i < png16.data.length; i += 4) {
    const a = png16.data[i + 3];
    if (a > 20) {
      const r = png16.data[i];
      const g = png16.data[i + 1];
      const b = png16.data[i + 2];
      const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
      colorCounts.set(hex, (colorCounts.get(hex) || 0) + 1);
    }
  }

  // Sort by luminance (dark to light)
  const colors = Array.from(colorCounts.keys()).sort((hexA, hexB) => {
    const rA = parseInt(hexA.slice(1, 3), 16), gA = parseInt(hexA.slice(3, 5), 16), bA = parseInt(hexA.slice(5, 7), 16);
    const rB = parseInt(hexB.slice(1, 3), 16), gB = parseInt(hexB.slice(3, 5), 16), bB = parseInt(hexB.slice(5, 7), 16);
    const lumA = 0.299 * rA + 0.587 * gA + 0.114 * bA;
    const lumB = 0.299 * rB + 0.587 * gB + 0.114 * bB;
    return lumA - lumB;
  });

  return colors;
}

async function run() {
  console.log(`Starting ingestion of ${TARGET_ITEMS.length} items from 26.3...`);
  const results = [];
  const materialPalettes = {};

  for (const item of TARGET_ITEMS) {
    const filename = item.filename || `${item.id}.png`;
    const baseUrl = item.sourceFolder === 'block' ? BLOCK_BASE_URL : ITEM_BASE_URL;
    const url = `${baseUrl}${filename}`;
    try {
      const buf = await fetchBuffer(url);
      const png16 = PNG.sync.read(buf);
      
      const buf256 = upscaleTo256OnBlack(png16);
      const base64Scaled = buf256.toString('base64');
      const base64Raw16 = buf.toString('base64');
      const palette = extractPalette(png16);

      results.push({
        id: item.id,
        tags: item.tags,
        type: item.type,
        material: item.material,
        description: item.desc,
        palette: palette,
        base64Scaled: base64Scaled,
        base64Raw16: base64Raw16
      });

      if (!materialPalettes[item.material] || palette.length > materialPalettes[item.material].length) {
        materialPalettes[item.material] = palette;
      }

      console.log(`✓ Ingested ${item.id} (${palette.length} colors)`);
    } catch (err) {
      console.error(`✗ Error processing ${item.id}:`, err.message);
    }
  }

  console.log(`Successfully processed ${results.length} items.`);

  // Write data/referenceLibrary.ts
  const refLibContent = `/**
 * Official Vanilla Minecraft Reference Assets (Scaled 256x256 & 16x16 with Palettes)
 * Grounding data for Gemini Vision few-shot learning.
 */

export interface ReferenceItem {
  id: string;
  tags: string[];
  type: string;
  material: string;
  description: string;
  palette: string[];
  base64Scaled: string; // 256x256 crisp pixelated PNG on black background
  base64Raw16: string;  // Original 16x16 PNG
}

export const VANILLA_EXAMPLES: ReferenceItem[] = ${JSON.stringify(results, null, 2)};

/**
 * Finds the top 2-3 most relevant scaled reference examples for any request,
 * analyzing the user prompt text, item type, and material to pull the most
 * structurally and materially accurate grounding assets from the ingested vanilla items.
 */
export const getFewShotExamples = (
  prompt: string = '', 
  itemType: string = 'adaptive', 
  material: string = 'adaptive'
): ReferenceItem[] => {
  const promptTokens = (prompt || '')
    .toLowerCase()
    .replace(/[^a-z0-9\\s]/g, ' ')
    .split(/\\s+/)
    .filter(t => t.length > 2);

  const typeLower = (itemType || '').toLowerCase();
  const matLower = (material || '').toLowerCase();

  const scored = VANILLA_EXAMPLES.map(item => {
    let score = 0;

    // Check itemType
    if (typeLower !== 'adaptive' && typeLower !== '' && item.tags.includes(typeLower)) {
      score += 5;
    }
    // Check material
    if (matLower !== 'adaptive' && matLower !== '' && item.tags.includes(matLower)) {
      score += 5;
    }

    // Check prompt tokens against tags and ID
    for (const token of promptTokens) {
      if (item.tags.includes(token)) score += 3;
      if (item.id.includes(token)) score += 4;
      if (item.description.toLowerCase().includes(token)) score += 1;
    }

    return { item, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const top = scored.filter(s => s.score > 0).map(s => s.item);
  if (top.length >= 2) return top.slice(0, 2);
  if (top.length === 1) {
    const fallback = VANILLA_EXAMPLES.find(i => i.id !== top[0].id && (i.id === 'diamond_sword' || i.id === 'gold_ingot'));
    return fallback ? [top[0], fallback] : top;
  }

  // Fallback to iconic vanilla items (diamond sword + gold ingot)
  const fallbacks = VANILLA_EXAMPLES.filter(i => i.id === 'diamond_sword' || i.id === 'gold_ingot');
  return fallbacks.length >= 2 ? fallbacks.slice(0, 2) : VANILLA_EXAMPLES.slice(0, 2);
};
`;

  fs.writeFileSync(path.resolve('./data/referenceLibrary.ts'), refLibContent, 'utf-8');

  // Write data/paletteLibrary.ts
  const palLibContent = `/**
 * Authentic Minecraft Material Color Palettes extracted from official textures.
 */
export const MINECRAFT_PALETTES: Record<string, string[]> = ${JSON.stringify(materialPalettes, null, 2)};

export function getClosestMaterialPalette(name: string): string[] | undefined {
  const lower = name.toLowerCase();
  for (const [mat, colors] of Object.entries(MINECRAFT_PALETTES)) {
    if (lower.includes(mat)) return colors;
  }
  return undefined;
}
`;

  fs.writeFileSync(path.resolve('./data/paletteLibrary.ts'), palLibContent, 'utf-8');
  console.log('Successfully wrote data/referenceLibrary.ts and data/paletteLibrary.ts!');
}

run().catch(console.error);
