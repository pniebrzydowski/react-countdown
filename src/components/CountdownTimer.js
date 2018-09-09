import React, { Component } from 'react';
import moment from 'moment';
import CountdownItem from './CountdownItem';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      currentTime: null,
      targetTime: moment('2018-11-23'),
    }
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 1000);
    const currentTime = moment();

    this.setState({currentTime, timer});
  }

  componentWillUnmount() {
    this.setState({
      timer: null,
    });
  }

  tick() {
    // could also just subtract a second from previous state, but lagging issues?
    const currentTime = moment();
    this.setState({ currentTime });
  }

  render() {
    const { currentTime, targetTime } = this.state;
    if (!currentTime || !targetTime) return null;
    const difference = moment.duration(targetTime.diff(currentTime));
    const displays = [
      {
        label: 'Days',
        value: difference.days().toString()
      },
      {
        label: 'Hours',
        value: difference.hours().toString()
      },
      {
        label: 'Minutes',
        value: difference.minutes().toString()
      },
      {
        label: 'Seconds',
        value: difference.seconds().toString()
      }
    ];
    return (
      <div className="countdown-timer">
        <header>Starts in</header>
        {displays.map(display => {
          return <CountdownItem key={ display.label } label={ display.label } value={ display.value } />
        })}
      </div>
    );
  }
}

export default CountdownTimer;
