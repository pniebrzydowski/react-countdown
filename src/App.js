import React, { Component } from 'react';
import './App.css';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import CountdownTimer from './components/CountdownTimer';
import LangSwitcher from './components/LangSwitcher';

class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={ i18n }>
      <div>
        <CountdownTimer />
        <LangSwitcher />
      </div>
      </I18nextProvider>
    );
  }
}

export default App;
