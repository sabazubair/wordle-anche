import { useState, useEffect} from 'react';

export default function Keyboard({inputRow, wordLength, input, setInput, inputValidator, isGameOver}) {
  const keyboard_vals = ["Q", "W", "E", "R", "T", "Y","U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter", "Delete", "Z", "X", "C", "V", "B", "N", "M"];
  const pattern = /[^A-Za-z0-9]/;

  function handleKeyboard(e) {
    if(isGameOver) {
      return;
    }
    if(inputRow < 5) {
      if(e.target.innerText === 'Delete' || e.key === 'Backspace') {
        if(input.length===0) {
          return
        }
        else {
          const text = input.slice(0, -1);
          setInput(text);
        }
      }
      else if(e.target.innerText === 'Enter' || e.key === 'Enter') {
        if(input.length === wordLength){
          inputValidator(input);
          setInput([]);
        }
      }
       else if(e.type !== "click" && e.key.length > 1) {
        return;
      }
      else {
        if(input.length === wordLength) { // fix prevents users from typing greater than col length
          return;
        }
        if(e.key) {
          const letter = e.key.toUpperCase();
          setInput((oldInput) => {
            return [...oldInput, {letter: letter, color: "#FFFFFF"}]
          });
        } else {
          setInput((oldInput) => {
            return [...oldInput, {letter: e.target.innerText, color: "#FFFFFF"}]
          });
        }
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
  }, [input]);

  const keyboard =  keyboard_vals.map((k) => {
    return <div className="key" onClick={(e) => handleKeyboard(e)}>
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