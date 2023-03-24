import './RandomNumber.css'
import { useState } from 'react'
import generateRandomNum from '../utils/generateRandomNum'

function RandomNumber({ maxNum }) {
    const [startNum, setNum] = useState(generateRandomNum(maxNum))

    const changeNum = () => {
        setNum(generateRandomNum(maxNum))
    }

    return (
        <div className="num">
            <h1>{ startNum }</h1>
            <button onClick={ changeNum }>Gen Num</button>
        </div>
    )
}

export default RandomNumber