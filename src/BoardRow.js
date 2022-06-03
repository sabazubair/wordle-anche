import { useState, useEffect } from 'react';
import 'animate.css';

export default function BoardRow({input}) {
  useEffect(() => {
    // console.log("boardrow", props.input);
  }, [input]);

  return (
    <div className="row">
      {input.map((val) =>
      <div style={{backgroundColor: val.color}} className={`game-tile ` + (val.letter != "" ? `animate__animated animate__pulse game-tile__submission` : "")}>
        <p className="letter">{val.letter}</p>
      </div>)}
    </div>
  )
}