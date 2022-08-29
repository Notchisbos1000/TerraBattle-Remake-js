/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hair extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("hair_griff", "./Hair/costumes/hair_griff.png", {
        x: 10,
        y: 20
      }),
      new Costume("hair_7", "./Hair/costumes/hair_7.png", { x: 16, y: 18 }),
      new Costume("hair_7b", "./Hair/costumes/hair_7b.png", { x: 16, y: 18 }),
      new Costume("hair_7c", "./Hair/costumes/hair_7c.png", { x: 16, y: 18 }),
      new Costume("hair_6", "./Hair/costumes/hair_6.png", { x: 18, y: 22 }),
      new Costume("hair_6b", "./Hair/costumes/hair_6b.png", { x: 18, y: 22 }),
      new Costume("hair_6c", "./Hair/costumes/hair_6c.png", { x: 18, y: 22 }),
      new Costume("hair_6e", "./Hair/costumes/hair_6e.png", { x: 18, y: 22 }),
      new Costume("hair_6d", "./Hair/costumes/hair_6d.png", { x: 18, y: 22 }),
      new Costume("hair_3", "./Hair/costumes/hair_3.png", { x: 10, y: 16 }),
      new Costume("hair_14", "./Hair/costumes/hair_14.png", { x: 14, y: 22 }),
      new Costume("hair14b", "./Hair/costumes/hair14b.png", { x: 14, y: 22 }),
      new Costume("hair_1", "./Hair/costumes/hair_1.png", { x: 16, y: 22 }),
      new Costume("hair_1b", "./Hair/costumes/hair_1b.png", { x: 16, y: 22 }),
      new Costume("hair_1c", "./Hair/costumes/hair_1c.png", { x: 16, y: 22 }),
      new Costume("hair_1d", "./Hair/costumes/hair_1d.png", { x: 16, y: 22 }),
      new Costume("hair_2", "./Hair/costumes/hair_2.png", { x: 12, y: 20 }),
      new Costume("hair_2b", "./Hair/costumes/hair_2b.png", { x: 12, y: 20 }),
      new Costume("hair_17", "./Hair/costumes/hair_17.png", { x: 14, y: 24 }),
      new Costume("hair_23_y", "./Hair/costumes/hair_23_y.png", {
        x: 16,
        y: 22
      }),
      new Costume("hair_24_g", "./Hair/costumes/hair_24_g.png", {
        x: 16,
        y: 26
      }),
      new Costume("hair_34_lb", "./Hair/costumes/hair_34_lb.png", {
        x: 12,
        y: 18
      }),
      new Costume("hair_34_p", "./Hair/costumes/hair_34_p.png", {
        x: 12,
        y: 18
      }),
      new Costume("hair_38_bl", "./Hair/costumes/hair_38_bl.png", {
        x: 8,
        y: 20
      }),
      new Costume("hair_40_y", "./Hair/costumes/hair_40_y.png", {
        x: 8,
        y: 18
      }),
      new Costume("hair_40_b", "./Hair/costumes/hair_40_b.png", {
        x: 8,
        y: 18
      }),
      new Costume("hair_49_y", "./Hair/costumes/hair_49_y.png", {
        x: 14,
        y: 20
      }),
      new Costume("hair_51_y", "./Hair/costumes/hair_51_y.png", {
        x: 20,
        y: 18
      }),
      new Costume("hair_51_p", "./Hair/costumes/hair_51_p.png", {
        x: 20,
        y: 18
      }),
      new Costume("hair_51_b", "./Hair/costumes/hair_51_b.png", {
        x: 20,
        y: 18
      }),
      new Costume("hair_66_y", "./Hair/costumes/hair_66_y.png", {
        x: 16,
        y: 18
      }),
      new Costume("hair_66_br", "./Hair/costumes/hair_66_br.png", {
        x: 16,
        y: 18
      }),
      new Costume("hair_66_bl", "./Hair/costumes/hair_66_bl.png", {
        x: 16,
        y: 18
      }),
      new Costume("hair_85_o", "./Hair/costumes/hair_85_o.png", {
        x: 16,
        y: 22
      }),
      new Costume("hair_84_o", "./Hair/costumes/hair_84_o.png", {
        x: 20,
        y: 26
      }),
      new Costume("hair_100_o", "./Hair/costumes/hair_100_o.png", {
        x: 16,
        y: 18
      }),
      new Costume("hair_100_b", "./Hair/costumes/hair_100_b.png", {
        x: 16,
        y: 18
      }),
      new Costume("hair_103_b", "./Hair/costumes/hair_103_b.png", {
        x: 14,
        y: 20
      }),
      new Costume("hair_103_br", "./Hair/costumes/hair_103_br.png", {
        x: 14,
        y: 20
      }),
      new Costume("hair_103_g", "./Hair/costumes/hair_103_g.png", {
        x: 14,
        y: 20
      }),
      new Costume(
        "Eye_of_Cthulhu_Mask",
        "./Hair/costumes/Eye_of_Cthulhu_Mask.png",
        { x: 16, y: 18 }
      ),
      new Costume("Santa", "./Hair/costumes/Santa.png", { x: 14, y: 26 })
    ];

    this.sounds = [new Sound("pop", "./Hair/sounds/pop.wav")];

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

    this.vars.playerId = 1;
    this.vars.i = 1;
    this.vars.len = 0;
    this.vars.x = 132.3869942811813;
    this.vars.y = 127;
    this.vars.costume = 1;
    this.vars.dx = 2.8421709430404014e-14;
    this.vars.dy = -0.5000000000000213;
    this.vars.named = 0;
    this.vars.lastSay = 0;
    this.vars.visible = 0;
    this.vars.sayTime = 0;
    this.vars.thisListMakesThisProjectWork = [];
  }

  *whenGreenFlagClicked() {
    while (true) {
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
