/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Inventory extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Rod_of_Discord", "./Inventory/costumes/Rod_of_Discord.png", {
        x: 28,
        y: 34
      }),
      new Costume(
        "Rod_of_Discord2",
        "./Inventory/costumes/Rod_of_Discord2.png",
        { x: 28, y: 34 }
      ),
      new Costume("Starfury", "./Inventory/costumes/Starfury.svg", {
        x: 10.593853553805957,
        y: 16.07294100943747
      }),
      new Costume("Starfury2", "./Inventory/costumes/Starfury2.svg", {
        x: 10.593853553805957,
        y: 16.07294100943747
      }),
      new Costume("Icemourne", "./Inventory/costumes/Icemourne.svg", {
        x: 17.979664825611877,
        y: 21.149660063343333
      }),
      new Costume("Icemourne2", "./Inventory/costumes/Icemourne2.svg", {
        x: 17.979664825611877,
        y: 21.149660063343333
      }),
      new Costume("Soul_Scythe-1", "./Inventory/costumes/Soul_Scythe-1.svg", {
        x: 17.624454649827584,
        y: 18.526119402985074
      }),
      new Costume("Soul_Scythe-3", "./Inventory/costumes/Soul_Scythe-3.svg", {
        x: 17.624454649827584,
        y: 18.526119402985074
      }),
      new Costume("Soul_Scythe-2", "./Inventory/costumes/Soul_Scythe-2.svg", {
        x: 12.524826956392957,
        y: 15.582552384352141
      }),
      new Costume("Soul_Scythe-4", "./Inventory/costumes/Soul_Scythe-4.svg", {
        x: 12.524824999999993,
        y: 15.582555000000013
      }),
      new Costume("Shiverthorn", "./Inventory/costumes/Shiverthorn.svg", {
        x: 7.101267168177003,
        y: 22.400676117692
      }),
      new Costume("Shiverthorn2", "./Inventory/costumes/Shiverthorn2.svg", {
        x: 7.101267168177003,
        y: 22.400676117692
      }),
      new Costume("Minishark", "./Inventory/costumes/Minishark.svg", {
        x: 26.227922294825248,
        y: 24.75620087849319
      }),
      new Costume("Minishark2", "./Inventory/costumes/Minishark2.svg", {
        x: 26.227922294825248,
        y: 24.75620087849319
      }),
      new Costume("SprayGun", "./Inventory/costumes/SprayGun.svg", {
        x: 23.83642160748849,
        y: 21.57668844172079
      }),
      new Costume("SprayGun2", "./Inventory/costumes/SprayGun2.svg", {
        x: 23.83642160748849,
        y: 21.57668844172079
      })
    ];

    this.sounds = [
      new Sound("pop", "./Inventory/sounds/pop.wav"),
      new Sound("Item_1", "./Inventory/sounds/Item_1.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.TIMER_GREATER_THAN,
        { VALUE: 0 },
        this.whengreaterthan
      )
    ];

    this.vars.thisListMakesThisProjectWork4 = [];
  }

  *startAsClone() {
    while (!null) {
      if (
        this.stage.vars.tlmtgf.indexOf(
          this.stage.vars.tlmtgf[
            this.stage.vars.thisListMakesTheGameFunction.indexOf(
              this.sprites["Item"].costume.name
            ) +
              1 -
              1
          ]
        ) +
          1 ==
        this.costumeNumber
      ) {
        this.moveAhead();
        this.effects.clear();
      } else {
        this.effects.brightness = -100;
        this.moveBehind();
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    yield* this.slots();
    this.costume = "SprayGun2";
    while (!null) {
      if (this.sprites["Item"].costumeNumber == this.costumeNumber) {
        this.moveAhead();
        this.effects.clear();
      } else {
        this.effects.brightness = -100;
        this.moveBehind();
      }
      yield;
    }
  }

  *slots() {
    this.goto(-225, 162);
    this.costume = "Rod_of_Discord";
    for (let i = 0; i < 7; i++) {
      this.createClone();
      this.costumeNumber += 1;
      this.createClone();
      this.costumeNumber += 1;
      this.x += 27;
    }
    this.createClone();
  }

  *whengreaterthan() {
    yield* this.slots();
    this.costume = "SprayGun2";
    while (!null) {
      if (this.sprites["Item"].costumeNumber == this.costumeNumber) {
        this.moveAhead();
        this.effects.clear();
      } else {
        this.effects.brightness = -100;
        this.moveBehind();
      }
      yield;
    }
  }
}
