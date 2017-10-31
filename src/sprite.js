export class Sprite {
  constructor () {
    this._position = new p5.Vector (0, 0, 0); // 描画位置
    this._image = null;
  }

  draw () {
    ellipse(this._position.x, this._position.y, 25, 25);
  }

  set position (value) {
    this._position = value;
  }

  static get OUT_OF_SCREEN () {
    return 200;
  }

  isOverScreen () {
    let isOver = false;

    if (this._position.x < -Sprite.OUT_OF_SCREEN) {
      isOver = true;
    }

    if (this._position.x > (width + Sprite.OUT_OF_SCREEN)) {
      isOver = true;
    }

    if (this._position.y < -Sprite.OUT_OF_SCREEN) {
      isOver = true;
    }
    
    if (this._position.y > (height + Sprite.OUT_OF_SCREEN)) {
      isOver = true;
    }
    
    return isOver;
  }
}
