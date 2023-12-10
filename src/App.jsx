import { useState } from "react"


function App() {
  let [counter, setcounter] = useState(15)

  function addValue() {
    if (counter !== 20) {
      setcounter(counter + 1)
    } else {

    }

  }
  function removeValue() {
    if (counter !== 0)
      setcounter(counter - 1)
  }
  return (
    <>

      <h1>Chai aur React</h1>
      <br />
      <p>counter value:{counter}</p>
      <br />
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}
export default App