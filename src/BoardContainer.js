import BoardRow from './BoardRow';
import { useState, useEffect, useRef } from 'react';

function BoardContainer({input, inputRow, grid, setGrid, dividerRef}) {
  const boardContainer = useRef(null);

  const gridFall = (intervalId) => {
    const gridBodyPos = boardContainer.current.getBoundingClientRect();
    const currentPos = gridBodyPos.top;
    boardContainer.current.style.top = (currentPos - 55) + "px"; // moving grid down 5px
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      gridFall(intervalId);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
      // Grid update
    setGrid((oldGrid) => {
      const tempRow = [0,1,2,3,4].map((idx) => {
        if(input[idx]) {
          return input[idx]
        } else {
          return { letter: "", color: "#FFFFFF"}
        }
      })
      const newGrid = [...oldGrid];
      newGrid[inputRow] = tempRow;
      return newGrid;
    });
  }, [input])

  return (
      <div ref={boardContainer} id="boardrow-container">
        {[0,1,2,3,4].map((idx, index) => {
          return <BoardRow input={grid[index]}/>
        })
      }
      </div>
  )
}

export default BoardContainer;