import * as React from 'react';

import { PictureTextComponent } from '../picture-text/picture-text.comp';
import './skills.comp.scss';

export class SkillsComponent extends React.Component {

  public render() {
    return(
      <div className="skills-component">
        <PictureTextComponent text="Angular" logo="angular"/>
        <PictureTextComponent text="JavaScript" logo="js"/>
        <ul className="other-skills">
          {this.getOtherSkills()}
        </ul>
      </div>
    );
  }

  private getOtherSkills(): React.ReactNode {
    const otherSkills = [
      'TypeScript',
      'CSS',
      'SCSS',
      'Jasmine',
      'Karma',
      'Protractor',
      'Git',
      'Cypress',
      'Webpack',
      'Python',
      'Java',
    ];

    const returnVal: React.ReactNode[] = [];

    otherSkills.forEach((skill) => {
      returnVal.push(
        <li>{skill}</li>,
      );
    });

    return returnVal;
  }
}
