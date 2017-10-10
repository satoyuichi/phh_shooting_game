'use strict';
import { Controller } from './controller.js';
import { Stage } from './stage.js';

export class Main {
  constructor () {
    this._frameCount = 0.0;
    this._frameStep = 1.0;
    this._controller = new Controller ();
    this._stage = new Stage ();
  }

  set frameStep (value) {
    this._frameStep = value;
  }
  
  step () {
    this._stage.step (this._frameStep);
    this._frameCount += this._frameStep;
  }
}
