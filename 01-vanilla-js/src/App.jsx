// import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [startText, setText] = useState('Click me');
  const [startStyleClass, setStyleClass] = useState('btn');

  const onCount = () => {
    setText('Has been Clicked');
    setStyleClass('blue-btn');
  }

  return (
    <div className="App">
        <button className={startStyleClass} onClick={onCount} >{startText}</button>
    </div>
  )
}

export default App;