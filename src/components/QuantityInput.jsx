export default function QuantityInput({ quantity, onQuantityChange, onReset }) {
  return (
    <>
      <div className="controls__group controls__group--quantity">
        <label className="controls__label" htmlFor="quantity-input">
          Quantity
        </label>
        <input
          id="quantity-input"
          type="number"
          className="controls__input"
          min="1"
          max="9999"
          value={quantity}
          onChange={(e) => onQuantityChange(e.target.value)}
        />
      </div>

      <button
        className="controls__reset"
        onClick={onReset}
        title="Reset all selections"
      >
        ↺ Reset
      </button>
    </>
  );
}