import React, { Component } from 'react';
import Repairable from './Repairable.js';
import Rug1 from '../img/Rug/rugDead.png';
import Rug2 from '../img/Rug/rugDying.png';
import Rug3 from '../img/Rug/rugDamaged.png';
import Rug4 from '../img/Rug/rug.png';

import RugSound2 from '../audio/Rug/rug-state-2.wav';

class Rug extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Shredded',
          'Tattered',
          'Dirty',
          'Clean'
        ]}
        displayName='Rug'
        stateImages={[
          Rug1,
          Rug2,
          Rug3,
          Rug4
        ]}
        stateTransitionTimes={[
          10,
          20,
          10
        ]}
        stateTransitionSounds={[
          RugSound2,
          RugSound2,
          RugSound2
        ]}
        {...this.props}
      />
    );
  }
}

export default Rug;

