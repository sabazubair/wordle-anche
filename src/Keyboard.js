import { useState, useEffect } from 'react';
import { BsSlashCircleFill } from 'react-icons/bs';
import 'animate.css';

export default function Keyboard({tries, setTries, input, setInput, history, setHistory, inputValidator}) {
  const keyboard_vals = ["Q", "W", "E", "R", "T", "Y","U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter", "Delete", "Z", "X", "C", "V", "B", "N", "M"]

  function handleOnClick(e) {
    if(tries < 5) {
      if(e.target.innerText === 'Delete') {
        if(input.length===0) {
          return
        }
        else {
          const text = input.slice(0, -1);
          setInput(text);
        }
      }
      else if(e.target.innerText === 'Enter') {
        if(input.length === 5){
          // console.log("inside if", props.input);
          inputValidator(input);
          const appendToHistory = [...history];
          appendToHistory.push(input);
          setHistory(appendToHistory);
          setInput([]);
        }
      } else if (input.length === 5){ // if input is 5, 2 options: delete, or enter
        return;
      }
      else {
        const inputArray = [...input, {letter: e.target.innerText, color: "#FFFFFF"}]
        setInput(inputArray);
      }
    } else {
      return
    }
  }

  return(
  <div className="keyboard">
    <div className="row">
      {keyboard_vals.map((k) => {
        return <div className="key" onClick={(e) => handleOnClick(e)}>
          {k}
        </div>
      })}
    </div>
  </div>
  )
}