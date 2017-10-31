import { DisplayObject } from './display_object.js';
import { Asset } from './asset.js';

export class Bullet extends DisplayObject {
  constructor (condition) {
    super (condition);
    this._velocity = new p5.Vector (0, 2.5, 0); // 速度

    let asset = new Asset ();
    this._image = asset.getAsset ('bullet');
  }

  set group (value) {
    this._group = value;
  }

  isMyGroup (group) {
    return this._group === group;
  }

  step (frameStep) {
    this._position.add (this._velocity);
  }
}
