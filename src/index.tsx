import * as React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import myImage from './assets/images/me.jpg';
import { PictureTextComponent } from './components/picture-text/picture-text.comp';

class AppShell extends React.Component {

  render() {
    return (
      <div className="app-component">
        <h1 className="user-name">Mustafa Mansour</h1>
        <h3 className="user-desc">Software developer</h3>
        <div className="user-picture-container">
          <img className="user-picture" src={myImage} alt=""></img>
        </div>
        <h2 className="section-heading">About me</h2>
        <PictureTextComponent text="hello" imagePath="sdds"/>
      </div>
    );
  }
}

ReactDOM.render(
  <AppShell />,
  document.querySelector('app-root')
);