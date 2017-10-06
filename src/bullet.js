import { Sprite } from './sprite.js';

export class Bullet extends Sprite {
  constructor () {
    super ();
  }

  set group (value) {
    this._group = value;
  }

  isMyGroup (group) {
    return this._group === group;
  }
}
