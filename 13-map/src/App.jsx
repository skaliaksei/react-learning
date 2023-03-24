import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
    const [count, setCount] = useState(0);

    const buttonText = ['Only Click', 'And Click', 'Click, please']

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <Counter count={ count }/>

            {buttonText.map((itemText, i) => {
                return (
                    <Button changeCount={incrementCount} text={itemText} key={i}/>
                )
            })}
        </div>
    );
}

export default App