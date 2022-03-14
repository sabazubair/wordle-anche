import './App.css';
import BoardContainer from './BoardContainer';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export default function App() {
  const [input, setInput] = useState("");
  const onChange = (char) => {setInput(char)}
  // useEffect(() => {

  // })

  return (
    <div id="game">
      <Navbar/>
      <BoardContainer input={input}/>
      <Keyboard className="keyboard" onChange={onChange}/>
    </div>
  );
  }