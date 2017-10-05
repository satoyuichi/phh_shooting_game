export class Airframe extends Sprite {
  constructor () {
    super ();
    this._position = new p5.Vector (0, 0 , 0);
    this._cannon = new Cannon (this._position);
  }

  fireNormal () {
    this._cannon.fire ();
  }
}
