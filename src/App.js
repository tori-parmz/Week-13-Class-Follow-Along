import logo from './logo.svg';
import './App.css';
import Car from './components/car';
import Buttons from './components/buttons';
import User from './components/user';
import Header from './components/header'
import HeaderFunct from './components/header-funct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HeaderFunct value='a prop'/>

        <User firstName='James' lastName='Bond'/>
        
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
