
/**
 * REFERENCE LIBRARY
 * -----------------
 * This file acts as the "Visual Memory" for the AI.
 * 
 * HOW TO ADD NEW DATA:
 * 1. Convert your 16x16 vanilla PNG to a Base64 string.
 *    (Tip: You can use a site like https://www.base64-image.de/ or a script)
 * 2. Add a new object to VANILLA_EXAMPLES array.
 * 3. Tag it accurately. The AI uses tags to find relevant examples.
 * 
 * RECOMMENDED TAGS:
 * - Types: 'weapon', 'tool', 'orb', 'ingot', 'food', 'armor', 'spawn_egg'
 * - Materials: 'iron', 'gold', 'diamond', 'wood', 'stone', 'netherite'
 */

export interface ReferenceItem {
    id: string;
    tags: string[];
    description: string;
    base64: string; // Pure Base64 string (no data:image/png;base64, prefix required in storage, handled in service)
  }
  
  // NOTE: These are all real official base game assets from the latest releases.
  export const VANILLA_EXAMPLES: ReferenceItem[] = [
    {
      id: 'iron_sword_ref',
      tags: ['weapon', 'iron', 'metal' ,'light_gray'],
      description: 'Standard Iron Sword: 45-degree tilt, selective outlining (darker grey edges), high contrast specularity (white highlights on blade).',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAJFBMVEUAAABERET///9ra2soHgtoTh5JNhWJZyeWlpa+vr7Y2NgYGBikrEiaAAAAAXRSTlMAQObYZgAAAExJREFUeNp9zVEOgDAIA1DKNkV6//uaGSP2Y+OHvBLApACo3am+nHvnws9lZM3RIDZDMGO6gmiva0l8DAL8+exGfgkw+uyspzQpUoMb9sgB/CdGlcMAAAAASUVORK5CYII='
    },
    {
      id: 'gold_ingot_ref',
      tags: ['resource', 'gold', 'ingot', 'currency'],
      description: 'Gold Ingot: Butter-yellow to orange shading ramp. Very bright specular highlights. Soft selective outline.',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAG1BMVEUAAAD//////eD99V/61krpsRXclhOyZBF1KALSidGuAAAAAXRSTlMAQObYZgAAAE5JREFUeNqVz0ESgDAMQlFMSOH+J3YmrVaX/bvHDpwk/SVSH2WnJeaKBhT5FpGGGI8iBw0xY6rGWAOvqVGkoUpuGoCqhyo357LVSfbBxRs/dgKAjgB7sgAAAABJRU5ErkJggg=='
    },
    {
      id: 'diamond_pickaxe_ref',
      tags: ['tool', 'diamond', 'pickaxe', 'cyan'],
      description: 'Diamond Pickaxe: Cyan-to-Aqua pixel ramp. Curved head, wooden handle (brown contrast). High saturation.',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAHlBMVEUAAAAz68srx6wnspqJZydoTh5JNhUOPzYoHgsIJSBDqdTeAAAAAXRSTlMAQObYZgAAAEVJREFUeNpjwArKywvANLuQsXoqmFU509gDKplkCaHZIowmgBkpDZMnQAQYgAywAMOkCRABhokTIAIMnFABqBYoowPNZgA7zw9D/CrJmgAAAABJRU5ErkJggg=='
    },
    {
      id: 'diamond_ref',
      tags: ['resource', 'diamond', 'currency', 'gem', 'frontal'],
      description: 'Diamond Gem: Iconic Cyan/Aqua palette. Frontal symmetry. Faceted shading with bright white glints.',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAAD////V//ah++hK7dks4NggxbUaqqcckZoRcnoUXlN/hNeyAAAAAXRSTlMAQObYZgAAAFxJREFUeNqNjzkOxDAMAyORS1n8/4MXyGEnQIpMN1Po2L7S3f3wiMi+O4mUbw4kKK8QGUl6OQmUyldIAhgrhABw1BWSrKqSxjnELEmqucW/I2Ae4kEC8jbxzvubfzBNAqq5tnU2AAAAAElFTkSuQmCC'
    },
    {
      id: 'copper_nautilus_armor_ref',
      tags: ['armor', 'copper', 'mob_accessory', 'diagonal', 'equipment'],
      description: 'Copper Nautilus Armor (Mounts of Mayhem 1.21.11): Warm ochre/brown tones (Unoxidized Copper). Shiny metallic surface. Diagonal orientation. Standard vanilla armor style.',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAFVBMVEUAAACEQim2XD3WbUj8mYLnfFb91MtuXgYIAAAAAXRSTlMAQObYZgAAAFpJREFUeNp1z0EKA0EMA0GpLc3/n5yDJywJrMGHanyxXgf+mMAPz7npy11bEs1liiU5bZbcAO0pMGPJrkMPzIBl7NYNsxc22H4uJHuGhmF9UwCvN5XLJ718/QH6pwG43VSX4gAAAABJRU5ErkJggg=='
    },
    {
      id: 'item_frame_ref',
      tags: ['display', 'wood', 'leather', 'frontal', 'brown'],
      description: 'Item frame: Birch wood texture (tan/beige) with Leather interior (rich brown). Square symmetrical shape.',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAOVBMVEUAAAB3ZDKdilG0oGKTfUJzQCmDSCmUTCmkVTEoHgubiH3///+fiX+diX6XhnvKtXcmJibVwYTn1JvMc/enAAAAAXRSTlMAQObYZgAAAGpJREFUeNoFwbFxw0AQBDDskc417r9KOyT/VgAAAAAAAJ8PIH4bNJr6O7f+A9C4RYhG7bohCT/7NPOOSsJskh4jRCZ9Iowqcr1Rl0F67BNNj9uq+x1pi4GebHcJcTWaCtqONDtpN7sFAMAX8EI8EwiIn+cAAAAASUVORK5CYII='
    },
    {
      id: 'book_ref',
      tags: ['document', 'leather', 'paper', 'diagonal', 'enchantable'],
      description: 'Standard Vanilla Book: Dark brown leather cover, cream white pages. 3/4 perspective (diagonal). Crisp edges, high contrast between cover and paper. Simple, clean shading.',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAADW1ta3t7eZmZlbW1tlSxdUPhNSLhBEJQoxIQQWEAXuGgy6AAAAAXRSTlMAQObYZgAAAFNJREFUeNp1zzkOwCAMRNGJiZfx/Q8cEYyAgunel1wY15E86Wo82MedUaXTVKsYgd8xS3A/0IgXIMW12KQB6Y+4DUpjVJnMxCgbZ4lileIqmdevPwDZA8LCX6b6AAAAAElFTkSuQmCC'
    },
    {
      id: 'written_book_ref',
      tags: ['document', 'leather', 'paper', 'diagonal', 'enchantable'],
      description: 'Standard Vanilla Written Book, converted from writable_book: Rich brown leather cover, cream white pages. 3/4 perspective (diagonal). Crisp edges, high contrast between cover and paper. Simple, clean shading.',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAADW1ta3t7eZmZlbW1t1Mh5sLBldIhBNGAc5EAMWEAXgmlAAAAAAAXRSTlMAQObYZgAAAFRJREFUeNp1z0ESgCAMBMEIBjL5/4Mt2QLlQG7TOa0dD9izN489XaJ0d5Ao+Ul0b58QFixpcJsFZYh3qKWaZb9eGVkqIZlJpkn0HSlZOWXmkszj6gcUewPl1R6hRAAAAABJRU5ErkJggg=='
    },
    {
      id: 'netherite_spear_ref',
      tags: ['weapon', 'netherite', 'dark_gray', 'diagonal', 'vanilla'],
      description: 'Official Vanilla Netherite Spear (Mounts of Mayhem 1.21.11): Dark, desaturated brownish-grey alloy. Long shaft, robust heavy head. 45-degree diagonal tilt. Subtle specular highlights. Smooth gradients, no noise.',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAKlBMVEUAAAAjEBJzRUMxKSo8MjKGe4ZdVl1YTlZDQENgNDI7OTtLP0ZKKUAvISIldkaIAAAAAXRSTlMAQObYZgAAAEJJREFUeNqdyzEWgDAMAlAwJlGb3v+66mToKNuHByRVpQxnZ4bv/Dgim1Hj3a0/Uo3pZr2YJyneHpBq4L+PxZcaq28j+AHGLGqbIwAAAABJRU5ErkJggg=='
    },
    {
      id: 'map_ref',
      tags: ['resource', 'paper', 'outline', 'diagonal'],
      description: 'Map: paper, diagonal tilt, smooth yellowed border',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAFVBMVEUAAACnqEja3arq6sf8/PK7wXeHiDl+gYyIAAAAAXRSTlMAQObYZgAAAEZJREFUeNqVjzkSgDAMA3U4+v+TGQJMHCrYTrtujB+Qr21xy6oyW64TZeULZm65bsRsuzwv8hgrQDNOgGU8gkU0EnSS7z8eqkoBXX1zFmAAAAAASUVORK5CYII='
    },
    {
      id: 'villager_spawn_egg_ref',
      tags: ['spawn_egg', 'mob_representation', 'frontal', 'creative_mode', 'utility', 'villager'],
      description: 'A Spawn egg used to put a Villager on the map. It is egg-shaped but represents a villager face, with no eyes and big nose',
      base64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAKlBMVEUAAADWnXq+iGyWZEmQXkOEUTxxVE13QjVaQj1pOi9MODNZMShEMi4yKihCcLhwAAAAAXRSTlMAQObYZgAAAGhJREFUeNpjQAYzZ0JoTieVCWDGFCUlT4iAoJLqBBBDI63n8AaQjKCxqXI0kDFJMDjU2BrEUCwvDwYxDimVVwbbAhknjICMtSBGx/TKU2eBDJ4VM2eeugAy8c6aM2cZQID37t0LSE4AAC/lHwwhVDuDAAAAAElFTkSuQmCC'
    }
  ];
  
  /**
   * Finds the best reference images for a given context.
   */
  export const getFewShotExamples = (itemType: string, material: string): ReferenceItem[] => {
    // 1. Try to find strict matches (both Type and Material)
    const strictMatches = VANILLA_EXAMPLES.filter(item => 
      item.tags.includes(itemType.toLowerCase()) && 
      item.tags.includes(material.toLowerCase())
    );
  
    if (strictMatches.length > 0) return strictMatches.slice(0, 2); // Return top 2 strict matches
  
    // 2. If no strict matches, find matches just by Type (Shape is more important than color usually)
    const typeMatches = VANILLA_EXAMPLES.filter(item => 
      item.tags.includes(itemType.toLowerCase())
    );
  
    if (typeMatches.length > 0) return typeMatches.slice(0, 2);
    
    // 3. If no type matches, try to match by material (Color is next most important)
    const materialMatches = VANILLA_EXAMPLES.filter(item => 
        item.tags.includes(material.toLowerCase())
    );

    if (materialMatches.length > 0) return materialMatches.slice(0, 2);
  
    // 4. Fallback: Return a generic high-quality example if nothing matches, 
    // to at least show the AI the general "pixel density" expected.
    return VANILLA_EXAMPLES.slice(0, 1);
  };
