/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullets extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Musket_Ball", "./Bullets/costumes/Musket_Ball.svg", {
        x: 11.922840000000008,
        y: 11.89622
      }),
      new Costume("Musket_Ball2", "./Bullets/costumes/Musket_Ball2.svg", {
        x: 6,
        y: 1
      }),
      new Costume("Musket_Ball3", "./Bullets/costumes/Musket_Ball3.png", {
        x: 12,
        y: 2
      }),
      new Costume("Star", "./Bullets/costumes/Star.svg", {
        x: 9.852941176470608,
        y: 9.852941176470608
      }),
      new Costume("Arrow", "./Bullets/costumes/Arrow.svg", { x: 16, y: 7 }),
      new Costume("NoShooty", "./Bullets/costumes/NoShooty.svg", {
        x: 0,
        y: 0
      }),
      new Costume("Shooty", "./Bullets/costumes/Shooty.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("MaxMana", "./Bullets/sounds/MaxMana.wav"),
      new Sound("Item_98", "./Bullets/sounds/Item_98.wav"),
      new Sound("Item_3", "./Bullets/sounds/Item_3.wav"),
      new Sound("Item_1", "./Bullets/sounds/Item_1.wav"),
      new Sound("Item_9", "./Bullets/sounds/Item_9.wav"),
      new Sound("Item_25", "./Bullets/sounds/Item_25.wav"),
      new Sound(
        "Terraria Machine Gun Sound",
        "./Bullets/sounds/Terraria Machine Gun Sound.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "star" }, this.whenIReceiveStar),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Minishark" },
        this.whenIReceiveMinishark
      ),
      new Trigger(Trigger.BROADCAST, { name: "spray" }, this.whenIReceiveSpray),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bullet" },
        this.whenIReceiveBullet
      )
    ];

    this.vars.thisListMakesThisProjectWork6 = [];
  }

  *startAsClone() {
    if (this.costume.name == "noshooty") {
      this.costume = "Shooty";
    }
  }

  *whenIReceiveStar() {
    if (this.costume.name == "shooty") {
      this.stage.vars.star = "yes";
      this.costume = "Star";
      this.visible = true;
      this.goto(this.sprites["Player"].x, 999);
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      while (!!this.touching("edge")) {
        this.move(32);
        yield;
      }
      while (!this.touching("edge")) {
        this.move(32);
        yield;
      }
      this.visible = false;
      this.stage.vars.star = "no";
      this.deleteThisClone();
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "NoShooty";
  }

  *startAsClone2() {}

  *whenIReceiveMinishark() {
    if (this.costume.name == "shooty") {
      this.costume = "Musket_Ball2";
      this.visible = true;
      this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      while (!this.touching("edge")) {
        this.move(32);
        this.move(32);
        yield;
      }
      this.size = 100;
      this.visible = false;
      this.deleteThisClone();
    }
  }

  *whenIReceiveSpray() {
    if (this.costume.name == "shooty") {
      this.costume = "Musket_Ball3";
      this.visible = true;
      this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.direction += this.random(-10, 10);
      while (!this.touching("edge")) {
        this.move(32);
        yield;
      }
      this.visible = false;
      this.deleteThisClone();
    }
  }

  *whenIReceiveBullet() {
    if (this.costume.name == "noshooty") {
      if (
        this.stage.vars.tlmtgf[
          this.stage.vars.thisListMakesTheGameFunction.indexOf(
            this.sprites["Item"].costume.name
          ) +
            1 -
            1
        ] == "Minishark"
      ) {
        this.createClone();
        yield* this.wait(0.1);
        this.broadcast("Minishark");
        yield* this.startSound("Terraria Machine Gun Sound");
      }
      if (
        this.stage.vars.tlmtgf[
          this.stage.vars.thisListMakesTheGameFunction.indexOf(
            this.sprites["Item"].costume.name
          ) +
            1 -
            1
        ] == "Spraygun"
      ) {
        for (let i = 0; i < 5; i++) {
          this.createClone();
          yield;
        }
        this.broadcast("spray");
        yield* this.startSound("Terraria Machine Gun Sound");
      }
    }
  }
}
