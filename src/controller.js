export class Controller {
  constructor () {
    this.initConstantValues ();
    this.clearKey ();
  }

  initConstantValues () {
    this.KEY_TYPE_INVALID = 0;
    this.KEY_TYPE_SHOT = this.KEY_TYPE_INVALID + 1;
    this.KEY_TYPE_DOWN = this.KEY_TYPE_SHOT + 1;
    this.KEY_TYPE_UP = this.KEY_TYPE_DOWN + 1;
    this.KEY_TYPE_LEFT = this.KEY_TYPE_UP + 1;
    this.KEY_TYPE_RIGHT = this.KEY_TYPE_LEFT + 1,
    this.KEY_TYPE_MAX = this.KEY_TYPE_RIGHT + 1;

    this.BIT_KEY_SHOT = 1 << this.KEY_TYPE_SHOT;
    this.BIT_KEY_DOWNKEY = 1 << this.KEY_TYPE_DOWN;
    this.BIT_KEY_UP = 1 << this.KEY_TYPE_UP;
    this.BIT_KEY_LEFT = 1 << this.KEY_TYPE_LEFT;
    this.BIT_KEY_RIGHT = 1 << this.KEY_TYPE_RIGHT;
  }

  pressKey (key) {
    this._pressedKey |= key;
  }

  clearKey () {
    this._pressedKey = this.KEY_TYPE_INVALID;
  }

  isPressed (key) {
    return (this._pressedKey & key) === key;
  }
}
