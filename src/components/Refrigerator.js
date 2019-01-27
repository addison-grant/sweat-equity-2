import React, { Component } from 'react';
import Repairable from './Repairable.js';
import RefrigImg1 from '../img/refrig.png';
import RefrigImg2 from '../img/palmTree.png';
import RefrigImg3 from '../img/dog.png';
import RefrigImg4 from '../img/rug.png';

class Sink extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Destroyed',
          'Flooded',
          'Leaky',
          'Working'
        ]}
        nextStateAge={10}
        displayName='Refrigerator'
        image={RefrigImg1}
        stateImages={[
          RefrigImg1,
          RefrigImg2,
          RefrigImg3,
          RefrigImg4,
        ]}
        {...this.props}
      />
    );
  }
}

export default Refrig;
