/**
 * Recipe registry for Minecraft crafting recipes.
 *
 * Each recipe has:
 * - result: the item ID produced
 * - resultCount: how many items one craft produces
 * - ingredients: array of { item: itemId, count: number }
 * - grid: 3x3 array representing the crafting table layout
 *         Each cell is an item ID string or null for empty
 *         Row 0 = top, Row 2 = bottom
 * - gridSize: '2x2' or '3x3' — which crafting grid is needed
 */

const recipes = {
  // ============ PROCESSED MATERIALS ============
  oak_planks: {
    result: 'oak_planks',
    resultCount: 4,
    ingredients: [{ item: 'oak_log', count: 1 }],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      [null, 'oak_log', null],
      [null, null, null],
    ],
  },
  birch_planks: {
    result: 'birch_planks',
    resultCount: 4,
    ingredients: [{ item: 'birch_log', count: 1 }],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      [null, 'birch_log', null],
      [null, null, null],
    ],
  },
  stick: {
    result: 'stick',
    resultCount: 4,
    ingredients: [{ item: 'oak_planks', count: 2 }],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      [null, 'oak_planks', null],
      [null, 'oak_planks', null],
    ],
  },
  iron_ingot: {
    result: 'iron_ingot',
    resultCount: 1,
    ingredients: [{ item: 'iron_ore', count: 1 }],
    gridSize: 'smelting',
    grid: [
      [null, null, null],
      [null, 'iron_ore', null],
      [null, null, null],
    ],
  },
  gold_ingot: {
    result: 'gold_ingot',
    resultCount: 1,
    ingredients: [{ item: 'gold_ore', count: 1 }],
    gridSize: 'smelting',
    grid: [
      [null, null, null],
      [null, 'gold_ore', null],
      [null, null, null],
    ],
  },
  iron_nugget: {
    result: 'iron_nugget',
    resultCount: 9,
    ingredients: [{ item: 'iron_ingot', count: 1 }],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      [null, 'iron_ingot', null],
      [null, null, null],
    ],
  },
  gold_nugget: {
    result: 'gold_nugget',
    resultCount: 9,
    ingredients: [{ item: 'gold_ingot', count: 1 }],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      [null, 'gold_ingot', null],
      [null, null, null],
    ],
  },
  paper: {
    result: 'paper',
    resultCount: 3,
    ingredients: [{ item: 'sugar_cane', count: 3 }],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['sugar_cane', 'sugar_cane', 'sugar_cane'],
      [null, null, null],
    ],
  },
  book: {
    result: 'book',
    resultCount: 1,
    ingredients: [
      { item: 'paper', count: 3 },
      { item: 'leather', count: 1 },
    ],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      ['paper', 'paper', null],
      ['paper', 'leather', null],
    ],
  },
  glass_pane: {
    result: 'glass_pane',
    resultCount: 16,
    ingredients: [{ item: 'glass', count: 6 }],
    gridSize: '3x3',
    grid: [
      ['glass', 'glass', 'glass'],
      ['glass', 'glass', 'glass'],
      [null, null, null],
    ],
  },
  glass_bottle: {
    result: 'glass_bottle',
    resultCount: 3,
    ingredients: [{ item: 'glass', count: 3 }],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['glass', null, 'glass'],
      [null, 'glass', null],
    ],
  },
  blaze_powder: {
    result: 'blaze_powder',
    resultCount: 2,
    ingredients: [{ item: 'blaze_rod', count: 1 }],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      [null, 'blaze_rod', null],
      [null, null, null],
    ],
  },

  // ============ TOOLS ============
  wooden_pickaxe: {
    result: 'wooden_pickaxe',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 3 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      ['oak_planks', 'oak_planks', 'oak_planks'],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
  },
  stone_pickaxe: {
    result: 'stone_pickaxe',
    resultCount: 1,
    ingredients: [
      { item: 'cobblestone', count: 3 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      ['cobblestone', 'cobblestone', 'cobblestone'],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
  },
  iron_pickaxe: {
    result: 'iron_pickaxe',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 3 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
  },
  diamond_pickaxe: {
    result: 'diamond_pickaxe',
    resultCount: 1,
    ingredients: [
      { item: 'diamond', count: 3 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      ['diamond', 'diamond', 'diamond'],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
  },
  wooden_sword: {
    result: 'wooden_sword',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 2 },
      { item: 'stick', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'oak_planks', null],
      [null, 'oak_planks', null],
      [null, 'stick', null],
    ],
  },
  stone_sword: {
    result: 'stone_sword',
    resultCount: 1,
    ingredients: [
      { item: 'cobblestone', count: 2 },
      { item: 'stick', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'cobblestone', null],
      [null, 'cobblestone', null],
      [null, 'stick', null],
    ],
  },
  iron_sword: {
    result: 'iron_sword',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 2 },
      { item: 'stick', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'iron_ingot', null],
      [null, 'iron_ingot', null],
      [null, 'stick', null],
    ],
  },
  diamond_sword: {
    result: 'diamond_sword',
    resultCount: 1,
    ingredients: [
      { item: 'diamond', count: 2 },
      { item: 'stick', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'diamond', null],
      [null, 'diamond', null],
      [null, 'stick', null],
    ],
  },
  wooden_axe: {
    result: 'wooden_axe',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 3 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      ['oak_planks', 'oak_planks', null],
      ['oak_planks', 'stick', null],
      [null, 'stick', null],
    ],
  },
  iron_axe: {
    result: 'iron_axe',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 3 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      ['iron_ingot', 'iron_ingot', null],
      ['iron_ingot', 'stick', null],
      [null, 'stick', null],
    ],
  },
  diamond_axe: {
    result: 'diamond_axe',
    resultCount: 1,
    ingredients: [
      { item: 'diamond', count: 3 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      ['diamond', 'diamond', null],
      ['diamond', 'stick', null],
      [null, 'stick', null],
    ],
  },
  wooden_shovel: {
    result: 'wooden_shovel',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 1 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'oak_planks', null],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
  },
  iron_shovel: {
    result: 'iron_shovel',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 1 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'iron_ingot', null],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
  },
  diamond_shovel: {
    result: 'diamond_shovel',
    resultCount: 1,
    ingredients: [
      { item: 'diamond', count: 1 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'diamond', null],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
  },
  wooden_hoe: {
    result: 'wooden_hoe',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 2 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      ['oak_planks', 'oak_planks', null],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
  },
  iron_hoe: {
    result: 'iron_hoe',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 2 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      ['iron_ingot', 'iron_ingot', null],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
  },
  flint_and_steel: {
    result: 'flint_and_steel',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 1 },
      { item: 'flint', count: 1 },
    ],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      ['iron_ingot', null, null],
      [null, 'flint', null],
    ],
  },
  shears: {
    result: 'shears',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 2 }],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      [null, 'iron_ingot', null],
      ['iron_ingot', null, null],
    ],
  },
  bow: {
    result: 'bow',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 3 },
      { item: 'string', count: 3 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'stick', 'string'],
      ['stick', null, 'string'],
      [null, 'stick', 'string'],
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
    gridSize: '3x3',
    grid: [
      [null, 'flint', null],
      [null, 'stick', null],
      [null, 'feather', null],
    ],
  },
  fishing_rod: {
    result: 'fishing_rod',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 3 },
      { item: 'string', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      [null, null, 'stick'],
      [null, 'stick', 'string'],
      ['stick', null, 'string'],
    ],
  },
  compass: {
    result: 'compass',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 4 },
      { item: 'redstone_dust', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'iron_ingot', null],
      ['iron_ingot', 'redstone_dust', 'iron_ingot'],
      [null, 'iron_ingot', null],
    ],
  },
  clock: {
    result: 'clock',
    resultCount: 1,
    ingredients: [
      { item: 'gold_ingot', count: 4 },
      { item: 'redstone_dust', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'gold_ingot', null],
      ['gold_ingot', 'redstone_dust', 'gold_ingot'],
      [null, 'gold_ingot', null],
    ],
  },

  // ============ ARMOR ============
  iron_helmet: {
    result: 'iron_helmet',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 5 }],
    gridSize: '3x3',
    grid: [
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
      ['iron_ingot', null, 'iron_ingot'],
      [null, null, null],
    ],
  },
  iron_chestplate: {
    result: 'iron_chestplate',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 8 }],
    gridSize: '3x3',
    grid: [
      ['iron_ingot', null, 'iron_ingot'],
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
    ],
  },
  iron_leggings: {
    result: 'iron_leggings',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 7 }],
    gridSize: '3x3',
    grid: [
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
      ['iron_ingot', null, 'iron_ingot'],
      ['iron_ingot', null, 'iron_ingot'],
    ],
  },
  iron_boots: {
    result: 'iron_boots',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 4 }],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['iron_ingot', null, 'iron_ingot'],
      ['iron_ingot', null, 'iron_ingot'],
    ],
  },
  diamond_helmet: {
    result: 'diamond_helmet',
    resultCount: 1,
    ingredients: [{ item: 'diamond', count: 5 }],
    gridSize: '3x3',
    grid: [
      ['diamond', 'diamond', 'diamond'],
      ['diamond', null, 'diamond'],
      [null, null, null],
    ],
  },
  diamond_chestplate: {
    result: 'diamond_chestplate',
    resultCount: 1,
    ingredients: [{ item: 'diamond', count: 8 }],
    gridSize: '3x3',
    grid: [
      ['diamond', null, 'diamond'],
      ['diamond', 'diamond', 'diamond'],
      ['diamond', 'diamond', 'diamond'],
    ],
  },
  diamond_leggings: {
    result: 'diamond_leggings',
    resultCount: 1,
    ingredients: [{ item: 'diamond', count: 7 }],
    gridSize: '3x3',
    grid: [
      ['diamond', 'diamond', 'diamond'],
      ['diamond', null, 'diamond'],
      ['diamond', null, 'diamond'],
    ],
  },
  diamond_boots: {
    result: 'diamond_boots',
    resultCount: 1,
    ingredients: [{ item: 'diamond', count: 4 }],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['diamond', null, 'diamond'],
      ['diamond', null, 'diamond'],
    ],
  },
  shield: {
    result: 'shield',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 6 },
      { item: 'iron_ingot', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      ['oak_planks', 'iron_ingot', 'oak_planks'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
      [null, 'oak_planks', null],
    ],
  },

  // ============ BLOCKS & STORAGE ============
  chest: {
    result: 'chest',
    resultCount: 1,
    ingredients: [{ item: 'oak_planks', count: 8 }],
    gridSize: '3x3',
    grid: [
      ['oak_planks', 'oak_planks', 'oak_planks'],
      ['oak_planks', null, 'oak_planks'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
  },
  crafting_table: {
    result: 'crafting_table',
    resultCount: 1,
    ingredients: [{ item: 'oak_planks', count: 4 }],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      ['oak_planks', 'oak_planks', null],
      ['oak_planks', 'oak_planks', null],
    ],
  },
  furnace: {
    result: 'furnace',
    resultCount: 1,
    ingredients: [{ item: 'cobblestone', count: 8 }],
    gridSize: '3x3',
    grid: [
      ['cobblestone', 'cobblestone', 'cobblestone'],
      ['cobblestone', null, 'cobblestone'],
      ['cobblestone', 'cobblestone', 'cobblestone'],
    ],
  },
  torch: {
    result: 'torch',
    resultCount: 4,
    ingredients: [
      { item: 'stick', count: 1 },
      { item: 'coal', count: 1 },
    ],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      [null, 'coal', null],
      [null, 'stick', null],
    ],
  },
  ladder: {
    result: 'ladder',
    resultCount: 3,
    ingredients: [{ item: 'stick', count: 7 }],
    gridSize: '3x3',
    grid: [
      ['stick', null, 'stick'],
      ['stick', 'stick', 'stick'],
      ['stick', null, 'stick'],
    ],
  },
  door_oak: {
    result: 'door_oak',
    resultCount: 3,
    ingredients: [{ item: 'oak_planks', count: 6 }],
    gridSize: '3x3',
    grid: [
      ['oak_planks', 'oak_planks', null],
      ['oak_planks', 'oak_planks', null],
      ['oak_planks', 'oak_planks', null],
    ],
  },
  fence_oak: {
    result: 'fence_oak',
    resultCount: 3,
    ingredients: [
      { item: 'oak_planks', count: 4 },
      { item: 'stick', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['oak_planks', 'stick', 'oak_planks'],
      ['oak_planks', 'stick', 'oak_planks'],
    ],
  },
  fence_gate_oak: {
    result: 'fence_gate_oak',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 4 },
      { item: 'oak_planks', count: 2 },
    ],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['stick', 'oak_planks', 'stick'],
      ['stick', 'oak_planks', 'stick'],
    ],
  },
  trapdoor_oak: {
    result: 'trapdoor_oak',
    resultCount: 2,
    ingredients: [{ item: 'oak_planks', count: 6 }],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['oak_planks', 'oak_planks', 'oak_planks'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
  },
  slab_oak: {
    result: 'slab_oak',
    resultCount: 6,
    ingredients: [{ item: 'oak_planks', count: 3 }],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      [null, null, null],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
  },
  stairs_oak: {
    result: 'stairs_oak',
    resultCount: 4,
    ingredients: [{ item: 'oak_planks', count: 6 }],
    gridSize: '3x3',
    grid: [
      ['oak_planks', null, null],
      ['oak_planks', 'oak_planks', null],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
  },
  iron_block: {
    result: 'iron_block',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 9 }],
    gridSize: '3x3',
    grid: [
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
    ],
  },
  gold_block: {
    result: 'gold_block',
    resultCount: 1,
    ingredients: [{ item: 'gold_ingot', count: 9 }],
    gridSize: '3x3',
    grid: [
      ['gold_ingot', 'gold_ingot', 'gold_ingot'],
      ['gold_ingot', 'gold_ingot', 'gold_ingot'],
      ['gold_ingot', 'gold_ingot', 'gold_ingot'],
    ],
  },
  diamond_block: {
    result: 'diamond_block',
    resultCount: 1,
    ingredients: [{ item: 'diamond', count: 9 }],
    gridSize: '3x3',
    grid: [
      ['diamond', 'diamond', 'diamond'],
      ['diamond', 'diamond', 'diamond'],
      ['diamond', 'diamond', 'diamond'],
    ],
  },
  emerald_block: {
    result: 'emerald_block',
    resultCount: 1,
    ingredients: [{ item: 'emerald', count: 9 }],
    gridSize: '3x3',
    grid: [
      ['emerald', 'emerald', 'emerald'],
      ['emerald', 'emerald', 'emerald'],
      ['emerald', 'emerald', 'emerald'],
    ],
  },
  lapis_block: {
    result: 'lapis_block',
    resultCount: 1,
    ingredients: [{ item: 'lapis_lazuli', count: 9 }],
    gridSize: '3x3',
    grid: [
      ['lapis_lazuli', 'lapis_lazuli', 'lapis_lazuli'],
      ['lapis_lazuli', 'lapis_lazuli', 'lapis_lazuli'],
      ['lapis_lazuli', 'lapis_lazuli', 'lapis_lazuli'],
    ],
  },
  bookshelf: {
    result: 'bookshelf',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 6 },
      { item: 'book', count: 3 },
    ],
    gridSize: '3x3',
    grid: [
      ['oak_planks', 'oak_planks', 'oak_planks'],
      ['book', 'book', 'book'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
  },
  jukebox: {
    result: 'jukebox',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 8 },
      { item: 'diamond', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      ['oak_planks', 'oak_planks', 'oak_planks'],
      ['oak_planks', 'diamond', 'oak_planks'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
  },
  bed: {
    result: 'bed',
    resultCount: 1,
    ingredients: [
      { item: 'oak_planks', count: 3 },
      { item: 'wool', count: 3 },
    ],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['wool', 'wool', 'wool'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
  },
  painting: {
    result: 'painting',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 8 },
      { item: 'wool', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      ['stick', 'stick', 'stick'],
      ['stick', 'wool', 'stick'],
      ['stick', 'stick', 'stick'],
    ],
  },
  item_frame: {
    result: 'item_frame',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 8 },
      { item: 'leather', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      ['stick', 'stick', 'stick'],
      ['stick', 'leather', 'stick'],
      ['stick', 'stick', 'stick'],
    ],
  },
  sign_oak: {
    result: 'sign_oak',
    resultCount: 3,
    ingredients: [
      { item: 'oak_planks', count: 6 },
      { item: 'stick', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      ['oak_planks', 'oak_planks', 'oak_planks'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
      [null, 'stick', null],
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
    gridSize: '3x3',
    grid: [
      ['oak_planks', 'oak_planks', 'oak_planks'],
      ['cobblestone', 'iron_ingot', 'cobblestone'],
      ['cobblestone', 'redstone_dust', 'cobblestone'],
    ],
  },
  sticky_piston: {
    result: 'sticky_piston',
    resultCount: 1,
    ingredients: [
      { item: 'piston', count: 1 },
      { item: 'slime_ball', count: 1 },
    ],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      [null, 'slime_ball', null],
      [null, 'piston', null],
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
    gridSize: '3x3',
    grid: [
      ['cobblestone', 'cobblestone', 'cobblestone'],
      ['cobblestone', 'bow', 'cobblestone'],
      ['cobblestone', 'redstone_dust', 'cobblestone'],
    ],
  },
  dropper: {
    result: 'dropper',
    resultCount: 1,
    ingredients: [
      { item: 'cobblestone', count: 7 },
      { item: 'redstone_dust', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      ['cobblestone', 'cobblestone', 'cobblestone'],
      ['cobblestone', null, 'cobblestone'],
      ['cobblestone', 'redstone_dust', 'cobblestone'],
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
    gridSize: '3x3',
    grid: [
      ['cobblestone', 'cobblestone', 'cobblestone'],
      ['redstone_dust', 'redstone_dust', 'quartz'],
      ['cobblestone', 'cobblestone', 'cobblestone'],
    ],
  },
  hopper: {
    result: 'hopper',
    resultCount: 1,
    ingredients: [
      { item: 'iron_ingot', count: 5 },
      { item: 'chest', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      ['iron_ingot', null, 'iron_ingot'],
      ['iron_ingot', 'chest', 'iron_ingot'],
      [null, 'iron_ingot', null],
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
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['redstone_torch', 'redstone_dust', 'redstone_torch'],
      ['cobblestone', 'cobblestone', 'cobblestone'],
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
    gridSize: '3x3',
    grid: [
      [null, 'redstone_torch', null],
      ['redstone_torch', 'quartz', 'redstone_torch'],
      ['cobblestone', 'cobblestone', 'cobblestone'],
    ],
  },
  redstone_torch: {
    result: 'redstone_torch',
    resultCount: 1,
    ingredients: [
      { item: 'stick', count: 1 },
      { item: 'redstone_dust', count: 1 },
    ],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      [null, 'redstone_dust', null],
      [null, 'stick', null],
    ],
  },
  redstone_lamp: {
    result: 'redstone_lamp',
    resultCount: 1,
    ingredients: [
      { item: 'redstone_dust', count: 4 },
      { item: 'glass', count: 1 },
    ],
    gridSize: '3x3',
    grid: [
      [null, 'redstone_dust', null],
      ['redstone_dust', 'glass', 'redstone_dust'],
      [null, 'redstone_dust', null],
    ],
  },
  tnt: {
    result: 'tnt',
    resultCount: 1,
    ingredients: [
      { item: 'gunpowder', count: 5 },
      { item: 'sand', count: 4 },
    ],
    gridSize: '3x3',
    grid: [
      ['gunpowder', 'sand', 'gunpowder'],
      ['sand', 'gunpowder', 'sand'],
      ['gunpowder', 'sand', 'gunpowder'],
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
    gridSize: '3x3',
    grid: [
      [null, null, null],
      [null, 'blaze_rod', null],
      ['cobblestone', 'cobblestone', 'cobblestone'],
    ],
  },
  ender_eye: {
    result: 'ender_eye',
    resultCount: 1,
    ingredients: [
      { item: 'ender_pearl', count: 1 },
      { item: 'blaze_powder', count: 1 },
    ],
    gridSize: '2x2',
    grid: [
      [null, null, null],
      ['ender_pearl', 'blaze_powder', null],
      [null, null, null],
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
    gridSize: '3x3',
    grid: [
      [null, 'book', null],
      ['diamond', 'obsidian', 'diamond'],
      ['obsidian', 'obsidian', 'obsidian'],
    ],
  },
  anvil: {
    result: 'anvil',
    resultCount: 1,
    ingredients: [
      { item: 'iron_block', count: 3 },
      { item: 'iron_ingot', count: 4 },
    ],
    gridSize: '3x3',
    grid: [
      ['iron_block', 'iron_block', 'iron_block'],
      [null, 'iron_ingot', null],
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
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
    gridSize: '3x3',
    grid: [
      ['glass', 'glass', 'glass'],
      ['glass', 'nether_star', 'glass'],
      ['obsidian', 'obsidian', 'obsidian'],
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
    gridSize: '3x3',
    grid: [
      ['iron_ingot', null, 'iron_ingot'],
      ['iron_ingot', 'stick', 'iron_ingot'],
      ['iron_ingot', null, 'iron_ingot'],
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
    gridSize: '3x3',
    grid: [
      ['gold_ingot', null, 'gold_ingot'],
      ['gold_ingot', 'stick', 'gold_ingot'],
      ['gold_ingot', 'redstone_dust', 'gold_ingot'],
    ],
  },
  minecart: {
    result: 'minecart',
    resultCount: 1,
    ingredients: [{ item: 'iron_ingot', count: 5 }],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['iron_ingot', null, 'iron_ingot'],
      ['iron_ingot', 'iron_ingot', 'iron_ingot'],
    ],
  },
  boat_oak: {
    result: 'boat_oak',
    resultCount: 1,
    ingredients: [{ item: 'oak_planks', count: 5 }],
    gridSize: '3x3',
    grid: [
      [null, null, null],
      ['oak_planks', null, 'oak_planks'],
      ['oak_planks', 'oak_planks', 'oak_planks'],
    ],
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