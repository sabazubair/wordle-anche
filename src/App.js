import './App.css';
import BoardContainer from './BoardContainer';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Keyboard from './Keyboard';
import db from './db.js';

export default function App() {
  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);
  const [answer, setAnswer] = useState(db[0]);

  useEffect(() => {
    const random = generateRandomIndex(db);
    setAnswer(db[random]);
    console.log(words);
  }, [words]);

  const generateRandomIndex = (dbArr) => {
    let randomIndex = Math.floor(Math.random() * db.length);
    return randomIndex;
  }

  const inputValidator = (submission) => {
    if(input.toLowerCase() === answer) {
      alert("Winner!")
    } else {
      alert(`You submitted: ${submission}. Answer is ${answer}.`);
    }
  }

  return (
    <div>
      <Navbar/>
      <div id="game">
        <div id="board">
        <BoardContainer input={input} />
        <Keyboard input={input} setInput={setInput} words={words} setWords={setWords} inputValidator={inputValidator}/>
      </div>
      </div>
    </div>
  );
  }