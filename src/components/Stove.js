import React, { Component } from 'react';
import Repairable from './Repairable.js';
import Stove1 from '../img/Stove/stove.gif';
import Stove2 from '../img/Stove/stoveHalfout.png';
import Stove3 from '../img/Stove/stoveThreeFourthsOut.png';
import Stove4 from '../img/Stove/stoveOut.png';

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
          15,
          10,
          10
        ]}
        {...this.props}
      />
    );
  }
}

export default Stove;
