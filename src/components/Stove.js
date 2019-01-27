import React, { Component } from 'react';
import Repairable from './Repairable.js';
import Stove1 from '../img/Stove/stove.gif';
import Stove2 from '../img/Stove/stoveHalfOut.gif';
import Stove3 from '../img/Stove/stoveThreeFourthsOut.gif';
import Stove4 from '../img/Stove/stoveOut.gif';

import StoveSound2 from '../audio/Stove/oven-state-2.wav';
import StoveSound3 from '../audio/Stove/oven-state-3.wav';
import StoveSound4 from '../audio/Stove/oven-state-4.wav';

class Stove extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Destroyed',
          'Broken',
          'Damaged',
          'Working'
        ]}
        displayName='Stove'
        stateImages={[
          Stove4,
          Stove3,
          Stove2,
          Stove1
        ]}
        stateTransitionTimes={[
          10,
          10,
          20
        ]}
        stateTransitionSounds={[
          StoveSound4,
          StoveSound3,
          StoveSound2
        ]}
        {...this.props}
      />
    );
  }
}

export default Stove;
