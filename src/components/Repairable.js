import React, { Component } from 'react';

class Repairable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: this.props.conditions.length - 1,
      startDate: new Date(),
      currentDate: new Date(),
      age: 0,
      nextStateAge: this.props.nextStateAge
    }

    this.state.nextStateAge = this.props.stateTransitionTimes[this.state.condition - 1];

    this.handleClick = this.handleClick.bind(this);

    setInterval(() => {
      const newDate = new Date();
      const newAge = Math.round((this.state.currentDate - this.state.startDate) / 1000);
      this.setState({
        currentDate: newDate,
        age: newAge
      });
      if (newAge > this.state.nextStateAge && this.state.condition > 0) {
        const nextCondition = this.state.condition - 1;
        // Yes, -1 twice.
        const nextTransitionTime = this.props.stateTransitionTimes[nextCondition - 1];
        this.setState({
          nextStateAge: this.state.age + nextTransitionTime,
          condition: nextCondition
        });
      }
    }, 1000);
  }

  handleClick() {
    const nextCondition = this.props.conditions.length - 1;
    const nextTransitionTime = this.props.stateTransitionTimes[nextCondition - 1];
    this.setState({
      nextStateAge: this.state.age + nextTransitionTime,
      condition: nextCondition
    });
  }

  render() {
    return (
      <div className={this.props.displayName}
        onClick={this.handleClick}
        style={{backgroundImage: `url(${this.props.stateImages[this.state.condition]})`}}
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
