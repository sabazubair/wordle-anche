import BoardRow from './BoardRow';
import { useState, useEffect, useRef } from 'react';

function BoardContainer({board, isActiveBoard, setGrid, input, inputRow, dividerRef}) {
  const boardContainer = useRef(null);

  const gridFall = (intervalId) => {
    const gridBodyPos = boardContainer.current.getBoundingClientRect();
    const currentPos = gridBodyPos.top;
    boardContainer.current.style.top = (currentPos - board.gridFall) + "px"; // moving grid down 5px
    checkCollision(intervalId);
  }

  const checkCollision = (intervalId) => {
    const gridBodyPos = boardContainer.current.getBoundingClientRect();
    const dividerPos = dividerRef.current.getBoundingClientRect();
    if(gridBodyPos.bottom >= dividerPos.top) {
      clearInterval(intervalId);
      console.log("STOP");
    }
  }

  const range = (num) => {
    return [...Array(num).keys()];
  }

  useEffect(() => {
    // console.log("board, line 28", board);
    const intervalId = setInterval(() => {
      gridFall(intervalId);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
      // Grid update
    if(isActiveBoard) {
      const tempRow = range(board.cols).map((idx) => {
        if(input[idx]) {
          return input[idx]
        } else {
          return { letter: "", color: "#FFFFFF"}
        }
      })
      const newGrid = [...board.grid];
      newGrid[inputRow] = tempRow;
      setGrid(newGrid, board.id);
    }
  }, [input])

  return (
      <div ref={boardContainer} id="boardrow-container">
        {range(board.rows).map((index) => {
          return <BoardRow input={board.grid[index]}/>
        })
      }
      </div>
  )
}

export default BoardContainer;