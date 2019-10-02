import * as React from 'react';

import { PictureTextProps } from './picture-text.model';
import './picture-text.style.scss';

export class PictureTextComponent extends React.Component {
  props: PictureTextProps;

  render() {

    return  (
      <p>{this.props.text}</p>
    );
  }
}
