let single_instance = null;

export class Asset {

  constructor () {
    if(!single_instance) {
      single_instance = this;
      single_instance.initStandardAssets ();
      single_instance._advancedAssets = {};
    }

    return single_instance;
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
    if (!single_instance) {
      single_instance = new Asset ();
    }

    return single_instance;
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
    for (var key of Object.keys (this._standardAssets)) {
      let asset = this._standardAssets[key];
      switch (asset.type) {
      case Asset.RESOURCE_TYPE_IMAGE:
        asset.resource = loadImage(asset.url);
        break;
      }
    }

    for (var key of Object.keys (this._advancedAssets)) {
      let asset = this._advancedAssets[key];
      switch (asset.type) {
      case Asset.RESOURCE_TYPE_IMAGE:
        asset.resource = loadImage(asset.url);
        break;
      }
    }
  }
}
