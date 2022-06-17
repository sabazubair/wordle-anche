import './App.css';

import BoardContainer from './BoardContainer';
import Navbar from './Navbar';
import { useState, useEffect, useRef} from 'react';
import Keyboard from './Keyboard';
import db3 from './db-3.js';
import db5 from './db-5.js';
import db8 from './db-8.js';

  const generateRandomIndex = (db) => {
    let randomIndex = Math.floor(Math.random() * db.length);
    return randomIndex;
  }

  const initialGrid = (rows, cols) => {
    const initialGrid = [];
    for(let i=0; i<rows; i++) {
      initialGrid[i] = [];
      for(let j=0; j<cols; j++){
        initialGrid[i][j] = {
          letter: "",
          color: "#FFFFFF"
        }
      }
    }
    return initialGrid;
  }


export default function App() {
  const [input, setInput] = useState([]);
  const [history, setHistory] = useState([]);
  const [tries, setTries] = useState(history.length);
  const [inputRow, setInputRow] = useState(0);
  const dividerRef = useRef(null);
  const [isActiveBoardId, setIsActiveBoardId] = useState(1);
  const [boards, setBoards] = useState([
    {
      id: 1,
      rows: 5,
      cols: 3,
      grid: initialGrid(5, 3),
      gridFall: 44,
      answer: db3[generateRandomIndex(db3)]
    },
    {
      id: 2,
      rows: 5,
      cols: 5,
      gridFall: 50,
      grid: initialGrid(5, 5),
      answer: db5[generateRandomIndex(db5)]
    },
    {
      id: 3,
      rows: 5,
      cols: 8,
      gridFall: 55,
      grid: initialGrid(5, 8),
      answer:db8[generateRandomIndex(db8)]
    }
  ]);
  const [activeBoard, setActiveBoard] = useState(boards[0]);

  const setGrid = (newGrid, boardId) => { // takes in grid, sets the active board grid
      setBoards((oldBoards) => {
      const newBoards = [...oldBoards];
      const boardIndex = boards.findIndex((board) => board.id === boardId);
      newBoards[boardIndex] =  {...newBoards[boardIndex], grid: newGrid};
      return newBoards;
    })
  }

  useEffect(() => {
    setTries(history.length);
  }, [history])

  useEffect(() => {
    setActiveBoard(
      boards.find((board) => board.id === isActiveBoardId)
    )
  }, [isActiveBoardId])

  const inputValidator = (userInput) => {
    const ans = activeBoard.answer.split("");
    const subArr = [];
    const ansArr = [];
    for(let i=0; i < userInput.length; i++){
        let idx = ans.findIndex(x => x === userInput[i].letter.toLowerCase());
        if(idx != -1) {
        if(idx === i) {
          subArr.push({
            letter: userInput[i].letter,
            color: "#6AAA64"
          })
        } else {
          subArr.push({
            letter: userInput[i].letter,
            color: "#C9B458"
          })
        }
        ans[idx]=""
      }
      else {
        subArr.push({
          letter: userInput[i].letter,
          color: "#787C7D"
        })
      }
    }


    setBoards((oldBoards) => {
      const newBoards = [...oldBoards];
      const boardIndex = boards.findIndex((board) => board.id === isActiveBoardId);
      const newGrid = [...newBoards[boardIndex].grid];
      newGrid[inputRow] = subArr;
      newBoards[boardIndex] =  {...newBoards[boardIndex], grid: newGrid};
      return newBoards;
    })

    if(subArr.every((el) => el.color === "#6AAA64")) {
      setIsActiveBoardId(isActiveBoardId + 1);
      setInputRow(0);
      setTries(0);
      return;
    }

    setInputRow((oldInputRow) => {
      return oldInputRow + 1;
    })

    setInput([]);
  }

  useEffect(() => {
    // console.log(input);
    // console.log(boards[1].answer)
  }, [input]);

  // console.log(boards[0]);
  return (
    <div id="main">
      <Navbar/>
      <div id="game">
        <div className="columns">
          <div className="board-col">
            <BoardContainer board={boards[0]} isActiveBoard={isActiveBoardId === 1} setGrid={setGrid} dividerRef={dividerRef} input={input} inputRow={inputRow}/>
          </div>
          <div className="board-col">
            <BoardContainer board={boards[1]} isActiveBoard={isActiveBoardId === 2} setGrid={setGrid} dividerRef={dividerRef} input={input} inputRow={inputRow}/>
          </div>
          <div className="board-col">
            <BoardContainer board={boards[2]} isActiveBoard={isActiveBoardId === 3} setGrid={setGrid} dividerRef={dividerRef} input={input} inputRow={inputRow}/>
          </div>
          <div className="keyboard-wrapper">
            <hr ref={dividerRef} id="divider"/>
            <Keyboard wordLength={boards[isActiveBoardId - 1].cols} tries={tries} setTries={setTries} input={input} setInput={setInput} history={history} setHistory={setHistory} inputValidator={inputValidator}/>
          </div>
        </div>
      </div>
    </div>
  );
}