import React, { Component } from 'react';
import Repairable from './Repairable.js';
import Computer1 from '../img/Computer/computer.png';
import Computer2 from '../img/rug.png';
import Computer3 from '../img/man.png';

class Computer extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Destroyed',
          'Broken',
          'Working'
        ]}
        displayName='Computer'
        stateImages={[
          Computer3,
          Computer2,
          Computer1
        ]}
        stateTransitionTimes={[
          50,
          8
        ]}
        {...this.props}
      />
    );
  }
}

export default Computer;


