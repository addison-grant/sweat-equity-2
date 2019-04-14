import React, {Component} from 'react';
import '../css/Menu.css';
import logo from '../img/Menu/se1.png';
import selfie from '../img/selfie.jpg';

class Menu extends Component {
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
