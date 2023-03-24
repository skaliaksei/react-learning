import './App.css'
import PetInfo from './components/PetInfo'

function App() {
    return (
        <div className="App">
            <PetInfo name="dog" years="5" hasPet={true}/>
            <PetInfo name="dog" years="5" hasPet={false}/>
        </div>
    );
}

export default App