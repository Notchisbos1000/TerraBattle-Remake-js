/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shiverthorn extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Vilethorn_%28end_projectile%29",
        "./Shiverthorn/costumes/Vilethorn_%28end_projectile%29.svg",
        { x: -0.14703489349432175, y: 15.10987619271961 }
      ),
      new Costume(
        "Vilethorn_%28projectile%29",
        "./Shiverthorn/costumes/Vilethorn_%28projectile%29.svg",
        { x: 0.08501550246401735, y: 15.09069403837762 }
      )
    ];

    this.sounds = [new Sound("pop", "./Shiverthorn/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shiverthorn" },
        this.whenIReceiveShiverthorn
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.effects.color = 55;
    this.effects.brightness = 10;
    if (this.stage.vars.shiverlength == 0) {
      null;
    } else {
      this.goto(this.stage.vars.x1[3 - 1], this.stage.vars.y1[3 - 1]);
    }
    this.costume = "Vilethorn_%28projectile%29";
    if (this.stage.vars.shiverlength == 0) {
      this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Item"].y - this.y,
          this.sprites["Item"].x - this.x
        )
      );
      this.move(10);
      this.y += -10;
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.stage.vars.x1.splice(3 - 1, 1, this.x);
      this.stage.vars.y1.splice(3 - 1, 1, this.y);
      this.visible = true;
      this.move(25);
      this.stage.vars.shiverlength += 1;
      this.createClone();
      yield* this.wait(0.5);
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        yield;
      }
    } else {
      if (this.stage.vars.shiverlength == 1) {
        yield* this.wait(0.1);
        this.move(50);
        this.visible = true;
        this.stage.vars.shiverlength += 1;
        this.createClone();
        yield* this.wait(0.5);
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += 10;
          yield;
        }
      } else {
        if (this.stage.vars.shiverlength == 2) {
          yield* this.wait(0.1);
          this.move(75);
          this.visible = true;
          this.stage.vars.shiverlength += 1;
          this.createClone();
          yield* this.wait(0.5);
          for (let i = 0; i < 10; i++) {
            this.effects.ghost += 10;
            yield;
          }
        } else {
          if (this.stage.vars.shiverlength == 3) {
            yield* this.wait(0.1);
            this.move(100);
            this.visible = true;
            this.stage.vars.shiverlength += 1;
            this.createClone();
            yield* this.wait(0.5);
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              yield;
            }
          } else {
            if (this.stage.vars.shiverlength == 4) {
              this.costume = "Vilethorn_%28projectile%29";
              yield* this.wait(0.1);
              this.move(125);
              this.visible = true;
              this.stage.vars.shiverlength += 1;
              this.createClone();
              yield* this.wait(0.5);
              for (let i = 0; i < 10; i++) {
                this.effects.ghost += 10;
                yield;
              }
            } else {
              if (this.stage.vars.shiverlength == 5) {
                this.costume = "Vilethorn_%28end_projectile%29";
                yield* this.wait(0.1);
                this.move(150);
                this.visible = true;
                this.stage.vars.shiverlength += 1;
                this.createClone();
                yield* this.wait(0.5);
                for (let i = 0; i < 10; i++) {
                  this.effects.ghost += 10;
                  yield;
                }
              } else {
                this.deleteThisClone();
              }
            }
          }
        }
      }
    }
    this.deleteThisClone();
  }

  *whenIReceiveShiverthorn() {
    if (19 < this.stage.vars.mana) {
      this.stage.vars.mana += -20;
      this.stage.vars.shiverlength = 0;
      this.createClone();
    }
  }

  *startAsClone2() {
    while (!null) {
      yield* this.wait(0.1);
      if (this.touching(Color.rgb(116, 94, 97))) {
        this.broadcast("lose segment");
      }
      yield;
    }
  }
}
