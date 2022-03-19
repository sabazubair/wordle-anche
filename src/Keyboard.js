import { useState, useEffect } from 'react';
import { BsSlashCircleFill } from 'react-icons/bs';

export default function Keyboard(props) {
  const [str, setStr] = useState("");
  const vals = ["Q", "W", "E", "R", "T", "Y","U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter", "Delete", "Z", "X", "C", "V", "B", "N", "M"]

  function handleOnClick(e) {
    setStr(str + e.target.innerText);
    if(e.target.innerText === 'Delete') {
      const copy = str;
      copy.slice(0, str.length-1);
      setStr(copy);
    }
    console.log(str);
  }

  useEffect(() => {
  }, [str]);

  return(
  <div className="keyboard">
    <div className="row">
      {vals.map((k) => {
        return <div className="key" onClick={(handleOnClick)}>
          {k}
        </div>
      })}
    </div>
  </div>
  )
}