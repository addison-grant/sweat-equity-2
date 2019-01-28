import React, { Component } from 'react';
import Repairable from './Repairable.js';
import TreeImg4 from '../img/PalmTree/palmTree.png';
import TreeImg3 from '../img/PalmTree/palmTreeBroken.png';
import TreeImg2 from '../img/PalmTree/palmTreeDying.png';
import TreeImg1 from '../img/PalmTree/palmTreeFire.png';

import TreeSound3 from '../audio/Tree/tree-state-3.wav';

class Tree extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Burning',
          'Dying',
          'Broken',
          'Healthy'
        ]}
        nextStateAge={10}
        displayName='Tree'
        image={TreeImg1}
        stateImages={[
          TreeImg1,
          TreeImg2,
          TreeImg3,
          TreeImg4
        ]}
        stateTransitionTimes={[
          15,
          20,
          10,
          5
        ]}
        stateTransitionSounds={[
          TreeSound3,
          TreeSound3
        ]}
        {...this.props}
      />
    );
  }
}

export default Tree;
