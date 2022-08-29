/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerMana extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Star", "./PlayerMana/costumes/Star.svg", { x: 9, y: 9 }),
      new Costume("Star2", "./PlayerMana/costumes/Star2.svg", { x: 9, y: 9 }),
      new Costume("Star3", "./PlayerMana/costumes/Star3.svg", {
        x: 9.000000000000028,
        y: 9
      }),
      new Costume("Star4", "./PlayerMana/costumes/Star4.svg", {
        x: 9.000000000000028,
        y: 9
      }),
      new Costume("Star5", "./PlayerMana/costumes/Star5.svg", {
        x: 9.00000166666669,
        y: 9
      }),
      new Costume("Star6", "./PlayerMana/costumes/Star6.svg", { x: 9, y: 9 }),
      new Costume("Star7", "./PlayerMana/costumes/Star7.svg", { x: 9, y: 9 }),
      new Costume("Star8", "./PlayerMana/costumes/Star8.svg", { x: 9, y: 9 }),
      new Costume("Star9", "./PlayerMana/costumes/Star9.svg", { x: 9, y: 9 }),
      new Costume("Star10", "./PlayerMana/costumes/Star10.svg", { x: 9, y: 9 }),
      new Costume("Star11", "./PlayerMana/costumes/Star11.svg", { x: 9, y: 9 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(222, 145);
    while (true) {
      this.costume = Math.round(this.stage.vars.mana / -20);
      yield;
    }
  }
}
