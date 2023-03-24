import './Button.css'

function Button({ changeCount }) {
    return (
        <button onClick={changeCount}>incr.</button>
    )
}

export default Button