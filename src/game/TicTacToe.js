import { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';


export function TicTacToe() {
  const [board, setBoard] = useState(
    [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
    // [0,1,2,3,4,5,6,7,8]
  );


  const [isXTurn, setIsXTurn] = useState(true);


  const deceideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }


    }
    return null;

  };
  const Winner = deceideWinner(board);

  const handleClick = (index) => {

    if (Winner === null && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? 'X' : 'O';
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }

  };
  const { width, height } = useWindowSize();
  return (
    <div className='full-board'>
      {Winner ? <Confetti width={width} height={height} numberOfPieces={"1000"} /> : ""}
      <div className='board'>
        {board.map((val, index) => (<GameBox xo={val} onPlayerClick={() => handleClick(index)} />))}

      </div>
      {Winner ? <h2>Winner is: {Winner}</h2> : ""}
    </div>
  );
}

function GameBox({onPlayerClick, xo}){

  // const [xo, setXO] = useState(null);
  const styles={color: xo ==='X' ? "green" : 'red'}
return(
  <div style={styles} className='gamebox' onClick={onPlayerClick}>

   {xo} 
  </div>
);
}
