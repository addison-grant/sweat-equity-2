import React, { Component } from 'react';
import {Howl} from 'howler';
import RepairSound from '../audio/tickRepair.wav';
import DenyActionSound from '../audio/cannot-act.wav';
import ReactTooltip from 'react-tooltip';

class Repairable extends Component {
  constructor(props) {
      // 20 percent of household items start in "used" state.
    super(props);
    this.state = {
      condition: this.props.conditions.length - 1 -
       this.props.initialConditionReduction,
      startDate: new Date(),
      currentDate: new Date(),
      age: 0,
      displayName: this.props.displayName,
      tooltipMessage: this.props.displayName + " in working condition",
      intervalId: ''
    }

    this.state.tooltipMessage = this.props.displayName + ": " +
     this.props.conditions[this.state.condition];

    this.repairSound = new Howl({
      src: [RepairSound]
    });

    this.denyActionSound = new Howl({
      src: [DenyActionSound]
    });

    this.sounds = [];

    if (this.props.stateTransitionSounds) {
      this.sounds = this.props.stateTransitionSounds.map(path => new Howl({
        src: [path]
      }));
    }

    //pass context "this" for access
    this.getTransitionTime = this.getTransitionTime.bind(this);
    this.playTransitionSound = this.playTransitionSound.bind(this);
    this.handleClick = this.handleClick.bind(this);   
    this.state.nextStateAge = this.props.startDelay + this.getTransitionTime(this.state.condition);
    
    
    this.state.intervalId = setInterval(() => {
      const newDate = new Date();
      const newAge = Math.round((this.state.currentDate - this.state.startDate) / 1000);
      this.setState({
        currentDate: newDate,
        age: newAge
      });
      if (newAge > this.state.nextStateAge && this.state.condition > 0) {
        // Decay happens here.
        const nextCondition = this.state.condition - 1;
        let nextTooltipMessage =
         this.props.displayName + ": " + this.props.conditions[nextCondition];
        if (nextCondition === 0) {
          nextTooltipMessage += " (Beyond Repair)";
        }
        const nextTransitionTime = this.getTransitionTime(nextCondition);
        this.playTransitionSound(nextCondition);
        this.setState({
          nextStateAge: this.state.age + nextTransitionTime,
          condition: nextCondition,
          tooltipMessage: nextTooltipMessage
        });
      }
    }, 200);
  }

  // The React website recommended switching to the below method
  // instead of a callback on setInterval. 
  
  componentDidUpdate(){
      this.updateScore();
  }

  componentDidMount() {
    // Preload images
    this.props.stateImages.forEach(stateImage => {
      const img = new Image();
      img.src = stateImage;
    });
  }
  
  componentWillUnmount() {
      window.clearInterval(this.state.intervalId);
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
      this.denyActionSound.play();
    } else if (this.state.condition === maxCondition) {
      console.log("Preventative Maintenance");
      this.denyActionSound.play();
    } else {
      const nextTransitionTime = this.getTransitionTime(maxCondition);
      this.repairSound.play();
      this.props.incrementRepairCount();
      const nextTooltipMessage =
       this.props.displayName + ": " + this.props.conditions[maxCondition];
      this.setState({
        nextStateAge: this.state.age + nextTransitionTime,
        condition: maxCondition,
        tooltipMessage: nextTooltipMessage
      }, () => {
        this.updateScore();
        ReactTooltip.hide();
      });
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
        data-tip={this.state.tooltipMessage}
      >
      </div>
    );
  }
}

export default Repairable;