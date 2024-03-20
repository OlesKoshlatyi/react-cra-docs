import BoardSquare from "./BoardSquare";
import { calculateWinner } from "./utils";

export default function TicTacToeBoard({ xIsNext, squares, onPlay }) {
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
    onPlay(newSquares);
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
                  <BoardSquare
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
