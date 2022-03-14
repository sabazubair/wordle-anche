import BoardRow from './BoardRow'
function BoardContainer(props) {
  return (
    <div id="board">
      <div id="broadrow-container">
      <BoardRow answer={props.input}/>
      <BoardRow answer={props.input}/>
      <BoardRow answer={props.input}/>
      <BoardRow answer={props.input}/>
      <BoardRow answer={props.input}/>
      <BoardRow answer={props.input}/>
      </div>
    </div>
  )
}

export default BoardContainer;