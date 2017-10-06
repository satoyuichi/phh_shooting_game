require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = exports.Stage = function Stage() {
  _classCallCheck(this, Stage);

  this._airframes = new Array();
};

},{}],"Main":[function(require,module,exports){
'use strict';
// import { Airframe } from './airframe.js';
// import { Cannon } from './cannon.js';
// import { Bullet } from './bullet.js';
// import { Sprite } from './sprite.js';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stage = require('./stage.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = exports.Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this._frameCount = 0.0;
    this._frameStep = 1.0;
    this._stage = new _stage.Stage();
  }

  _createClass(Main, [{
    key: 'step',
    value: function step() {
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

},{"./stage.js":1}]},{},["Main",1]);
