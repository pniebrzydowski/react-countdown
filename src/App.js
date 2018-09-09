import React, { Component } from 'react';
import './App.css';
import CountdownTimer from './components/CountdownTimer';

class App extends Component {
  render() {
    return (
      <div className="countdown">
        <CountdownTimer />
      </div>
    );
  }
}

export default App;
