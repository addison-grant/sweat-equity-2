import React from 'react';
import './House.css';
import '../img/grasstile.png';

class House extends React.Component {
  render() {
    const rowKeys = Object.keys(this.props.items);
    return (
      <div className='House-plot'>
        <table className='House-main'>
          <tbody>
            {rowKeys.map((rowKey) =>
              <tr key={rowKey}>
                {Object.keys(this.props.items[rowKey]).map((columnKey) =>
                  <td key={columnKey} className='House-cell'>
                    {this.props.items[rowKey][columnKey]}
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
