import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CountdownItem extends PureComponent {
  render() {
    const { label, value } = this.props;
    return (
      <div className="countdown-item">
        <span>{ value }</span>
        <label>{ label }</label>
      </div>
    );
  }
}

CountdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CountdownItem;
