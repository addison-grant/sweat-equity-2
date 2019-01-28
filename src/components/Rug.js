import React, { Component } from 'react';
import Repairable from './Repairable.js';
import Rug1 from '../img/Rug/rug.png';
import Rug2 from '../img/Rug/rug.png';
import Rug3 from '../img/Sink/sinkDestroyed.png';

import RugSound2 from '../audio/Rug/rug-state-2.wav';

class Rug extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Burning',
          'Dirty',
          'Clean'
        ]}
        displayName='Rug'
        stateImages={[
          Rug3,
          Rug2,
          Rug1
        ]}
        stateTransitionTimes={[
          10,
          20
        ]}
        stateTransitionSounds={[
          RugSound2
        ]}
        {...this.props}
      />
    );
  }
}

export default Rug;

