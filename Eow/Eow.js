/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Eow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Head", "./Eow/costumes/Head.png", { x: 68, y: 42 }),
      new Costume("Body", "./Eow/costumes/Body.png", { x: 48, y: 40 }),
      new Costume("Tail", "./Eow/costumes/Tail.png", { x: 49, y: 38 })
    ];

    this.sounds = [new Sound("pop", "./Eow/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "kill boss" },
        this.whenIReceiveKillBoss
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.BROADCAST, { name: "EoW" }, this.whenIReceiveEow),
      new Trigger(Trigger.BROADCAST, { name: "EoW" }, this.whenIReceiveEow2),
      new Trigger(Trigger.CLONE_START, this.startAsClone5)
    ];

    this.vars.x5 = 22;
    this.vars.part = 0;
    this.vars.type = "Normal";
    this.vars.randoMultiplyer = 1;
    this.vars.rando = 43;
    this.vars.playerHp3 = -882;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.vars.playerHp3 += -21;
        this.broadcast("player damage");
        yield* this.wait(0.5);
      }
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    if (this.vars.type == "Head") {
      this.vars.type = "Normal";
      yield* this.head();
    }
    this.costume = "Body";
    yield* this.wait(48 / this.stage.vars.parts / 10);
    this.costume = "Tail";
    yield* this.wait(1 / 48);
    this.deleteThisClone();
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *startAsClone2() {
    if (this.costumeNumber == 1) {
      while (true) {
        if (this.touching("edge")) {
          /* TODO: Implement motion_ifonedgebounce */ null;
          this.vars.rando = this.random(1, 55);
          if (this.random(1, 2) == 1) {
            this.vars.randoMultiplyer = -1;
          } else {
            this.vars.randoMultiplyer = 1;
          }
        }
        yield;
      }
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.parts = 1;
    while (true) {
      if (this.touching("edge")) {
        /* TODO: Implement motion_ifonedgebounce */ null;
        this.vars.rando = this.random(1, 55);
        if (this.random(1, 2) == 1) {
          this.vars.randoMultiplyer = -1;
        } else {
          this.vars.randoMultiplyer = 1;
        }
      }
      yield;
    }
  }

  *head() {
    this.vars.type = "Normal";
    while (true) {
      this.createClone();
      this.move(13);
      yield* this.wait(1 / 48);
      this.vars.x5 = this.random(1, 25);
      if (this.vars.x5 == 25) {
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Player"].y - this.y,
            this.sprites["Player"].x - this.x
          )
        );
      }
      this.direction +=
        this.random(5, this.vars.rando) * this.vars.randoMultiplyer;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.clearPen();
    this.stage.vars.eowHp = 500;
    while (true) {
      if (this.stage.vars.eowHp < 1) {
        if (15 < this.stage.vars.parts) {
          yield* this.broadcastAndWait("kill boss");
        } else {
          this.stage.vars.parts += 1;
          this.vars.type = "Head";
          this.createClone();
          this.vars.type = "Normal";
          this.stage.vars.eowHp = 500;
        }
      }
      yield;
    }
  }

  *whenIReceiveKillBoss() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }

  *startAsClone3() {
    while (true) {
      if (
        this.touching(this.sprites["Shiverthorn"].andClones()) ||
        this.touching(this.sprites["Item"].andClones()) ||
          this.touching(this.sprites["Bullets"].andClones()) ||
            this.touching(this.sprites["ManaStar"].andClones())
      ) {
        this.broadcast("hit boss");
        this.stage.vars.eowHp += -5;
        yield* this.wait(0.1);
      }
      yield;
    }
  }

  *startAsClone4() {
    while (true) {
      if (this.touching("edge")) {
        yield* this.wait(1 / 48);
        this.visible = false;
      } else {
        yield* this.wait(1 / 48);
        this.visible = true;
      }
      yield;
    }
  }

  *whenIReceiveEow() {
    this.costume = "Head";
    this.goto(-221, 38);
    this.vars.type = "Head";
    yield* this.head();
  }

  *whenIReceiveEow2() {
    while (true) {
      if (this.touching("edge")) {
        yield* this.wait(1 / 48);
        this.visible = false;
      } else {
        yield* this.wait(1 / 48);
        this.visible = true;
      }
      yield;
    }
  }

  *startAsClone5() {
    while (true) {
      if (this.touching(this.sprites["BloodMoonSicle"].andClones())) {
        this.broadcast("hit boss");
        this.stage.vars.eowHp += -1;
      }
      yield;
    }
  }
}
