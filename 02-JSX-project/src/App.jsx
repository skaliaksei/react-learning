// import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

function App({ initialButtonText, initialClass }) {
    const [startText, setText] = useState(initialButtonText);
    const [startStyleClass, setStyleClass] = useState(initialClass);

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

export default App