import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCountdownItem = styled.div`
  border: 1px solid black;
  padding: 2px;
  text-align: center;
  margin: 4px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;
`;

const Value = styled.span`
  font-size: 32px;
`;

const Label = styled.label`
  font-size: 9px;
  text-transform: uppercase;
`;

class CountdownItem extends PureComponent {
  render() {
    const { label, value } = this.props;
    return (
      <StyledCountdownItem>
        <Value>{ value }</Value>
        <Label>{ label }</Label>
      </StyledCountdownItem>
    );
  }
}

CountdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CountdownItem;
