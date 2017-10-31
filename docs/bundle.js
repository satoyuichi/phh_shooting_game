require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Airframe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _weapon = require('./weapon.js');

var _display_object = require('./display_object.js');

var _asset = require('./asset.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Airframe = exports.Airframe = function (_DisplayObject) {
  _inherits(Airframe, _DisplayObject);

  function Airframe(condition) {
    _classCallCheck(this, Airframe);

    var _this = _possibleConstructorReturn(this, (Airframe.__proto__ || Object.getPrototypeOf(Airframe)).call(this, condition));

    _this._weapon = new _weapon.Weapon(_this._position, condition.stage); // 武器
    _this._isKilled = false; // 殺されたフラグ
    _this._hp = 1.0; // HP

    var asset = new _asset.Asset();
    _this._image = asset.getAsset('enemy');
    return _this;
  }

  _createClass(Airframe, [{
    key: 'draw',
    value: function draw() {
      image(this._image, this._position.x, this._position.y, 32, 32);
    }
  }, {
    key: 'fireNormal',
    value: function fireNormal() {
      this._weapon.fire(this._frameCount);
    }
  }, {
    key: 'step',
    value: function step(frameStep) {
      this._position.add(this._velocity);

      this.fireNormal();

      // 画面外に出た時の処理をする
      if (this.isOverScreen()) {
        this._isDead = true;
      }

      this._frameCount += frameStep;
    }
  }]);

  return Airframe;
}(_display_object.DisplayObject);

},{"./asset.js":2,"./display_object.js":6,"./weapon.js":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var asset_single_instance = null;

var Asset = exports.Asset = function () {
  function Asset() {
    _classCallCheck(this, Asset);

    if (!asset_single_instance) {
      asset_single_instance = this;
      asset_single_instance.initStandardAssets();
      asset_single_instance._advancedAssets = {};
    }

    return asset_single_instance;
  }

  _createClass(Asset, [{
    key: "initStandardAssets",
    value: function initStandardAssets() {
      this.instance._standardAssets = {
        bullet: { type: Asset.RESOURCE_TYPE_IMAGE,
          url: "http://4.bp.blogspot.com/-J72gjEjMTw0/VJF_TYOe0KI/AAAAAAAAp1Q/jdOBqLRkEro/s150/ball02_white.png"
        },
        enemy: { type: Asset.RESOURCE_TYPE_IMAGE,
          url: "http://1.bp.blogspot.com/-8vjnbp_AXMM/USSkq9AIKTI/AAAAAAAANV0/PQ6FLf-xUks/s400/alien_ufo.png"
        },
        mine: { type: Asset.RESOURCE_TYPE_IMAGE,
          url: "http://1.bp.blogspot.com/-b61DOaSM_q4/VRUS1r55baI/AAAAAAAAswg/WQSc3snquok/s400/space_kikansen.png"
        }
      };
    }
  }, {
    key: "getAsset",
    value: function getAsset(key) {
      if (this._standardAssets.hasOwnProperty(key)) {
        return this._standardAssets[key].resource;
      }

      if (this._advancedAssets.hasOwnProperty(key)) {
        return this._advancedAssets[key].resource;
      }

      return null;
    }
  }, {
    key: "load",
    value: function load() {
      this.loadImages(this._standardAssets);
      this.loadImages(this._advancedAssets);
    }
  }, {
    key: "loadImages",
    value: function loadImages(assetNames) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(assetNames)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var asset = assetNames[key];
          switch (asset.type) {
            case Asset.RESOURCE_TYPE_IMAGE:
              asset.resource = loadImage(asset.url);
              break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "advancedAssets",
    set: function set(val) {
      this.instance._advancedAssets = val;
    }
  }, {
    key: "instance",
    get: function get() {
      if (!asset_single_instance) {
        asset_single_instance = new Asset();
      }

      return asset_single_instance;
    }
  }], [{
    key: "RESOURCE_TYPE_IMAGE",
    get: function get() {
      return "image";
    }
  }]);

  return Asset;
}();

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bullet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _display_object = require('./display_object.js');

var _asset = require('./asset.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bullet = exports.Bullet = function (_DisplayObject) {
  _inherits(Bullet, _DisplayObject);

  function Bullet(condition) {
    _classCallCheck(this, Bullet);

    var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, condition));

    _this._velocity = new p5.Vector(0, 2.5, 0); // 速度

    var asset = new _asset.Asset();
    _this._image = asset.getAsset('bullet');
    return _this;
  }

  _createClass(Bullet, [{
    key: 'isMyGroup',
    value: function isMyGroup(group) {
      return this._group === group;
    }
  }, {
    key: 'step',
    value: function step(frameStep) {
      this._position.add(this._velocity);
    }
  }, {
    key: 'group',
    set: function set(value) {
      this._group = value;
    }
  }]);

  return Bullet;
}(_display_object.DisplayObject);

},{"./asset.js":2,"./display_object.js":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controller_single_instance = null;

var Controller = exports.Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);

    if (!controller_single_instance) {
      controller_single_instance = this;
    }

    controller_single_instance.initConstantValues();
    controller_single_instance.clearKey();

    return controller_single_instance;
  }

  _createClass(Controller, [{
    key: "initConstantValues",
    value: function initConstantValues() {
      this.instance.KEY_TYPE_INVALID = 0;
      this.instance.KEY_TYPE_SHOT = this.instance.KEY_TYPE_INVALID + 1;
      this.instance.KEY_TYPE_DOWN = this.instance.KEY_TYPE_SHOT + 1;
      this.instance.KEY_TYPE_UP = this.instance.KEY_TYPE_DOWN + 1;
      this.instance.KEY_TYPE_LEFT = this.instance.KEY_TYPE_UP + 1;
      this.instance.KEY_TYPE_RIGHT = this.instance.KEY_TYPE_LEFT + 1, this.instance.KEY_TYPE_MAX = this.instance.KEY_TYPE_RIGHT + 1;

      this.instance.BIT_KEY_SHOT = 1 << this.instance.KEY_TYPE_SHOT;
      this.instance.BIT_KEY_DOWNKEY = 1 << this.instance.KEY_TYPE_DOWN;
      this.instance.BIT_KEY_UP = 1 << this.instance.KEY_TYPE_UP;
      this.instance.BIT_KEY_LEFT = 1 << this.instance.KEY_TYPE_LEFT;
      this.instance.BIT_KEY_RIGHT = 1 << this.instance.KEY_TYPE_RIGHT;
    }
  }, {
    key: "pressKey",
    value: function pressKey(key) {
      this.instance._pressedKey |= key;
    }
  }, {
    key: "clearKey",
    value: function clearKey() {
      this.instance._pressedKey = this.instance.KEY_TYPE_INVALID;
    }
  }, {
    key: "isPressed",
    value: function isPressed(key) {
      return (this.instance._pressedKey & key) === key;
    }
  }, {
    key: "instance",
    get: function get() {
      if (!controller_single_instance) {
        controller_single_instance = new Controller();
      }

      return controller_single_instance;
    }
  }]);

  return Controller;
}();

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debug_single_instance = null;

