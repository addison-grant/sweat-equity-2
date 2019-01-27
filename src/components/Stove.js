import React, { Component } from 'react';
import Repairable from './Repairable.js';
import StoveGif from '../img/Stove/stove.gif';

class Stove extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Working'
        ]}
        displayName='Stove'
        stateImages={[
          StoveGif
        ]}
        stateTransitionTimes={[]}
        {...this.props}
      />
    );
  }
}

export default Stove;
