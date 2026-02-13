function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1>⛏️ Minecraft Crafting Calculator</h1>
      <p>Project structure is ready!</p>

      <h2>File Structure Verification</h2>
      <div style={{ background: '#1a1a2e', color: '#0f0', padding: '1rem', borderRadius: '8px' }}>
        <FileCheck />
      </div>
    </div>
  );
}

function FileCheck() {
  const files = [
    'src/components/Header.jsx',
    'src/components/ItemSelector.jsx',
    'src/components/QuantityInput.jsx',
    'src/components/MaterialTable.jsx',
    'src/components/StackBreakdown.jsx',
    'src/components/RecipeTree.jsx',
    'src/data/items.js',
    'src/data/recipes.js',
    'src/hooks/useCraftingCalculator.js',
    'src/utils/calculator.js',
    'src/utils/stackUtils.js',
    'src/styles/global.css',
    'src/styles/components.css',
  ];

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {files.map((file) => (
        <li key={file} style={{ marginBottom: '4px' }}>
          ✅ {file}
        </li>
      ))}
    </ul>
  );
}

export default App;