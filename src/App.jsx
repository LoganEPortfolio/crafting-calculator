import items, { getItem } from './data/items';
import { getRecipe } from './data/recipes';
import { calculateMaterials, getFullCalculation, buildRecipeTree } from './utils/calculator';
import { getStackBreakdown, formatStacks, getCraftCount, getTotalSlots } from './utils/stackUtils';

function App() {
  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'monospace',
      background: '#1a1a2e',
      color: '#eee',
      minHeight: '100vh',
    }}>
      <h1>⛏️ Minecraft Crafting Calculator</h1>
      <p>Step 3: Calculation Engine Verification</p>
      <hr style={{ borderColor: '#333' }} />

      <StackUtilTests />
      <CraftCountTests />
      <SimpleRecipeTests />
      <NestedRecipeTests />
      <EdgeCaseTests />
      <RecipeTreeTest />
      <FullCalculationDemo />
    </div>
  );
}

/* =========================================
   SECTION 1: Stack Utility Tests
   ========================================= */
function StackUtilTests() {
  const tests = [
    {
      name: '128 items / stack 64 = 2 full stacks',
      fn: () => {
        const r = getStackBreakdown(128, 64);
        return r.fullStacks === 2 && r.remainder === 0 && r.totalSlots === 2;
      },
      expected: '2 stacks, 0 remainder, 2 slots',
    },
    {
      name: '100 items / stack 64 = 1 stack + 36',
      fn: () => {
        const r = getStackBreakdown(100, 64);
        return r.fullStacks === 1 && r.remainder === 36 && r.totalSlots === 2;
      },
      expected: '1 stack, 36 remainder, 2 slots',
    },
    {
      name: '30 items / stack 64 = 0 stacks + 30',
      fn: () => {
        const r = getStackBreakdown(30, 64);
        return r.fullStacks === 0 && r.remainder === 30 && r.totalSlots === 1;
      },
      expected: '0 stacks, 30 remainder, 1 slot',
    },
    {
      name: '48 ender pearls / stack 16 = 3 full stacks',
      fn: () => {
        const r = getStackBreakdown(48, 16);
        return r.fullStacks === 3 && r.remainder === 0 && r.totalSlots === 3;
      },
      expected: '3 stacks, 0 remainder, 3 slots',
    },
    {
      name: '0 items = empty',
      fn: () => {
        const r = getStackBreakdown(0, 64);
        return r.fullStacks === 0 && r.remainder === 0 && r.totalSlots === 0;
      },
      expected: '0 everything',
    },
    {
      name: 'formatStacks(128, 64) = "2 stacks"',
      fn: () => formatStacks(128, 64) === '2 stacks',
      expected: '"2 stacks"',
    },
    {
      name: 'formatStacks(100, 64) = "1 stack + 36"',
      fn: () => formatStacks(100, 64) === '1 stack + 36',
      expected: '"1 stack + 36"',
    },
    {
      name: 'formatStacks(30, 64) = "30"',
      fn: () => formatStacks(30, 64) === '30',
      expected: '"30"',
    },
    {
      name: 'formatStacks(5, 1) = "5 (unstackable)"',
      fn: () => formatStacks(5, 1) === '5 (unstackable)',
      expected: '"5 (unstackable)"',
    },
    {
      name: 'formatStacks(64, 64) = "1 stack"',
      fn: () => formatStacks(64, 64) === '1 stack',
      expected: '"1 stack"',
    },
    {
      name: 'getTotalSlots for mixed inventory',
      fn: () => {
        const mats = [
          { total: 128, stackSize: 64 },
          { total: 30, stackSize: 64 },
          { total: 5, stackSize: 16 },
        ];
        return getTotalSlots(mats) === 4; // 2 + 1 + 1
      },
      expected: '4 total slots',
    },
  ];

  return <TestSection title="📐 Stack Utility Tests" tests={tests} />;
}

/* =========================================
   SECTION 2: Craft Count Tests
   ========================================= */
