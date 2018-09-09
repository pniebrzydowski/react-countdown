import React, { Component } from 'react';
import i18n from '../i18n';
import styled from 'styled-components';
import { locales } from '../config';

const StyledButton = styled.button`
  margin: 4px;
  padding: 8px;
  cursor: pointer;
  text-transform: uppercase;
`;

class LangSwitcher extends Component {
  switchTo(lng) {
    i18n.changeLanguage(lng);
  }

  render() {
    return (
      <div>
        {locales.map(locale => {
          return <StyledButton onClick={() => this.switchTo(locale)}>{ locale }</StyledButton>
        })}
      </div>
    );
  }
}

export default LangSwitcher;
