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
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const columnsCount = 3;

  function onSquareClick(idx) {
    if (squares[idx] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[idx] = "X";
    } else {
      newSquares[idx] = "O";
    }
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <p>{status}</p>
      {Array(3)
        .fill("")
        .map((el, rowIdx) => (
          <div
            key={rowIdx}
            className="board-row"
          >
            {Array(columnsCount)
              .fill("")
              .map((el, colIdx) => {
                /*Since there are 3 columns in each row, multiplying the rowIndex by 3 
                gives the starting index of the current row in the squares array.*/
                const squareIdx = rowIdx * columnsCount + colIdx;
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}

function App() {
  return <TicTacToeBoard />;
}

export default App;