function CraftCountTests() {
  const tests = [
    {
      name: 'Need 4 planks, recipe makes 4 → 1 craft',
      fn: () => {
        const r = getCraftCount(4, 4);
        return r.crafts === 1 && r.produced === 4 && r.surplus === 0;
      },
      expected: '1 craft, 4 produced, 0 surplus',
    },
    {
      name: 'Need 5 planks, recipe makes 4 → 2 crafts',
      fn: () => {
        const r = getCraftCount(5, 4);
        return r.crafts === 2 && r.produced === 8 && r.surplus === 3;
      },
      expected: '2 crafts, 8 produced, 3 surplus',
    },
    {
      name: 'Need 8 planks, recipe makes 4 → 2 crafts, 0 surplus',
      fn: () => {
        const r = getCraftCount(8, 4);
        return r.crafts === 2 && r.produced === 8 && r.surplus === 0;
      },
      expected: '2 crafts, 8 produced, 0 surplus',
    },
    {
      name: 'Need 1 chest, recipe makes 1 → 1 craft',
      fn: () => {
        const r = getCraftCount(1, 1);
        return r.crafts === 1 && r.produced === 1 && r.surplus === 0;
      },
      expected: '1 craft, 1 produced, 0 surplus',
    },
    {
      name: 'Need 10 sticks, recipe makes 4 → 3 crafts, 2 surplus',
      fn: () => {
        const r = getCraftCount(10, 4);
        return r.crafts === 3 && r.produced === 12 && r.surplus === 2;
      },
      expected: '3 crafts, 12 produced, 2 surplus',
    },
    {
      name: 'Need 16 rails, recipe makes 16 → 1 craft',
      fn: () => {
        const r = getCraftCount(16, 16);
        return r.crafts === 1 && r.produced === 16 && r.surplus === 0;
      },
      expected: '1 craft, 16 produced, 0 surplus',
    },
    {
      name: 'Need 0 → 0 crafts',
      fn: () => {
        const r = getCraftCount(0, 4);
        return r.crafts === 0 && r.produced === 0 && r.surplus === 0;
      },
      expected: '0 everything',
    },
  ];

  return <TestSection title="🔢 Craft Count Tests" tests={tests} />;
}

/* =========================================
   SECTION 3: Simple Recipe Tests
   ========================================= */
