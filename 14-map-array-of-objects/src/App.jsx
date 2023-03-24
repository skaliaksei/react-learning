import './App.css'
import Person from './components/Person';
import persons from './data/persons'

function App() {
    return (
        <div className="App">
            {persons.map((person, i) => {
                const {id, firstName, lastName, email, img} = person
                return (
                    <Person {...person} key={i} />
                )
            })}
        </div>
    );
}

export default App