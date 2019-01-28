import React, { Component } from 'react';
import Repairable from './Repairable.js';
import ShowerImg1 from '../img/Shower/shower1.gif';
import ShowerImg2 from '../img/Shower/shower2.gif';
import ShowerImg3 from '../img/Shower/shower3.gif';

class Shower extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Destroyed',
          'Leaky',
          'Working'
        ]}
        displayName='Shower'
        stateImages={[
          ShowerImg3,
          ShowerImg2,
          ShowerImg1
        ]}
        stateTransitionTimes={[
          8,
          10
        ]}
        {...this.props}
      />
    );
  }
}

export default Shower;

