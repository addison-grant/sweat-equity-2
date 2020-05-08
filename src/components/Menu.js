import React, {Component} from 'react';
import '../css/Menu.css';
import logo from '../img/Menu/se1.png';
import selfie from '../img/selfie.jpg';
import { AnonymousCredential } from 'mongodb-stitch-browser-sdk';

class Menu extends Component {
  
    constructor(props) {
        super(props);       
        this.state = {
            globalScores : [],
            serverLoaded : false
        };
    }

    startGame = () => {
        this.props.setGameState('start');
    }
    
    componentDidMount(){
        let db = this.props.db;
        this.props.client.auth.loginWithCredential(new AnonymousCredential()).then( user => {
            let scoreCol = db.collection('sweatEquity');
            scoreCol.find({}).asArray().then((allScores) => {
                allScores.sort((a, b) => b.score - a.score);
                this.setState({
                    globalScores : allScores,
                    serverLoaded : true
                })
            }).catch( error => { console.log(error); });  
        });  
    }
    
    ScoreList = (props) => {
        const ScoreListItem = this.ScoreListItem;
        
        if(this.state.serverLoaded) {
            return(
                <table className="Highscore-table">
                    <tbody>
                        <ScoreListItem  props = {props.props[0]}/>
                        <ScoreListItem  props = {props.props[1]}/>
                        <ScoreListItem  props = {props.props[2]}/>
                        <ScoreListItem  props = {props.props[3]}/>
                        <ScoreListItem  props = {props.props[4]}/>
                        <ScoreListItem  props = {props.props[5]}/>
                        <ScoreListItem  props = {props.props[6]}/>
                        <ScoreListItem  props = {props.props[7]}/>
                        <ScoreListItem  props = {props.props[8]}/>
                        <ScoreListItem  props = {props.props[9]}/>
                    </tbody>  
                </table>
            )
        }
        return (
          <p> Loading... </p>
        )
    }
    
    ScoreListItem = (data) => {
        if(this.state.serverLoaded && data.props && data.props.score) {       
            return(
                <tr>
                    <th>{data.props.name}</th>
                    <td> ---> </td>
                    <td>{data.props.score} repairs </td>
                    <td> in {data.props.sec} seconds. </td> 
                </tr>
            )
        }
        return null;
    }
    
    render() {
        const ScoreList = this.ScoreList;
        
        return (
            <div className="menu-center">
                <img src={logo} alt='logo goes here'/>
                <p> 
                    Your Highscore: {this.props.repairs} repairs in {this.props.sec} seconds.
                </p>
                
                <h5>Global Highscore Leaderboard</h5>
                <ScoreList props = {this.state.globalScores}/>
                
                <div>
                    <button className="menu-button" onClick={this.startGame}>
                        Play Game 
                    </button>
                </div>
                <p className="instructions">
                    Everything is falling apart in your house and only you can save it.
                    Fix your house before it is condemned! With magic fingers, repairing
                    an item is as easy as touching it or clicking it. Don't wait! If an
                    item is broken completely it can no longer be repaired.
                </p>

                <dl className="team">
                    <dt> Addison Grant</dt>
                    <dt> Bryce Schultz</dt>
                    <dt> Isaias Diaz</dt>
                    <dt> Jason Iqbal</dt>
                    <dt> Jay Choi</dt>
                    <dt> Sterling Hirsh</dt>
                </dl>
                <div>
                    <img className="team" src={selfie} alt='team'/>
                </div>
            </div>
        );
    }
}

export default Menu;
