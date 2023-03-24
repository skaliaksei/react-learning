import './App.css'
import PetInfo from './components/PetInfo'

function App() {
    return (
        <div className="App">
            <PetInfo name="dog" years="5"/>
            <PetInfo name="cat" years="3"/>
        </div>
    );
}

export default App