function PetInfo({ name, years} = {props}) {
    return (
        <div className="PetInfo">
            <h2>My {name} is {years} years old</h2>
        </div>
    )
}

export default PetInfo