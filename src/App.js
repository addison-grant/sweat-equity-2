import React, { Component } from 'react';
import './App.css';
import House from './components/House.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <House className="App" />
      </div>
    );
  }
}

export default App;
