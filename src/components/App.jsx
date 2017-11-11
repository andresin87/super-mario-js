/**
 * Company: Redpoints.
 * Website: www.redpoints.com
 * Date: 11/11/2017
 * Project: super-mario-js
 * Description: The description here
 */

import React, { Component } from 'react';

// classes
import SpriteSheet from './classes/SpriteSheet';

// helpers
import { loadImage } from './helpers/loaders/loadImage';
import { loadLevel } from './helpers/loaders/loadLevel';

import { drawBackground } from './helpers/drawBackground';

let tiles = require('../images/tiles.png');

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 640,
      height: 640,
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const { width, height } = this.state;
    this.canvas = document.getElementById('screen');
    this.context = this.canvas.getContext('2d');
    this.context.fillRect(0, 0, width, height);

    loadImage(tiles).then(image => {
      const sprites = new SpriteSheet(image, 16, 16);
      sprites.define('ground', 0, 0);
      sprites.define('sky', 3, 23);


      loadLevel('1-1').then((level) => {
        level.backgrounds.forEach((background) => {
          drawBackground(background, this.context, sprites);
        });
      });
    });
  }

  render() {
    const { width, height } = this.state;
    return (
      <canvas
        id={'screen'}
        ref={(c) => { this.canvas = c; }}
        width={width}
        height={height}
      />
    );
  }
}

export default AppComponent;
