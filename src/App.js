import React, { Component } from 'react';
//import styled from 'styled-components';
import './App.css';
import House from './components/House.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <House numRows={6} numColumns={8} />
      </div>
    );
  }
}

export default App;
