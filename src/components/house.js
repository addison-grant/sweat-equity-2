import React from 'react';
import '../css/House.css';

class House extends React.Component {
  renderCell() {
    return (
      <td className='House-cell'>A</td>
    );
  }

  renderRow() {
    return (
      <tr className='House-row'>
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
      </tr>
    );
  }

  render() {
    return (
      <table className='House-building'>
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
      </table>
    )
  }
}

export default House;
