import React, { Component } from 'react';
import Repairable from './Repairable.js';
import Stove1 from '../img/Stove/stove.gif';
import Stove2 from '../img/Stove/stoveHalfOut.gif';
import Stove3 from '../img/Stove/stoveThreeFourthsOut.gif';
import Stove4 from '../img/Stove/stoveOut.gif';

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
        {...this.props}
      />
    );
  }
}

export default Stove;
