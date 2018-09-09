import React, { Component } from 'react';
import i18n from '../i18n';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 4px;
  padding: 8px;
  cursor: pointer;
`;

class LangSwitcher extends Component {
  switchTo(lng) {
    i18n.changeLanguage(lng);
  }

  render() {
    return (
      <div>
        <StyledButton onClick={() => this.switchTo('en')}>EN</StyledButton>
        <StyledButton onClick={() => this.switchTo('de')}>DE</StyledButton>
      </div>
    );
  }
}

export default LangSwitcher;
