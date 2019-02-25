import React, { Component } from 'react';
import House from './components/House.js';
import Menu from './components/Menu.js';

class GameSwitchboard extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const gamestate         = this.props.gamestate;
        const changeGameState   = this.props.changeGameState;
        const repairs           = this.props.repairs;
        const addRepair         = this.props.addRepair;
        const age               = this.props.ageScore;
        const setAge            = this.props.setAge;
          
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
        
        // check if previous highscore is higher than new score.
        if(localStorage.highScore && localStorage.highScoreAge){
            let prevHighScore = Number(localStorage.highScore);
            let prevHighScoreAge = Number(localStorage.highScoreAge);
            
            if(prevHighScore > repairs) {
                return (
                    <Menu 
                        repairs = {prevHighScore} 
                        sec = {prevHighScoreAge}
                        setGameState = {changeGameState}
                    />
                );
            }
        }
        
        // save new personal high score
        localStorage.highScore = repairs;
        localStorage.highScoreAge = age;
        
        return ( 
            <Menu 
                repairs = {repairs} 
                sec = {age} 
                setGameState = {changeGameState}
            />
        );
    }
}

export default GameSwitchboard;