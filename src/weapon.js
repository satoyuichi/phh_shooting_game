import { Bullet } from './bullet.js';

export class Weapon {
  constructor (position, stage) {
    this._position = position;
    this._fireInterval = 30.0;       // 発射間隔
    this._prevFireFrameCount = 0.0; // 発射してからのフレームカウント
    this._stage = stage;
  }

  fire (frameCount) {
    if ((this._prevFireFrameCount + this._fireInterval) <= frameCount) {
      this._stage.pushBullet (new Bullet ({
        x: this._position.x,
        y: this._position.y,
      }));
      this._prevFireFrameCount = frameCount;
    }
  }
}
