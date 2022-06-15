import { useState } from "react"
import "./styles.css"

const App = () => {

  const [bgColor, setBgColor] = useState('white')
  const [click, setClick] = useState(false)

  function Clicked(){
    if (click === false){
      setBgColor('grey')
    } else {
      setBgColor('white')
    }
    setClick(!click)
  }
  const students = [
    {
      name: "Martin",
      lastName: 'Lant',
      marks: [9,8,null,7,5]
    },
    {
      name: "Francesco",
      lastName: 'Fortus',
      marks: [5, 4, 2, 3, 2]
    },
    {
      name: "Bill",
      lastName: 'Merdoc',
      marks: [10, null, null, null, 10]
    },
    {
      name: "John",
      lastName: 'Entman',
      marks: [9, 8, 9, 7, 5]
    }
  ]

  return (
    <div className="cards">
      {students.map((student) => {
        let length = student.marks.length
        let sum = 0
        for(let i = 0; i < length; i++ ){
          if(student.marks[i] !== null) {
            sum = sum + student.marks[i]
          }
        }
        let average = sum / length
        let color
        if(average > 5) {
          color = "green"
        } else {
          color = "red"
        }
        return (
          <div key={student.name} className="card" style={{ borderColor:[color], backgroundColor:[bgColor]}} onClick={Clicked}>
          <h3>{student.name}</h3>
          <h3>{student.lastName}</h3>
          <h5>{sum}</h5>
          <h5>{average}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default App;
