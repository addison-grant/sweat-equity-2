import React, { Component } from 'react';
import Repairable from './Repairable.js';
import BedImg4 from '../img/Bed/bed.png';
import BedImg3 from '../img/Bed/bedHalf.png';
import BedImg2 from '../img/Bed/bedThreeFourths.png';
import BedImg1 from '../img/Bed/bedOut.png';

import BedSound2 from '../audio/Bed/blanket-state-2.wav';
import BedSound3 from '../audio/Bed/blanket-state-3.wav';

class Bed extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Destroyed',
          'Dirty',
          'Messy',
          'Made'
        ]}
        nextStateAge={10}
        displayName='Bed'
        image={BedImg1}
        stateImages={[
          BedImg1,
          BedImg2,
          BedImg3,
          BedImg4,
        ]}
        stateTransitionTimes={[
          15,
          20,
          5
        ]}
        stateTransitionSounds={[
          BedSound3,
          BedSound2,
          BedSound2
        ]}
        {...this.props}
      />
    );
  }
}

export default Bed;

