let asset_single_instance = null;

export class Asset {

  constructor () {
    if (!asset_single_instance) {
      asset_single_instance = this;
      asset_single_instance.initStandardAssets ();
      asset_single_instance._advancedAssets = {};
    }

    return asset_single_instance;
  }

  initStandardAssets () {
    this.instance._standardAssets = {
      bullet : { type : Asset.RESOURCE_TYPE_IMAGE,
                 url : "http://4.bp.blogspot.com/-J72gjEjMTw0/VJF_TYOe0KI/AAAAAAAAp1Q/jdOBqLRkEro/s150/ball02_white.png",
               },
      enemy : { type : Asset.RESOURCE_TYPE_IMAGE,
                url : "http://1.bp.blogspot.com/-8vjnbp_AXMM/USSkq9AIKTI/AAAAAAAANV0/PQ6FLf-xUks/s400/alien_ufo.png",
              },
      mine: { type : Asset.RESOURCE_TYPE_IMAGE,
              url : "http://1.bp.blogspot.com/-b61DOaSM_q4/VRUS1r55baI/AAAAAAAAswg/WQSc3snquok/s400/space_kikansen.png",
            },
    };
  }

  set advancedAssets (val) {
    this.instance._advancedAssets = val;
  }

  get instance () {
    if (!asset_single_instance) {
      asset_single_instance = new Asset ();
    }

    return asset_single_instance;
  }

  static get RESOURCE_TYPE_IMAGE () {
    return "image";
  }

  getAsset (key) {
    if(this._standardAssets.hasOwnProperty (key)) {
      return this._standardAssets[key].resource;
    }

    if (this._advancedAssets.hasOwnProperty (key)) {
      return this._advancedAssets[key].resource;
    }

    return null;
  }

  load () {
    this.loadImages (this._standardAssets);
    this.loadImages (this._advancedAssets);
  }

  loadImages (assetNames) {
    for (var key of Object.keys (assetNames)) {
      let asset = assetNames[key];
      switch (asset.type) {
      case Asset.RESOURCE_TYPE_IMAGE:
        asset.resource = loadImage(asset.url);
        break;
      }
    }
  }
}
