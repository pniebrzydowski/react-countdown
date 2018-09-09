import React, { Component } from 'react';
import CountdownItem from './CountdownItem';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: null,
      targetTime: null,
    }
  }
  render() {
    return (
      <div className="countdown-timer">
        <header>Starts in</header>
        <CountdownItem label="" value="" /> 
      </div>
    );
  }
}

export default CountdownTimer;
