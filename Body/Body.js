/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Body extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("body_01", "./Body/costumes/body_01.png", { x: 8, y: 16 }),
      new Costume("body_08", "./Body/costumes/body_08.png", { x: 8, y: 16 }),
      new Costume("body_10", "./Body/costumes/body_10.png", { x: 16, y: 18 }),
      new Costume("body_12", "./Body/costumes/body_12.png", { x: 14, y: 16 }),
      new Costume("body_14", "./Body/costumes/body_14.png", { x: 14, y: 16 }),
      new Costume("body_16", "./Body/costumes/body_16.png", { x: 10, y: 18 }),
      new Costume("body_18", "./Body/costumes/body_18.png", { x: 12, y: 16 }),
      new Costume("body_20", "./Body/costumes/body_20.png", { x: 14, y: 16 }),
      new Costume("body_2", "./Body/costumes/body_2.png", { x: 14, y: 16 }),
      new Costume("body_06", "./Body/costumes/body_06.png", { x: 14, y: 16 }),
      new Costume("body_02", "./Body/costumes/body_02.png", { x: 14, y: 16 }),
      new Costume("body_03", "./Body/costumes/body_03.png", { x: 10, y: 16 }),
      new Costume("body_04", "./Body/costumes/body_04.png", { x: 10, y: 16 }),
      new Costume("body_05", "./Body/costumes/body_05.png", { x: 10, y: 16 }),
      new Costume("offline", "./Body/costumes/offline.png", { x: 12, y: 16 })
    ];

    this.sounds = [new Sound("pop", "./Body/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "player death" },
        this.whenIReceivePlayerDeath
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.playerId2 = 1;
    this.vars.i2 = 1;
    this.vars.len2 = 0;
    this.vars.x2 = 132.3869942811813;
    this.vars.y2 = 127;
    this.vars.costume2 = 0;
    this.vars.dx2 = -1.3846153846151878;
    this.vars.dy2 = -0.5000000000000426;
    this.vars.named2 = 0;
    this.vars.lastx = -9999;
    this.vars.lastSay2 = 0;
    this.vars.sayTime2 = 0;
    this.vars.timeout = 0;
    this.vars.thisListMakesThisProjectWork2 = [];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = "body_01";
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      this.direction = this.sprites["Player"].direction;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.goto(this.sprites["Player"].x, this.sprites["Player"].y + -4);
      yield;
    }
  }

  *whenIReceivePlayerDeath() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    this.visible = true;
  }
}
