import * as React from 'react';
import ReactDOM from 'react-dom';

import { SkillsComponent } from './components/skills/skills.comp';

import { IntroComponent } from './components/intro/intro.comp';
import './index.scss';

class AppShell extends React.Component {

  public render() {
    return (
      <div className="app-component">
        <IntroComponent/>
        <SkillsComponent />
      </div>
    );
  }
}

ReactDOM.render(
  <AppShell />,
  document.querySelector('app-root'),
);
