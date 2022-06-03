import { useState, useEffect } from 'react';
import { BsSlashCircleFill } from 'react-icons/bs';
import 'animate.css';

export default function Keyboard(props) {
  const keyboard_vals = ["Q", "W", "E", "R", "T", "Y","U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter", "Delete", "Z", "X", "C", "V", "B", "N", "M"]

  function handleOnClick(e) {
    if(props.tries < 5) {
      if(e.target.innerText === 'Delete') {
        if(props.input.length===0) {
          return
        }
        else {
          const text = props.input.slice(0, -1);
          props.setInput(text);
        }
      }
      else if(e.target.innerText === 'Enter') {
        if(props.input.length === 5){
          // console.log("inside if", props.input);
          props.inputValidator(props.input);
          const appendToHistory = [...props.history];
          appendToHistory.push(props.input);
          props.setHistory(appendToHistory);
          props.setInput([]);
        }
      } else if (props.input.length === 5){ // if input is 5, 2 options: delete, or enter
        return;
      }
      else {
        const inputArray = [...props.input, {letter: e.target.innerText, color: "#FFFFFF"}]
        props.setInput(inputArray);
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