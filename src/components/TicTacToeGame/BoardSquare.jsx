export default function BoardSquare({ value, onSquareClick }) {
  return (
    <button
      type="button"
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
