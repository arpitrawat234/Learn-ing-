import { use, useState } from "react";

const squareStyles = {
  winningCell: { backgroundColor: '#4caf50', color: 'white', fontWeight: 'bold' },
  normalCell: { backgroundColor: '#fff', color: '#333' }
};

function Square({ value, onSquareClick ,isWinning}) {

  const activeStyle = isWinning ? squareStyles.winningCell : squareStyles.normalCell;

  return (

    <button className="square" onClick={onSquareClick} style={activeStyle}>{value}</button>

  )

}


function Board({ xIsNext, squares, onPlay,currentMove }) {

  function handleClick(index) {
    //calculated winner
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    // next board squares
    const nextSquares = [...squares];

    // Fill the square
    if (xIsNext) {
      nextSquares[index] = "X";
    }
    else {
      nextSquares[index] = "O";
    }
  
    // render next squares
    onPlay(nextSquares,index);

  }

  const winner = calculateWinner(squares);


  let status;// status of the game winner or next player

  if (winner) {
    status = "Winner: " + winner[3];
  } else {
    status = currentMove===9 ? "Its a Draw" : "Next player: " + (xIsNext ? "X" : "O");
  }


const rows = [0,1,2]; // 2 loops for creating game board
const cols = [0,1,2]; 
  
  return (
    <>
      <div className="status">{status}</div>


      {rows.map((i)=>(

        <div key={i} className="board-row">

          {cols.map((j)=>
          { const index=3*i+j;// calculate index
          
          return (

          <Square 
          key={index}
          value={squares[index]} // square= current square
          onSquareClick={() => handleClick(index)}// can use h(index) as it render directly

          isWinning={winner ? winner.includes(index):false}

          />);

          }
          )
          }

        </div>
      ))}
    </>
  );
}



export default function Game() {

  const[Ascending,setAscending]=useState(true);

  //Current playing move
  const [currentMove, setCurrentMove] = useState(0);

  // history of moves
const [history, setHistory] = useState([
  {
    squares: Array(9).fill(null),
    index: null
  }
]);

  // checks if x is next
  const xIsNext = currentMove % 2 === 0;

  // current board square
  const currentSquares = history[currentMove].squares;

  // function for board component to render next square
function handlePlay(nextSquares, index) {
  const nextHistory = [
    ...history.slice(0, currentMove + 1),
    {
      squares: nextSquares,
      index: index
    }
  ];

  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
}

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);//move to next move
  }

//moves = array of move jsx
const moves = history.map((game, move) => {
  let description;

    const row = Math.floor(game.index / 3);
    console.log(row);
    const col = game.index % 3;
    const user = move % 2 === 1 ? "X" : "O";
    description = `Go to move ${move} (${row}, ${col}) by ${user}`;


    if(move===currentMove){
    return (
      <li key={move}>Move no. {move}
      </li>
    )
    }
    else{
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  }
})

  return (
    <div className="game">
      <div className="game-board">

        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} 
        currentMove={currentMove}
        />

      </div>

      <div className="game-info">

      <button onClick={()=>setAscending(!Ascending)}>
        {Ascending?"Moves: Oldest to Newest":"Moves:Newest to Oldest"}</button>

        <ul>{Ascending?moves:moves.reverse()}</ul>

      </div>
    </div>
  );
}


// This function calculate winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {

    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

      return [a,b,c,squares[a]];

    }
  }
  return null;

}
