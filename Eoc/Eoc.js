/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Eoc extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Eoc/costumes/costume1.png", {
        x: 166,
        y: 122
      }),
      new Costume("costume2", "./Eoc/costumes/costume2.png", { x: 171, y: 94 })
    ];

    this.sounds = [new Sound("pop", "./Eoc/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Point" }, this.whenIReceivePoint),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pointy" },
        this.whenIReceivePointy
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Point" },
        this.whenIReceivePoint2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "EoC" }, this.whenIReceiveEoc),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart3)
    ];

    this.vars.playerHp2 = -2016;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.vars.playerHp2 += -21;
        this.broadcast("player damage");
        yield* this.wait(0.5);
      }
      yield;
    }
  }

  *nextForm() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("Start");
    for (let i = 0; i < 24; i++) {
      this.direction += 30;
      yield;
    }
    this.costume = "costume1";
    for (let i = 0; i < 22; i++) {
      this.direction += 30;
      yield;
    }
    for (let i = 0; i < 6; i++) {
      this.direction += 10;
      yield;
    }
    this.broadcast("Point");
  }

  *killEyeOfCthulu() {
    this.broadcast("Kill eye");
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceivePoint() {
    while (!(this.stage.vars.eocHp < 1)) {
      yield;
    }
    yield* this.killEyeOfCthulu();
  }

  *whenIReceivePointy() {
    this.restartTimer();
    while (!(5.9 < this.timer)) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Player"].y - this.y,
          this.sprites["Player"].x - this.x
        )
      );
      yield;
    }
  }

  *whenIReceivePoint2() {
    while (true) {
      this.broadcast("Pointy");
      yield* this.glide(2, this.random(-170, -150), this.random(15, 35));
      yield* this.glide(2, this.random(150, 170), this.random(15, 35));
      yield* this.glide(2, this.random(-170, -150), this.random(15, 35));
      for (let i = 0; i < 3; i++) {
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Player"].y - this.y,
            this.sprites["Player"].x - this.x
          )
        );
        yield* this.wait(0.5);
        this.broadcast("Roar!");
        for (let i = 0; i < 20; i++) {
          this.move(10);
          yield;
        }
        yield;
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    while (true) {
      if (
        this.touching(this.sprites["Shiverthorn"].andClones()) ||
        this.touching(this.sprites["Item"].andClones()) ||
          this.touching(this.sprites["Bullets"].andClones()) ||
            this.touching(this.sprites["ManaStar"].andClones())
      ) {
        if (this.costumeNumber == 2) {
          this.stage.vars.eocHp += -25;
          if (this.touching(Color.rgb(0, 10, 255))) {
            this.stage.vars.eocHp += -75;
          }
          this.broadcast("Hit eye");
          yield* this.wait(0.1);
        } else {
          this.stage.vars.eocHp += -50;
          if (this.touching(Color.rgb(0, 10, 255))) {
            this.stage.vars.eocHp += -75;
          }
          if (!(this.stage.vars.eocHp < 1)) {
            this.broadcast("Hit eye");
          }
          yield* this.wait(0.1);
        }
      }
      yield;
    }
  }

  *whenIReceiveEoc() {
    this.broadcast("Start");
    this.goto(-56, 93);
    this.visible = true;
    this.broadcast("Point");
    this.stage.vars.direction = 0;
    this.costume = "costume2";
    this.stage.vars.eocHp = 2800;
    while (!(this.stage.vars.eocHp < 1401)) {
      yield;
    }
    yield* this.nextForm();
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveStart2() {
    while (true) {
      if (this.touching(this.sprites["BloodMoonSicle"].andClones())) {
        if (this.costumeNumber == 2) {
          this.stage.vars.eocHp += -20;
          this.broadcast("Hit eye");
          yield* this.wait(0.05);
        } else {
          this.stage.vars.eocHp += -20;
          if (!(this.stage.vars.eocHp < 1)) {
            this.broadcast("Hit eye");
          }
          yield* this.wait(0.05);
        }
      }
      yield;
    }
  }

  *whenIReceiveStart3() {
    while (true) {
      if (
        this.touching(this.sprites["Item"].andClones()) &&
        this.stage.vars.tlmtgf[
          this.stage.vars.thisListMakesTheGameFunction.indexOf(
            this.sprites["Item"].costume.name
          ) +
            1 -
            1
        ] == "Icemourne"
      ) {
        this.direction = this.radToScratch(
          Math.atan2(
            this.sprites["Player"].y - this.y,
            this.sprites["Player"].x - this.x
          )
        );
        this.move(-10);
      }
      yield;
    }
  }
}
