/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Legs extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("body_01", "./Legs/costumes/body_01.png", { x: 8, y: -14 }),
      new Costume("body_08", "./Legs/costumes/body_08.png", { x: 10, y: -14 }),
      new Costume("body_10", "./Legs/costumes/body_10.png", { x: 10, y: -14 }),
      new Costume("body_12", "./Legs/costumes/body_12.png", { x: 8, y: -14 }),
      new Costume("body_14", "./Legs/costumes/body_14.png", { x: 8, y: -14 }),
      new Costume("body_16", "./Legs/costumes/body_16.png", { x: 10, y: -14 }),
      new Costume("body_18", "./Legs/costumes/body_18.png", { x: 10, y: -14 }),
      new Costume("body_20", "./Legs/costumes/body_20.png", { x: 8, y: -14 }),
      new Costume("body_2", "./Legs/costumes/body_2.png", { x: 8, y: -14 }),
      new Costume("body_06", "./Legs/costumes/body_06.png", { x: 12, y: -14 }),
      new Costume("body_02", "./Legs/costumes/body_02.png", { x: 8, y: -14 }),
      new Costume("body_03", "./Legs/costumes/body_03.png", { x: 8, y: -14 }),
      new Costume("offline", "./Legs/costumes/offline.png", { x: 12, y: 16 })
    ];

    this.sounds = [new Sound("pop", "./Legs/sounds/pop.wav")];

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

    this.vars.playerId3 = 1;
    this.vars.i3 = 1;
    this.vars.len3 = 0;
    this.vars.x3 = 132.3869942811813;
    this.vars.y3 = 127;
    this.vars.costume3 = 0;
    this.vars.dx3 = -1.3846153846151878;
    this.vars.dy3 = -0.5000000000000426;
    this.vars.named3 = 0;
    this.vars.lastx2 = -9999;
    this.vars.lastSay3 = 0;
    this.vars.sayTime3 = 0;
    this.vars.timeout2 = 0;
    this.vars.thisListMakesThisProjectWork3 = [];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(this.sprites["Player"].x, this.sprites["Player"].y + -4);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.costume = this.sprites["Player"].costumeNumber;
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      this.direction = this.sprites["Player"].direction;
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
