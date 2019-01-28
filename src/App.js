import React, { Component } from 'react';
import './App.css';
import House from './components/House.js';
import {Howler} from 'howler';

class App extends Component {
  render() {
    return (
      <div className="App">
        <House/>
      </div>
    );
  }
  componentDidMount() {
    Howler.volume(0.3);
  }
}

export default App;
