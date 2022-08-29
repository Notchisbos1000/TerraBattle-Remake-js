/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ManaStar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Musket_Ball", "./ManaStar/costumes/Musket_Ball.svg", {
        x: 11.922840000000008,
        y: 11.89622
      }),
      new Costume("Musket_Ball2", "./ManaStar/costumes/Musket_Ball2.svg", {
        x: 6,
        y: 1
      }),
      new Costume("Musket_Ball3", "./ManaStar/costumes/Musket_Ball3.png", {
        x: 12,
        y: 2
      }),
      new Costume("Star", "./ManaStar/costumes/Star.svg", {
        x: 9.852941176470608,
        y: 9.852941176470608
      }),
      new Costume("Arrow", "./ManaStar/costumes/Arrow.svg", { x: 16, y: 7 }),
      new Costume("NoShooty", "./ManaStar/costumes/NoShooty.svg", {
        x: 9.856240000000014,
        y: 9.855379999999997
      }),
      new Costume("Shooty", "./ManaStar/costumes/Shooty.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("MaxMana", "./ManaStar/sounds/MaxMana.wav"),
      new Sound("Item_98", "./ManaStar/sounds/Item_98.wav"),
      new Sound("Item_3", "./ManaStar/sounds/Item_3.wav"),
      new Sound("Item_1", "./ManaStar/sounds/Item_1.wav"),
      new Sound("Item_9", "./ManaStar/sounds/Item_9.wav"),
      new Sound("Item_25", "./ManaStar/sounds/Item_25.wav"),
      new Sound(
        "Terraria Machine Gun Sound",
        "./ManaStar/sounds/Terraria Machine Gun Sound.wav"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Starfury" },
        this.whenIReceiveStarfury
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "star" }, this.whenIReceiveStar),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];

    this.vars.thisListMakesThisProjectWork5 = [];
  }

  *whenIReceiveStarfury() {
    this.broadcast("SwordSwing");
    if (this.costume.name == "noshooty") {
      this.createClone();
      if (this.stage.vars.star == "no") {
        this.broadcast("star");
        yield* this.startSound("Item_25");
      }
    }
    yield* this.broadcastAndWait("SwordSwing");
  }

  *startAsClone() {
    this.costume = "Shooty";
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
    this.stage.vars.star = "no";
    this.costume = "NoShooty";
  }

  *startAsClone2() {}
}
