export class Sprite {
  constructor () {
    this._position = new p5.Vector (0, 0, 0);
  }

  draw () {
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
