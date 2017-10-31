import { Weapon } from './weapon.js';
import { DisplayObject } from './display_object.js';
import { Asset } from './asset.js';

export class Airframe extends DisplayObject {
  constructor (condition) {
    super (condition);
    this._weapon = new Weapon (this._position, condition.stage); // 武器
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

    this.fireNormal ();
    
    // 画面外に出た時の処理をする
    if (this.isOverScreen ()) {
      this._isDead = true;
    }

    this._frameCount += frameStep;
  }
}
