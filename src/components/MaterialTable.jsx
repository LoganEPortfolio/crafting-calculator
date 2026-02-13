import { formatStacks } from '../utils/stackUtils';

export default function MaterialTable({ calculation }) {
  if (!calculation) return null;

  const { rawMaterials, intermediates, errors } = calculation;

  return (
    <div>
      {errors.length > 0 && (
        <div className="error-list">
          <div className="error-list__title">⚠️ Errors</div>
          {errors.map((err, i) => (
            <div key={i} className="error-list__item">{err}</div>
          ))}
        </div>
      )}

      {rawMaterials.length > 0 && (
        <div className="section">
          <h2 className="section__title">
            <span>🟢</span> Raw Materials Needed
          </h2>
          <table className="material-table">
            <thead>
              <tr>
                <th>Material</th>
                <th className="text-right">Count</th>
                <th className="text-right">Stacks</th>
              </tr>
            </thead>
            <tbody>
              {rawMaterials.map(({ item, count }) => (
                <tr key={item.id}>
                  <td className="material-table__name">{item.name}</td>
                  <td className="material-table__count text-right">{count}</td>
                  <td className="material-table__stacks text-right">
                    {formatStacks(count, item.stackSize)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {intermediates.length > 0 && (
        <div className="section">
          <h2 className="section__title">
            <span>🔶</span> Intermediate Crafting Steps
          </h2>
          <table className="material-table">
            <thead>
              <tr>
                <th>Item</th>
                <th className="text-right">Needed</th>
                <th className="text-right">Crafts</th>
                <th className="text-right">Produced</th>
                <th className="text-right">Surplus</th>
              </tr>
            </thead>
            <tbody>
              {intermediates.map(({ item, needed, crafts, produced, surplus }) => (
                <tr key={item.id}>
                  <td className="intermediate-table__name">{item.name}</td>
                  <td className="material-table__count text-right">{needed}</td>
                  <td className="material-table__count text-right">{crafts}</td>
                  <td className="material-table__count text-right">{produced}</td>
                  <td className={`text-right intermediate-table__surplus ${
                    surplus > 0
                      ? 'intermediate-table__surplus--has'
                      : 'intermediate-table__surplus--zero'
                  }`}>
                    {surplus > 0 ? `+${surplus}` : '0'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}