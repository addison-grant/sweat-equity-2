import React, { Component } from 'react';
import Repairable from './Repairable.js';
import SinkImg1 from '../img/Sink/sink.png';
import SinkImg2 from '../img/Sink/sinkLeaky.png';
import SinkImg3 from '../img/Sink/sinkFlooded.png';
import SinkImg4 from '../img/Sink/sinkDestroyed.png';

import SinkSound2 from '../audio/Sink/sink-state-2.wav';
import SinkSound3 from '../audio/Sink/sink-state-3.wav';
import SinkSound4 from '../audio/Sink/sink-state-4.wav';

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
          10,
          8
        ]}
        stateTransitionSounds={[
          SinkSound4,
          SinkSound3,
          SinkSound2
        ]}
        {...this.props}
      />
    );
  }
}

export default Sink;
