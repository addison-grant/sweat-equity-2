import React, { Component } from 'react';
import Repairable from './Repairable.js';
import RefrigImg4 from '../img/Refrigerator/refrig.png';
import RefrigImg3 from '../img/Refrigerator/refrigDamaged.png';
import RefrigImg2 from '../img/Refrigerator/refrigDying.png';
import RefrigImg1 from '../img/Refrigerator/refrigDead.png';

class Refrigerator extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'On Fire',
          'Sparking',
          'Broken',
          'Working'
        ]}
        nextStateAge={10}
        displayName='Refrigerator'
        image={RefrigImg1}
        stateImages={[
          RefrigImg1,
          RefrigImg2,
          RefrigImg3,
          RefrigImg4
        ]}
        stateTransitionTimes={[
          10,
          10,
          3
        ]}
        {...this.props}
      />
    );
  }
}

export default Refrigerator;
