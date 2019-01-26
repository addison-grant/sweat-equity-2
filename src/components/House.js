import React from 'react';
import '../css/House.css';
class House extends React.Component {
  render() {
    const columns = [...Array(this.props.numColumns).keys()];
    const rows = [...Array(this.props.numRows).keys()];
    return (
      <div className='House-plot'>
        <table className='House-main'>
          <tbody>
            {rows.map((rowKey) =>
              <tr key={rowKey}>
                {columns.map((columnKey) =>
                  <td key={columnKey} className='House-cell'></td>
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