function SimpleRecipeTests() {
  const tests = [
    {
      name: '1 Chest → 8 Oak Planks → 2 Oak Logs',
      fn: () => {
        const r = calculateMaterials('chest', 1);
        return r.rawMaterials['oak_log'] === 2 &&
          Object.keys(r.rawMaterials).length === 1 &&
          r.errors.length === 0;
      },
      expected: '2 oak_log (8 planks needs ceil(8/4)=2 logs)',
    },
    {
      name: '1 Furnace → 8 Cobblestone',
      fn: () => {
        const r = calculateMaterials('furnace', 1);
        return r.rawMaterials['cobblestone'] === 8 &&
          Object.keys(r.rawMaterials).length === 1;
      },
      expected: '8 cobblestone',
    },
    {
      name: '1 Crafting Table → 4 Planks → 1 Oak Log',
      fn: () => {
        const r = calculateMaterials('crafting_table', 1);
        return r.rawMaterials['oak_log'] === 1;
      },
      expected: '1 oak_log',
    },
    {
      name: '4 Torches → 1 Stick + 1 Coal → needs 1 log (2 planks→4 sticks)',
      fn: () => {
        // 4 torches: 1 craft (makes 4). Needs 1 stick + 1 coal.
        // 1 stick: 1 craft of sticks (2 planks → 4 sticks)
        // 2 planks: 1 craft (1 log → 4 planks)
        const r = calculateMaterials('torch', 4);
        return r.rawMaterials['oak_log'] === 1 &&
          r.rawMaterials['coal'] === 1;
      },
      expected: '1 oak_log, 1 coal',
    },
    {
      name: '1 Iron Pickaxe → 3 Iron Ore + 1 Oak Log',
      fn: () => {
        // 3 iron_ingot → 3 iron_ore
        // 2 sticks → 1 craft (2 planks → 4 sticks) → 1 log (1 log → 4 planks)
        const r = calculateMaterials('iron_pickaxe', 1);
        return r.rawMaterials['iron_ore'] === 3 &&
          r.rawMaterials['oak_log'] === 1;
      },
      expected: '3 iron_ore, 1 oak_log',
    },
    {
      name: '1 Diamond Sword → 2 Diamond + 1 Oak Log',
      fn: () => {
        // 2 diamond (raw) + 1 stick
        // 1 stick: 1 craft (2 planks) → 1 log
        const r = calculateMaterials('diamond_sword', 1);
        return r.rawMaterials['diamond'] === 2 &&
          r.rawMaterials['oak_log'] === 1;
      },
      expected: '2 diamond, 1 oak_log',
    },
    {
      name: '5 Chests → 40 Planks → 10 Oak Logs',
      fn: () => {
        const r = calculateMaterials('chest', 5);
        return r.rawMaterials['oak_log'] === 10;
      },
      expected: '10 oak_log',
    },
    {
      name: '1 TNT → 5 Gunpowder + 4 Sand',
      fn: () => {
        const r = calculateMaterials('tnt', 1);
        return r.rawMaterials['gunpowder'] === 5 &&
          r.rawMaterials['sand'] === 4;
      },
      expected: '5 gunpowder, 4 sand',
    },
  ];

  return <TestSection title="🧱 Simple Recipe Tests" tests={tests} />;
}

/* =========================================
   SECTION 4: Nested Recipe Tests
   ========================================= */
