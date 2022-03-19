import './App.css';
import BoardContainer from './BoardContainer';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Keyboard from './Keyboard';
// import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import words from './db.js';

export default function App() {
  const [input, setInput] = useState("");

  // const onChange = (str, x) => {
  //   // const last = str.charAt(str.length - 1);
  //   // setInput(last);
  // };

  const onChange = (letter) => {
    console.log('letter is', letter);
    setInput(letter);
  }

  // <Keyboard className="keyboard" onChange={onChange} />
  return (
    <div>
      <Navbar/>
      <div id="game">
        <div id="board">
        <BoardContainer input={input} />
        <Keyboard setInput={setInput}/>
      </div>
      </div>
    </div>
  );
  }