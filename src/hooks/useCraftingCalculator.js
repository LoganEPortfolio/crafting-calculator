import { useState, useMemo, useCallback } from 'react';
import { getFullCalculation, buildRecipeTree } from '../utils/calculator';
import { getStackBreakdown, getTotalSlots } from '../utils/stackUtils';
import { getCraftableItems } from '../data/items';

/**
 * Main application hook that manages:
 * - Selected item state
 * - Quantity state
 * - Computed calculation results
 * - Recipe tree data
 * - Stack breakdowns for all materials
 */
export default function useCraftingCalculator() {
  const [selectedItemId, setSelectedItemId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Get all craftable items (memoized since it never changes)
  const craftableItems = useMemo(() => getCraftableItems(), []);

  // Get unique categories from craftable items
  const categories = useMemo(() => {
    const cats = new Set(craftableItems.map((item) => item.category));
    return ['all', ...Array.from(cats).sort()];
  }, [craftableItems]);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (categoryFilter === 'all') return craftableItems;
    return craftableItems.filter((item) => item.category === categoryFilter);
  }, [craftableItems, categoryFilter]);

  // Main calculation — only runs when inputs change
  const calculation = useMemo(() => {
    if (!selectedItemId || quantity < 1) {
      return null;
    }
    return getFullCalculation(selectedItemId, quantity);
  }, [selectedItemId, quantity]);

  // Recipe tree — only runs when inputs change
  const recipeTree = useMemo(() => {
    if (!selectedItemId || quantity < 1) {
      return null;
    }
    return buildRecipeTree(selectedItemId, quantity);
  }, [selectedItemId, quantity]);

  // Stack breakdowns for raw materials
  const rawMaterialStacks = useMemo(() => {
    if (!calculation) return [];
    return calculation.rawMaterials.map(({ item, count }) => ({
      item,
      count,
      stacks: getStackBreakdown(count, item.stackSize),
    }));
  }, [calculation]);

  // Total inventory slots needed
  const totalSlots = useMemo(() => {
    if (!calculation) return 0;
    const matList = calculation.rawMaterials.map(({ item, count }) => ({
      total: count,
      stackSize: item.stackSize,
    }));
    return getTotalSlots(matList);
  }, [calculation]);

  // Handlers
  const handleSelectItem = useCallback((itemId) => {
    setSelectedItemId(itemId);
  }, []);

  const handleSetQuantity = useCallback((qty) => {
    const parsed = parseInt(qty, 10);
    if (isNaN(parsed) || parsed < 1) {
      setQuantity(1);
    } else if (parsed > 9999) {
      setQuantity(9999);
    } else {
      setQuantity(parsed);
    }
  }, []);

  const handleSetCategory = useCallback((cat) => {
    setCategoryFilter(cat);
    setSelectedItemId('');
  }, []);

  const reset = useCallback(() => {
    setSelectedItemId('');
    setQuantity(1);
    setCategoryFilter('all');
  }, []);

  return {
    // State
    selectedItemId,
    quantity,
    categoryFilter,

    // Data
    craftableItems,
    filteredItems,
    categories,
    calculation,
    recipeTree,
    rawMaterialStacks,
    totalSlots,

    // Actions
    handleSelectItem,
    handleSetQuantity,
    handleSetCategory,
    reset,
  };
}