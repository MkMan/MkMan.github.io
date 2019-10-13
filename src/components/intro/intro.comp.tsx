import * as React from 'react';

import myImage from '../../assets/images/me.jpg';
import './intro.comp.scss';

export class IntroComponent extends React.Component {
  public render() {
    return (
      <div className="intro-component-wrapper">
        <h1 className="user-name">Mustafa Mansour</h1>
        <h2 className="user-desc">Software developer</h2>
        <div className="user-picture-container">
          <img className="user-picture" src={myImage} alt="" />
        </div>
      </div>
    );

  }
}
