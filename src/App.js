import React, { Component } from 'react';
//import styled from 'styled-components';
import './App.css';
import House from './components/House.js';

class Empty extends Component {
  render() {
    return (
      <div className="Empty">
        Empty<br/>{this.props.row} {this.props.column}
      </div>
    );
  }
}

class Sink extends Component {
  render() {
    return (
      <div className="Sink">
        Sink<br/>{this.props.row} {this.props.column}
      </div>
    );
  }
}

class App extends Component {
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
        //this.state.items[row][column] = null;
        addItem(row, column, Empty);
      }
    }

    //this.state.items[2][1] = <Sink row={2} column={1} />;
    addItem(2, 2, Sink);
  }
  render() {
    return (
      <div className="App">
        <House numRows={6} numColumns={8} items={this.state.items} />
      </div>
    );
  }
}

export default App;
