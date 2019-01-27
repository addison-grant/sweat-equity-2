import React, { Component } from 'react';
import Repairable from './Repairable.js';
import SinkImg1 from '../img/Sink/sink.png';
import SinkImg2 from '../img/Sink/sinkLeaky.png';
import SinkImg3 from '../img/Sink/sinkFlooded.png';
import SinkImg4 from '../img/Sink/sinkDestroyed.png';

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
        displayName='Sink'
        stateImages={[
          SinkImg4,
          SinkImg3,
          SinkImg2,
          SinkImg1
        ]}
        stateTransitionTimes={[
          15,
          15,
          15
        ]}
        {...this.props}
      />
    );
  }
}

export default Sink;
