import BoardRow from './BoardRow';
import { useState, useEffect, useRef } from 'react';
import toast, {Toaster} from 'react-hot-toast';

function BoardContainer({board, isActiveBoard, setGrid, input, inputRow, dividerRef, isGameOver, setIsGameOver}) {
  const boardContainer = useRef(null);
  const intervalRef = useRef();

  const gridFall = () => {
    const gridBodyPos = boardContainer.current.getBoundingClientRect();
    const currentPos = gridBodyPos.top;
    boardContainer.current.style.top = (currentPos - board.gridFall) + "px"; // moving grid down 5px
    checkCollision();
  }

  const checkCollision = () => {
    const gridBodyPos = boardContainer.current.getBoundingClientRect();
    const dividerPos = dividerRef.current.getBoundingClientRect();
    if(gridBodyPos.bottom >= dividerPos.top) {
      clearInterval(intervalRef.current);
      setIsGameOver(true);
    }
  }

  const range = (num) => {
    return [...Array(num).keys()];
  }

  useEffect(() => {
    clearInterval(intervalRef.current);
  }, [isGameOver])

  useEffect(() => {
    const intervalId = setInterval(() => {
      gridFall();
    }, 3500);
    intervalRef.current = intervalId;
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