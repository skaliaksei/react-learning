function Person({ firstName, id, email }) {
    return (
        <div>
            <p>{id}</p>
            <p>{firstName}</p>
            <p>{email}</p>
        </div>
    )
}

export default Person