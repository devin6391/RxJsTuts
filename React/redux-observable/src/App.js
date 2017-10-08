import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import configureStore from "./store";
import { Provider, ReactRedux } from 'react-redux'
import Counter from './components/counter';

class App extends Component {
  render() {
    let store = configureStore();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;
