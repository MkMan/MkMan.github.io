import * as React from 'react';

import { PictureTextComponent } from '../picture-text/picture-text.comp';
import './skills.comp.scss';

export class SkillsComponent extends React.Component {


  render() {
    return(
      <div className="skills-component">
        <PictureTextComponent text="Angular" logo="angular"/>
        <PictureTextComponent text="JavaScript" logo="js"/>
        {this.getOtherSkills()}
      </div>
    );
  }

  getOtherSkills(): React.ReactNode {
    const otherSkills = [
      'Git'
    ];

    const returnVal: React.ReactNode[] = [];

    otherSkills.forEach((skill) => {
      returnVal.push(
        <p>{skill}</p>
      );
    });

    return returnVal;
  }
}
