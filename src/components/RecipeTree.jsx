export default function RecipeTree({ tree }) {
  if (!tree) return null;

  return (
    <div className="section">
      <h2 className="section__title">
        <span>🌳</span> Recipe Tree
      </h2>
      <div className="recipe-tree">
        <TreeNode node={tree} isLast={true} prefix="" />
      </div>
    </div>
  );
}

function TreeNode({ node, isLast, prefix }) {
  const connector = prefix === '' ? '' : isLast ? '└─ ' : '├─ ';
  const childPrefix = prefix === '' ? '' : prefix + (isLast ? '   ' : '│  ');

  return (
    <div className="tree-node">
      <div className="tree-node__content">
        {prefix !== '' && (
          <span className="tree-node__connector">{prefix.slice(0, -3)}{connector}</span>
        )}

        <span className="tree-node__icon">
          {node.isRaw ? '🟢' : '🔶'}
        </span>

        <span className={`tree-node__name ${
          node.isRaw ? 'tree-node__name--raw' : 'tree-node__name--crafted'
        }`}>
          {node.item.name}
        </span>

        <span className="tree-node__quantity">
          ×{node.quantity}
        </span>

        {node.crafts != null && node.crafts > 0 && (
          <span className="tree-node__meta">
            [{node.crafts} craft{node.crafts !== 1 ? 's' : ''}]
          </span>
        )}

        {node.surplus != null && node.surplus > 0 && (
          <span className="tree-node__surplus">
            (+{node.surplus} surplus)
          </span>
        )}
      </div>

      {node.children && node.children.length > 0 && (
        <div className="tree-node__children">
          {node.children.map((child, index) => (
            <TreeNode
              key={`${child.item.id}-${index}`}
              node={child}
              isLast={index === node.children.length - 1}
              prefix={childPrefix + '   '}
            />
          ))}
        </div>
      )}
    </div>
  );
}