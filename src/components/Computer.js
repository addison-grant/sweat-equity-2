import React, { Component } from 'react';
import Repairable from './Repairable.js';
import Computer1 from '../img/Computer/computerWorking.gif';
import Computer2 from '../img/Computer/computerBroken.gif';
import Computer3 from '../img/Computer/computerDestroyed.gif';

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


