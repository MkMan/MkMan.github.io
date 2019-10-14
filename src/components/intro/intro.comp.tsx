import * as React from 'react';
import myImage from '../../assets/images/me.jpg';
import './intro.comp.scss';

export class IntroComponent extends React.Component {
  public render() {
    return (
      <div>
        <h1 className="user-name">Mustafa Mansour</h1>
        <h3 className="user-desc">Software developer</h3>
        <div className="user-picture-container">
          <img className="user-picture" src={myImage} alt="" />
        </div>
        <h2 className="section-heading">About me</h2>
      </div>
    );
  }
}
