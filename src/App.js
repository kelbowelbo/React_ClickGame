import React, { Component } from 'react';
import Fauna1 from './media/Fauna1.jpg';
import './App.css';
import GridContainer from './components/grid-container.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Fauna1} className="Fauna1" alt="Fauna1" />
          <h1 className="App-title">Clickity, Click, Click, Click!!</h1>
        </header>
        <p className="App-intro">
          This is the Click Game Intro.
        </p>
        <GridContainer />
      </div>
    );
  }
}

export default App;
