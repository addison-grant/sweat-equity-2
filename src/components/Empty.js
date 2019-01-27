import React, { Component } from 'react';
import Image from '../img/floortile.png';

class Empty extends Component {
  render() {
    return (
      <div className="Empty"
        onClick={() => console.log(this.props.row, this.props.column)}
        style={{backgroundImage: `url(${Image})`}}
      >
        Empty<br/>{this.props.row} {this.props.column}
      </div>
    );
  }
}

export default Empty;
