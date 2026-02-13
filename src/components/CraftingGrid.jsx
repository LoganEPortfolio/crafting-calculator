import { getRecipe } from '../data/recipes';
import { getItem } from '../data/items';
import { getItemColor } from '../data/itemColors';

export default function CraftingGrid({ itemId }) {
  const recipe = getRecipe(itemId);

  if (!recipe || !recipe.grid) return null;

  const resultItem = getItem(recipe.result);
  const isSmelting = recipe.gridSize === 'smelting';

  return (
    <div className="section">
      <h2 className="section__title">
        <span>🔧</span> Crafting Grid
        <span className="crafting-grid__type-badge">
          {isSmelting ? '🔥 Furnace' : recipe.gridSize}
        </span>
      </h2>

      <div className="crafting-grid__wrapper">
        {isSmelting ? (
          <SmeltingDisplay recipe={recipe} resultItem={resultItem} />
        ) : (
          <CraftingTableDisplay recipe={recipe} resultItem={resultItem} />
        )}

        {/* Legend */}
        <GridLegend recipe={recipe} />
      </div>
    </div>
  );
}

function CraftingTableDisplay({ recipe, resultItem }) {
  return (
    <div className="crafting-grid__layout">
      {/* 3x3 Grid */}
      <div className="crafting-grid__table">
        <div className="crafting-grid__table-label">Crafting</div>
        <div className="crafting-grid__cells">
          {recipe.grid.map((row, rowIdx) =>
            row.map((cell, colIdx) => (
              <GridCell
                key={`${rowIdx}-${colIdx}`}
                itemId={cell}
                row={rowIdx}
                col={colIdx}
              />
            ))
          )}
        </div>
      </div>

      {/* Arrow */}
      <div className="crafting-grid__arrow">
        <span className="crafting-grid__arrow-icon">➡️</span>
      </div>

      {/* Result */}
      <div className="crafting-grid__result">
        <div className="crafting-grid__table-label">Result</div>
        <div className="crafting-grid__result-cell">
          <GridCell itemId={recipe.result} isResult />
          {recipe.resultCount > 1 && (
            <span className="crafting-grid__result-count">
              ×{recipe.resultCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function SmeltingDisplay({ recipe, resultItem }) {
  const inputItem = recipe.ingredients[0]?.item;

  return (
    <div className="crafting-grid__layout">
      {/* Furnace display */}
      <div className="crafting-grid__furnace">
        <div className="crafting-grid__table-label">Furnace</div>
        <div className="crafting-grid__furnace-slots">
          <div className="crafting-grid__furnace-input">
            <GridCell itemId={inputItem} />
          </div>
          <div className="crafting-grid__furnace-flame">🔥</div>
          <div className="crafting-grid__furnace-fuel">
            <div className="grid-cell grid-cell--empty grid-cell--fuel">
              <span className="grid-cell__abbr">FUEL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="crafting-grid__arrow">
        <span className="crafting-grid__arrow-icon">➡️</span>
      </div>

      {/* Result */}
      <div className="crafting-grid__result">
        <div className="crafting-grid__table-label">Result</div>
        <div className="crafting-grid__result-cell">
          <GridCell itemId={recipe.result} isResult />
          {recipe.resultCount > 1 && (
            <span className="crafting-grid__result-count">
              ×{recipe.resultCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function GridCell({ itemId, row, col, isResult = false }) {
  if (!itemId) {
    return <div className="grid-cell grid-cell--empty" />;
  }

  const item = getItem(itemId);
  const color = getItemColor(itemId);
  const name = item?.name || itemId;

  return (
    <div
      className={`grid-cell grid-cell--filled ${isResult ? 'grid-cell--result' : ''}`}
      style={{
        backgroundColor: color.bg,
        borderColor: color.text,
      }}
      title={name}
    >
      <span className="grid-cell__abbr" style={{ color: color.text }}>
        {color.abbr}
      </span>
    </div>
  );
}

function GridLegend({ recipe }) {
  // Collect unique items used in the grid
  const usedItems = new Set();
  recipe.grid.forEach((row) => {
    row.forEach((cell) => {
      if (cell) usedItems.add(cell);
    });
  });

  const items = Array.from(usedItems).map((id) => ({
    id,
    item: getItem(id),
    color: getItemColor(id),
  }));

  if (items.length === 0) return null;

  return (
    <div className="crafting-grid__legend">
      <div className="crafting-grid__legend-title">Legend</div>
      <div className="crafting-grid__legend-items">
        {items.map(({ id, item, color }) => (
          <div key={id} className="crafting-grid__legend-entry">
            <div
              className="crafting-grid__legend-swatch"
              style={{ backgroundColor: color.bg, borderColor: color.text }}
            >
              <span style={{ color: color.text, fontSize: '0.55rem', fontWeight: 700 }}>
                {color.abbr}
              </span>
            </div>
            <span className="crafting-grid__legend-name">
              {item?.name || id}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}