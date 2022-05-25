import { useState, useEffect } from 'react';
import 'animate.css';

export default function BoardRow(props) {
  useEffect(() => {

  }, [props.input]);

  return (
    <div className="row">
      {props.input.map((val) =>
      <div style={{backgroundColor: val.color}} className={`game-tile ` + (val.letter != "" ? `animate__animated animate__pulse game-tile__submission` : "")}>
        <p className="letter">{val.letter}</p>
      </div>)}
    </div>
  )
}