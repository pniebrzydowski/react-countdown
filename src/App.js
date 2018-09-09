import React, { Component } from 'react';
import './App.css';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import CountdownTimer from './components/CountdownTimer';

class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={ i18n }>
        <CountdownTimer />
      </I18nextProvider>
    );
  }
}

export default App;
