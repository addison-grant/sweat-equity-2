import React from 'react';
import './House.css';
import '../img/grasstile.png';
import Sink from './Sink.js';
import Stove from './Stove.js';
import Toilet from './Toilet.js';
import Empty from './Empty.js';
import Dog from './Dog.js';

class House extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 6,
      columns: 8,
      items: {},
      scores: {},
      maxScores: {},
      startDate: new Date(),
      currentDate: new Date(),
      repairCount: 0
    }

    const that = this;

    setInterval(() => {
      this.setState({
        currentDate: new Date()
      });
    }, 200);

    function addItem(row, column, Component) {
      function incrementRepairCount() {
        that.setState({
          repairCount: that.state.repairCount + 1
        });
      }
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
      that.state.items[row][column] = <Component row={row} column={column}
       updateScore={updateScore}
       incrementRepairCount={incrementRepairCount} />;
    }

    for (let row = 0; row < this.state.rows; ++row) {
      this.state.items[row] = {};
      for (let column = 0; column < this.state.columns; ++column) {
        addItem(row, column, Empty);
      }
    }

    addItem(0, 4, Sink);
    addItem(0, 5, Stove);
    addItem(4, 7, Toilet);
    addItem(5, 7, Sink);
    addItem(3, 0, Toilet);
    addItem(2, 0, Sink);
    addItem(5, 3, Dog);
  }

  render() {
    let score = 0;
    let maxPossibleScore = 0;
    Object.keys(this.state.scores).forEach((key) => {
      score += this.state.scores[key];
      maxPossibleScore += this.state.maxScores[key];
    });
    const age = Math.round((this.state.currentDate - this.state.startDate) / 1000);

    const displayScore = Math.round(10 * (score / maxPossibleScore)) / 2;
    const rowKeys = Object.keys(this.state.items);
    return (
      <div className='House-plot'>
        <div className='House-title'>
          Sweat Equity
        </div>
        <div className='House-score'>
          House Quality: {displayScore} Stars
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
      </div>
    );
  }
}

export default House;
