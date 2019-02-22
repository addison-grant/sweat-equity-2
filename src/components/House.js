import React from 'react';
import ReactTooltip from 'react-tooltip';
import './House.css';
import '../img/grasstile.png';
import {Howler} from 'howler';

import Empty from './Empty.js';

import Sink from './Sink.js';
import Stove from './Stove.js';
import Toilet from './Toilet.js';
import Dog from './Dog.js';
import Computer from './Computer.js';
import Shower from './Shower.js';
import Refrigerator from './Refrigerator.js';
import Bed from './Bed.js';
import Rug from './Rug.js';
import Tree from './Tree.js';

class House extends React.Component {
    
  constructor(props) {
    super(props);

    this.state = {
      rows: 6,
      columns: 8,
      gameIntervalID: '',
      items: {},
      scores: {},
      maxScores: {},
      startDate: new Date(),
      currentDate: new Date(),
      repairCount: 0
    }
    
    const that = this;

    // Game Loop.
    // It may be best to move the stuff inside
    // into a function called update in order to match standard
    // game programming patterns. game loop {update; draw;}
    
    this.state.gameIntervalID = window.setInterval(() => {
      let score = 0;
      let maxPossibleScore = 0;
      
    // calculating max and current score based on tile props.
      
      Object.keys(this.state.scores).forEach((key) => {
        score += this.state.scores[key];
        maxPossibleScore += this.state.maxScores[key];
      });
      const gameOverBias = 0.5 * maxPossibleScore;
      const messages = [
        "CONDEMNED",                //0
        "Extreme health hazard",    //1
        "Hovel",                    //2
        "Smells disgusting",
        "Shack of garbage",
        "Fixer-upper",
        "It's got potential",
        "Messy but manageable",
        "Lived in",
        "It has curb appeal!",
        "Could be in a magazine!",
      ];
      
      const displayScoreInt = Math.round(
      // largest index * (top half of score or zero) / half of max score
      //
      // simply put: spread the 50% to 100% into its own 0% to 100% chunck and select upon it
      // across the message array. Just like A - F grades in school.
      
     (messages.length - 1) * (Math.max(0, score - gameOverBias) / (maxPossibleScore - gameOverBias)));
      const displayScore = messages[displayScoreInt];
      if (displayScoreInt === 0) {
          this.deconstructor(); //end of game
      }
      this.setState({
        currentDate: new Date(),
        displayScoreInt: displayScoreInt,
        displayScore: displayScore,
      });
    }, 200); // .2 second refresh

    // end of Game Loop
    
    const startTimes = [];

    function addItem(row, column, Component) {
        
      //private function  
      function incrementRepairCount() {
        that.setState({
          repairCount: that.state.repairCount + 1
        });
      }
      
      //private function
      function updateScore(score, maxPossibleScore) {
        const key = row + "-" + column;
        const tmpState = {
          scores: that.state.scores,
          maxScores: that.state.maxScores,
        };
        tmpState.scores[key] = score;
        tmpState.maxScores[key] = maxPossibleScore;
        that.setState(tmpState);
      }
      
      const startDelay = startTimes.length ? startTimes.pop() : 0;

      //20% chance of equaling 1 otherwise it is zero
      const initialConditionReduction = Math.random() < 0.2 ? 1 : 0; 

      //the item passed in is set to the following JSX expression.
      //JSX -> React.creatElement(Component,{the props go here})
      that.state.items[row][column] = <Component row={row} column={column}
       updateScore={updateScore}
       incrementRepairCount={incrementRepairCount}
       startDelay={startDelay}
       initialConditionReduction={initialConditionReduction}
       />;
    }

    for (let row = 0; row < this.state.rows; ++row) {
      this.state.items[row] = {};
      for (let column = 0; column < this.state.columns; ++column) {
        addItem(row, column, Empty);
      }
    }

    
    // Set up initial randomized delays.//
    
    //[0,10,20,30,40,50,60,70,80,90]    
    startTimes.push(...[...Array(10).keys()].map(n => n * 10));
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // swap i and j places in a
        [a[i], a[j]] = [a[j], a[i]]; 

        }
      return a;
    }
    // add 4 zero's to the begining of the array.
    startTimes.unshift(0, 0, 0, 0);
    shuffle(startTimes);

    addItem(0, 4, Sink);
    addItem(0, 5, Stove);
    addItem(4, 7, Toilet);
    addItem(5, 7, Sink);
    addItem(3, 7, Shower);
    addItem(2, 1, Shower);
    addItem(3, 0, Toilet);
    addItem(2, 0, Sink);
    addItem(5, 3, Dog);
    addItem(3, 4, Computer);
    addItem(1, 7, Refrigerator);
    addItem(5, 1, Bed);
    addItem(5, 2, Rug);
    addItem(1, 5, Rug);
    addItem(2, 3, Rug);
    addItem(0, 0, Tree);
    addItem(4, 5, Tree);
    addItem(1, 2, Tree);
    addItem(0, 6, Tree);
    addItem(5, 5, Bed);
    addItem(2, 6, Dog);
    addItem(4, 0, Computer);
  }


  deconstructor() {
      
    Howler.volume(0);
    window.clearInterval(this.state.gameIntervalID);
    alert("GAME OVER. Your house has become awful");
    window.setTimeout(() => {this.props.setGameState('menu');},5000);
    
  }
  
  render() {
    const age = Math.round((this.state.currentDate - this.state.startDate) / 1000);
    const rowKeys = Object.keys(this.state.items);

    return (
      <div className='House-plot'>
        <div className='House-title'>
          Sweat Equity
        </div>
        <div className='House-score'>
          House Quality: {this.state.displayScore}
          <br/>
          {this.state.repairCount} repairs in {age} seconds
        </div>
        <table className='House-main'>
          <tbody>
            {rowKeys.map((rowKey) =>
              <tr key={rowKey}>
                {Object.keys(this.state.items[rowKey]).map((columnKey) =>
                  <td key={columnKey} className='House-cell'>
                    {this.state.items[rowKey][columnKey]}
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
        <ReactTooltip />
      </div>
    );
  }

}

export default House;
