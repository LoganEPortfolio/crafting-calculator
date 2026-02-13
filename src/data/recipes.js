/**
 * Recipe registry for Minecraft crafting recipes.
 * 
 * Each recipe has:
 * - result: the item ID produced
 * - resultCount: how many items one craft produces
 * - ingredients: array of { item: itemId, count: number }
 * 
 * Recipes reference item IDs from items.js.
 * Some items have multiple recipe variants — we store the primary one.
 */

const recipes = {
  // ============ PROCESSED MATERIALS ============
  oak_planks: {
    result: 'oak_planks',
    resultCount: 4,
    ingredients: [{ item: 'oak_log', count: 1 }],
  },
  birch_planks: {
    result: 'birch_planks',
    resultCount: 4,
    ingredients: [{ item: 'birch_log', count: 1 }],
  },
  stick: {
    result: 'stick',
    resultCount: 4,
    ingredients: [{ item: 'oak_planks', count: 2 }],
  },
  iron_ingot: {
    result: 'iron_ingot',
    resultCount: 1,
    ingredients: [{ item: 'iron_ore', count: 1 }],
  },
  gold_ingot: {
    result: 'gold_ingot',
    resultCount: 1,
    ingredients: [{ item: 'gold_ore', count: 1 }],
  },
  iron_nugget: {
    result: 'iron_nugget',
    resultCount: 9,
    ingredients: [{ item: 'iron_ingot', count: 1 }],
  },
  gold_nugget: {
    result: 'gold_nugget',
    resultCount: 9,
    ingredients: [{ item: 'gold_ingot', count: 1 }],
  },
  paper: {
    result: 'paper',
    resultCount: 3,
    ingredients: [{ item: 'sugar_cane', count: 3 }],
  },
  book: {
    result: 'book',
    resultCount: 1,
    ingredients: [
      { item: 'paper', count: 3 },
      { item: 'leather', count: 1 },
    ],
  },
  glass_pane: {
    result: 'glass_pane',
    resultCount: 16,
    ingredients: [{ item: 'glass', count: 6 }],
  },
  glass_bottle: {
    result: 'glass_bottle',
    resultCount: 3,
    ingredients: [{ item: 'glass', count: 3 }],
  },
  blaze_powder: {
    result: 'blaze_powder',
    resultCount: 2,
    ingredients: [{ item: 'blaze_rod', count: 1 }],
  },

  // ============ TOOLS ============
  wooden_pickaxe: {
    result: 'wooden_pickaxe',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 3 },
      { item: 'stick', count: 2 },
    ],
  },
  stone_pickaxe: {
    result: 'stone_pickaxe',
    resultCount: 1,
    ingredients: [
      { item: 'cobblestone', count: 3 },
      { item: 'stick', count: 2 },
    ],
  },
  iron_pickaxe: {
    result: 'iron_pickaxe',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 3 },
      { item: 'stick', count: 2 },
    ],
  },
  diamond_pickaxe: {
    result: 'diamond_pickaxe',
    resultCount: 1,
    ingredients: [
      { item: 'diamond', count: 3 },
      { item: 'stick', count: 2 },
    ],
  },
  wooden_sword: {
    result: 'wooden_sword',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 2 },
      { item: 'stick', count: 1 },
    ],
  },
  stone_sword: {
    result: 'stone_sword',
    resultCount: 1,
    ingredients: [
      { item: 'cobblestone', count: 2 },
      { item: 'stick', count: 1 },
    ],
  },
  iron_sword: {
    result: 'iron_sword',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 2 },
      { item: 'stick', count: 1 },
    ],
  },
  diamond_sword: {
    result: 'diamond_sword',
    resultCount: 1,
    ingredients: [
      { item: 'diamond', count: 2 },
      { item: 'stick', count: 1 },
    ],
  },
  wooden_axe: {
    result: 'wooden_axe',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 3 },
      { item: 'stick', count: 2 },
    ],
  },
  iron_axe: {
    result: 'iron_axe',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 3 },
      { item: 'stick', count: 2 },
    ],
  },
  diamond_axe: {
    result: 'diamond_axe',
    resultCount: 1,
    ingredients: [
      { item: 'diamond', count: 3 },
      { item: 'stick', count: 2 },
    ],
  },
  wooden_shovel: {
    result: 'wooden_shovel',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 1 },
      { item: 'stick', count: 2 },
    ],
  },
  iron_shovel: {
    result: 'iron_shovel',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 1 },
      { item: 'stick', count: 2 },
    ],
  },
  diamond_shovel: {
    result: 'diamond_shovel',
    resultCount: 1,
    ingredients: [
      { item: 'diamond', count: 1 },
      { item: 'stick', count: 2 },
    ],
  },
  wooden_hoe: {
    result: 'wooden_hoe',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 2 },
      { item: 'stick', count: 2 },
    ],
  },
  iron_hoe: {
    result: 'iron_hoe',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 2 },
      { item: 'stick', count: 2 },
    ],
  },
  flint_and_steel: {
    result: 'flint_and_steel',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 1 },
      { item: 'flint', count: 1 },
    ],
  },
  shears: {
    result: 'shears',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 2 }],
  },
  bow: {
    result: 'bow',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 3 },
      { item: 'string', count: 3 },
    ],
  },
  arrow: {
    result: 'arrow',
    resultCount: 4,
    ingredients: [
      { item: 'flint', count: 1 },
      { item: 'stick', count: 1 },
      { item: 'feather', count: 1 },
    ],
  },
  fishing_rod: {
    result: 'fishing_rod',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 3 },
      { item: 'string', count: 2 },
    ],
  },
  compass: {
    result: 'compass',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 4 },
      { item: 'redstone_dust', count: 1 },
    ],
  },
  clock: {
    result: 'clock',
    resultCount: 1,
    ingredients: [
      { item: 'gold_ingot', count: 4 },
      { item: 'redstone_dust', count: 1 },
    ],
  },

  // ============ ARMOR ============
  iron_helmet: {
    result: 'iron_helmet',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 5 }],
  },
  iron_chestplate: {
    result: 'iron_chestplate',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 8 }],
  },
  iron_leggings: {
    result: 'iron_leggings',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 7 }],
  },
  iron_boots: {
    result: 'iron_boots',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 4 }],
  },
  diamond_helmet: {
    result: 'diamond_helmet',
    resultCount: 1,
    ingredients: [{ item: 'diamond', count: 5 }],
  },
  diamond_chestplate: {
    result: 'diamond_chestplate',
    resultCount: 1,
    ingredients: [{ item: 'diamond', count: 8 }],
  },
  diamond_leggings: {
    result: 'diamond_leggings',
    resultCount: 1,
    ingredients: [{ item: 'diamond', count: 7 }],
  },
  diamond_boots: {
    result: 'diamond_boots',
    resultCount: 1,
    ingredients: [{ item: 'diamond', count: 4 }],
  },
  shield: {
    result: 'shield',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 6 },
      { item: 'iron_ingot', count: 1 },
    ],
  },

  // ============ BLOCKS & STORAGE ============
  chest: {
    result: 'chest',
    resultCount: 1,
    ingredients: [{ item: 'oak_planks', count: 8 }],
  },
  crafting_table: {
    result: 'crafting_table',
    resultCount: 1,
    ingredients: [{ item: 'oak_planks', count: 4 }],
  },
  furnace: {
    result: 'furnace',
    resultCount: 1,
    ingredients: [{ item: 'cobblestone', count: 8 }],
  },
  torch: {
    result: 'torch',
    resultCount: 4,
    ingredients: [
      { item: 'stick', count: 1 },
      { item: 'coal', count: 1 },
    ],
  },
  ladder: {
    result: 'ladder',
    resultCount: 3,
    ingredients: [{ item: 'stick', count: 7 }],
  },
  door_oak: {
    result: 'door_oak',
    resultCount: 3,
    ingredients: [{ item: 'oak_planks', count: 6 }],
  },
  fence_oak: {
    result: 'fence_oak',
    resultCount: 3,
    ingredients: [
      { item: 'oak_planks', count: 4 },
      { item: 'stick', count: 2 },
    ],
  },
  fence_gate_oak: {
    result: 'fence_gate_oak',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 4 },
      { item: 'oak_planks', count: 2 },
    ],
  },
  trapdoor_oak: {
    result: 'trapdoor_oak',
    resultCount: 2,
    ingredients: [{ item: 'oak_planks', count: 6 }],
  },
  slab_oak: {
    result: 'slab_oak',
    resultCount: 6,
    ingredients: [{ item: 'oak_planks', count: 3 }],
  },
  stairs_oak: {
    result: 'stairs_oak',
    resultCount: 4,
    ingredients: [{ item: 'oak_planks', count: 6 }],
  },
  iron_block: {
    result: 'iron_block',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 9 }],
  },
  gold_block: {
    result: 'gold_block',
    resultCount: 1,
    ingredients: [{ item: 'gold_ingot', count: 9 }],
  },
  diamond_block: {
    result: 'diamond_block',
    resultCount: 1,
    ingredients: [{ item: 'diamond', count: 9 }],
  },
  emerald_block: {
    result: 'emerald_block',
    resultCount: 1,
    ingredients: [{ item: 'emerald', count: 9 }],
  },
  lapis_block: {
    result: 'lapis_block',
    resultCount: 1,
    ingredients: [{ item: 'lapis_lazuli', count: 9 }],
  },
  bookshelf: {
    result: 'bookshelf',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 6 },
      { item: 'book', count: 3 },
    ],
  },
  jukebox: {
    result: 'jukebox',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 8 },
      { item: 'diamond', count: 1 },
    ],
  },
  bed: {
    result: 'bed',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 3 },
      { item: 'wool', count: 3 },
    ],
  },
  painting: {
    result: 'painting',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 8 },
      { item: 'wool', count: 1 },
    ],
  },
  item_frame: {
    result: 'item_frame',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 8 },
      { item: 'leather', count: 1 },
    ],
  },
  sign_oak: {
    result: 'sign_oak',
    resultCount: 3,
    ingredients: [
      { item: 'oak_planks', count: 6 },
      { item: 'stick', count: 1 },
    ],
  },

  // ============ REDSTONE ============
  piston: {
    result: 'piston',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 3 },
      { item: 'cobblestone', count: 4 },
      { item: 'iron_ingot', count: 1 },
      { item: 'redstone_dust', count: 1 },
    ],
  },
  sticky_piston: {
    result: 'sticky_piston',
    resultCount: 1,
    ingredients: [
      { item: 'piston', count: 1 },
      { item: 'slime_ball', count: 1 },
    ],
  },
  dispenser: {
    result: 'dispenser',
    resultCount: 1,
    ingredients: [
      { item: 'cobblestone', count: 7 },
      { item: 'bow', count: 1 },
      { item: 'redstone_dust', count: 1 },
    ],
  },
  dropper: {
    result: 'dropper',
    resultCount: 1,
    ingredients: [
      { item: 'cobblestone', count: 7 },
      { item: 'redstone_dust', count: 1 },
    ],
  },
  observer: {
    result: 'observer',
    resultCount: 1,
    ingredients: [
      { item: 'cobblestone', count: 6 },
      { item: 'redstone_dust', count: 2 },
      { item: 'quartz', count: 1 },
    ],
  },
  hopper: {
    result: 'hopper',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 5 },
      { item: 'chest', count: 1 },
    ],
  },
  repeater: {
    result: 'repeater',
    resultCount: 1,
    ingredients: [
      { item: 'redstone_torch', count: 2 },
      { item: 'redstone_dust', count: 1 },
      { item: 'cobblestone', count: 3 },
    ],
  },
  comparator: {
    result: 'comparator',
    resultCount: 1,
    ingredients: [
      { item: 'redstone_torch', count: 3 },
      { item: 'quartz', count: 1 },
      { item: 'cobblestone', count: 3 },
    ],
  },
  redstone_torch: {
    result: 'redstone_torch',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 1 },
      { item: 'redstone_dust', count: 1 },
    ],
  },
  redstone_lamp: {
    result: 'redstone_lamp',
    resultCount: 1,
    ingredients: [
      { item: 'redstone_dust', count: 4 },
      { item: 'glass', count: 1 },  // simplified — actually glowstone
    ],
  },
  tnt: {
    result: 'tnt',
    resultCount: 1,
    ingredients: [
      { item: 'gunpowder', count: 5 },
      { item: 'sand', count: 4 },
    ],
  },

  // ============ BREWING & SPECIAL ============
  brewing_stand: {
    result: 'brewing_stand',
    resultCount: 1,
    ingredients: [
      { item: 'blaze_rod', count: 1 },
      { item: 'cobblestone', count: 3 },
    ],
  },
  ender_eye: {
    result: 'ender_eye',
    resultCount: 1,
    ingredients: [
      { item: 'ender_pearl', count: 1 },
      { item: 'blaze_powder', count: 1 },
    ],
  },
  enchanting_table: {
    result: 'enchanting_table',
    resultCount: 1,
    ingredients: [
      { item: 'book', count: 1 },
      { item: 'diamond', count: 2 },
      { item: 'obsidian', count: 4 },
    ],
  },
  anvil: {
    result: 'anvil',
    resultCount: 1,
    ingredients: [
      { item: 'iron_block', count: 3 },
      { item: 'iron_ingot', count: 4 },
    ],
  },
  beacon: {
    result: 'beacon',
    resultCount: 1,
    ingredients: [
      { item: 'glass', count: 5 },
      { item: 'nether_star', count: 1 },
      { item: 'obsidian', count: 3 },
    ],
  },

  // ============ TRANSPORTATION ============
  rail: {
    result: 'rail',
    resultCount: 16,
    ingredients: [
      { item: 'iron_ingot', count: 6 },
      { item: 'stick', count: 1 },
    ],
  },
  powered_rail: {
    result: 'powered_rail',
    resultCount: 6,
    ingredients: [
      { item: 'gold_ingot', count: 6 },
      { item: 'stick', count: 1 },
      { item: 'redstone_dust', count: 1 },
    ],
  },
  minecart: {
    result: 'minecart',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 5 }],
  },
  boat_oak: {
    result: 'boat_oak',
    resultCount: 1,
    ingredients: [{ item: 'oak_planks', count: 5 }],
  },
};

/**
 * Get a recipe by item ID
 */
export function getRecipe(itemId) {
  return recipes[itemId] || null;
}

/**
 * Check if an item has a recipe
 */
export function hasRecipe(itemId) {
  return itemId in recipes;
}

/**
 * Get all recipe IDs
 */
export function getAllRecipeIds() {
  return Object.keys(recipes);
}

export default recipes;