function PetInfo({ name, years, hasPet} = {props}) {
    const answer = hasPet
        ? `My ${name} is ${years} years old`
        : 'I don\'t have an animal'

    return (
        <div className="PetInfo">
            <h2>{answer}</h2>
        </div>
    )
}

export default PetInfo