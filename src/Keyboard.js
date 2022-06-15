import { useState, useEffect} from 'react';
import 'animate.css';

export default function Keyboard({tries, setTries, input, setInput, history, setHistory, inputValidator}) {
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
        // let inputArray;
        // if(e.keyCode) {
        //   console.log("KEYBOARD", input);
        //   inputArray = [...input, {letter: "A", color: "#FFFFFF"}]
        //   console.log(String.fromCharCode(e.keyCode));
        //   // setInput(inputArray);
        // } else {
          // console.log("KEYBOARD ELSE", input);
          const inputArray = [...input, {letter: e.target.innerText, color: "#FFFFFF"}]
          // console.log(e.target.innerText)
          setInput(inputArray);
        // }
        // setInput(inputArray);
      }
    } else {
      return
    }
  }

  // useEffect(() => {
  //   window.addEventListener("keydown", (e) => handleKeyboard(e));
  //   return () => window.addEventListener("keydown", (e) => handleKeyboard(e));
  // }, [])

  return(
  <div className="keyboard">
    <div className="row">
      {keyboard_vals.map((k) => {
        return <div className="key" onClick={(e) => handleKeyboard(e)}>
          {k}
        </div>
      })}
    </div>
  </div>
  )
}