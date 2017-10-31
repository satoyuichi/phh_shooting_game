import { Sprite } from './sprite.js';

export class DisplayObject extends Sprite {
  constructor (condition) {
    super ();
    this._position = new p5.Vector (condition.x, condition.y, 0.0);
    this._frameCount = 0.0;     // 出現してからのフレーム数
    this._velocity = new p5.Vector (0, 1.0, 0); // 速度
    this._isDead = false;                       // 死亡フラグ
  }

  draw () {
    if (this._image) {
      image (this._image, this._position.x, this._position.y, 32, 32);
    }
  }

  step (frameStep) {
  }
}
