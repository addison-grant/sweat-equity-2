import React, { Component } from 'react';
import Repairable from './Repairable.js';
import Dog1 from '../img/Dog/dog.png';
import Dog2 from '../img/Dog/dogPrompt.png';
import Dog3 from '../img/Dog/flower.png';

class Dog extends Component {
  render() {
    return (
      <Repairable
        conditions={[
          'Dead',
          'MustUrinate',
          'Comfortable'
        ]}
        displayName='Stove'
        stateImages={[
          Dog3,
          Dog2,
          Dog1
        ]}
        stateTransitionTimes={[
          30,
          30,
          15
        ]}
        {...this.props}
      />
    );
  }
}

export default Dog;

