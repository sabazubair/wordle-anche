import './App.css';
import BoardContainer from './BoardContainer';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Keyboard from './Keyboard';
import db from './db.js';

  const generateRandomIndex = (dbArr) => {
    let randomIndex = Math.floor(Math.random() * db.length);
    return randomIndex;
  }

export default function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [tries, setTries] = useState(0);
  const [colors, setColors] = useState([]);
  const [answer, setAnswer] = useState(() => {
    const random = generateRandomIndex(db);
    return db[random];
  });
  const [subArr, setSubArr] = useState();

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
            color: "green"
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
          color: "grey"
        })
      }
    }
    setInput(subArr);
    console.log(ans);
    console.log(subArr);
    return subArr;
  }

  return (
    <div>
      <Navbar/>
      <div id="game">
        <div id="board">
        <BoardContainer input={input} subArr={subArr}/>
        <Keyboard tries={tries} setTries={setTries} input={input} setInput={setInput} history={history} setHistory={setHistory} inputValidator={inputValidator}/>
      </div>
      </div>
    </div>
  );
}