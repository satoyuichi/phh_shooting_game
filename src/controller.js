let controller_single_instance = null;

export class Controller {
  constructor () {
    if (!controller_single_instance) {
      controller_single_instance = this;
    }
    
    controller_single_instance.initConstantValues ();
    controller_single_instance.clearKey ();

    return controller_single_instance;
  }

  get instance () {
    if (!controller_single_instance) {
      controller_single_instance = new Controller ();
    }
    
    return controller_single_instance;
  }

  initConstantValues () {
    this.instance.KEY_TYPE_INVALID = 0;
    this.instance.KEY_TYPE_SHOT = this.instance.KEY_TYPE_INVALID + 1;
    this.instance.KEY_TYPE_DOWN = this.instance.KEY_TYPE_SHOT + 1;
    this.instance.KEY_TYPE_UP = this.instance.KEY_TYPE_DOWN + 1;
    this.instance.KEY_TYPE_LEFT = this.instance.KEY_TYPE_UP + 1;
    this.instance.KEY_TYPE_RIGHT = this.instance.KEY_TYPE_LEFT + 1,
    this.instance.KEY_TYPE_MAX = this.instance.KEY_TYPE_RIGHT + 1;

    this.instance.BIT_KEY_SHOT = 1 << this.instance.KEY_TYPE_SHOT;
    this.instance.BIT_KEY_DOWNKEY = 1 << this.instance.KEY_TYPE_DOWN;
    this.instance.BIT_KEY_UP = 1 << this.instance.KEY_TYPE_UP;
    this.instance.BIT_KEY_LEFT = 1 << this.instance.KEY_TYPE_LEFT;
    this.instance.BIT_KEY_RIGHT = 1 << this.instance.KEY_TYPE_RIGHT;
  }

  pressKey (key) {
    this.instance._pressedKey |= key;
  }

  clearKey () {
    this.instance._pressedKey = this.instance.KEY_TYPE_INVALID;
  }

  isPressed (key) {
    return (this.instance._pressedKey & key) === key;
  }
}
