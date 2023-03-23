import './App.css';
import Car from './components/car';
import Buttons from './components/buttons';
import User from './components/user';
import Header from './components/header'
import HeaderFunct from './components/header-funct';
import Button from './components/button';
import NewCar from './components/new-car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HeaderFunct value=' clown!'/>

        <User firstName='James' lastName='Bond'/>
        <Button text="Click Me!" />
        
        <NewCar make="GMC" model="Safari" year="2007"/>
        <NewCar {...{make: 'Ford', model: 'f150', year: '2012'}}/>
        <Car make='GMC' model='Safari' color='red'/>
        <Buttons />
      </header>
    </div>
  );
}

export default App;
