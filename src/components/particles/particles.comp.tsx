import * as React from 'react';
import Particles from 'react-particles-js';

import './particles.comp.scss';

export class ParticlesComponent extends React.Component {
  private params = {
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
    },
  };

  public render() {
    return (
      <Particles params={this.params} className="particles-container" />
    );
  }
}
