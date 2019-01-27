import React, { Component } from 'react';
import Repairable from './Repairable.js';
import ToiletImg1 from '../img/Toilet/toilet1/toilet1.png';
import ToiletImg2 from '../img/Toilet/toilet2/anim.gif';
import ToiletImg3 from '../img/Toilet/toilet3/anim.gif';
import ToiletImg4 from '../img/Toilet/toilet4/anim.gif';

import ToiletSound2 from '../audio/Toilet/toilet-state-2.wav';
import ToiletSound3 from '../audio/Toilet/toilet-state-3.wav';

class Toilet extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Exploding',
          'Fountaining',
          'Leaking',
          'Working'
        ]}
        displayName='Sink'
        stateImages={[
          ToiletImg4,
          ToiletImg3,
          ToiletImg2,
          ToiletImg1
        ]}
        stateTransitionTimes={[
          5,
          10,
          12
        ]}
        stateTransitionSounds={[
          ToiletSound3,
          ToiletSound3,
          ToiletSound2
        ]}
        {...this.props}
      />
    );
  }
}

export default Toilet;
