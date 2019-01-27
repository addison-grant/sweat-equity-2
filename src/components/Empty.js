import React, { Component } from 'react';

class Empty extends Component {
  render() {
    return (
      <div className="Empty">
        Empty<br/>{this.props.row} {this.props.column}
      </div>
    );
  }
}

export default Empty;
