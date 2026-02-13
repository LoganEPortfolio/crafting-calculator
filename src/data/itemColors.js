/**
 * Color mapping for crafting grid cells.
 * Each item gets a background color and text abbreviation
 * to visually distinguish it in the crafting grid.
 */

const itemColors = {
  // Wood & Planks
  oak_log:        { bg: '#6B4226', text: '#D4A574', abbr: 'LOG' },
  birch_log:      { bg: '#C8B88A', text: '#4A3728', abbr: 'LOG' },
  oak_planks:     { bg: '#BC9862', text: '#3E2A14', abbr: 'PLK' },
  birch_planks:   { bg: '#D6C49A', text: '#3E2A14', abbr: 'PLK' },
  stick:          { bg: '#8B6914', text: '#FFD700', abbr: 'STK' },

  // Stone & Ore
  cobblestone:    { bg: '#7A7A7A', text: '#D4D4D4', abbr: 'COB' },
  iron_ore:       { bg: '#8A7B6B', text: '#D4B89C', abbr: 'ORE' },
  iron_ingot:     { bg: '#D4D4D4', text: '#3A3A3A', abbr: 'IRN' },
  iron_block:     { bg: '#E8E8E8', text: '#3A3A3A', abbr: 'BLK' },
  iron_nugget:    { bg: '#C0C0C0', text: '#3A3A3A', abbr: 'NUG' },
  gold_ore:       { bg: '#8A7B3B', text: '#FFD700', abbr: 'ORE' },
  gold_ingot:     { bg: '#FFD700', text: '#3A2A00', abbr: 'GLD' },
  gold_block:     { bg: '#FFD700', text: '#3A2A00', abbr: 'BLK' },
  gold_nugget:    { bg: '#DAA520', text: '#3A2A00', abbr: 'NUG' },
  diamond:        { bg: '#4AE8E8', text: '#0A3A3A', abbr: 'DIA' },
  emerald:        { bg: '#50C878', text: '#0A3A0A', abbr: 'EMR' },
  lapis_lazuli:   { bg: '#1E3A8A', text: '#93C5FD', abbr: 'LAP' },
  quartz:         { bg: '#EDE8E2', text: '#3A3632', abbr: 'QTZ' },
  obsidian:       { bg: '#1A0A2E', text: '#6A4A8E', abbr: 'OBS' },
  coal:           { bg: '#2A2A2A', text: '#9A9A9A', abbr: 'COL' },
  flint:          { bg: '#3A3A3A', text: '#8A8A8A', abbr: 'FLT' },

  // Redstone
  redstone_dust:  { bg: '#8B0000', text: '#FF4444', abbr: 'RED' },
  redstone_torch: { bg: '#8B0000', text: '#FF6644', abbr: 'R.T' },

  // Nature
  sand:           { bg: '#E8D8A0', text: '#5A4A20', abbr: 'SND' },
  sugar_cane:     { bg: '#4A8A4A', text: '#A0E8A0', abbr: 'SGR' },
  string:         { bg: '#E0E0E0', text: '#4A4A4A', abbr: 'STR' },
  leather:        { bg: '#8B4513', text: '#DEB887', abbr: 'LTH' },
  feather:        { bg: '#F0F0F0', text: '#4A4A4A', abbr: 'FTH' },
  wool:           { bg: '#F5F5F5', text: '#4A4A4A', abbr: 'WOL' },
  gunpowder:      { bg: '#4A4A4A', text: '#B0B0B0', abbr: 'GNP' },

  // Nether & Special
  blaze_rod:      { bg: '#CC8400', text: '#FFD700', abbr: 'BLZ' },
  blaze_powder:   { bg: '#CC6600', text: '#FFAA00', abbr: 'BPW' },
  ender_pearl:    { bg: '#0A4A3A', text: '#4AE8C4', abbr: 'EPL' },
  slime_ball:     { bg: '#4ACA4A', text: '#0A3A0A', abbr: 'SLM' },
  nether_star:    { bg: '#F0F0C0', text: '#4A4A0A', abbr: 'N★' },
  nether_wart:    { bg: '#8B0000', text: '#CC4444', abbr: 'NWT' },
  ghast_tear:     { bg: '#E8E8F0', text: '#4A4A6A', abbr: 'GST' },

  // Crafted intermediates
  glass:          { bg: '#C8E8F0', text: '#2A4A5A', abbr: 'GLS' },
  glass_pane:     { bg: '#C8E8F0', text: '#2A4A5A', abbr: 'PNE' },
  glass_bottle:   { bg: '#C8E8F0', text: '#2A4A5A', abbr: 'BTL' },
  paper:          { bg: '#F5F5F0', text: '#3A3A3A', abbr: 'PPR' },
  book:           { bg: '#8B4513', text: '#F5F5DC', abbr: 'BK' },
  chest:          { bg: '#8B6914', text: '#DEB887', abbr: 'CHT' },
  piston:         { bg: '#7A7A6A', text: '#C0B894', abbr: 'PST' },
  bow:            { bg: '#6B4226', text: '#C8A878', abbr: 'BOW' },
};

/**
 * Get color info for an item. Returns default if not mapped.
 */
export function getItemColor(itemId) {
  return itemColors[itemId] || {
    bg: '#3A3A5A',
    text: '#B0B0D0',
    abbr: itemId.slice(0, 3).toUpperCase(),
  };
}

export default itemColors;