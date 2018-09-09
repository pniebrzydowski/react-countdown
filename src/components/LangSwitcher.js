import React, { Component } from 'react';
import i18n from '../i18n';

class LangSwitcher extends Component {
  switchTo(lng) {
    i18n.changeLanguage(lng);
  }

  render() {
    return (
      <div>
        <a onClick={() => this.switchTo('en')}>EN</a>
        <a onClick={() => this.switchTo('de')}>DE</a>
      </div>
    );
  }
}

export default LangSwitcher;
