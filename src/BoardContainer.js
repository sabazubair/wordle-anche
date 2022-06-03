import BoardRow from './BoardRow';
import { useState, useEffect, useRef } from 'react';

function BoardContainer({input, inputRow, grid, setGrid}) {

  const gridFall = () => {

    const gridBody = document.getElementById("boardrow-container");
    const interval = setInterval(() => {
      const currentPos = gridBody.offsetTop;
      gridBody.style.top = (currentPos + 50) + "px"; // down by 1px
      checkCollision(interval);
    }, 1000)
  }

  const checkCollision = (intervalId) => {
    const gridBody = document.getElementById("boardrow-container")
    const gridBodyPos = gridBody.getBoundingClientRect();
    // console.log("GRIDBODY", gridBodyPos);
    const dividerPos = document.getElementById("divider").getBoundingClientRect();
    // console.log("DIVIDERPOS", dividerPos);
    if(gridBodyPos.bottom >= dividerPos.top) {
      // gridBody.style.top = (gridBody.offsetTop + 67) + "px";
      clearInterval(intervalId);
      console.log("STOP");
    }
  }

  useEffect(() => {
    gridFall();
  }, [])

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
      <div id="boardrow-container">
        {[0,1,2,3,4].map((idx, index) => {
          return <BoardRow input={grid[index]}/>
        })
      }
      </div>
  )
}

export default BoardContainer;