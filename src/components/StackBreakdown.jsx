import { getStackBreakdown, formatStacks } from '../utils/stackUtils';

export default function StackBreakdown({ rawMaterialStacks, totalSlots }) {
  if (!rawMaterialStacks || rawMaterialStacks.length === 0) return null;

  return (
    <div className="section">
      <h2 className="section__title">
        <span>📦</span> Stack Breakdown
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 400 }}>
          ({totalSlots} inventory slot{totalSlots !== 1 ? 's' : ''} needed)
        </span>
      </h2>

      <div className="stack-breakdown">
        {rawMaterialStacks.map(({ item, count, stacks }) => (
          <div key={item.id} className="stack-row">
            <span className="stack-row__name">{item.name}</span>

            <div className="stack-row__visual">
              {renderStackBlocks(stacks)}
            </div>

            <span className="stack-row__text">
              {formatStacks(count, item.stackSize)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function renderStackBlocks(stacks) {
  const blocks = [];
  const maxDisplay = 32;

  const totalBlocks = stacks.fullStacks + (stacks.remainder > 0 ? 1 : 0);

  if (totalBlocks === 0) return null;

  const displayCount = Math.min(stacks.fullStacks, maxDisplay);
  const hasOverflow = stacks.fullStacks > maxDisplay;

  for (let i = 0; i < displayCount; i++) {
    blocks.push(
      <div key={`full-${i}`} className="stack-block stack-block--full">
        {stacks.stackSize}
      </div>
    );
  }

  if (hasOverflow) {
    blocks.push(
      <div
        key="overflow"
        className="stack-block"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-secondary)',
          fontSize: '0.75rem',
          width: 'auto',
          padding: '0 4px',
        }}
      >
        +{stacks.fullStacks - maxDisplay}
      </div>
    );
  }

  if (stacks.remainder > 0) {
    blocks.push(
      <div key="remainder" className="stack-block stack-block--partial">
        {stacks.remainder}
      </div>
    );
  }

  return blocks;
}