export default function Keyboard(props) {
  const vals = ["Q", "W", "E", "R", "T", "Y","U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Enter", "Delete", "Z", "X", "C", "V", "B", "N", "M"]

  function logClick() {
    alert("ayoooo")
  }
  const keycap = document.getElementsByClassName("key"); // returns array of 28 keys
  for(const elem of keycap) { // loops through key, add event on each
    console.log(elem);
    elem.addEventListener("onclick", logClick);
  }

  return(
  <div className="keyboard">
    <div className="row">
      {vals.map((k) => {
        return <div className="key" >
          {k}
        </div>
      })}
    </div>
  </div>
  )
}