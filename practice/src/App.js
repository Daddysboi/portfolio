import logo from './logo.svg';
import './App.css';

function App() {
  const cars = ["Tesla", "Ferari", "BMW", "Toyota", "Mercedes"]
  const listItems = cars.map(car=> {
    return <li key={car}>{car}</li>
  
  })
  
  return (
    <section>
      <ol>
        {listItems}
      </ol>
    </section>

  );
}

export default App;
