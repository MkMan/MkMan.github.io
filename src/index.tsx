import * as React from 'react';
import ReactDOM from 'react-dom';

import { IntroComponent } from './components/intro/intro.comp';
import { ParticlesComponent } from './components/particles/particles.comp';
import './index.scss';

class AppShell extends React.Component {

  public render() {
    return (
      <div className="app-component">
        <ParticlesComponent/>
        <IntroComponent/>
      </div>
    );
  }
}

ReactDOM.render(
  <AppShell />,
  document.querySelector('app-root'),
);
