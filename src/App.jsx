import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className='container' style={{ backgroundColor: color }}>
      <div className="btnCon">
        <button className='cBtn' style={{ backgroundColor: 'red' }} onClick={() => setColor("red")}>Red</button>
        <button className='cBtn' style={{ backgroundColor: 'green' }} onClick={() => setColor("green")}>Green</button>
        <button className='cBtn' style={{ backgroundColor: 'blue' }} onClick={() => setColor("blue")}>Blue</button>
      </div>
    </div>
  );
}

export default App;