function NestedRecipeTests() {
  const tests = [
    {
      name: '1 Hopper → 5 Iron Ore + 2 Oak Logs',
      fn: () => {
        // hopper: 5 iron_ingot + 1 chest
        // 5 iron_ingot → 5 iron_ore
        // 1 chest → 8 oak_planks → 2 oak_log
        const r = calculateMaterials('hopper', 1);
        return r.rawMaterials['iron_ore'] === 5 &&
          r.rawMaterials['oak_log'] === 2 &&
          Object.keys(r.rawMaterials).length === 2;
      },
      expected: '5 iron_ore, 2 oak_log',
    },
    {
      name: '1 Bookshelf → 2 Oak Logs + 9 Sugar Cane + 3 Leather',
      fn: () => {
        // bookshelf: 6 planks + 3 books
        // 6 planks → 2 logs (2 crafts × 4 = 8, surplus 2)
        // 3 books → each needs 3 paper + 1 leather
        //   9 paper → 3 crafts (3 sugar_cane each) = 9 sugar_cane
        //   3 leather (raw)
        const r = calculateMaterials('bookshelf', 1);
        return r.rawMaterials['oak_log'] === 2 &&
          r.rawMaterials['sugar_cane'] === 9 &&
          r.rawMaterials['leather'] === 3;
      },
      expected: '2 oak_log, 9 sugar_cane, 3 leather',
    },
    {
      name: '1 Sticky Piston → 1 Oak Log + 4 Cobble + 1 Iron Ore + 1 Redstone + 1 Slime Ball',
      fn: () => {
        // sticky_piston: 1 piston + 1 slime_ball
        // piston: 3 planks + 4 cobble + 1 iron_ingot + 1 redstone
        // 3 planks → 1 log
        // 1 iron_ingot → 1 iron_ore
        const r = calculateMaterials('sticky_piston', 1);
        return r.rawMaterials['oak_log'] === 1 &&
          r.rawMaterials['cobblestone'] === 4 &&
          r.rawMaterials['iron_ore'] === 1 &&
          r.rawMaterials['redstone_dust'] === 1 &&
          r.rawMaterials['slime_ball'] === 1;
      },
      expected: '1 oak_log, 4 cobble, 1 iron_ore, 1 redstone, 1 slime_ball',
    },
    {
      name: '1 Enchanting Table → 1 Oak Log + 9 Sugar Cane + 1 Leather + 2 Diamond + 4 Obsidian',
      fn: () => {
        // enchanting_table: 1 book + 2 diamond + 4 obsidian
        // book: 3 paper + 1 leather
        // 3 paper: 1 craft (3 sugar_cane → 3 paper)
        // Total: 1 log (for planks in... wait, no planks needed)
        // Actually book has NO planks. Let me check.
        // book = 3 paper + 1 leather. No planks.
        // enchanting_table = 1 book + 2 diamond + 4 obsidian
        // So raw: 3 sugar_cane, 1 leather, 2 diamond, 4 obsidian
        const r = calculateMaterials('enchanting_table', 1);
        return r.rawMaterials['sugar_cane'] === 3 &&
          r.rawMaterials['leather'] === 1 &&
          r.rawMaterials['diamond'] === 2 &&
          r.rawMaterials['obsidian'] === 4 &&
          !r.rawMaterials['oak_log'];
      },
      expected: '3 sugar_cane, 1 leather, 2 diamond, 4 obsidian',
    },
    {
      name: '1 Dispenser → 7 Cobble + 1 Redstone + 3 String + 1 Oak Log',
      fn: () => {
        // dispenser: 7 cobble + 1 bow + 1 redstone
        // bow: 3 sticks + 3 string
        // 3 sticks → 1 craft (2 planks → 4 sticks) → 1 log
        const r = calculateMaterials('dispenser', 1);
        return r.rawMaterials['cobblestone'] === 7 &&
          r.rawMaterials['redstone_dust'] === 1 &&
          r.rawMaterials['string'] === 3 &&
          r.rawMaterials['oak_log'] === 1;
      },
      expected: '7 cobble, 1 redstone, 3 string, 1 oak_log',
    },
    {
      name: '1 Repeater → 3 Cobble + 2 Redstone + 1 Oak Log',
      fn: () => {
        // repeater: 2 redstone_torch + 1 redstone_dust + 3 cobble
        // redstone_torch: 1 stick + 1 redstone
        // 2 torches → 2 sticks + 2 redstone
        // 2 sticks → 1 craft (2 planks → 4 sticks) → 1 log
        // Total redstone: 2 (torches) + 1 (direct) = 3
        const r = calculateMaterials('repeater', 1);
        return r.rawMaterials['cobblestone'] === 3 &&
          r.rawMaterials['redstone_dust'] === 3 &&
          r.rawMaterials['oak_log'] === 1;
      },
      expected: '3 cobble, 3 redstone, 1 oak_log',
    },
    {
      name: '1 Anvil → 31 Iron Ore',
      fn: () => {
        // anvil: 3 iron_block + 4 iron_ingot
        // 3 iron_block → 27 iron_ingot → 27 iron_ore
        // 4 iron_ingot → 4 iron_ore
        // Total: 31 iron_ore
        const r = calculateMaterials('anvil', 1);
        return r.rawMaterials['iron_ore'] === 31 &&
          Object.keys(r.rawMaterials).length === 1;
      },
      expected: '31 iron_ore',
    },
    {
      name: '10 Hoppers (bulk) → 50 Iron Ore + 20 Oak Logs',
      fn: () => {
        const r = calculateMaterials('hopper', 10);
        return r.rawMaterials['iron_ore'] === 50 &&
          r.rawMaterials['oak_log'] === 20;
      },
      expected: '50 iron_ore, 20 oak_log',
    },
  ];

  return <TestSection title="🔗 Nested Recipe Tests" tests={tests} />;
}

/* =========================================
   SECTION 5: Edge Case Tests
   ========================================= */
