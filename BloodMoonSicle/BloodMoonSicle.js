/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BloodMoonSicle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Blood Scyte", "./BloodMoonSicle/costumes/Blood Scyte.svg", {
        x: 13.049032640377277,
        y: 20.226367102899843
      }),
      new Costume(
        "Blood Scyte3",
        "./BloodMoonSicle/costumes/Blood Scyte3.svg",
        { x: 23.27765696601034, y: 23.734370185131468 }
      ),
      new Costume(
        "Blood Scyte2",
        "./BloodMoonSicle/costumes/Blood Scyte2.svg",
        { x: 20.422311030511167, y: 13.35474419171885 }
      ),
      new Costume(
        "Blood Scyte4",
        "./BloodMoonSicle/costumes/Blood Scyte4.svg",
        { x: 23.277652762107778, y: 23.734370559193536 }
      ),
      new Costume(
        "Blood Scyte5",
        "./BloodMoonSicle/costumes/Blood Scyte5.svg",
        { x: 32, y: 28 }
      ),
      new Costume("NoShooty", "./BloodMoonSicle/costumes/NoShooty.svg", {
        x: 32,
        y: 28
      }),
      new Costume("Shooty", "./BloodMoonSicle/costumes/Shooty.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [
      new Sound("MaxMana", "./BloodMoonSicle/sounds/MaxMana.wav"),
      new Sound("Item_98", "./BloodMoonSicle/sounds/Item_98.wav"),
      new Sound("Item_3", "./BloodMoonSicle/sounds/Item_3.wav"),
      new Sound("Item_1", "./BloodMoonSicle/sounds/Item_1.wav"),
      new Sound("Item_9", "./BloodMoonSicle/sounds/Item_9.wav"),
      new Sound("Item_25", "./BloodMoonSicle/sounds/Item_25.wav"),
      new Sound(
        "Terraria Machine Gun Sound",
        "./BloodMoonSicle/sounds/Terraria Machine Gun Sound.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "BMS" }, this.whenIReceiveBms),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bloodsicle throw" },
        this.whenIReceiveBloodsicleThrow
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Blood Sicle" },
        this.whenIReceiveBloodSicle
      )
    ];

    this.vars.mousetouch = 0;
    this.vars.thisListMakesThisProjectWork7 = [];
  }

  *startAsClone() {
    if (this.costume.name == "noshooty") {
      this.costume = "Shooty";
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "NoShooty";
  }

  *whenIReceiveBms() {
    yield* this.wait(0.1);
    if (this.costume.name == "shooty") {
      this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
      this.size = 150;
      this.costume = "Blood Scyte";
      this.visible = true;
      this.goto(this.sprites["Item"].x, this.sprites["Item"].y);
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      yield* this.glide(0.1, this.mouse.x, this.mouse.y);
      this.direction = 90;
      yield* this.wait(0.5);
      /* TODO: Implement sensing_setdragmode */ null;
      while (
        !(
          this.touching("mouse") &&
          this.mouse.down &&
            this.stage.vars.tlmtgf[
              this.stage.vars.thisListMakesTheGameFunction.indexOf(
                this.sprites["Item"].costume.name
              ) +
                1 -
                1
            ] == "Blood Moon Sicle"
        )
      ) {
        if (this.costumeNumber == 4) {
          yield* this.wait(0.05);
          this.costume = "Blood Scyte";
        } else {
          yield* this.wait(0.05);
          this.costumeNumber += 1;
        }
        yield;
      }
      this.size = 100;
      this.costume = "Blood Scyte5";
      yield* this.glide(0.3, this.sprites["Body"].x, this.sprites["Body"].y);
      this.stage.vars.siclereturn = "true";
      this.deleteThisClone();
    }
  }

  *whenIReceiveBloodsicleThrow() {
    if (this.costume.name == "noshooty") {
      this.createClone();
      this.broadcast("BMS");
    }
  }

  *whenIReceiveBloodSicle() {
    this.deleteThisClone();
  }
}
