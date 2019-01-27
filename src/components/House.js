import React from 'react';
import './House.css';
import '../img/grasstile.png';
import Sink from './Sink.js';
import Empty from './Empty.js';

class House extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 6,
      columns: 8,
      items: {
      }
    }

    const that = this;

    function addItem(row, column, Component) {
      that.state.items[row][column] = <Component row={row} column={column} />;
    }

    for (let row = 0; row < this.state.rows; ++row) {
      this.state.items[row] = {};
      for (let column = 0; column < this.state.columns; ++column) {
        addItem(row, column, Empty);
      }
    }

    addItem(2, 2, Sink);
  }

  render() {
    const rowKeys = Object.keys(this.state.items);
    const score = "50%";
    return (
      <div className='House-plot'>
        <div className='House-title'>
          Sweat Equity
        </div>
        <div className='House-score'>
          {score}
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
