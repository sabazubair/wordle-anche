import { useState, useEffect} from 'react';
import 'animate.css';

export default function Keyboard({tries, wordLength, input, setInput, history, setHistory, inputValidator}) {
  const keyboard_vals = ["Q", "W", "E", "R", "T", "Y","U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter", "Delete", "Z", "X", "C", "V", "B", "N", "M"];

  function handleKeyboard(e) {
    if(tries < 5) {
      if(e.target.innerText === 'Delete' || e.keyCode === 8) {
        if(input.length===0) {
          return
        }
        else {
          const text = input.slice(0, -1);
          setInput(text);
        }
      }
      else if(e.target.innerText === 'Enter' || e.keyCode === 13) {
        if(input.length === wordLength){
          inputValidator(input);
          const appendToHistory = [...history];
          appendToHistory.push(input);
          setHistory(appendToHistory);
          setInput([]);
        }
      }
      else {
        let inputArray;
        if(e.keyCode) {
          console.log("Typing...");
          inputArray = [...input, {letter: String.fromCharCode(e.keyCode), color: "#FFFFFF"}] // Does not append
          console.log(inputArray);
        } else (
          inputArray = [...input, {letter: e.target.innerText, color: "#FFFFFF"}] // Appends
        )
        setInput(inputArray);
      }
    } else {
      return
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboard);

    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, []);

  const keyboard =  keyboard_vals.map((k) => {
    return <div className="key" onClick={(e) => handleKeyboard(e)} onKeyDown={(e) => handleKeyboard(e)}>
      {k}
    </div>
  })

  return(
  <div className="keyboard">
    <div className="row">
      {keyboard}
    </div>
  </div>
  )
}