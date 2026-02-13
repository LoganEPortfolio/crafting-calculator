/**
 * Recursive crafting calculator.
 *
 * Resolves nested recipes down to raw materials.
 * For example: Hopper → Iron Ingot + Chest → Iron Ore + Oak Log
 *
 * Handles:
 * - Multi-output recipes (1 log → 4 planks)
 * - Nested crafting chains of any depth
 * - Tracks intermediate materials and crafting steps
 * - Calculates surplus from batch crafting
 */

import items from '../data/items';
import recipes, { getRecipe, hasRecipe } from '../data/recipes';
import { getCraftCount } from './stackUtils';

/**
 * Calculate all raw materials needed to craft a given quantity of an item.
 *
 * @param {string} itemId - The item to craft
 * @param {number} quantity - How many to craft
 * @returns {{
 *   rawMaterials: Object<string, number>,
 *   intermediates: Object<string, { needed: number, crafts: number, produced: number, surplus: number }>,
 *   steps: Array<{ item: string, crafts: number, produced: number, needed: number }>,
 *   errors: Array<string>
 * }}
 */
export function calculateMaterials(itemId, quantity) {
  const rawMaterials = {};
  const intermediates = {};
  const steps = [];
  const errors = [];

  // Track what we've visited to detect circular refs
  const visited = new Set();

  function resolve(id, needed, depth = 0) {
    // Safety: prevent infinite recursion
    if (depth > 20) {
      errors.push(`Max depth exceeded resolving "${id}"`);
      return;
    }

    // Check if this item exists
    const item = items[id];
    if (!item) {
      errors.push(`Unknown item: "${id}"`);
      return;
    }

    // If item is raw or has no recipe, it's a base material
    if (item.isRaw || !hasRecipe(id)) {
      rawMaterials[id] = (rawMaterials[id] || 0) + needed;
      return;
    }

    const recipe = getRecipe(id);

    // Calculate how many crafting operations we need
    const { crafts, produced, surplus } = getCraftCount(needed, recipe.resultCount);

    // Track this intermediate step
    if (intermediates[id]) {
      intermediates[id].needed += needed;
      intermediates[id].crafts += crafts;
      intermediates[id].produced += produced;
      intermediates[id].surplus += surplus;
    } else {
      intermediates[id] = { needed, crafts, produced, surplus };
    }

    // Record the crafting step
    steps.push({
      item: id,
      crafts,
      produced,
      needed,
      depth,
    });

    // Recursively resolve each ingredient
    for (const ingredient of recipe.ingredients) {
      const ingredientNeeded = ingredient.count * crafts;
      resolve(ingredient.item, ingredientNeeded, depth + 1);
    }
  }

  // Validate inputs
  if (!itemId || typeof itemId !== 'string') {
    errors.push('Invalid item ID');
    return { rawMaterials, intermediates, steps, errors };
  }

  if (!Number.isInteger(quantity) || quantity < 1) {
    errors.push('Quantity must be a positive integer');
    return { rawMaterials, intermediates, steps, errors };
  }

  resolve(itemId, quantity);

  return { rawMaterials, intermediates, steps, errors };
}

/**
 * Get the full result with item details attached to raw materials.
 * This is the primary function the UI will call.
 *
 * @param {string} itemId
 * @param {number} quantity
 * @returns {{
 *   targetItem: object,
 *   quantity: number,
 *   rawMaterials: Array<{ item: object, count: number }>,
 *   intermediates: Array<{ item: object, needed: number, crafts: number, produced: number, surplus: number }>,
 *   steps: Array<{ item: object, crafts: number, produced: number, needed: number, depth: number }>,
 *   errors: Array<string>
 * }}
 */
export function getFullCalculation(itemId, quantity) {
  const result = calculateMaterials(itemId, quantity);
  const targetItem = items[itemId] || null;

  // Enrich raw materials with item details
  const rawMaterials = Object.entries(result.rawMaterials).map(([id, count]) => ({
    item: items[id],
    count,
  }));

  // Sort raw materials by count descending
  rawMaterials.sort((a, b) => b.count - a.count);

  // Enrich intermediates with item details
  const intermediates = Object.entries(result.intermediates).map(([id, data]) => ({
    item: items[id],
    ...data,
  }));

  // Enrich steps with item details
  const enrichedSteps = result.steps.map((step) => ({
    ...step,
    item: items[step.item],
  }));

  return {
    targetItem,
    quantity,
    rawMaterials,
    intermediates,
    steps: enrichedSteps,
    errors: result.errors,
  };
}

/**
 * Build a tree structure of the recipe for visual display.
 *
 * @param {string} itemId
 * @param {number} quantity
 * @param {number} depth
 * @returns {object} Tree node
 */
export function buildRecipeTree(itemId, quantity, depth = 0) {
  const item = items[itemId];

  if (!item) {
    return { item: { id: itemId, name: itemId }, quantity, children: [], isRaw: true, depth };
  }

  if (item.isRaw || !hasRecipe(itemId)) {
    return { item, quantity, children: [], isRaw: true, depth };
  }

  if (depth > 20) {
    return { item, quantity, children: [], isRaw: false, depth, error: 'Max depth' };
  }

  const recipe = getRecipe(itemId);
  const { crafts, produced, surplus } = getCraftCount(quantity, recipe.resultCount);

  const children = recipe.ingredients.map((ing) => {
    const ingNeeded = ing.count * crafts;
    return buildRecipeTree(ing.item, ingNeeded, depth + 1);
  });

  return {
    item,
    quantity,
    crafts,
    produced,
    surplus,
    children,
    isRaw: false,
    depth,
  };
}