import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import times from "./observable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {times: []};
    this.stopTime = this.stopTime.bind(this);
    this.multiplyByTwo = this.multiplyByTwo.bind(this);
  }
  componentDidMount() {
    this.times = times
      // Accumulate our times in an array
      .scan((times, message) => [message].concat(times), [])
      // And render whenever we get a new message
      .subscribe(times => this.setState({times: times}));
  }
  componentWillUnmount() {
    this.times.unsubscribe();
  }
  stopTime() {
    this.times.unsubscribe();
  }
  multiplyByTwo() {
    this.stopTime();
    this.times = times
      .map(times => times * 2)
      // Accumulate our times in an array
      .scan((times, message) => [message].concat(times), [])
      // And render whenever we get a new message
      .subscribe(times => this.setState({times: times}));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Start watch</h1>
        </header>
        <div>
        <ul>
          {this.state.times.map(message => <li key={message}>{message}</li>)}
        </ul>
        <button onClick={this.stopTime}>Stop It</button>
        <button onClick={this.multiplyByTwo}>Multiply by 2</button>
      </div>
      </div>
    );
  }
}

export default App;