function EdgeCaseTests() {
  const tests = [
    {
      name: 'Raw material returns itself (oak_log)',
      fn: () => {
        const r = calculateMaterials('oak_log', 5);
        return r.rawMaterials['oak_log'] === 5 &&
          Object.keys(r.intermediates).length === 0;
      },
      expected: '5 oak_log, no intermediates',
    },
    {
      name: 'Invalid item returns error',
      fn: () => {
        const r = calculateMaterials('fake_item', 1);
        return r.errors.length > 0;
      },
      expected: 'Error array not empty',
    },
    {
      name: 'Zero quantity returns error',
      fn: () => {
        const r = calculateMaterials('chest', 0);
        return r.errors.length > 0;
      },
      expected: 'Error for invalid quantity',
    },
    {
      name: 'Negative quantity returns error',
      fn: () => {
        const r = calculateMaterials('chest', -5);
        return r.errors.length > 0;
      },
      expected: 'Error for negative quantity',
    },
    {
      name: 'Intermediates track surplus correctly (1 chest → 2 log crafts, surplus 0 planks? No, surplus 0)',
      fn: () => {
        // 1 chest: need 8 planks. 2 crafts × 4 = 8 planks. Surplus = 0.
        const r = calculateMaterials('chest', 1);
        return r.intermediates['oak_planks'] &&
          r.intermediates['oak_planks'].needed === 8 &&
          r.intermediates['oak_planks'].crafts === 2 &&
          r.intermediates['oak_planks'].produced === 8 &&
          r.intermediates['oak_planks'].surplus === 0;
      },
      expected: 'oak_planks: needed=8, crafts=2, produced=8, surplus=0',
    },
    {
      name: 'Surplus tracked for non-divisible (1 torch → 1 stick, but craft makes 4)',
      fn: () => {
        // 4 torches: 1 craft. 1 stick needed. 1 stick craft makes 4 → surplus 3
        const r = calculateMaterials('torch', 4);
        return r.intermediates['stick'] &&
          r.intermediates['stick'].needed === 1 &&
          r.intermediates['stick'].surplus === 3;
      },
      expected: 'stick: needed=1, surplus=3',
    },
    {
      name: 'Large quantity: 100 chests → 200 oak_log',
      fn: () => {
        const r = calculateMaterials('chest', 100);
        return r.rawMaterials['oak_log'] === 200;
      },
      expected: '200 oak_log',
    },
    {
      name: 'Ender Eye → 1 ender_pearl + 1 blaze_rod',
      fn: () => {
        // ender_eye: 1 ender_pearl + 1 blaze_powder
        // blaze_powder: 1 blaze_rod → 2 blaze_powder (surplus 1)
        const r = calculateMaterials('ender_eye', 1);
        return r.rawMaterials['ender_pearl'] === 1 &&
          r.rawMaterials['blaze_rod'] === 1;
      },
      expected: '1 ender_pearl, 1 blaze_rod',
    },
  ];

  return <TestSection title="⚠️ Edge Case Tests" tests={tests} />;
}

/* =========================================
   SECTION 6: Recipe Tree Test
   ========================================= */
function RecipeTreeTest() {
  const tree = buildRecipeTree('hopper', 1);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>🌳 Recipe Tree Test — 1 Hopper</h2>
      <div style={{
        background: '#16213e',
        padding: '1rem',
        borderRadius: '8px',
        fontSize: '0.85rem',
      }}>
        <TreeNode node={tree} />
      </div>
    </div>
  );
}

function TreeNode({ node }) {
  const indent = node.depth * 24;
  const color = node.isRaw ? '#4ade80' : '#fbbf24';
  const surplusText = node.surplus > 0 ? ` (surplus: ${node.surplus})` : '';

  return (
    <div>
      <div style={{ paddingLeft: `${indent}px`, color, marginBottom: '4px' }}>
        {node.isRaw ? '🟢' : '🔶'}{' '}
        {node.item.name} ×{node.quantity}
        {node.crafts != null && ` [${node.crafts} craft${node.crafts !== 1 ? 's' : ''}]`}
        {surplusText}
      </div>
      {node.children && node.children.map((child, i) => (
        <TreeNode key={i} node={child} />
      ))}
    </div>
  );
}

