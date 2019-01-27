import React, { Component } from 'react';

class Repairable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: this.props.conditions.length - 1,
      startDate: new Date(),
      currentDate: new Date(),
      age: 0
    }

    this.state.nextStateAge = this.getTransitionTime(this.state.condition);
    this.handleClick = this.handleClick.bind(this);
    this.getTransitionTime = this.getTransitionTime.bind(this);

    setInterval(() => {
      const newDate = new Date();
      const newAge = Math.round((this.state.currentDate - this.state.startDate) / 1000);
      this.setState({
        currentDate: newDate,
        age: newAge
      });
      if (newAge > this.state.nextStateAge && this.state.condition > 0) {
        const nextCondition = this.state.condition - 1;
        const nextTransitionTime = this.getTransitionTime(nextCondition);
        this.setState({
          nextStateAge: this.state.age + nextTransitionTime,
          condition: nextCondition
        }, this.updateScore);
      }
    }, 1000);

    this.updateScore();
  }

  getTransitionTime(condition) {
    if (this.props.stateTransitionTimes.length === 0
     || condition < 1) {
      return 0;
    }
    const rand = Math.random() + 0.5;
    const base = this.props.stateTransitionTimes[condition - 1];
    return Math.round(rand * base);
  }

  updateScore() {
    this.props.updateScore(this.getCondition(), this.getMaxPossibleCondition());
  }

  handleClick() {
    const nextCondition = this.props.conditions.length - 1;
    const nextTransitionTime = this.getTransitionTime(nextCondition);
    this.setState({
      nextStateAge: this.state.age + nextTransitionTime,
      condition: nextCondition
    }, this.updateScore);
  }

  getCondition() {
    return this.state.condition;
  }

  getMaxPossibleCondition() {
    return this.props.conditions.length - 1;
  }

  render() {
    /*
    const printDebugInfo = () => (
      <div>
        {this.props.displayName}
        <br />
        Age: {this.state.age}
        <br />
        {this.props.conditions[this.state.condition]}
      </div>
    )
    */
    return (
      <div className={this.props.displayName}
        onClick={this.handleClick}
        style={{backgroundImage: `url(${this.props.stateImages[this.state.condition]})`}}
      >
      </div>
    );
  }
}

export default Repairable;
