import { useState } from 'react'
import './App.css'

function App() {
const [color,setColor] = useState("red");
  return (
    <div className='container' style={{backgroundColor: color}}>
      <button onClick={()=> setColor("red")}>Red</button>      
      <button onClick={()=> setColor("Green")}>Green</button>      
      <button onClick={()=> setColor("Blue")}>Blue</button>      
    </div>
  )
}

export default App
