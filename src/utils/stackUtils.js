/**
 * Stack math utilities for Minecraft inventory calculations.
 *
 * A "stack" in Minecraft is typically 64 items, but some items
 * have different stack sizes (ender pearls = 16, tools = 1, etc.)
 */

/**
 * Break a total count into stacks + remainder.
 *
 * @param {number} total - Total number of items
 * @param {number} stackSize - Max items per stack (default 64)
 * @returns {{ total, stackSize, fullStacks, remainder, totalSlots }}
 */
export function getStackBreakdown(total, stackSize = 64) {
  if (total <= 0) {
    return {
      total: 0,
      stackSize,
      fullStacks: 0,
      remainder: 0,
      totalSlots: 0,
    };
  }

  const fullStacks = Math.floor(total / stackSize);
  const remainder = total % stackSize;
  const totalSlots = fullStacks + (remainder > 0 ? 1 : 0);

  return {
    total,
    stackSize,
    fullStacks,
    remainder,
    totalSlots,
  };
}

/**
 * Format a stack breakdown into a human-readable string.
 *
 * Examples:
 *   formatStacks(128, 64) → "2 stacks"
 *   formatStacks(100, 64) → "1 stack + 36"
 *   formatStacks(30, 64)  → "30"
 *   formatStacks(5, 1)    → "5 (unstackable)"
 *
 * @param {number} total
 * @param {number} stackSize
 * @returns {string}
 */
export function formatStacks(total, stackSize = 64) {
  if (total <= 0) return '0';

  if (stackSize === 1) {
    return `${total} (unstackable)`;
  }

  const { fullStacks, remainder } = getStackBreakdown(total, stackSize);

  if (fullStacks === 0) {
    return `${remainder}`;
  }

  const stackWord = fullStacks === 1 ? 'stack' : 'stacks';

  if (remainder === 0) {
    return `${fullStacks} ${stackWord}`;
  }

  return `${fullStacks} ${stackWord} + ${remainder}`;
}

/**
 * Calculate how many crafting operations are needed to produce
 * at least `needed` items when each craft gives `resultCount`.
 *
 * @param {number} needed - How many items we need
 * @param {number} resultCount - How many items one craft produces
 * @returns {{ crafts, produced, surplus }}
 */
export function getCraftCount(needed, resultCount) {
  if (needed <= 0) {
    return { crafts: 0, produced: 0, surplus: 0 };
  }

  const crafts = Math.ceil(needed / resultCount);
  const produced = crafts * resultCount;
  const surplus = produced - needed;

  return { crafts, produced, surplus };
}

/**
 * Calculate total inventory slots required for a list of materials.
 *
 * @param {Array<{ total: number, stackSize: number }>} materialList
 * @returns {number} Total inventory slots
 */
export function getTotalSlots(materialList) {
  return materialList.reduce((sum, mat) => {
    return sum + getStackBreakdown(mat.total, mat.stackSize).totalSlots;
  }, 0);
}