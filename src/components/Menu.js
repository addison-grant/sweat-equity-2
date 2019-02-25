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
            <div>
                <img src={logo} className="logo-center" alt='logo goes here'/>
                <p> Highscore: {this.props.repairs} repairs in {this.props.sec} seconds.</p>
                <ul>
                    <li>
                        <button onClick={this.startGame}> Play </button>
                    </li>
                    <li>
                        <button> Quit </button>
                    </li>
                </ul>
                
                
            </div>
        );
    }
}

export default Menu;