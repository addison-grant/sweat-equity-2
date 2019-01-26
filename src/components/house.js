import React from "react";

class House extends React.Component {
  renderCell() {
    return (
      <td>A</td>
    );
  }

  renderRow() {
    return (
      <tr>
        {this.renderCell()}
        {this.renderCell()}
        {this.renderCell()}
      </tr>
    );
  }

  render() {
    return (
      <table>
        {this.renderRow()}
        {this.renderRow()}
        {this.renderRow()}
      </table>
    )
  }
}

export default House;
