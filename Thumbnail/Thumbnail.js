/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Thumbnail extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Thumbnail", "./Thumbnail/costumes/Thumbnail.svg", {
        x: 216,
        y: 162
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.TIMER_GREATER_THAN,
        { VALUE: 0.1 },
        this.whengreaterthan
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.restartTimer();
    this.effects.ghost = 100;
  }

  *whengreaterthan() {
    this.moveAhead();
  }
}
