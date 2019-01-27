import React, { Component } from 'react';

class Repairable extends Component {
  constructor(props) {
    super(props);
    this.stateImages = this.props.stateImages;
    this.state = {
      condition: this.props.conditions.length - 1,
      startDate: new Date(),
      currentDate: new Date(),
      age: 0,
      nextStateAge: this.props.nextStateAge
    }

    setInterval(() => {
      const newDate = new Date();
      const newAge = Math.round((this.state.currentDate - this.state.startDate) / 1000);
      this.setState({
        currentDate: newDate,
        age: newAge
      });
      if (newAge > this.state.nextStateAge) {
        this.setState({
          nextStateAge: this.state.nextStateAge + 10
        });
        if (this.state.condition > 0) {
          this.setState({
            condition: this.state.condition - 1
          });
        }
      }
    }, 1000);
  }

  potato() {
    console.log(this.props.row, this.props.column);
  }

  render() {
    return (
      <div className={this.props.displayName}
        onClick={this.potato}
        style={{backgroundImage: `url(${this.props.image})`}}
      >
        {this.props.displayName}
        <br />
        Age: {this.state.age}
        <br />
        {this.props.conditions[this.state.condition]}
      </div>
    );
  }
}

export default Repairable;
