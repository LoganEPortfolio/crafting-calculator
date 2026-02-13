/**
 * Master item registry for Minecraft items.
 * 
 * Each item has:
 * - id: unique string identifier
 * - name: display name
 * - stackSize: max stack size (default 64, some items differ)
 * - isRaw: true if this is a base material (cannot be crafted further)
 * - category: grouping for UI organization
 */

const items = {
  // ============ RAW MATERIALS ============
  oak_log: {
    id: 'oak_log',
    name: 'Oak Log',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  birch_log: {
    id: 'birch_log',
    name: 'Birch Log',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  cobblestone: {
    id: 'cobblestone',
    name: 'Cobblestone',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  iron_ore: {
    id: 'iron_ore',
    name: 'Iron Ore',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  gold_ore: {
    id: 'gold_ore',
    name: 'Gold Ore',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  diamond: {
    id: 'diamond',
    name: 'Diamond',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  redstone_dust: {
    id: 'redstone_dust',
    name: 'Redstone Dust',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  coal: {
    id: 'coal',
    name: 'Coal',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  sand: {
    id: 'sand',
    name: 'Sand',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  sugar_cane: {
    id: 'sugar_cane',
    name: 'Sugar Cane',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  string: {
    id: 'string',
    name: 'String',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  leather: {
    id: 'leather',
    name: 'Leather',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  flint: {
    id: 'flint',
    name: 'Flint',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  feather: {
    id: 'feather',
    name: 'Feather',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  gunpowder: {
    id: 'gunpowder',
    name: 'Gunpowder',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  ender_pearl: {
    id: 'ender_pearl',
    name: 'Ender Pearl',
    stackSize: 16,
    isRaw: true,
    category: 'raw',
  },
  blaze_powder: {
    id: 'blaze_powder',
    name: 'Blaze Powder',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  blaze_rod: {
    id: 'blaze_rod',
    name: 'Blaze Rod',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  slime_ball: {
    id: 'slime_ball',
    name: 'Slime Ball',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  glass: {
    id: 'glass',
    name: 'Glass',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  nether_wart: {
    id: 'nether_wart',
    name: 'Nether Wart',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  ghast_tear: {
    id: 'ghast_tear',
    name: 'Ghast Tear',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  rabbit_foot: {
    id: 'rabbit_foot',
    name: 'Rabbit Foot',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  lapis_lazuli: {
    id: 'lapis_lazuli',
    name: 'Lapis Lazuli',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },
  quartz: {
    id: 'quartz',
    name: 'Nether Quartz',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },

  // ============ PROCESSED MATERIALS ============
  oak_planks: {
    id: 'oak_planks',
    name: 'Oak Planks',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },
  birch_planks: {
    id: 'birch_planks',
    name: 'Birch Planks',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },
  stick: {
    id: 'stick',
    name: 'Stick',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },
  iron_ingot: {
    id: 'iron_ingot',
    name: 'Iron Ingot',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },
  gold_ingot: {
    id: 'gold_ingot',
    name: 'Gold Ingot',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },
  glass_pane: {
    id: 'glass_pane',
    name: 'Glass Pane',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },
  paper: {
    id: 'paper',
    name: 'Paper',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },
  book: {
    id: 'book',
    name: 'Book',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },
  iron_nugget: {
    id: 'iron_nugget',
    name: 'Iron Nugget',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },
  gold_nugget: {
    id: 'gold_nugget',
    name: 'Gold Nugget',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },
  glass_bottle: {
    id: 'glass_bottle',
    name: 'Glass Bottle',
    stackSize: 64,
    isRaw: false,
    category: 'processed',
  },

  // ============ TOOLS ============
  wooden_pickaxe: {
    id: 'wooden_pickaxe',
    name: 'Wooden Pickaxe',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  stone_pickaxe: {
    id: 'stone_pickaxe',
    name: 'Stone Pickaxe',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  iron_pickaxe: {
    id: 'iron_pickaxe',
    name: 'Iron Pickaxe',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  diamond_pickaxe: {
    id: 'diamond_pickaxe',
    name: 'Diamond Pickaxe',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  wooden_sword: {
    id: 'wooden_sword',
    name: 'Wooden Sword',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  stone_sword: {
    id: 'stone_sword',
    name: 'Stone Sword',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  iron_sword: {
    id: 'iron_sword',
    name: 'Iron Sword',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  diamond_sword: {
    id: 'diamond_sword',
    name: 'Diamond Sword',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  wooden_axe: {
    id: 'wooden_axe',
    name: 'Wooden Axe',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  iron_axe: {
    id: 'iron_axe',
    name: 'Iron Axe',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  diamond_axe: {
    id: 'diamond_axe',
    name: 'Diamond Axe',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  wooden_shovel: {
    id: 'wooden_shovel',
    name: 'Wooden Shovel',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  iron_shovel: {
    id: 'iron_shovel',
    name: 'Iron Shovel',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  diamond_shovel: {
    id: 'diamond_shovel',
    name: 'Diamond Shovel',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  wooden_hoe: {
    id: 'wooden_hoe',
    name: 'Wooden Hoe',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  iron_hoe: {
    id: 'iron_hoe',
    name: 'Iron Hoe',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  flint_and_steel: {
    id: 'flint_and_steel',
    name: 'Flint and Steel',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  shears: {
    id: 'shears',
    name: 'Shears',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  bow: {
    id: 'bow',
    name: 'Bow',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  arrow: {
    id: 'arrow',
    name: 'Arrow',
    stackSize: 64,
    isRaw: false,
    category: 'tools',
  },
  fishing_rod: {
    id: 'fishing_rod',
    name: 'Fishing Rod',
    stackSize: 1,
    isRaw: false,
    category: 'tools',
  },
  compass: {
    id: 'compass',
    name: 'Compass',
    stackSize: 64,
    isRaw: false,
    category: 'tools',
  },
  clock: {
    id: 'clock',
    name: 'Clock',
    stackSize: 64,
    isRaw: false,
    category: 'tools',
  },

  // ============ ARMOR ============
  iron_helmet: {
    id: 'iron_helmet',
    name: 'Iron Helmet',
    stackSize: 1,
    isRaw: false,
    category: 'armor',
  },
  iron_chestplate: {
    id: 'iron_chestplate',
    name: 'Iron Chestplate',
    stackSize: 1,
    isRaw: false,
    category: 'armor',
  },
  iron_leggings: {
    id: 'iron_leggings',
    name: 'Iron Leggings',
    stackSize: 1,
    isRaw: false,
    category: 'armor',
  },
  iron_boots: {
    id: 'iron_boots',
    name: 'Iron Boots',
    stackSize: 1,
    isRaw: false,
    category: 'armor',
  },
  diamond_helmet: {
    id: 'diamond_helmet',
    name: 'Diamond Helmet',
    stackSize: 1,
    isRaw: false,
    category: 'armor',
  },
  diamond_chestplate: {
    id: 'diamond_chestplate',
    name: 'Diamond Chestplate',
    stackSize: 1,
    isRaw: false,
    category: 'armor',
  },
  diamond_leggings: {
    id: 'diamond_leggings',
    name: 'Diamond Leggings',
    stackSize: 1,
    isRaw: false,
    category: 'armor',
  },
  diamond_boots: {
    id: 'diamond_boots',
    name: 'Diamond Boots',
    stackSize: 1,
    isRaw: false,
    category: 'armor',
  },
  shield: {
    id: 'shield',
    name: 'Shield',
    stackSize: 1,
    isRaw: false,
    category: 'armor',
  },

  // ============ BLOCKS & STORAGE ============
  chest: {
    id: 'chest',
    name: 'Chest',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  crafting_table: {
    id: 'crafting_table',
    name: 'Crafting Table',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  furnace: {
    id: 'furnace',
    name: 'Furnace',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  torch: {
    id: 'torch',
    name: 'Torch',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  ladder: {
    id: 'ladder',
    name: 'Ladder',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  door_oak: {
    id: 'door_oak',
    name: 'Oak Door',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  fence_oak: {
    id: 'fence_oak',
    name: 'Oak Fence',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  fence_gate_oak: {
    id: 'fence_gate_oak',
    name: 'Oak Fence Gate',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  trapdoor_oak: {
    id: 'trapdoor_oak',
    name: 'Oak Trapdoor',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  slab_oak: {
    id: 'slab_oak',
    name: 'Oak Slab',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  stairs_oak: {
    id: 'stairs_oak',
    name: 'Oak Stairs',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  iron_block: {
    id: 'iron_block',
    name: 'Iron Block',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  gold_block: {
    id: 'gold_block',
    name: 'Gold Block',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  diamond_block: {
    id: 'diamond_block',
    name: 'Diamond Block',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  emerald_block: {
    id: 'emerald_block',
    name: 'Emerald Block',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  lapis_block: {
    id: 'lapis_block',
    name: 'Lapis Lazuli Block',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  bookshelf: {
    id: 'bookshelf',
    name: 'Bookshelf',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  jukebox: {
    id: 'jukebox',
    name: 'Jukebox',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  bed: {
    id: 'bed',
    name: 'Bed',
    stackSize: 1,
    isRaw: false,
    category: 'blocks',
  },
  painting: {
    id: 'painting',
    name: 'Painting',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  item_frame: {
    id: 'item_frame',
    name: 'Item Frame',
    stackSize: 64,
    isRaw: false,
    category: 'blocks',
  },
  sign_oak: {
    id: 'sign_oak',
    name: 'Oak Sign',
    stackSize: 16,
    isRaw: false,
    category: 'blocks',
  },
  wool: {
    id: 'wool',
    name: 'Wool',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },

  // ============ REDSTONE ============
  piston: {
    id: 'piston',
    name: 'Piston',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },
  sticky_piston: {
    id: 'sticky_piston',
    name: 'Sticky Piston',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },
  dispenser: {
    id: 'dispenser',
    name: 'Dispenser',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },
  dropper: {
    id: 'dropper',
    name: 'Dropper',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },
  observer: {
    id: 'observer',
    name: 'Observer',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },
  hopper: {
    id: 'hopper',
    name: 'Hopper',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },
  repeater: {
    id: 'repeater',
    name: 'Redstone Repeater',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },
  comparator: {
    id: 'comparator',
    name: 'Redstone Comparator',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },
  redstone_torch: {
    id: 'redstone_torch',
    name: 'Redstone Torch',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },
  redstone_lamp: {
    id: 'redstone_lamp',
    name: 'Redstone Lamp',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },
  tnt: {
    id: 'tnt',
    name: 'TNT',
    stackSize: 64,
    isRaw: false,
    category: 'redstone',
  },

  // ============ BREWING & SPECIAL ============
  brewing_stand: {
    id: 'brewing_stand',
    name: 'Brewing Stand',
    stackSize: 64,
    isRaw: false,
    category: 'brewing',
  },
  ender_eye: {
    id: 'ender_eye',
    name: 'Eye of Ender',
    stackSize: 64,
    isRaw: false,
    category: 'brewing',
  },
  enchanting_table: {
    id: 'enchanting_table',
    name: 'Enchanting Table',
    stackSize: 64,
    isRaw: false,
    category: 'brewing',
  },
  anvil: {
    id: 'anvil',
    name: 'Anvil',
    stackSize: 64,
    isRaw: false,
    category: 'brewing',
  },
  beacon: {
    id: 'beacon',
    name: 'Beacon',
    stackSize: 64,
    isRaw: false,
    category: 'brewing',
  },
  nether_star: {
    id: 'nether_star',
    name: 'Nether Star',
    stackSize: 64,
    isRaw: true,
    category: 'raw',
  },

  // ============ TRANSPORTATION ============
  rail: {
    id: 'rail',
    name: 'Rail',
    stackSize: 64,
    isRaw: false,
    category: 'transport',
  },
  powered_rail: {
    id: 'powered_rail',
    name: 'Powered Rail',
    stackSize: 64,
    isRaw: false,
    category: 'transport',
  },
  minecart: {
    id: 'minecart',
    name: 'Minecart',
    stackSize: 1,
    isRaw: false,
    category: 'transport',
  },
  boat_oak: {
    id: 'boat_oak',
    name: 'Oak Boat',
    stackSize: 1,
    isRaw: false,
    category: 'transport',
  },
};

/**
 * Returns array of all craftable items (non-raw)
 */
export function getCraftableItems() {
  return Object.values(items).filter((item) => !item.isRaw);
}

/**
 * Returns array of all items in a category
 */
export function getItemsByCategory(category) {
  return Object.values(items).filter((item) => item.category === category);
}

/**
 * Returns a single item by ID
 */
export function getItem(id) {
  return items[id] || null;
}

/**
 * Returns all unique categories
 */
export function getCategories() {
  const categories = new Set(Object.values(items).map((item) => item.category));
  return [...categories];
}

export default items;