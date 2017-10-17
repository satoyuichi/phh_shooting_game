export class Asset {
  
  constructor (assets) {
    this._assets = assets;
  }

  initConstantValues () {
  }

  static get RESOURCE_TYPE_IMAGE () {
    return "image";
  }

  load () {
    for (var key of Object.keys (this._assets)) {
      let asset = this._assets[key];
      switch (asset.type) {
      case Asset.RESOURCE_TYPE_IMAGE:
        asset.resource = loadImage(asset.url);
        break;
      }
    }
  }
}
