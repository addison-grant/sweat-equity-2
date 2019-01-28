import React, { Component } from 'react';
import Repairable from './Repairable.js';
import RefrigImg3 from '../img/Refrigerator/refrig.png';
import RefrigImg2 from '../img/PalmTree/palmTree.png';
import RefrigImg1 from '../img/Dog/dog.png';

class Refrigerator extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Destroyed',
          'Broken',
          'Working'
        ]}
        nextStateAge={10}
        displayName='Refrigerator'
        image={RefrigImg1}
        stateImages={[
          RefrigImg1,
          RefrigImg2,
          RefrigImg3
        ]}
        stateTransitionTimes={[
          15,
          20,
          3
        ]}
        {...this.props}
      />
    );
  }
}

export default Refrigerator;
