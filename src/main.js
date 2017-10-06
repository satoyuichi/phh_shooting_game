'use strict';
// import { Airframe } from './airframe.js';
// import { Cannon } from './cannon.js';
// import { Bullet } from './bullet.js';
// import { Sprite } from './sprite.js';
import { Stage } from './stage.js';

export class Main {
  constructor () {
    this._frameCount = 0.0;
    this._frameStep = 1.0;
    this._stage = new Stage ();
  }

  set frameStep (value) {
    this._frameStep = value;
  }
  
  step () {
    this._frameCount += this._frameStep;
  }
}
