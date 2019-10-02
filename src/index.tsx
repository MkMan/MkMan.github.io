import React from 'react';
import ReactDOM from 'react-dom';
// import AboutMe from './components/about-me/controller';

import './index.scss';
import myImage from './assets/images/me.jpg';

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
        {/* <AboutMe /> */}
      </div>
    );
  }
}

ReactDOM.render(
  <AppShell />,
  document.querySelector('app-root')
);