import React, {Component} from 'react';
import '../CSS/Menu.css';
import logo from '../img/Menu/se1.png';

class Menu extends Component {
    constructor(props){
        super(props);
        
    }
    
    
    // on button click change gamestate
    
    startGame = () => {
        this.props.setGameState('start');
    }
    
    render() {
        return (
            <div className="menu-center">
                <img src={logo} alt='logo goes here'/>
                <p> 
                    Highscore: {this.props.repairs} repairs in {this.props.sec} seconds.
                </p>
                <button className="menu-button" onClick={this.startGame}> Play Game </button>
            </div>
        );
    }
}

export default Menu;