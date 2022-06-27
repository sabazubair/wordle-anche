import './App.css';
import toast, {Toaster} from 'react-hot-toast';

import BoardContainer from './BoardContainer';
import Navbar from './Navbar';
import { useState, useEffect, useRef} from 'react';
import Keyboard from './Keyboard';
import db4 from './db-4.js';
import db5 from './db-5.js';
import db6 from './db-6.js';

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
  const [inputRow, setInputRow] = useState(0);
  const dividerRef = useRef(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isActiveBoardId, setIsActiveBoardId] = useState(1);
  const [boards, setBoards] = useState([
      {
        id: 1,
        rows: 5,
        cols: 4,
        grid: initialGrid(5, 4),
        gridFall: 55,
        answer: db4[generateRandomIndex(db4)]
      },
      {
        id: 2,
        rows: 5,
        cols: 5,
        gridFall: 55,
        grid: initialGrid(5, 5),
        answer: db5[generateRandomIndex(db5)]
      },
      {
        id: 3,
        rows: 5,
        cols: 6,
        gridFall: 55,
        grid: initialGrid(5, 6),
        answer:db6[generateRandomIndex(db6)]
      }
    ]);
  const [activeBoard, setActiveBoard] = useState(boards[0]); // save
  const didMount = useRef(false);

  const setGrid = (newGrid, boardId) => { // takes in grid, sets the active board grid
      setBoards((oldBoards) => {
      const newBoards = [...oldBoards];
      const boardIndex = boards.findIndex((board) => board.id === boardId);
      newBoards[boardIndex] =  {...newBoards[boardIndex], grid: newGrid};
      return newBoards;
    })
  }

  useEffect(() => {
    setActiveBoard(
      boards.find((board) => board.id === isActiveBoardId)
    )
  }, [isActiveBoardId])

  useEffect(() => {
    if (didMount.current) {
    } else {
      didMount.current = true;
    }
  }, [isGameOver])

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
            color: "#6AAA64",
            fontColor: "#FFFFFF"
          })
        } else {
          subArr.push({
            letter: userInput[i].letter,
            color: "#C9B458",
            fontColor: "#FFFFFF"
          })
        }
        ans[idx]=""
      }
      else {
        subArr.push({
          letter: userInput[i].letter,
          color: "#787C7D",
          fontColor: "#FFFFFF"
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

    const isAnswer = subArr.every((el) => el.color === "#6AAA64");
    if(isAnswer) {
      if(isActiveBoardId === 3) {
        toast("Winner!");
        setIsGameOver(true);
      }
      else {
        toast("Nice work. Keep going.");
        setIsActiveBoardId(isActiveBoardId + 1);
        setInputRow(0);
        return;
      }
    }

    setInputRow((oldInputRow) => {
      return oldInputRow + 1;
    })

    if(inputRow + 1 === activeBoard.rows && !isAnswer) {
      toast("Game over.")
      setIsGameOver(true);
      return;
    }

    setInput([]);
  }

  return (
    <div id="main">
      <Navbar/>
      <div id="game">
        <Toaster/>
        <div className="columns">
          <div className="board-col">
            <BoardContainer isGameOver={isGameOver} setIsGameOver={setIsGameOver} board={boards[0]} isActiveBoard={isActiveBoardId === 1} setGrid={setGrid} dividerRef={dividerRef} input={input} inputRow={inputRow}/>
          </div>
          <div className="board-col">
            <BoardContainer isGameOver={isGameOver} setIsGameOver={setIsGameOver} board={boards[1]} isActiveBoard={isActiveBoardId === 2} setGrid={setGrid} dividerRef={dividerRef} input={input} inputRow={inputRow}/>
          </div>
          <div className="board-col">
            <BoardContainer isGameOver={isGameOver} setIsGameOver={setIsGameOver} board={boards[2]} isActiveBoard={isActiveBoardId === 3} setGrid={setGrid} dividerRef={dividerRef} input={input} inputRow={inputRow}/>
          </div>
          <div className="keyboard-wrapper">
            <hr ref={dividerRef} id="divider"/>
            <Keyboard isGameOver={isGameOver} wordLength={boards[isActiveBoardId - 1].cols} inputRow={inputRow} input={input} setInput={setInput} inputValidator={inputValidator}/>
          </div>
        </div>
      </div>
    </div>
  );
}