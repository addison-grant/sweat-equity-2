import React, { Component } from 'react';
import './App.css';
import House from './components/House.js';
import Score from './components/Score.js';
import {Howler} from 'howler';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {gamestate: 'game'};
        
  }
  
  // ether bind or use es6
  changeGameState = (newstate) => {
      console.assert(newstate === 'game' || newstate === 'menu',
       "Cannot set game state invalid arg input.");
      this.setState({gamestate: newstate});
  }
  
    GameSwitchboard(props) {
        const gamestate = props.gamestate;
        const changeGameState = props.changeGameState;
          
        if(gamestate === 'game'){
            return (
                <House gamestate = {gamestate} setGameState = {changeGameState} />
            )
        }
        return <p> Highscore goes here...</p>
    }
  
    render() {
        const gState = this.state.gamestate;
        const setGameState = this.changeGameState;
        return (
            <div className="App">
                <this.GameSwitchboard gamestate = {gState} changeGameState = {setGameState} />
            </div>
        );
    }
  componentDidMount() {
    Howler.volume(0.3);
  }
}

export default App;