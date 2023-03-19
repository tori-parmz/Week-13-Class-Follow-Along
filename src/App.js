import logo from './logo.svg';
import './App.css';
import Car from './components/car'
import { AddButton } from './components/AddButton';
import Buttons from './components/buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Car />
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
