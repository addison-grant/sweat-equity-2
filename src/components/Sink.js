import React, { Component } from 'react';
import Repairable from './Repairable.js';
import SinkImg1 from '../img/sink.png';
import SinkImg2 from '../img/sinkLeaky.png';
import SinkImg3 from '../img/sinkFlooded.png';
import SinkImg4 from '../img/sinkDestroyed.png';

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
        nextStateAge={3}
        displayName='Sink'
        stateImages={[
          SinkImg4,
          SinkImg3,
          SinkImg2,
          SinkImg1
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
