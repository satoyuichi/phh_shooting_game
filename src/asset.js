export class Asset {
  constructor (assets) {
    this._assets = assets;
  }

  load () {
    for (var key of Object.keys (this._assets)) {
      var img = loadImage(this._assets[key]);
    }
  }
}
