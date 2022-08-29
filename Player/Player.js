/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Terraria_Accessory_Hermes_Boots-3",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-3.svg",
        { x: 16, y: 17 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-4",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-4.png",
        { x: 36, y: 38 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-5",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-5.png",
        { x: 36, y: 38 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-6",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-6.png",
        { x: 36, y: 38 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-7",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-7.png",
        { x: 36, y: 34 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-8",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-8.png",
        { x: 32, y: 34 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-9",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-9.png",
        { x: 32, y: 34 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-10",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-10.png",
        { x: 28, y: 38 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-11",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-11.png",
        { x: 32, y: 34 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-12",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-12.svg",
        { x: 16, y: 17 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-13",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-13.png",
        { x: 36, y: 38 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-14",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-14.png",
        { x: 36, y: 34 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-15",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-15.png",
        { x: 32, y: 34 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-16",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-16.png",
        { x: 28, y: 38 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-17",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-17.png",
        { x: 28, y: 34 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-18",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-18.png",
        { x: 36, y: 38 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-19",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-19.png",
        { x: 36, y: 38 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-20",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-20.png",
        { x: 32, y: 34 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-21",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-21.png",
        { x: 32, y: 34 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-2",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-2.png",
        { x: 32, y: 34 }
      ),
      new Costume(
        "Terraria_Accessory_Hermes_Boots-22",
        "./Player/costumes/Terraria_Accessory_Hermes_Boots-22.png",
        { x: 28, y: 34 }
      ),
      new Costume(
        "Terraria_Item_Grappling_Hook-16",
        "./Player/costumes/Terraria_Item_Grappling_Hook-16.svg",
        { x: 16, y: 17 }
      ),
      new Costume(
        "Terraria_Item_Grappling_Hook-2",
        "./Player/costumes/Terraria_Item_Grappling_Hook-2.png",
        { x: 43, y: -2 }
      )
    ];

    this.sounds = [
      new Sound("PlayerHit1", "./Player/sounds/PlayerHit1.wav"),
      new Sound("PlayerHit2", "./Player/sounds/PlayerHit2.wav"),
      new Sound("PlayerHit0", "./Player/sounds/PlayerHit0.wav"),
      new Sound("Run", "./Player/sounds/Run.wav"),
      new Sound("Item_25", "./Player/sounds/Item_25.wav"),
      new Sound("MaxMana", "./Player/sounds/MaxMana.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed2),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Rod Of Discord" },
        this.whenIReceiveRodOfDiscord
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "player damage" },
        this.whenIReceivePlayerDamage
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "reGrav" },
        this.whenIReceiveRegrav
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.KEY_PRESSED, { key: "h" }, this.whenKeyHPressed),
      new Trigger(Trigger.BROADCAST, { name: "platf" }, this.whenIReceivePlatf),
      new Trigger(
        Trigger.TIMER_GREATER_THAN,
        { VALUE: 0 },
        this.whengreaterthan
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Gravity" },
        this.whenIReceiveGravity
      )
    ];

    this.audioEffects.volume = 0;

    this.vars.gravityVariable = "no";
    this.vars.hp2 = 400;
    this.vars.playerHp = 0;
  }

  *whenKeyWPressed() {
    if (this.vars.gravityVariable == "yes") {
      null;
    } else {
      this.stage.vars.prexYCoord = this.y;
      while (!(this.keyPressed("w") == "false")) {
        this.costume = "Terraria_Accessory_Hermes_Boots-12";
        if (
          this.touching(this.sprites["Platforms"].andClones()) &&
          this.stage.vars.plat == "yes"
        ) {
          while (!!this.touching(this.sprites["Platforms"].andClones())) {
            this.costume = "Terraria_Accessory_Hermes_Boots-12";
            this.y += 7;
            yield;
          }
        }
        this.y += 6;
        if (this.vars.gravityVariable == "yes") {
          return;
        }
        yield;
      }
      while (!!this.keyPressed("w")) {
        yield;
      }
    }
  }

  *whenGreenFlagClicked() {
    this.broadcast("Gravity");
  }

  *whenKeyDPressed() {
    while (!(this.keyPressed("d") == "false")) {
      this.x += 4;
      this.direction = 90;
      yield;
    }
  }

  *whenKeyAPressed() {
    while (!(this.keyPressed("a") == "false")) {
      this.direction = -90;
      this.x += -4;
      yield;
    }
  }

  *whenKeyDPressed2() {
    while (!(this.keyPressed("d") == "false")) {
      yield* this.wait(0.1);
      if (this.keyPressed("w") || this.vars.gravityVariable == "yes") {
        this.costume = "Terraria_Item_Grappling_Hook-16";
      } else {
        if (this.costumeNumber > 8) {
          this.costume = "Terraria_Accessory_Hermes_Boots-4";
        } else {
          this.costumeNumber += 1;
        }
      }
      yield;
    }
    this.costume = "Terraria_Accessory_Hermes_Boots-3";
  }

  *whenKeyAPressed2() {
    while (!(this.keyPressed("a") == "false")) {
      yield* this.wait(0.1);
      if (this.keyPressed("w") || this.vars.gravityVariable == "yes") {
        this.costume = "Terraria_Accessory_Hermes_Boots-3";
      } else {
        if (this.costumeNumber > 8) {
          this.costume = "Terraria_Accessory_Hermes_Boots-4";
        } else {
          this.costumeNumber += 1;
        }
      }
      yield;
    }
    this.costume = "Terraria_Accessory_Hermes_Boots-3";
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.hp = 400;
    while (true) {
      if (this.stage.vars.hp < 400) {
        while (!(399 < this.stage.vars.hp)) {
          if (this.keyPressed("any")) {
            yield* this.wait(1);
          } else {
            if (this.mouse.down) {
              yield* this.wait(1);
            } else {
              yield* this.wait(0.5);
            }
          }
          this.stage.vars.hp += 5;
          yield;
        }
      }
      if (400 < this.stage.vars.hp) {
        this.stage.vars.hp = 400;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.audioEffects.volume = 0;
    while (true) {
      if (this.stage.vars.mana < 200) {
        while (!(199 < this.stage.vars.mana)) {
          if (this.keyPressed("any")) {
            yield* this.wait(0.5);
          } else {
            if (
              /* Cannot access property volume of target */ null == 100 &&
              this.mouse.down
            ) {
              yield* this.wait(0.5);
            } else {
              yield* this.wait(0.1);
              this.stage.vars.mana += 5;
            }
          }
          this.stage.vars.mana += 1;
          yield;
        }
        yield* this.startSound("MaxMana");
        this.audioEffects.volume = 100;
        this.stage.vars.mana = 200;
      }
      while (!(this.stage.vars.mana < 200)) {
        yield;
      }
      if (200 < this.stage.vars.mana) {
        this.stage.vars.mana = 200;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.visible = true;
    this.stage.vars.mana = 200;
    this.stage.vars.chaosState = 0;
  }

  *whenIReceiveRodOfDiscord() {
    yield* this.wait(0.1);
    this.y = this.mouse.y;
    this.x = this.mouse.x;
    if (0 < this.stage.vars.chaosState) {
      this.stage.vars.hp += (400 / 5) * -1;
      this.stage.vars.hp = Math.round(this.stage.vars.hp);
    } else {
      null;
    }
    this.stage.vars.chaosState = 5;
  }

  *whenGreenFlagClicked5() {
    this.goto(0, -22);
    /* TODO: Implement sensing_setdragmode */ null;
    while (true) {
      if (
        this.touching(this.sprites["Eoc"].andClones()) &&
        this.sprites["Eoc"].costumeNumber == 2
      ) {
        this.stage.vars.hp += -7;
        this.broadcast("player damage");
        yield* this.wait(0.5);
      }
      if (
        this.touching(this.sprites["Eoc"].andClones()) &&
        this.sprites["Eoc"].costumeNumber == 1
      ) {
        this.stage.vars.hp += -15;
        this.broadcast("player damage");
        yield* this.wait(0.5);
      }
      yield;
    }
  }

  *whenIReceivePlayerDamage() {
    if (this.sprites[undefined].x < this.x) {
      for (let i = 0; i < 10; i++) {
        this.move(10);
        yield;
      }
    } else {
      for (let i = 0; i < 10; i++) {
        this.move(10);
        yield;
      }
    }
  }

  *whenGreenFlagClicked6() {
    this.broadcast("platf");
  }

  *whenIReceiveRegrav() {
    this.broadcast("Gravity");
  }

  *whenGreenFlagClicked7() {
    this.vars.gravityVariable = "no";
    while (true) {
      if (this.mouse.down) {
        if (this.x < this.mouse.x) {
          this.direction = 90;
        } else {
          this.direction = -90;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    while (true) {
      if (this.touching(this.sprites["Eoc"].andClones())) {
        this.stage.vars.hp += -21;
        this.broadcast(0 * 0);
        yield* this.wait(0.5);
      }
      yield;
    }
  }

  *whenGreenFlagClicked9() {
    while (true) {
      if (this.touching(this.sprites["Eow"].andClones())) {
        this.stage.vars.hp += -15;
        this.broadcast(0 * 0);
        yield* this.wait(0.5);
      }
      yield;
    }
  }

  *whenKeyHPressed() {
    if (this.stage.vars.potionSickness == 0) {
      yield* this.startSound("Item_3");
      this.stage.vars.hp += 200;
      if (400 < this.stage.vars.hp) {
        this.stage.vars.hp += 400 - this.stage.vars.hp;
      }
      this.stage.vars.potionSickness = 20;
    } else {
      null;
    }
  }

  *whenIReceivePlatf() {
    this.effects.ghost = 100;
    while (true) {
      if (!(this.vars.gravityVariable == "noplat")) {
        if (this.touching(this.sprites["Platforms"].andClones())) {
          if (!this.keyPressed("s")) {
            if (this.stage.vars.plat == "yes") {
              if (this.y < this.stage.vars.platformY) {
                0;
              } else {
                this.y = this.stage.vars.platformY + 36;
              }
            } else {
              if (this.y < this.stage.vars.platformY) {
                this.y = this.stage.vars.platformY - 36;
              } else {
                this.y = this.stage.vars.platformY + 37;
              }
            }
          } else {
            null;
          }
        } else {
          null;
        }
        yield* this.wait(0);
      }
      yield;
    }
  }

  *whengreaterthan() {
    this.visible = false;
  }

  *whenGreenFlagClicked10() {
    while (true) {
      this.restartTimer();
      yield;
    }
  }

  *whenIReceiveGravity() {
    this.vars.gravityVariable = "no";
    while (true) {
      if (
        !this.touching(this.sprites["Platforms"].andClones()) ||
        (this.keyPressed("s") && this.stage.vars.plat == "yes")
      ) {
        if (
          this.y == this.stage.vars.prexYCoord + 90 ||
          this.stage.vars.prexYCoord + 90 < this.y ||
            (-129 < this.y && !this.keyPressed("w"))
        ) {
          this.vars.gravityVariable = "yes";
          this.stage.vars.fallSpeed = 6;
          while (!(this.y == -130 || this.y < -130)) {
            this.costume = "Terraria_Accessory_Hermes_Boots-12";
            this.y += this.stage.vars.fallSpeed * -1;
            this.stage.vars.fallSpeed += 1.5;
            if (this.touching(this.sprites["Platforms"].andClones())) {
              this.broadcast("reGrav");
              return;
            }
            yield;
          }
          if (!this.touching(this.sprites["Platforms"].andClones())) {
            this.y = -129;
            this.costume = "Terraria_Accessory_Hermes_Boots-3";
          }
        } else {
          this.vars.gravityVariable = "no";
        }
      }
      if (
        this.keyPressed("w") ||
        this.keyPressed("a") || this.keyPressed("d")
      ) {
        0;
      } else {
        this.costume = "Terraria_Accessory_Hermes_Boots-3";
      }
      yield;
    }
  }
}
