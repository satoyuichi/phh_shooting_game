export class Weapon {
  constructor (position) {
    this._position = position;
    this._bullets = [];
    this._fireInterval = 0.3;       // 発射間隔
    this._prevFireFrameCount = 0.0; // 発射してからのフレームカウント
  }

  fire (frameCount) {
    if ((this._prevFireFrameCount + this._fireInterval) <= frameCount) {
      this._bullets.push (new Bullet ());
      this._prevFireFrameCount = frameCount;
    }
  }
}
