import React, { Component } from 'react';
import Fauna1 from './media/Fauna1.jpg';
import './App.css';
import GridContainer from './components/grid-container.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentScore: 0,
      topScore: 0
    };
  }
  updateScore(okClick){
    console.log('updating score');
    let currentScore = this.state.currentScore;
    let topScore = this.state.topScore;
    if (okClick === true){
      currentScore = currentScore + 1
      if (currentScore > topScore) {
        topScore = currentScore;
      }
    }
    else {
      console.log("I'm sorry, you lost!");
      currentScore = 0;
    }
    this.setState({
      currentScore: currentScore,
      topScore: topScore,
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Fauna1} className="Fauna1" alt="Fauna1" />
          <h1 className="App-title">Clickity, Click, Click, Click!</h1>
          <h2 className="score">Current Score: {this.state.currentScore}</h2>
          <h2 className='score'>Your Top Score: {this.state.topScore}</h2>
        </header>
        <p className="App-intro">
          The goal is to click on each dog ONLY once.  If you click on the same dog twice, you lose.
        </p>
        <GridContainer updateScore={this.updateScore.bind(this)} />
      </div>
    );
  }
}

export default App;
