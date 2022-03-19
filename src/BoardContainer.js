import BoardRow from './BoardRow';
import { useState, useEffect, useRef } from 'react';

const rows = 5;
const columns = 5;

function BoardContainer(props) {
  const [grid, setGrid] = useState(() => {
    const data = {}
    for(let i=0; i< rows; i++) {
      data[i] = []
      for(let j=0; j< columns; j++){
        data[i][j] = ''
      }
    }
    return data
  });

  const nextRow = useRef(0)
  const nextColumn = useRef(0)

  useEffect(() => {
    if (!props.input) return

    const row = nextRow.current
    const column = nextColumn.current
    setGrid((state) => {
      const newState = { ...state, [row]: [ ...state[row] ] }
      newState[row][column] = props.input
      return newState
    })
    nextColumn.current += 1
    if(column + 1 === columns) {
      nextRow.current += 1
      nextColumn.current = 0
    }
  }, [props.input])

  return (
      <div id="boardrow-container">
      {[0,1,2,3,4].map((_, index) => {
        // console.log(grid[index]);
        return <BoardRow input={grid[index]} />
      })

      }
      </div>
  )
}

export default BoardContainer;