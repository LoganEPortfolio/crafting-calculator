export default function ItemSelector({
  categories,
  categoryFilter,
  onCategoryChange,
  filteredItems,
  selectedItemId,
  onItemChange,
}) {
  return (
    <>
      <div className="controls__group controls__group--category">
        <label className="controls__label" htmlFor="category-select">
          Category
        </label>
        <select
          id="category-select"
          className="controls__select"
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All Categories' : capitalize(cat)}
            </option>
          ))}
        </select>
      </div>

      <div className="controls__group controls__group--item">
        <label className="controls__label" htmlFor="item-select">
          Item to Craft
        </label>
        <select
          id="item-select"
          className="controls__select"
          value={selectedItemId}
          onChange={(e) => onItemChange(e.target.value)}
        >
          <option value="">-- Select an item --</option>
          {filteredItems
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}