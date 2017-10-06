export class Cannon {
  constructor (position) {
    this._position = position;
    this._bullets = [];
  }

  fire () {
    this._bullets.push (new Bullet ());
  }
}