var Debug = exports.Debug = function () {
  function Debug() {
    _classCallCheck(this, Debug);

    if (!debug_single_instance) {
      debug_single_instance = this;
    }

    return debug_single_instance;
  }

  _createClass(Debug, [{
    key: "instance",
    get: function get() {
      if (!debug_single_instance) {
        debug_single_instance = new Asset();
      }

      return debug_single_instance;
    }
  }]);

  return Debug;
}();

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayObject = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sprite = require('./sprite.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayObject = exports.DisplayObject = function (_Sprite) {
  _inherits(DisplayObject, _Sprite);

  function DisplayObject(condition) {
    _classCallCheck(this, DisplayObject);

    var _this = _possibleConstructorReturn(this, (DisplayObject.__proto__ || Object.getPrototypeOf(DisplayObject)).call(this));

    _this._position = new p5.Vector(condition.x, condition.y, 0.0);
    _this._frameCount = 0.0; // 出現してからのフレーム数
    _this._velocity = new p5.Vector(0, 1.0, 0); // 速度
    _this._isDead = false; // 死亡フラグ
    return _this;
  }

  _createClass(DisplayObject, [{
    key: 'draw',
    value: function draw() {
      if (this._image) {
        image(this._image, this._position.x, this._position.y, 32, 32);
      }
    }
  }, {
    key: 'step',
    value: function step(frameStep) {}
  }]);

  return DisplayObject;
}(_sprite.Sprite);

},{"./sprite.js":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = exports.Sprite = function () {
  function Sprite() {
    _classCallCheck(this, Sprite);

    this._position = new p5.Vector(0, 0, 0); // 描画位置
    this._image = null;
  }

  _createClass(Sprite, [{
    key: "draw",
    value: function draw() {
      ellipse(this._position.x, this._position.y, 25, 25);
    }
  }, {
    key: "isOverScreen",
    value: function isOverScreen() {
      var isOver = false;

      if (this._position.x < -Sprite.OUT_OF_SCREEN) {
        isOver = true;
      }

      if (this._position.x > width + Sprite.OUT_OF_SCREEN) {
        isOver = true;
      }

      if (this._position.y < -Sprite.OUT_OF_SCREEN) {
        isOver = true;
      }

      if (this._position.y > height + Sprite.OUT_OF_SCREEN) {
        isOver = true;
      }

      return isOver;
    }
  }, {
    key: "position",
    set: function set(value) {
      this._position = value;
    }
  }], [{
    key: "OUT_OF_SCREEN",
    get: function get() {
      return 200;
    }
  }]);

  return Sprite;
}();

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _asset = require('./asset.js');

var _airframe = require('./airframe.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = exports.Stage = function () {
  function Stage() {
    _classCallCheck(this, Stage);

    this._advancedAssets = {}; // このステージで使う Asset
    this._frameCount = 0.0; // ステージが始まってからのフレームカウント
    this._airframes = []; // 出現中の機体
    this._bullets = []; // 出現中の弾

    this.initAppearanceCondition();
  }

  _createClass(Stage, [{
    key: 'initAppearanceCondition',


    /**
       出現条件を初期化する
     */
    value: function initAppearanceCondition() {
      this._appearanCeconditions = [{ frame: 0.0, airframe: _airframe.Airframe, x: 0.0, y: -50.0 }, { frame: 60.0, airframe: _airframe.Airframe, x: 100.0, y: -50.0 }, { frame: 90.0, airframe: _airframe.Airframe, x: 120.0, y: -50.0 }];

      // 念のため出現フレーム順でソートする
      this._appearanCeconditions.sort(function (x, y) {
        return x.frame - y.frame;
      });
    }
  }, {
    key: 'pushBullet',
    value: function pushBullet(bullet) {
      this._bullets.push(bullet);
    }
  }, {
    key: 'appearanceLoop',
    value: function appearanceLoop() {
      var appearedCount = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._appearanCeconditions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var condition = _step.value;

          if (condition.frame <= this._frameCount) {
            condition.stage = this;
            this._airframes.push(new condition.airframe(condition));
            appearedCount++;
          } else {
            // 出現可能な機体が無くなったらループを打ち切る
            break;
          }
        }

        // 出現済みの条件を削除する
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (appearedCount >= 1) {
        this._appearanCeconditions.splice(0, appearedCount);
      }
    }
  }, {
    key: 'airframeLoop',
    value: function airframeLoop(frameStep) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._airframes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var airframe = _step2.value;

          airframe.step(frameStep);
          airframe.draw();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: 'bulletLoop',
    value: function bulletLoop(frameStep) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this._bullets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var bullet = _step3.value;

          bullet.step(frameStep);
          bullet.draw();
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    /**
       フレーム毎の処理を行う
     */

  }, {
    key: 'step',
    value: function step(frameStep) {
      background(128);

      this.appearanceLoop();
      this.airframeLoop(frameStep);
      this.bulletLoop(frameStep);

      this._frameCount += frameStep;
    }
  }, {
    key: 'advancedAssets',
    get: function get() {
      return this._advancedAssets;
    }
  }]);

  return Stage;
}();

},{"./airframe.js":1,"./asset.js":2}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Weapon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bullet = require('./bullet.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Weapon = exports.Weapon = function () {
  function Weapon(position, stage) {
    _classCallCheck(this, Weapon);

    this._position = position;
    this._fireInterval = 30.0; // 発射間隔
    this._prevFireFrameCount = 0.0; // 発射してからのフレームカウント
    this._stage = stage;
  }

  _createClass(Weapon, [{
    key: 'fire',
    value: function fire(frameCount) {
      if (this._prevFireFrameCount + this._fireInterval <= frameCount) {
        // TODO: Stage に含める
        this._stage.pushBullet(new _bullet.Bullet({
          x: this._position.x,
          y: this._position.y
        }));
        this._prevFireFrameCount = frameCount;
      }
    }
  }]);

  return Weapon;
}();

},{"./bullet.js":3}],"Main":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require('./controller.js');

var _stage = require('./stage.js');

var _asset = require('./asset.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = exports.Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this._frameCount = 0.0;
    this._frameStep = 1.0;
    this._controller = new _controller.Controller();
    this._stage = new _stage.Stage();
    this._asset = new _asset.Asset();
    this._asset.advancedAssets = this._stage.advancedAssets;
  }

  _createClass(Main, [{
    key: 'preload',
    value: function preload() {
      this._asset.load();
    }
  }, {
    key: 'step',
    value: function step() {
      this._stage.step(this._frameStep);
      this._frameCount += this._frameStep;
    }
  }, {
    key: 'frameStep',
    set: function set(value) {
      this._frameStep = value;
    }
  }]);

  return Main;
}();

},{"./asset.js":2,"./controller.js":4,"./stage.js":8}]},{},["Main",8,1,7,9,4,2,5,6]);
