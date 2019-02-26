import React, { Component } from 'react';
import './App.css';
import Score from './components/Score.js';
import GameSwitchboard from './components/GameSwitchboard.js';
import {Howler} from 'howler';

class App extends Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
            gamestate: 'menu',
            playerScore: new Score()
            
        };    
    }

  // Make sure newstate is a valid state and set it.
    changeGameState = (newstate) => {
        
        console.assert(
            newstate === 'game' || 
            newstate === 'menu' ||
            newstate === 'start'
            ,
         "Cannot set game state invalid arg input.");
        this.setState({gamestate: newstate});
    }
  
    render() {
        const gState        = this.state.gamestate;
        const setGameState  = this.changeGameState;
        const clearScore    = this.state.playerScore.clear;
        const addRepair     = this.state.playerScore.addRepair;
        const setAge        = this.state.playerScore.setTime;
        let repairScore     = this.state.playerScore.getRepairs();
        let ageScore        = this.state.playerScore.getTime();
        
        return (
            <div className="App">
                <GameSwitchboard 
                    gamestate       = {gState} 
                    changeGameState = {setGameState}
                    repairs         = {repairScore}
                    addRepair       = {addRepair}
                    ageScore        = {ageScore}
                    setAge          = {setAge}
                    clearScore      = {clearScore}
                />
            </div>
        );
    }
    
    componentDidMount() {
        
        Howler.volume(0.3);
    }
}

export default App;