import React, { Component } from 'react';
import Repairable from './Repairable.js';
import ToiletImg1 from '../img/Toilet/toilet1/toilet1.png';
import ToiletImg2 from '../img/Toilet/toilet2/anim.gif';
import ToiletImg3 from '../img/Toilet/toilet3/anim.gif';
import ToiletImg4 from '../img/Toilet/toilet4/anim.gif';

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
          15
        ]}
        {...this.props}
      />
    );
  }
}

export default Toilet;
