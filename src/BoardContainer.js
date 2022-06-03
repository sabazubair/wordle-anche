import BoardRow from './BoardRow';
import { useState, useEffect, useRef } from 'react';

function BoardContainer(props) {

  const gridFall = () => {

    const gridBody = document.getElementById("boardrow-container");
    const interval = setInterval(() => {
      const currentPos = gridBody.offsetTop;
      gridBody.style.top = (currentPos - 50) + "px"; // down by 1px
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

  // const nextRow = useRef(0);
  // const nextColumn = useRef(0);

  // const updatedColumn = () => {
  //   let deletedColumn = null;
  //   if(props.input.length < nextColumn.current) {
  //     console.log(props.input.length, nextColumn.current);

  //     deletedColumn = nextColumn.current - 1;
  //     nextColumn.current = props.input.length - 1;
  //   }
  //   return deletedColumn;
  // }

  // useEffect(() => {

  // },[grid]);

  useEffect(() => {
    // setInterval(() => {

      gridFall();
    // }, 1000)
  }, [])

  useEffect(() => {
    // console.log(props.input);
    // if (!props.input && nextColumn.current === 0) return

    // let deletedColumn = updatedColumn();
    // const row = nextRow.current;
    // const column = nextColumn.current;

    // setGrid((state) => {
    //   // console.log(state);
    //   const newState = { ...state, [row]: [ ...state[row] ] }
    //   newState[row][column] = props.input[column]
    //   if(deletedColumn != null) {
    //     newState[row][deletedColumn] = "";
    //   }
    //   return newState
    // })



    // Grid update
    props.setGrid((oldGrid) => {
      const tempRow = [0,1,2,3,4].map((idx) => {
        if(props.input[idx]) {
          return props.input[idx]
        } else {
          return { letter: "", color: "#FFFFFF"}
        }
      })
      // console.log(tempRow);
      const newGrid = [...oldGrid];
      newGrid[props.inputRow] = tempRow;
      return newGrid;
    });

    // nextColumn.current = props.input.length;
    // // console.log("NEXTCOLUMN.CURRENT", nextColumn.current, "PROPS.INPUT.LENGTH", props.input.length)
    // if(column + 1 === columns) {
    //   nextRow.current += 1
    //   // console.log("NEXTROW.CURRENT", nextRow.current);
    //   nextColumn.current = 0
    // }
  }, [props.input])

  return (
      <div id="boardrow-container">
        {[0,1,2,3,4].map((idx, index) => {
          // console.log("HERE", grid, index, grid[0]);
          return <BoardRow input={props.grid[index]}/>
        })
      }
      </div>
  )
}

export default BoardContainer;