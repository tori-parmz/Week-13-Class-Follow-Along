import './App.css';
import Car from './components/car';
import Buttons from './components/buttons';
import User from './components/user';
import Header from './components/header'
import HeaderFunct from './components/header-funct';
import Button from './components/button';
import NewCar from './components/new-car';
import Person from './components/person'
import PersonOne from './components/person-one';
import Counter from './components/counter';

function App() {
  let trait_arr = ['good', 'evil', 'fun', 'curious', 'ridiculous', 'brave', 'loving'];
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HeaderFunct value=' clown!'/>
        <Counter />

        <User firstName='James' lastName='Bond'/>
        <Button text="Click Me!" />
        <Person trait="good" />
        {
          trait_arr.map(((trait, i) => {
            return <Person trait = {trait} key={i}/>
          }))
        }


        <NewCar make="GMC" model="Safari" year="2007"/>
        <NewCar {...{make: 'Ford', model: 'f150', year: '2012'}}/>
        <Car make='GMC' model='Safari' color='red'/>
        <Buttons />
      </header>
    </div>
  );
}

export default App;
