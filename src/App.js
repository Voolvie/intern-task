import { useState } from "react"

const App = () => {
const [counter, setCounter] = useState(0)
const [word, setWord] = useState('Jeden')
const [change, setChange] = useState(true)
const [inputWord, setInputWord] = useState('')

function Add () {
  setCounter(counter + 1) 
}
function Zero () {
  setCounter(0) 
}
function Remove () {
  setCounter(counter - 1) 
}
function handleChange () {
  if(change === true) {
    setWord('Dwa')
  } else {
    setWord('Jeden')
  }
  setChange(!change)
  
}
  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <button onClick={Add}>+</button>
        <button onClick={Zero}>0</button>
        <button onClick={Remove}>-</button>
      </div>
      <div>
        <h1>{word}</h1>
        <button onClick={(handleChange)}>Change</button>
      </div>
      <div>
        <h1>{inputWord}</h1>
        <input type="text" onChange={(e) => setInputWord(e.target.value)} />
      </div>
    </div>
   
  )
}

export default App;
