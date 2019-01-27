import React, { Component } from 'react';
import Repairable from './Repairable.js';
import StoveGif from '../img/stove/stove.gif';

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
