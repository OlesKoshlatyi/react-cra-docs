import "./index.css";

import { useState } from "react";

function Square({ value, onSquareClick }) {
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

function TicTacToeBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function onSquareClick(idx) {
    const newSquares = squares.slice();
    newSquares[idx] = idx;
    setSquares(newSquares);
  }

  return (
    <>
      {Array(3)
        .fill("")
        .map((el, rowIdx) => (
          <div
            key={rowIdx}
            className="board-row"
          >
            {Array(3)
              .fill("")
              .map((el, colIdx) => {
                const squareIdx = rowIdx * 3 + colIdx;
                return (
                  <Square
                    key={squareIdx}
                    value={squares[squareIdx]}
                    onSquareClick={() => onSquareClick(squareIdx)}
                  />
                );
              })}
          </div>
        ))}
    </>
  );
}

function App() {
  return <TicTacToeBoard />;
}

export default App;
