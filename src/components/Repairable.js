import React, { Component } from 'react';
import {Howl} from 'howler';
import RepairSound from '../audio/tickRepair.mp3';

class Repairable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: this.props.conditions.length - 1 -
       this.props.initialConditionReduction,
      startDate: new Date(),
      currentDate: new Date(),
      age: 0
    }

    this.repairSound = new Howl({
      src: [RepairSound]
    });

    this.sounds = [];

    if (this.props.stateTransitionSounds) {
      this.sounds = this.props.stateTransitionSounds.map(path => new Howl({
        src: [path]
      }));
    }

    this.getTransitionTime = this.getTransitionTime.bind(this);
    this.state.nextStateAge = this.props.startDelay + this.getTransitionTime(this.state.condition);
    this.handleClick = this.handleClick.bind(this);
    this.playTransitionSound = this.playTransitionSound.bind(this);

    setInterval(() => {
      const newDate = new Date();
      const newAge = Math.round((this.state.currentDate - this.state.startDate) / 1000);
      this.setState({
        currentDate: newDate,
        age: newAge
      });
      if (newAge > this.state.nextStateAge && this.state.condition > 0) {
        // Decay happens here.
        const nextCondition = this.state.condition - 1;
        const nextTransitionTime = this.getTransitionTime(nextCondition);
        this.playTransitionSound(nextCondition);
        this.setState({
          nextStateAge: this.state.age + nextTransitionTime,
          condition: nextCondition
        }, this.updateScore);
      }
    }, 200);

    this.updateScore();
  }

  componentDidMount() {
    // Preload images
    this.props.stateImages.forEach(stateImage => {
      const img = new Image();
      img.src = stateImage;
    });
  }

  playTransitionSound(condition) {
    if (condition >= this.sounds.length || condition < 0) {
      return;
    }

    this.sounds[condition].play();
  }

  getTransitionTime(condition) {
    if (this.props.stateTransitionTimes.length === 0
     || condition < 1) {
      return 0;
    }
    const rand = Math.random() + 0.5;
    const base = this.props.stateTransitionTimes[condition - 1];
    return rand * base;
  }

  updateScore() {
    this.props.updateScore(this.getCondition(), this.getMaxPossibleCondition());
  }

  handleClick() {
    const maxCondition = this.props.conditions.length - 1;

    if (this.state.condition === 0) {
      console.log("Can't repair destroyed obj");
    } else if (this.state.condition === maxCondition) {
      console.log("Preventative Maintenance");
    } else {
      const nextTransitionTime = this.getTransitionTime(maxCondition);
      this.repairSound.play();
      this.props.incrementRepairCount();
      this.setState({
        nextStateAge: this.state.age + nextTransitionTime,
        condition: maxCondition
      }, this.updateScore);
    }
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
