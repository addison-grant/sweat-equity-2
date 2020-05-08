import React from 'react';
import House from './House.js';
import Menu  from './Menu.js';
import { 
  Stitch, 
  RemoteMongoClient,
  AnonymousCredential } from 'mongodb-stitch-browser-sdk';

class GameSwitchboard extends React.Component {
    constructor(props) {
        super(props);
        
        this.client = Stitch.initializeDefaultAppClient('sweatequity-cbpxb');
        this.db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('highScores');
        this.scoreSubmitted = false;
    }
  
    submitScoreInfo = (props) => {
      
      if(!this.scoreSubmitted){
        this.scoreSubmitted = true;
        this.client.auth.loginWithCredential(new AnonymousCredential()).then( user => {
            let scoreCol = this.db.collection('sweatEquity');
            scoreCol.insertOne({
              name  : document.getElementById('scoreName').value,
              score : this.props.repairs,
              sec   : this.props.ageScore
            }).then(() => {
                this.props.changeGameState('menu');
                this.scoreSubmitted = false;
            }).catch( error => { 
              console.log(error);
              this.scoreSubmitted = false;
            });  
        });
      }
    }
  
    render() {
        const gamestate         = this.props.gamestate;
        const changeGameState   = this.props.changeGameState;
        const repairs           = this.props.repairs;
        const addRepair         = this.props.addRepair;
        const age               = this.props.ageScore;
        const setAge            = this.props.setAge;
        const clearScore        = this.props.clearScore;

        if(gamestate === 'start') {
            clearScore();
            window.setTimeout(() => { changeGameState('game'); },500);
            return <h1> Ready Start!!! </h1>
        }
        
        if(gamestate === 'game') {
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
        
        if(gamestate === 'enterScore') {
            return (
                <div>
                    <h3> Enter Information </h3>
                    <label htmlFor="scoreName"> Name: </label>
                    <input type="text" id="scoreName" name="scoreName"/>
                    <button type="button" onClick={this.submitScoreInfo}> 
                        Submit High Score!
                    </button>
                </div>
            )
        }
        
        
        // check if previous highscore is higher than new score.
        if(localStorage.highScore && localStorage.highScoreAge){
            let prevHighScore = Number(localStorage.highScore);
            let prevHighScoreAge = Number(localStorage.highScoreAge);
            
            if(prevHighScore > repairs) {
                return (
                    <Menu 
                        db = {this.db}
                        client = {this.client}
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
                db = {this.db}
                client = {this.client}
                repairs = {repairs} 
                sec = {age} 
                setGameState = {changeGameState}
            />
        );
    }
}

export default GameSwitchboard;