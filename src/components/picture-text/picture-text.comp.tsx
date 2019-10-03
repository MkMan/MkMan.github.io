import * as React from 'react';
import { ReactNode } from 'react';

import { PictureTextProps } from './picture-text.model';
import { LogoComponent } from './logo/logo.comp';
import './picture-text.style.scss';


export class PictureTextComponent extends React.Component {
  props: PictureTextProps;

  render(): ReactNode {

    return  (
      <div className="picture-text-component">
        <LogoComponent logo={this.props.logo} className="picture-text-logo"/>
        <label>Angular</label>
      </div>
    );
  }
}
