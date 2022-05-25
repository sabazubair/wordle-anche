import BoardRow from './BoardRow';
import { useState, useEffect, useRef } from 'react';

const rows = 5;
const columns = 5;

function BoardContainer(props) {
  const [grid, setGrid] = useState(() => {
    const data = {}
    for(let i=0; i< rows; i++) {
      data[i] = [];
      for(let j=0; j< columns; j++){
        data[i][j] = {
          letter: "",
          color: "#FFFFFF"
        }
      }
    }
    return data;
  });

  const nextRow = useRef(0);
  const nextColumn = useRef(0);

  const updatedColumn = () => {
    let deletedColumn = null;
    if(props.input.length < nextColumn.current) {
      deletedColumn = nextColumn.current - 1;
      nextColumn.current = props.input.length - 1;
    }
    return deletedColumn;
  }

  useEffect(() => {
    // console.log(grid);
  },[grid]);

  useEffect(() => {
    if (!props.input && nextColumn.current === 0) return

    let deletedColumn = updatedColumn();
    const row = nextRow.current;
    const column = nextColumn.current;

    setGrid((state) => {
      // console.log(state);
      const newState = { ...state, [row]: [ ...state[row] ] }
      newState[row][column] = props.input[column]
      if(deletedColumn != null) {
        newState[row][deletedColumn] = "";
      }
      return newState
    })

    nextColumn.current = props.input.length;
    // console.log("NEXTCOLUMN.CURRENT", nextColumn.current, "PROPS.INPUT.LENGTH", props.input.length)
    if(column + 1 === columns) {
      nextRow.current += 1
      // console.log("NEXTROW.CURRENT", nextRow.current);
      nextColumn.current = 0
    }
  }, [props.input.length])

  return (
      <div id="boardrow-container">
        {[0,1,2,3,4].map((idx, index) => {
          return <BoardRow input={grid[index]} subArr={props.subArr}/>
        })
      }
      </div>
  )
}

export default BoardContainer;