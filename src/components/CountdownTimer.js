import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { translate } from 'react-i18next';
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

    this.setState({ currentTime, timer });
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

  getDisplays(times) {
    const { currentTime, targetTime } = this.state;
    const { t } = this.props;
    const displays = [];
    times.forEach((time, idx) => {
      const dispObj = {
        label: t(time),
      }
      if (idx === 0) {
        dispObj.value = targetTime.diff(currentTime, time).toString();
      } else {
        const difference = moment.duration(targetTime.diff(currentTime));
        dispObj.value = this.padWithZeros(difference.get(time));
      }
      displays.push(dispObj);
    });

    return displays;
  }

  render() {
    const times = ['days', 'hours', 'minutes', 'seconds'];
    const displays = this.getDisplays(times);
    return (
      <StyledCountdownTimer>
        <StyledHeader>Starts in</StyledHeader>
        <CountdownGrid>
          {displays.map(display => {
            return <CountdownItem key={display.label} label={display.label} value={display.value} />
          })}
        </CountdownGrid>
      </StyledCountdownTimer>
    );
  }
}

CountdownTimer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate()(CountdownTimer);
