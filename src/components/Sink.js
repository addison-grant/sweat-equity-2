import React, { Component } from 'react';
import Repairable from './Repairable.js';
import SinkImg from '../img/stove.png';

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
        image={SinkImg}
        {...this.props}
      />
    );
  }
}

export default Sink;
