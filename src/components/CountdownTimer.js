import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import CountdownItem from './CountdownItem';

const StyledCountdownTimer = styled.div`
  font-family: Helvetica,Arial,FreeSans,sans-serif;
  padding: 5px;
`;

const StyledHeader = styled.header`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
`;

const CountdownGrid = styled.div`
  margin: 0 -4px;
`;

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

  padWithZeros(value) {
    if (value < 10) {
      return '0' + value;
    }
    return value.toString();
  }

  render() {
    const { currentTime, targetTime } = this.state;
    if (!currentTime || !targetTime) return null;
    const difference = moment.duration(targetTime.diff(currentTime));
    const displays = [
      {
        label: 'Days',
        value: targetTime.diff( currentTime, 'days' ).toString()
      },
      {
        label: 'Hours',
        value: this.padWithZeros(difference.hours())
      },
      {
        label: 'Minutes',
        value: this.padWithZeros(difference.minutes())
      },
      {
        label: 'Seconds',
        value: this.padWithZeros(difference.seconds())
      }
    ];
    return (
      <StyledCountdownTimer>
        <StyledHeader>Starts in</StyledHeader>
        <CountdownGrid>
        {displays.map(display => {
          return <CountdownItem key={ display.label } label={ display.label } value={ display.value } />
        })}
        </CountdownGrid>
      </StyledCountdownTimer>
    );
  }
}

export default CountdownTimer;