/* =========================================
   SECTION 7: Full Calculation Demo
   ========================================= */
function FullCalculationDemo() {
  const demos = [
    { item: 'hopper', qty: 1 },
    { item: 'bookshelf', qty: 5 },
    { item: 'anvil', qty: 1 },
    { item: 'sticky_piston', qty: 4 },
  ];

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>📊 Full Calculation Demos</h2>
      {demos.map(({ item, qty }) => {
        const result = getFullCalculation(item, qty);
        return (
          <div key={item} style={{
            background: '#16213e',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}>
            <h3 style={{ color: '#fbbf24', margin: '0 0 8px 0' }}>
              {result.targetItem.name} × {qty}
            </h3>

            <h4 style={{ color: '#60a5fa', margin: '8px 0 4px 0' }}>Raw Materials:</h4>
            <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #444' }}>
                  <th style={{ textAlign: 'left', padding: '4px 8px' }}>Material</th>
                  <th style={{ textAlign: 'right', padding: '4px 8px' }}>Count</th>
                  <th style={{ textAlign: 'right', padding: '4px 8px' }}>Stacks</th>
                </tr>
              </thead>
              <tbody>
                {result.rawMaterials.map(({ item: mat, count }) => (
                  <tr key={mat.id} style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '4px 8px', color: '#4ade80' }}>{mat.name}</td>
                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>{count}</td>
                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#94a3b8' }}>
                      {formatStacks(count, mat.stackSize)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {result.intermediates.length > 0 && (
              <>
                <h4 style={{ color: '#60a5fa', margin: '12px 0 4px 0' }}>Intermediate Crafts:</h4>
                <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #444' }}>
                      <th style={{ textAlign: 'left', padding: '4px 8px' }}>Item</th>
                      <th style={{ textAlign: 'right', padding: '4px 8px' }}>Needed</th>
                      <th style={{ textAlign: 'right', padding: '4px 8px' }}>Crafts</th>
                      <th style={{ textAlign: 'right', padding: '4px 8px' }}>Produced</th>
                      <th style={{ textAlign: 'right', padding: '4px 8px' }}>Surplus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.intermediates.map(({ item: mat, needed, crafts, produced, surplus }) => (
                      <tr key={mat.id} style={{ borderBottom: '1px solid #333' }}>
                        <td style={{ padding: '4px 8px', color: '#fbbf24' }}>{mat.name}</td>
                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>{needed}</td>
                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>{crafts}</td>
                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>{produced}</td>
                        <td style={{ padding: '4px 8px', textAlign: 'right', color: surplus > 0 ? '#fb923c' : '#4ade80' }}>
                          {surplus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* =========================================
   REUSABLE TEST RENDERER
   ========================================= */
function TestSection({ title, tests }) {
  const results = tests.map((test) => {
    let pass = false;
    let error = null;
    try {
      pass = test.fn();
    } catch (e) {
      error = e.message;
    }
    return { ...test, pass, error };
  });

  const passCount = results.filter((r) => r.pass).length;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>{title} ({passCount}/{results.length})</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #444' }}>
            <th style={{ textAlign: 'left', padding: '6px', width: '40px' }}></th>
            <th style={{ textAlign: 'left', padding: '6px' }}>Test</th>
            <th style={{ textAlign: 'left', padding: '6px' }}>Expected</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #333' }}>
              <td style={{ padding: '6px', fontSize: '1.1rem' }}>
                {r.error ? '💥' : r.pass ? '✅' : '❌'}
              </td>
              <td style={{ padding: '6px' }}>{r.name}</td>
              <td style={{ padding: '6px', color: r.pass ? '#4ade80' : '#f87171' }}>
                {r.error ? `Error: ${r.error}` : r.expected}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;