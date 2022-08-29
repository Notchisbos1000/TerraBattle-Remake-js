/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arms extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("arms_02", "./Arms/costumes/arms_02.png", { x: 14, y: 12 }),
      new Costume("arms_03", "./Arms/costumes/arms_03.png", { x: 10, y: 12 }),
      new Costume("arms_04", "./Arms/costumes/arms_04.png", { x: 10, y: 4 }),
      new Costume("arms_4", "./Arms/costumes/arms_4.png", { x: 10, y: 4 }),
      new Costume("arms_06", "./Arms/costumes/arms_06.png", { x: 14, y: 12 }),
      new Costume("arms_01", "./Arms/costumes/arms_01.png", { x: 12, y: 4 }),
      new Costume("arms_6", "./Arms/costumes/arms_6.png", { x: 12, y: 4 }),
      new Costume("arms_10", "./Arms/costumes/arms_10.png", { x: 16, y: 6 }),
      new Costume("arms_5", "./Arms/costumes/arms_5.png", { x: 16, y: 6 }),
      new Costume("arms_12", "./Arms/costumes/arms_12.png", { x: 14, y: 4 }),
      new Costume("arms_14", "./Arms/costumes/arms_14.png", { x: 14, y: 4 }),
      new Costume("arms_16", "./Arms/costumes/arms_16.png", { x: 10, y: 6 }),
      new Costume("arms_3", "./Arms/costumes/arms_3.png", { x: 10, y: 6 }),
      new Costume("arms_18", "./Arms/costumes/arms_18.png", { x: 12, y: 4 }),
      new Costume("arms_20", "./Arms/costumes/arms_20.png", { x: 14, y: 2 }),
      new Costume("arms_2", "./Arms/costumes/arms_2.png", { x: 12, y: 2 }),
      new Costume("arms_7", "./Arms/costumes/arms_7.png", { x: 12, y: 2 }),
      new Costume("armB_01", "./Arms/costumes/armB_01.png", { x: 12, y: 4 }),
      new Costume("armB_02", "./Arms/costumes/armB_02.png", { x: 14, y: 12 }),
      new Costume("armB_03", "./Arms/costumes/armB_03.png", { x: 10, y: 12 }),
      new Costume("armB_04", "./Arms/costumes/armB_04.png", { x: 10, y: 4 }),
      new Costume("armB_05", "./Arms/costumes/armB_05.png", { x: 10, y: 4 }),
      new Costume("armB_06", "./Arms/costumes/armB_06.png", { x: 14, y: 12 }),
      new Costume("armB_08", "./Arms/costumes/armB_08.png", { x: 16, y: 6 }),
      new Costume("armB_10", "./Arms/costumes/armB_10.png", { x: 16, y: 6 }),
      new Costume("armB_12", "./Arms/costumes/armB_12.png", { x: 14, y: 4 }),
      new Costume("armB_14", "./Arms/costumes/armB_14.png", { x: 14, y: 4 }),
      new Costume("armB_16", "./Arms/costumes/armB_16.png", { x: 10, y: 6 }),
      new Costume("armB_18", "./Arms/costumes/armB_18.png", { x: 12, y: 4 }),
      new Costume("armB_20", "./Arms/costumes/armB_20.png", { x: 14, y: 2 })
    ];

    this.sounds = [new Sound("pop", "./Arms/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SwordSwing" },
        this.whenIReceiveSwordswing
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "player death" },
        this.whenIReceivePlayerDeath
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "Shoot" }, this.whenIReceiveShoot),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gunaim" },
        this.whenIReceiveGunaim
      )
    ];

    this.vars.playerId4 = 1;
    this.vars.i4 = 1;
    this.vars.len4 = 0;
    this.vars.x4 = 132.3869942811813;
    this.vars.y4 = 127;
    this.vars.costume4 = 1;
    this.vars.dx4 = 2.8421709430404014e-14;
    this.vars.dy4 = -0.5000000000000213;
    this.vars.named4 = "griffpatch";
    this.vars.lastSay4 = 0;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.mouse.down) {
        if (
          this.stage.vars.tlmtgf[
            this.stage.vars.thisListMakesTheGameFunction.indexOf(
              this.sprites["Item"].costume.name
            ) +
              1 -
              1
          ] == "Shiverthorn"
        ) {
          this.costume = "arms_04";
        }
      } else {
        if (this.sprites["Player"].costumeNumber == 10) {
          this.costume = "arms_06";
        } else {
          this.costume = this.sprites["Player"].costumeNumber + 6;
        }
      }
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      this.direction = this.sprites["Body"].direction;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.goto(this.sprites["Player"].x, this.sprites["Player"].y + -4);
      yield;
    }
  }

  *whenIReceiveSwordswing() {
    this.moveAhead();
    this.costume = "arms_02";
    yield* this.wait(0.06);
    this.costumeNumber += 1;
    yield* this.wait(0.06);
    this.costumeNumber += 1;
    yield* this.wait(0.06);
    this.costumeNumber += 1;
    yield* this.wait(0.06);
  }

  *whenIReceivePlayerDeath() {
    this.visible = false;
  }

  *whenGreenFlagClicked3() {
    this.visible = true;
  }

  *whenIReceiveShoot() {
    this.moveAhead();
    this.costume = "arms_04";
  }

  *whenIReceiveGunaim() {
    while (!!this.mouse.down) {
      this.moveAhead();
      this.costume = "arms_04";
      yield;
    }
  }
}
