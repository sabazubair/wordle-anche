import { useState, useEffect } from 'react';
import 'animate.css';

export default function BoardRow({input}) {
  useEffect(() => {
  }, [input]);

  return (
    <div className="row">
      {input.map((sub) =>
      <div style={{backgroundColor: sub.color, color: "#FFFFFF"}} className={`game-tile ` + (sub.letter != "" ? `animate__animated animate__pulse game-tile__submission` : "")}>
        <p className="letter">{sub.letter}</p>
      </div>)}
    </div>
  )
}