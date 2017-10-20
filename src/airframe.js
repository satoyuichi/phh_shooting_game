import { Weapon } from './weapon.js';
import { Sprite } from './sprite.js';
import { Asset } from './asset.js';

export class Airframe extends Sprite {
  constructor (condition) {
    super ();
    this._position = new p5.Vector (condition.x, condition.y, 0.0);
    this._frameCount = 0.0;     // 出現してからのフレーム数
    this._velocity = new p5.Vector (0, 1.0, 0); // 速度
    this._weapon = new Weapon (this._position); // 武器
    this._isDead = false;                       // 死亡フラグ
    this._isKilled = false;                     // 殺されたフラグ
    this._hp = 1.0;                             // HP

    let asset = new Asset ();
    this._image = asset.getAsset ('enemy');
  }

  draw () {
    image (this._image, this._position.x, this._position.y, 32, 32);
  }

  fireNormal () {
    this._weapon.fire (this._frameCount);
  }

  step (frameStep) {
    this._position.add (this._velocity);
    
    // 画面外に出た時の処理をする
    if (this.isOverScreen ()) {
      this._isDead = true;
    }

    this._frameCount += frameStep;
  }
}
