import { Asset } from './asset.js';
import { Airframe } from './airframe.js';

export class Stage {
  constructor () {
    this._advancedAssets = {
    };                      // このステージで使う Asset
    this._frameCount = 0.0;     // ステージが始まってからのフレームカウント
    this._airframes = [];       // 出現中の機体
    this._bullets = [];         // 出現中の弾

    this.initAppearanceCondition ();
  }

  get advancedAssets () {
    return this._advancedAssets;
  }

  /**
     出現条件を初期化する
   */
  initAppearanceCondition () {
    this._appearanCeconditions = [
      { frame: 0.0, airframe: Airframe, x: 0.0, y: -50.0 },
      { frame: 60.0, airframe: Airframe, x: 100.0, y: -50.0 },
      { frame: 90.0, airframe: Airframe, x: 120.0, y: -50.0 },
    ];

    // 念のため出現フレーム順でソートする
    this._appearanCeconditions.sort ((x, y) => {
      return x.frame - y.frame;
    });
  }

  pushBullet (bullet) {
    this._bullets.push (bullet);
  }
  
  appearanceLoop () {
    let appearedCount = 0;
    for (var condition of this._appearanCeconditions) {
      if (condition.frame <= this._frameCount) {
        condition.stage = this;
        this._airframes.push (new condition.airframe (condition));
        appearedCount++;
      }
      else {
        // 出現可能な機体が無くなったらループを打ち切る
        break;
      }
    }

    // 出現済みの条件を削除する
    if (appearedCount >= 1) {
      this._appearanCeconditions.splice (0, appearedCount);
    }
  }

  airframeLoop (frameStep) {
    for (var airframe of this._airframes) {
      airframe.step (frameStep);
      airframe.draw ();
    }
  }

  bulletLoop (frameStep) {
    for (var bullet of this._bullets) {
      bullet.step (frameStep);
      bullet.draw ();
    }
  }

  /**
     フレーム毎の処理を行う
   */
  step (frameStep) {
    background(128);

    this.appearanceLoop ();
    this.airframeLoop (frameStep);
    this.bulletLoop (frameStep);
    
    this._frameCount += frameStep;
  }
}
