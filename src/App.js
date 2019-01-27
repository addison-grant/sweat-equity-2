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
  constructor(props) {
    super(props);
    this.statuses = [
      'Destroyed',
      'Flooded',
      'Leaky',
      'Working'
    ];
    this.state = {
      startDate: new Date(),
      currentDate: new Date(),
      age: 0,
      nextStateAge: 10,
      status: this.statuses.length - 1
    }
    setInterval(() => {
      const newDate = new Date();
      const newAge = Math.round((this.state.currentDate - this.state.startDate) / 1000);
      this.setState({
        currentDate: newDate,
        age: newAge
      })
      if (newAge > this.state.nextStateAge) {
        this.setState({
          nextStateAge: this.state.nextStateAge + 10
        });
        if (this.state.status > 0) {
          this.setState({
            status: this.state.status - 1
          });
        }
      }
    }, 1000);
  }
  potato() {
    console.log("hello");
  }
  render() {
    return (
      <div className="Sink" onClick={this.potato}>
        Sink
        <br/>
        Age: {this.state.age}
        <br/>
        {this.statuses[this.state.status]}
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
        addItem(row, column, Empty);
      }
    }

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
