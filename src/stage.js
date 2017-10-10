import { Airframe } from './airframe.js';

export class Stage {
  constructor () {
    this._frameCount = 0.0;     // ステージが始まってからのフレームカウント
    this._airframes = [];       // 出現中の機体

    this.initAppearanceCondition ();
  }

  /**
     出現条件を初期化する
   */
  initAppearanceCondition () {
    this._appearanCeconditions = [
      { frame: 0.0, airframe: Airframe, x: 0.0, y: 0.0 },
      { frame: 60.0, airframe: Airframe, x: 100.0, y: 0.0 },
      { frame: 90.0, airframe: Airframe, x: 120.0, y: 0.0 },
    ];

    // 念のため出現フレーム順でソートする
    this._appearanCeconditions.sort ((x, y) => {
      return x.frame - y.frame;
    });
  }

  appearanceLoop () {
    let appearedCount = 0;
    for (var condition of this._appearanCeconditions) {
      if (condition.frame <= this._frameCount) {
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

  /**
     フレーム毎の処理を行う
   */
  step (frameStep) {
    background(128);

    this.appearanceLoop ();
    this.airframeLoop (frameStep);
    
    this._frameCount += frameStep;
  }
}
