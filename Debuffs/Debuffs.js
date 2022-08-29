/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Debuffs extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Mana_Sickness4", "./Debuffs/costumes/Mana_Sickness4.svg", {
        x: 16.00001999999995,
        y: 16.26648499999999
      }),
      new Costume("Mana_Sickness6", "./Debuffs/costumes/Mana_Sickness6.svg", {
        x: 16.326394999999962,
        y: 16.26648499999999
      }),
      new Costume("Mana_Sickness3", "./Debuffs/costumes/Mana_Sickness3.svg", {
        x: 16.326394999999962,
        y: 16.26648499999999
      }),
      new Costume("Mana_Sickness2", "./Debuffs/costumes/Mana_Sickness2.svg", {
        x: 16.326394999999962,
        y: 16.266494999999992
      }),
      new Costume("Mana_Sickness5", "./Debuffs/costumes/Mana_Sickness5.svg", {
        x: 16.326393127441406,
        y: 16.266494750976562
      }),
      new Costume("Mana_Sickness", "./Debuffs/costumes/Mana_Sickness.svg", {
        x: 16.326393127441406,
        y: 16.266494750976562
      }),
      new Costume("Chaos_State6", "./Debuffs/costumes/Chaos_State6.svg", {
        x: 15.999994999999984,
        y: 15.999994999999984
      }),
      new Costume("Chaos_State5", "./Debuffs/costumes/Chaos_State5.svg", {
        x: 16.32636500000001,
        y: 16.26648499999999
      }),
      new Costume("Chaos_State4", "./Debuffs/costumes/Chaos_State4.svg", {
        x: 16.32636499999998,
        y: 16.26648499999999
      }),
      new Costume("Chaos_State3", "./Debuffs/costumes/Chaos_State3.svg", {
        x: 16.326374999999985,
        y: 16.26648499999999
      }),
      new Costume("Chaos_State2", "./Debuffs/costumes/Chaos_State2.svg", {
        x: 16.326384999999988,
        y: 16.26648499999999
      }),
      new Costume("Chaos_State", "./Debuffs/costumes/Chaos_State.svg", {
        x: 16.32639499999999,
        y: 16.266494999999992
      }),
      new Costume(
        "Potion_Sickness (1)5",
        "./Debuffs/costumes/Potion_Sickness (1)5.svg",
        { x: 15.999989999999997, y: 16.26648499999999 }
      ),
      new Costume(
        "Potion_Sickness (1)7",
        "./Debuffs/costumes/Potion_Sickness (1)7.svg",
        { x: 16.32636499999998, y: 16.26648499999999 }
      ),
      new Costume(
        "Potion_Sickness (1)4",
        "./Debuffs/costumes/Potion_Sickness (1)4.svg",
        { x: 16.32636499999998, y: 16.26648499999999 }
      ),
      new Costume(
        "Potion_Sickness (1)3",
        "./Debuffs/costumes/Potion_Sickness (1)3.svg",
        { x: 16.326374999999985, y: 16.26648499999999 }
      ),
      new Costume(
        "Potion_Sickness (1)2",
        "./Debuffs/costumes/Potion_Sickness (1)2.svg",
        { x: 16.326384999999988, y: 16.26648499999999 }
      ),
      new Costume(
        "Potion_Sickness (1)",
        "./Debuffs/costumes/Potion_Sickness (1).svg",
        { x: 16.326384999999988, y: 16.26648499999999 }
      ),
      new Costume(
        "Potion_Sickness (1)6",
        "./Debuffs/costumes/Potion_Sickness (1)6.svg",
        { x: 15.999989999999997, y: 16 }
      )
    ];

    this.sounds = [new Sound("pop", "./Debuffs/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(113, 135);
    this.costume = "Mana_Sickness";
    this.createClone();
    this.goto(149, 135);
    this.costume = "Chaos_State";
    this.createClone();
    this.goto(185, 135);
    this.costume = "Potion_Sickness (1)6";
    while (!null) {
      if (0 < this.stage.vars.potionSickness) {
        this.visible = true;
        this.stage.vars.potionSickness += -1;
        yield* this.wait(1);
        if (4.1 < this.stage.vars.potionSickness) {
          this.costume = Math.round(this.stage.vars.potionSickness / 4) + 12;
        } else {
          this.costume = "Potion_Sickness (1)6";
        }
      } else {
        this.costume = "Potion_Sickness (1)";
        this.visible = false;
      }
      yield;
    }
  }

  *startAsClone() {
    if (this.costumeNumber == 6) {
      while (!null) {
        if (0 < this.stage.vars.manaSickness) {
          if (10 < this.stage.vars.manaSickness) {
            this.stage.vars.manaSickness = 10 % this.stage.vars.manaSickness;
          }
          this.visible = true;
          this.stage.vars.manaSickness += -1;
          this.stage.vars.manaCooldown = -1;
          yield* this.wait(1);
          if (this.stage.vars.manaSickness < 6) {
            this.costume = this.stage.vars.manaSickness;
          } else {
            this.costume = "Mana_Sickness";
          }
        } else {
          this.costume = "Mana_Sickness";
          this.visible = false;
        }
        yield;
      }
    } else {
      while (!null) {
        if (0 < this.stage.vars.chaosState) {
          this.visible = true;
          this.stage.vars.chaosState += -1;
          this.costume = this.stage.vars.chaosState + 7;
          yield* this.wait(1);
        } else {
          this.costume = "Chaos_State";
          this.visible = false;
        }
        yield;
      }
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.manaCooldown = -1;
  }
}
