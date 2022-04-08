export default function BoardRow(props) {
  return (
    <div className="row">
      {props.input.map((val) => <div className="game-tile">
        {val}
      </div>)}
    </div>
  )
}