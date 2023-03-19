import logo from './logo.svg';
import './App.css';
import Car from './components/car'
import Buttons from './components/buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Car make='GMC' model='Safari' color='red'/>
        <Buttons />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
