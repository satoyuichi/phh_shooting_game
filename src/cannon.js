class Cannon {
  constructor (position) {
    this._position = position;
  }

  fire () {
    this._bullets = new Bullet ();
  }
}
