'use strict';
import { Controller } from './controller.js';
import { Stage } from './stage.js';
import { Asset } from './asset.js'

export class Main {
  constructor () {
    this._frameCount = 0.0;
    this._frameStep = 1.0;
    this._controller = new Controller ();
    this._stage = new Stage ();
    this._asset = new Asset ();
    this._asset.advancedAssets = this._stage.advancedAssets;
  }

  set frameStep (value) {
    this._frameStep = value;
  }

  preload () {
    this._asset.load ();
  }
  
  step () {
    this._stage.step (this._frameStep);
    this._frameCount += this._frameStep;
  }
}
