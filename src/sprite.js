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

  isOverScreen () {
    let isOver = false;

    if (this._position.x < -100) {
      isOver = true;
    }

    if (this._position.x > (width + 100)) {
      isOver = true;
    }

    if (this._position.y < -100) {
      isOver = true;
    }
    
    if (this._position.y > (height + 100)) {
      isOver = true;
    }
    
    return isOver;
  }
}
