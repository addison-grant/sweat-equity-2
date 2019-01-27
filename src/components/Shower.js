import React, { Component } from 'react';
import Repairable from './Repairable.js';
import ShowerImg1 from '../img/Shower/bathtub.png';
import ShowerImg2 from '../img/bed.png';
import ShowerImg3 from '../img/clock.png';
import ShowerImg4 from '../img/palmTree.png';

class Shower extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Destroyed',
          'Flooded',
          'Leaky',
          'Working'
        ]}
        displayName='Shower'
        stateImages={[
          ShowerImg4,
          ShowerImg3,
          ShowerImg2,
          ShowerImg1
        ]}
        stateTransitionTimes={[
          8,
          15,
          10
        ]}
        {...this.props}
      />
    );
  }
}

export default Shower;

