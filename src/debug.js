let debug_single_instance = null;

export class Debug {
  constructor () {
    if (!debug_single_instance) {
      debug_single_instance = this;
    }

    return debug_single_instance;
  }

  get instance () {
    if (!debug_single_instance) {
      debug_single_instance = new Asset ();
    }

    return debug_single_instance;
  }
}
