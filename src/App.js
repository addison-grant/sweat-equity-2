import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import House from './components/house.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <House />
      </div>
    );
  }
}

export default App;
