import { Cannon } from './cannon.js';
import { Sprite } from './sprite.js';

export class Airframe extends Sprite {
  constructor () {
    super ();
    this._frameCount = 0.0;
    this._velocity = new p5.Vector (0, 1.0, 0);
    this._cannon = new Cannon (this._position);
    this._isDead = false;
    this._isKilled = false;
    this._hp = 1.0;
  }

  fireNormal () {
//    this._cannon.fire ();
  }

  step (frameStep) {
    this._position.add (this._velocity);
    
    ellipse(this._position.x, this._position.y, 55, 55);

    if (this.isOverScreen ()) {
      this._isDead = true;
    }

    this._frameCount += frameStep;
  }
}
