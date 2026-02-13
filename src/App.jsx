import Header from './components/Header';
import ItemSelector from './components/ItemSelector';
import QuantityInput from './components/QuantityInput';
import MaterialTable from './components/MaterialTable';
import StackBreakdown from './components/StackBreakdown';
import RecipeTree from './components/RecipeTree';
import CraftingGrid from './components/CraftingGrid';
import useCraftingCalculator from './hooks/useCraftingCalculator';

import './styles/global.css';
import './styles/components.css';

import { useState } from 'react';

export default function App() {
  const {
    selectedItemId,
    quantity,
    categoryFilter,
    filteredItems,
    categories,
    calculation,
    recipeTree,
    rawMaterialStacks,
    totalSlots,
    handleSelectItem,
    handleSetQuantity,
    handleSetCategory,
    reset,
  } = useCraftingCalculator();

  const [activeTab, setActiveTab] = useState('table');

  const hasResults = calculation && calculation.rawMaterials.length > 0;

  return (
    <div className="app">
      <Header />

      {/* Controls */}
      <div className="controls">
        <div className="controls__row">
          <ItemSelector
            categories={categories}
            categoryFilter={categoryFilter}
            onCategoryChange={handleSetCategory}
            filteredItems={filteredItems}
            selectedItemId={selectedItemId}
            onItemChange={handleSelectItem}
          />
          <QuantityInput
            quantity={quantity}
            onQuantityChange={handleSetQuantity}
            onReset={reset}
          />
        </div>
      </div>

      {/* Summary Bar */}
      {hasResults && (
        <div className="summary-bar">
          <div className="summary-card">
            <div className="summary-card__label">Crafting</div>
            <div className="summary-card__value">
              {calculation.targetItem.name} ×{quantity}
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-card__label">Raw Materials</div>
            <div className="summary-card__value summary-card__value--green">
              {calculation.rawMaterials.length} type{calculation.rawMaterials.length !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-card__label">Crafting Steps</div>
            <div className="summary-card__value summary-card__value--orange">
              {calculation.intermediates.length}
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-card__label">Inventory Slots</div>
            <div className="summary-card__value summary-card__value--blue">
              {totalSlots}
            </div>
          </div>
        </div>
      )}

      {/* Tab Switcher */}
      {hasResults && (
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'table' ? 'tab--active' : ''}`}
            onClick={() => setActiveTab('table')}
          >
            📊 Materials
          </button>
          <button
            className={`tab ${activeTab === 'grid' ? 'tab--active' : ''}`}
            onClick={() => setActiveTab('grid')}
          >
            🔧 Crafting
          </button>
          <button
            className={`tab ${activeTab === 'stacks' ? 'tab--active' : ''}`}
            onClick={() => setActiveTab('stacks')}
          >
            📦 Stacks
          </button>
          <button
            className={`tab ${activeTab === 'tree' ? 'tab--active' : ''}`}
            onClick={() => setActiveTab('tree')}
          >
            🌳 Tree
          </button>
        </div>
      )}

      {/* Tab Content */}
      {hasResults && activeTab === 'table' && (
        <MaterialTable calculation={calculation} />
      )}

      {hasResults && activeTab === 'grid' && (
        <CraftingGridTab
          selectedItemId={selectedItemId}
          calculation={calculation}
        />
      )}

      {hasResults && activeTab === 'stacks' && (
        <StackBreakdown
          rawMaterialStacks={rawMaterialStacks}
          totalSlots={totalSlots}
        />
      )}

      {hasResults && activeTab === 'tree' && (
        <RecipeTree tree={recipeTree} />
      )}

      {/* Empty State */}
      {!hasResults && (
        <div className="empty-state">
          <div className="empty-state__icon">⛏️</div>
          <div className="empty-state__text">Select an item to get started</div>
          <div className="empty-state__hint">
            Choose a category, pick an item, and set the quantity
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Crafting Grid Tab — shows the main item grid plus all intermediate grids
 */
function CraftingGridTab({ selectedItemId, calculation }) {
  const { intermediates } = calculation;

  return (
    <div>
      {/* Main item crafting grid */}
      <CraftingGrid itemId={selectedItemId} />

      {/* Intermediate crafting grids */}
      {intermediates.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <h2 className="section__title">
            <span>🔗</span> Intermediate Recipe Grids
          </h2>
          <div className="crafting-grid__intermediates">
            {intermediates.map(({ item }) => (
              <CraftingGrid key={item.id} itemId={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}