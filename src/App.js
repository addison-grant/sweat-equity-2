import React, { Component } from 'react';
import './App.css';
import House from './components/House.js';
import Score from './components/Score.js';
import Menu from './components/Menu.js';
import {Howler} from 'howler';

class App extends Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
            gamestate: 'game',
            playerScore: new Score()
            
        };    
    }

  // Make sure newstate is a valid state and set it.
    changeGameState = (newstate) => {
        
        console.assert(newstate === 'game' || newstate === 'menu',
         "Cannot set game state invalid arg input.");
        this.setState({gamestate: newstate});
    }
  
    GameSwitchboard(props) {
        const gamestate = props.gamestate;
        const changeGameState = props.changeGameState;
        const repairs = props.repairs;
        const addRepair = props.addRepair;
        const age = props.ageScore;
        const setAge =  props.setAge;
          
        if(gamestate === 'game'){
            return (
                <House 
                    gamestate = {gamestate} 
                    setGameState = {changeGameState}
                    repairCount = {repairs}
                    incrementRepairs = {addRepair}
                    setAge = {setAge}
                />
            )
        }
        return <Menu repairs = {repairs} sec = {age}/>
    }
  
    render() {
        const gState = this.state.gamestate;
        const setGameState = this.changeGameState;
        const addRepair = this.state.playerScore.addRepair;
        const setAge = this.state.playerScore.setTime;
        let repairScore = this.state.playerScore.getRepairs();
        let ageScore = this.state.playerScore.getTime();
        
        return (
            <div className="App">
                <this.GameSwitchboard 
                    gamestate = {gState} 
                    changeGameState = {setGameState}
                    repairs = {repairScore}
                    addRepair = {addRepair}
                    ageScore = {ageScore}
                    setAge = {setAge}
                />
            </div>
        );
    }
    
    componentDidMount() {
        
        Howler.volume(0.3);
    }
}

export default App;