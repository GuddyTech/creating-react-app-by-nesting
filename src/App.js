import React from 'react';
import Devs from './Devs';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> How to create spectacular things in no time</h1> 
        <Devs name = "Okorie GoodGod" age = "40" skill = "React Pro"/>
        <Devs name = "Genius Izuchukwu" age = "38" skill = "Typescript Pro"/>
      </div>
      
    );
  }
}

export default App;
