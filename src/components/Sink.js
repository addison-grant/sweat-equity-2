import React, { Component } from 'react';
import Repairable from './Repairable.js';
import SinkImg1 from '../img/sink.png';
import SinkImg2 from '../img/palmTree.png';
import SinkImg3 from '../img/refrig.png';
import SinkImg4 from '../img/rug.png';

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
        displayName='Sink'
        stateImages={[
          SinkImg1,
          SinkImg2,
          SinkImg3,
          SinkImg4,
        ]}
        stateTransitionTimes={[
          10,
          3,
          5
        ]}
        {...this.props}
      />
    );
  }
}

export default Sink;
