import { useState, useEffect } from 'react';

export default function BoardRow({input}) {
  useEffect(() => {
  }, [input]);

  return (
    <div className="row">
      {input.map((sub) =>
      <div style={{backgroundColor: sub.color, borderColor: sub.fontColor ? sub.color : "none"}} className={`game-tile ` + (sub.letter != "" ? `game-tile__submission` : "")}>
        <p className="letter" style={{color: sub.fontColor ? sub.fontColor : "#000000"}}>{sub.letter}</p>
      </div>)}
    </div>
  )
}