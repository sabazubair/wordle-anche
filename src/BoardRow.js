import { useState, useEffect } from 'react';

export default function BoardRow(props) {
  const [answerArr, setAnswerArr] = useState([]);

  useEffect(() => {
    setAnswerArr(props.answer.split(""));
  },[props.answer])

  return (
    <div className="row">
      <div className="game-tile">
        {answerArr[0] || ""}
      </div>
      <div className="game-tile">
        {answerArr[1] || ""}
      </div>
      <div className="game-tile">
        {answerArr[2] || ""}
      </div>
      <div className="game-tile">
        {answerArr[3] || ""}
      </div>
      <div className="game-tile">
        {answerArr[4] || ""}
      </div>
    </div>
  )
}