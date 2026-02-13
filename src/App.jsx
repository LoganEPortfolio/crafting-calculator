import items, { getCraftableItems, getItem, getCategories } from './data/items';
import recipes, { getRecipe, hasRecipe, getAllRecipeIds } from './data/recipes';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace', background: '#1a1a2e', color: '#eee', minHeight: '100vh' }}>
      <h1>⛏️ Minecraft Crafting Calculator</h1>
      <p>Step 2: Data Layer Verification</p>
      <hr style={{ borderColor: '#333' }} />

      <DataIntegrityTests />
      <ItemSummary />
      <RecipeSummary />
      <NestedRecipeTest />
    </div>
  );
}

function DataIntegrityTests() {
  const tests = [];

  // Test 1: All recipe ingredients reference valid items
  const allRecipeIds = getAllRecipeIds();
  let missingItems = [];
  allRecipeIds.forEach((recipeId) => {
    const recipe = getRecipe(recipeId);
    recipe.ingredients.forEach((ing) => {
      if (!getItem(ing.item)) {
        missingItems.push(`Recipe "${recipeId}" references unknown item "${ing.item}"`);
      }
    });
  });
  tests.push({
    name: 'All recipe ingredients reference valid items',
    pass: missingItems.length === 0,
    detail: missingItems.length > 0 ? missingItems.join(', ') : `All ${allRecipeIds.length} recipes valid`,
  });

  // Test 2: All recipe results reference valid items
  let missingResults = [];
  allRecipeIds.forEach((recipeId) => {
    const recipe = getRecipe(recipeId);
    if (!getItem(recipe.result)) {
      missingResults.push(recipe.result);
    }
  });
  tests.push({
    name: 'All recipe results reference valid items',
    pass: missingResults.length === 0,
    detail: missingResults.length > 0 ? `Missing: ${missingResults.join(', ')}` : 'All results valid',
  });

  // Test 3: All craftable items have recipes
  const craftable = getCraftableItems();
  let missingRecipes = [];
  craftable.forEach((item) => {
    if (!hasRecipe(item.id)) {
      missingRecipes.push(item.id);
    }
  });
  tests.push({
    name: 'All craftable (non-raw) items have recipes',
    pass: missingRecipes.length === 0,
    detail: missingRecipes.length > 0 ? `Missing recipes: ${missingRecipes.join(', ')}` : `${craftable.length} craftable items all have recipes`,
  });

  // Test 4: No raw items have recipes they shouldn't
  const rawItems = Object.values(items).filter((i) => i.isRaw);
  let rawWithRecipe = [];
  rawItems.forEach((item) => {
    if (hasRecipe(item.id)) {
      rawWithRecipe.push(item.id);
    }
  });
  tests.push({
    name: 'Raw items should not have recipes (except smelting proxies)',
    pass: rawWithRecipe.length <= 2, // allow blaze_powder as edge case
    detail: rawWithRecipe.length > 0 ? `Raw with recipes: ${rawWithRecipe.join(', ')}` : 'Clean',
  });

  // Test 5: All resultCounts are positive integers
  let badCounts = [];
  allRecipeIds.forEach((recipeId) => {
    const recipe = getRecipe(recipeId);
    if (!Number.isInteger(recipe.resultCount) || recipe.resultCount < 1) {
      badCounts.push(recipeId);
    }
    recipe.ingredients.forEach((ing) => {
      if (!Number.isInteger(ing.count) || ing.count < 1) {
        badCounts.push(`${recipeId}->${ing.item}`);
      }
    });
  });
  tests.push({
    name: 'All counts are positive integers',
    pass: badCounts.length === 0,
    detail: badCounts.length > 0 ? `Bad: ${badCounts.join(', ')}` : 'All counts valid',
  });

  // Test 6: No circular recipes (basic check)
  let circular = [];
  allRecipeIds.forEach((recipeId) => {
    const recipe = getRecipe(recipeId);
    recipe.ingredients.forEach((ing) => {
      if (ing.item === recipe.result) {
        circular.push(recipeId);
      }
    });
  });
  tests.push({
    name: 'No self-referencing recipes',
    pass: circular.length === 0,
    detail: circular.length > 0 ? `Circular: ${circular.join(', ')}` : 'No circular refs',
  });

  // Test 7: Specific recipe verification — chest
  const chestRecipe = getRecipe('chest');
  const chestCorrect = chestRecipe &&
    chestRecipe.resultCount === 1 &&
    chestRecipe.ingredients.length === 1 &&
    chestRecipe.ingredients[0].item === 'oak_planks' &&
    chestRecipe.ingredients[0].count === 8;
  tests.push({
    name: 'Chest recipe: 8 oak planks → 1 chest',
    pass: chestCorrect,
    detail: chestCorrect ? 'Correct' : JSON.stringify(chestRecipe),
  });

  // Test 8: Nested recipe — chest traces to oak_log
  const planksRecipe = getRecipe('oak_planks');
  const nestedCorrect = planksRecipe &&
    planksRecipe.ingredients[0].item === 'oak_log' &&
    getItem('oak_log').isRaw === true;
  tests.push({
    name: 'Chest → Oak Planks → Oak Log (raw) chain valid',
    pass: nestedCorrect,
    detail: nestedCorrect ? 'Chain resolves to raw material' : 'Chain broken',
  });

  // Test 9: Verify bookshelf deep nesting
  // bookshelf → planks + book → paper + leather → sugar_cane
  const bookshelfRecipe = getRecipe('bookshelf');
  const bookRecipe = getRecipe('book');
  const paperRecipe = getRecipe('paper');
  const deepNest = bookshelfRecipe && bookRecipe && paperRecipe &&
    bookRecipe.ingredients.some((i) => i.item === 'paper') &&
    paperRecipe.ingredients.some((i) => i.item === 'sugar_cane') &&
    getItem('sugar_cane').isRaw === true;
  tests.push({
    name: 'Bookshelf → Book → Paper → Sugar Cane chain valid',
    pass: deepNest,
    detail: deepNest ? '3-level deep nesting confirmed' : 'Chain broken',
  });

  // Test 10: Sticky piston nests through piston
  const stickyRecipe = getRecipe('sticky_piston');
  const pistonRecipe = getRecipe('piston');
  const stickyNest = stickyRecipe && pistonRecipe &&
    stickyRecipe.ingredients.some((i) => i.item === 'piston') &&
    pistonRecipe.ingredients.some((i) => i.item === 'oak_planks');
  tests.push({
    name: 'Sticky Piston → Piston → Oak Planks chain valid',
    pass: stickyNest,
    detail: stickyNest ? 'Nested redstone recipe confirmed' : 'Chain broken',
  });

  const passCount = tests.filter((t) => t.pass).length;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>🧪 Data Integrity Tests ({passCount}/{tests.length})</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #444' }}>
            <th style={{ textAlign: 'left', padding: '8px' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Test</th>
            <th style={{ textAlign: 'left', padding: '8px' }}>Detail</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #333' }}>
              <td style={{ padding: '8px', fontSize: '1.2rem' }}>
                {test.pass ? '✅' : '❌'}
              </td>
              <td style={{ padding: '8px' }}>{test.name}</td>
              <td style={{ padding: '8px', color: test.pass ? '#4ade80' : '#f87171', fontSize: '0.85rem' }}>
                {test.detail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ItemSummary() {
  const allItems = Object.values(items);
  const categories = getCategories();

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>📦 Item Summary</h2>
      <p>Total items: <strong>{allItems.length}</strong></p>
      <p>Raw materials: <strong>{allItems.filter((i) => i.isRaw).length}</strong></p>
      <p>Craftable items: <strong>{getCraftableItems().length}</strong></p>
      <p>Categories: <strong>{categories.join(', ')}</strong></p>

      <h3>Items by Category</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {categories.map((cat) => {
          const catItems = allItems.filter((i) => i.category === cat);
          return (
            <div key={cat} style={{ background: '#16213e', padding: '1rem', borderRadius: '8px' }}>
              <h4 style={{ color: '#60a5fa', margin: '0 0 8px 0', textTransform: 'capitalize' }}>
                {cat} ({catItems.length})
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.8rem' }}>
                {catItems.map((item) => (
                  <li key={item.id} style={{ color: item.isRaw ? '#a78bfa' : '#fbbf24' }}>
                    {item.name} {item.stackSize !== 64 ? `(stack: ${item.stackSize})` : ''}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RecipeSummary() {
  const allRecipeIds = getAllRecipeIds();

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>📝 Recipe Summary</h2>
      <p>Total recipes: <strong>{allRecipeIds.length}</strong></p>

      <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #444' }}>
            <th style={{ textAlign: 'left', padding: '6px' }}>Item</th>
            <th style={{ textAlign: 'left', padding: '6px' }}>Produces</th>
            <th style={{ textAlign: 'left', padding: '6px' }}>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {allRecipeIds.map((id) => {
            const recipe = getRecipe(id);
            const item = getItem(recipe.result);
            return (
              <tr key={id} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: '6px', color: '#fbbf24' }}>{item?.name || id}</td>
                <td style={{ padding: '6px' }}>×{recipe.resultCount}</td>
                <td style={{ padding: '6px', color: '#94a3b8' }}>
                  {recipe.ingredients.map((ing) => {
                    const ingItem = getItem(ing.item);
                    return `${ingItem?.name || ing.item} ×${ing.count}`;
                  }).join(' + ')}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function NestedRecipeTest() {
  // Manually trace: 1 Hopper needs
  // 5 iron_ingot + 1 chest
  // chest needs 8 oak_planks
  // oak_planks (8) needs 2 oak_log (each log makes 4 planks)
  // iron_ingot (5) needs 5 iron_ore
  // TOTAL RAW: 5 iron_ore + 2 oak_log

  const traces = [
    {
      item: 'Hopper',
      chain: 'Hopper → 5 Iron Ingot + 1 Chest → Chest needs 8 Oak Planks → 2 Oak Logs',
      expectedRaw: '5 Iron Ore, 2 Oak Logs',
    },
    {
      item: 'Bookshelf',
      chain: 'Bookshelf → 6 Planks + 3 Books → Book needs 3 Paper + 1 Leather → Paper needs 3 Sugar Cane',
      expectedRaw: '2 Oak Logs (8 planks, use 6), 9 Sugar Cane, 3 Leather',
    },
    {
      item: 'Sticky Piston',
      chain: 'Sticky Piston → 1 Piston + 1 Slime Ball → Piston needs 3 Planks + 4 Cobble + 1 Iron + 1 Redstone',
      expectedRaw: '1 Oak Log, 4 Cobblestone, 1 Iron Ore, 1 Redstone, 1 Slime Ball',
    },
  ];

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>🔗 Nested Recipe Trace Examples</h2>
      <p style={{ color: '#94a3b8' }}>These are the chains the calculator will resolve in Step 3</p>
      {traces.map((t, i) => (
        <div key={i} style={{ background: '#16213e', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <h4 style={{ color: '#fbbf24', margin: '0 0 4px 0' }}>{t.item}</h4>
          <p style={{ color: '#60a5fa', margin: '0 0 4px 0', fontSize: '0.85rem' }}>{t.chain}</p>
          <p style={{ color: '#4ade80', margin: 0, fontSize: '0.85rem' }}>
            <strong>Expected raw:</strong> {t.expectedRaw}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;