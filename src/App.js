import './App.css';
import BoardContainer from './BoardContainer';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Keyboard from './Keyboard';
import db from './db.js';

const rows = 5;
const columns = 5;

  const generateRandomIndex = (dbArr) => {
    let randomIndex = Math.floor(Math.random() * db.length);
    return randomIndex;
  }

  const initialGrid = [];
  for(let i=0; i< rows; i++) {
    initialGrid[i] = [];
    for(let j=0; j< columns; j++){
      initialGrid[i][j] = {
        letter: "",
        color: "#FFFFFF"
      }
    }
  };


export default function App() {
  const [input, setInput] = useState([]);
  const [history, setHistory] = useState([]);
  const [tries, setTries] = useState(history.length);
  const [colors, setColors] = useState([]);
  const [answer, setAnswer] = useState("");
  const [inputRow, setInputRow] = useState(0);
  const [grid, setGrid] = useState(initialGrid);

  useEffect(() => {
    const random = generateRandomIndex(db);
    setAnswer(db[random]);
  }, []);

  useEffect(() => {
    setTries(history.length);
  }, [history])

  const inputValidator = (userInput) => {
    const ans = answer.split("");
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
            color: "yellow"
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

    setGrid((oldGrid) => {
      const newGrid = [...oldGrid];
      newGrid[inputRow] = subArr;
      return newGrid;
    });

    setInputRow((oldInputRow) => {
      return oldInputRow + 1;
    })
    setInput([]);
  }

  return (
    <div id="main">
      <Navbar/>
      <div id="game">
        <div id="board">
        <BoardContainer input={input} inputRow={inputRow} grid={grid} setGrid={setGrid}/>
        <div className="keyboard-wrapper">
          <hr id="divider"/>
        <Keyboard tries={tries} setTries={setTries} input={input} setInput={setInput} history={history} setHistory={setHistory} inputValidator={inputValidator}/>
        </div>
      </div>
      </div>
    </div>
  );
}