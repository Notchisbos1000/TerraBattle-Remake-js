/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Item extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("RoD1", "./Item/costumes/RoD1.svg", { x: -0.125, y: 34 }),
      new Costume("RoD2", "./Item/costumes/RoD2.svg", {
        x: 34.00000000000003,
        y: 33.99999999999997
      }),
      new Costume("Starfury1", "./Item/costumes/Starfury1.svg", {
        x: 0.19616619258249557,
        y: 29.496169344422725
      }),
      new Costume("Starfury2", "./Item/costumes/Starfury2.svg", {
        x: 30.027669017788526,
        y: 30.327609293430925
      }),
      new Costume("Icemourne1", "./Item/costumes/Icemourne1.svg", {
        x: -0.25,
        y: 74
      }),
      new Costume("Icemourne2", "./Item/costumes/Icemourne2.svg", {
        x: 74.25,
        y: 74.5
      }),
      new Costume("Soul Scythe1", "./Item/costumes/Soul Scythe1.svg", {
        x: 0.44302024449876853,
        y: 133.82594356968215
      }),
      new Costume("Soul Scythe2", "./Item/costumes/Soul Scythe2.svg", {
        x: 157.4918984209341,
        y: 133.53986393111524
      }),
      new Costume(
        "Blood Moon Sicle1",
        "./Item/costumes/Blood Moon Sicle1.svg",
        { x: -0.25, y: 55.25 }
      ),
      new Costume(
        "Blood Moon Sicle2",
        "./Item/costumes/Blood Moon Sicle2.svg",
        { x: 64.25000000000006, y: 56 }
      ),
      new Costume("Shiverthorn", "./Item/costumes/Shiverthorn.svg", {
        x: 0.2862992857143638,
        y: 7.1430421428571265
      }),
      new Costume("Shiverthorn2", "./Item/costumes/Shiverthorn2.svg", {
        x: 0.2862992857143638,
        y: 7.1430421428571265
      }),
      new Costume("Minishark1", "./Item/costumes/Minishark1.svg", {
        x: 4.125,
        y: 14
      }),
      new Costume("Minishark2", "./Item/costumes/Minishark2.svg", {
        x: 4.125,
        y: 7.875
      }),
      new Costume("SprayGun1", "./Item/costumes/SprayGun1.svg", {
        x: 0.375,
        y: 8
      }),
      new Costume("SprayGun2", "./Item/costumes/SprayGun2.svg", {
        x: 0,
        y: 7.999999999999972
      }),
      new Costume(
        "Blood Moon Sicle3",
        "./Item/costumes/Blood Moon Sicle3.svg",
        { x: 0, y: 0 }
      )
    ];

    this.sounds = [new Sound("Item_1", "./Item/sounds/Item_1.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "4" }, this.whenKey4Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "5" }, this.whenKey5Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "6" }, this.whenKey6Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "7" }, this.whenKey7Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "8" }, this.whenKey8Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "9" }, this.whenKey9Pressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.KEY_PRESSED, { key: "0" }, this.whenKey0Pressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "SwordSwing" },
        this.whenIReceiveSwordswing
      ),
      new Trigger(Trigger.BROADCAST, { name: "Shoot" }, this.whenIReceiveShoot),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shoot" },
        this.whenIReceiveShoot2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gunaim" },
        this.whenIReceiveGunaim
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bloodsicle throw" },
        this.whenIReceiveBloodsicleThrow
      )
    ];

    this.audioEffects.volume = 0;
  }

  *whenKey1Pressed() {
    this.costume =
      this.stage.vars.thisListMakesTheGameFunction.indexOf("RoD2") + 1;
  }

  *whenKey2Pressed() {
    this.costume =
      this.stage.vars.thisListMakesTheGameFunction.indexOf("Starfury2") + 1;
  }

  *whenKey3Pressed() {
    this.costume =
      this.stage.vars.thisListMakesTheGameFunction.indexOf("Icemourne2") + 1;
  }

  *whenKey4Pressed() {
    this.costume =
      this.stage.vars.thisListMakesTheGameFunction.indexOf("Soul Scythe2") + 1;
  }

  *whenKey5Pressed() {
    this.costume =
      this.stage.vars.thisListMakesTheGameFunction.indexOf(
        "Blood Moon Sicle2"
      ) + 1;
  }

  *whenKey6Pressed() {
    this.costume =
      this.stage.vars.thisListMakesTheGameFunction.indexOf("Shiverthorn2") + 1;
  }

  *whenKey7Pressed() {
    this.costume =
      this.stage.vars.thisListMakesTheGameFunction.indexOf("Minishark2") + 1;
  }

  *whenKey8Pressed() {
    this.costume =
      this.stage.vars.thisListMakesTheGameFunction.indexOf("Spraygun2") + 1;
  }

  *whenKey9Pressed() {
    this.costume =
      this.stage.vars.thisListMakesTheGameFunction.indexOf("TBD") + 1;
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(
        this.sprites["Player"].x +
          -10 * (this.sprites["Player"].direction / -90),
        this.sprites["Player"].y + -12
      );
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.mouse.down) {
        this.audioEffects.volume = 100;
        this.visible = true;
      } else {
        this.audioEffects.volume = 0;
        this.visible = false;
      }
      if (
        this.stage.vars.tlmtgf[
          this.stage.vars.thisListMakesTheGameFunction.indexOf(
            this.sprites["Item"].costume.name
          ) +
            1 -
            1
        ] == "Shiverthorn"
      ) {
        this.direction = this.radToScratch(
          Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
        );
      } else {
        null;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.tlmtgf = [];
    this.stage.vars.tlmtgf.push("RoD");
    this.stage.vars.tlmtgf.push("RoD");
    this.stage.vars.tlmtgf.push("Starfury");
    this.stage.vars.tlmtgf.push("Starfury");
    this.stage.vars.tlmtgf.push("Icemourne");
    this.stage.vars.tlmtgf.push("Icemourne");
    this.stage.vars.tlmtgf.push("Soul Scythe");
    this.stage.vars.tlmtgf.push("Soul Scythe");
    this.stage.vars.tlmtgf.push("Blood Moon Sicle");
    this.stage.vars.tlmtgf.push("Blood Moon Sicle");
    this.stage.vars.tlmtgf.push("Shiverthorn");
    this.stage.vars.tlmtgf.push("Shiverthorn");
    this.stage.vars.tlmtgf.push("Minishark");
    this.stage.vars.tlmtgf.push("Minishark");
    this.stage.vars.tlmtgf.push("SprayGun");
    this.stage.vars.tlmtgf.push("SprayGun");
    this.stage.vars.tlmtgf.push("Blood Moon Sicle");
    this.stage.vars.thisListMakesTheGameFunction = [];
    this.stage.vars.thisListMakesTheGameFunction.push("RoD1");
    this.stage.vars.thisListMakesTheGameFunction.push("RoD2");
    this.stage.vars.thisListMakesTheGameFunction.push("Starfury1");
    this.stage.vars.thisListMakesTheGameFunction.push("Starfury2");
    this.stage.vars.thisListMakesTheGameFunction.push("Icemourne1");
    this.stage.vars.thisListMakesTheGameFunction.push("Icemourne2");
    this.stage.vars.thisListMakesTheGameFunction.push("Soul Scythe1");
    this.stage.vars.thisListMakesTheGameFunction.push("Soul Scythe2");
    this.stage.vars.thisListMakesTheGameFunction.push("Blood Moon Sicle1");
    this.stage.vars.thisListMakesTheGameFunction.push("Blood Moon Sicle2");
    this.stage.vars.thisListMakesTheGameFunction.push("Shiverthorn1");
    this.stage.vars.thisListMakesTheGameFunction.push("Shiverthorn2");
    this.stage.vars.thisListMakesTheGameFunction.push("Minishark1");
    this.stage.vars.thisListMakesTheGameFunction.push("Minishark2");
    this.stage.vars.thisListMakesTheGameFunction.push("SprayGun1");
    this.stage.vars.thisListMakesTheGameFunction.push("SprayGun2");
    this.stage.vars.thisListMakesTheGameFunction.push("Blood Moon Sicle3");
  }

  *whenKey0Pressed() {
    this.costume =
      this.stage.vars.thisListMakesTheGameFunction.indexOf("TBD") + 1;
  }

  *whenIReceiveSwordswing() {
    if (this.sprites["Body"].direction == 90) {
      this.costume =
        "" +
        this.stage.vars.tlmtgf[
          this.stage.vars.thisListMakesTheGameFunction.indexOf(
            this.costume.name
          ) +
            1 -
            1
        ] +
        1;
      yield* this.startSound("Item_1");
      this.direction = 5;
      this.goto(this.sprites["Player"].x - -6, this.sprites["Player"].y - -3);
      yield* this.wait(0.06);
      this.direction = 80;
      this.goto(this.sprites["Player"].x - 4, this.sprites["Player"].y - -2);
      yield* this.wait(0.06);
      this.direction = 105;
      this.goto(this.sprites["Player"].x - 8, this.sprites["Player"].y - 13);
      yield* this.wait(0.06);
      this.direction = 150;
      this.goto(this.sprites["Player"].x - 8, this.sprites["Player"].y - 14);
    } else {
      this.costume =
        "" +
        this.stage.vars.tlmtgf[
          this.stage.vars.thisListMakesTheGameFunction.indexOf(
            this.costume.name
          ) +
            1 -
            1
        ] +
        2;
      yield* this.startSound("Item_1");
      this.direction = 175;
      this.goto(this.sprites["Player"].x - -6, this.sprites["Player"].y - -3);
      yield* this.wait(0.06);
      this.direction = 100;
      this.goto(this.sprites["Player"].x - 4, this.sprites["Player"].y - -2);
      yield* this.wait(0.06);
      this.direction = 70;
      this.goto(this.sprites["Player"].x - 8, this.sprites["Player"].y - 13);
      yield* this.wait(0.06);
      this.direction = 30;
      this.goto(this.sprites["Player"].x - 8, this.sprites["Player"].y - 14);
    }
  }

  *whenIReceiveShoot() {
    while (!!this.mouse.down) {
      if (this.sprites["Body"].direction == 90) {
        this.costume =
          "" +
          this.stage.vars.tlmtgf[
            this.stage.vars.thisListMakesTheGameFunction.indexOf(
              this.costume.name
            ) +
              1 -
              1
          ] +
          1;
        this.direction = this.radToScratch(
          Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
        );
        this.goto(this.sprites["Player"].x - -5, this.sprites["Player"].y - 8);
      } else {
        this.costume =
          "" +
          this.stage.vars.tlmtgf[
            this.stage.vars.thisListMakesTheGameFunction.indexOf(
              this.costume.name
            ) +
              1 -
              1
          ] +
          2;
        this.direction = this.radToScratch(
          Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
        );
        this.goto(this.sprites["Player"].x - 5, this.sprites["Player"].y - 8);
      }
      yield;
    }
  }

  *whenIReceiveShoot2() {
    while (!!this.mouse.down) {
      this.broadcast("bullet");
      yield* this.wait(0.2);
      yield;
    }
  }

  *whenIReceiveGunaim() {
    while (!!this.mouse.down) {
      if (this.sprites["Body"].direction == 90) {
        this.costume =
          "" +
          this.stage.vars.tlmtgf[
            this.stage.vars.thisListMakesTheGameFunction.indexOf(
              this.costume.name
            ) +
              1 -
              1
          ] +
          1;
        this.direction = this.radToScratch(
          Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
        );
        this.goto(this.sprites["Player"].x - -5, this.sprites["Player"].y - 8);
      } else {
        this.costume =
          "" +
          this.stage.vars.tlmtgf[
            this.stage.vars.thisListMakesTheGameFunction.indexOf(
              this.costume.name
            ) +
              1 -
              1
          ] +
          2;
        this.direction = this.radToScratch(
          Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
        );
        this.goto(this.sprites["Player"].x - 5, this.sprites["Player"].y - 8);
      }
      yield;
    }
  }

  *whenIReceiveBloodsicleThrow() {
    this.stage.vars.siclereturn = "false";
    this.costume = "Blood Moon Sicle3";
    while (!(this.stage.vars.siclereturn == "true")) {
      if (
        this.stage.vars.thisListMakesTheGameFunction.indexOf(
          this.sprites["Item"].costume.name
        ) +
          1 ==
          9 ||
        this.stage.vars.thisListMakesTheGameFunction.indexOf(
          this.sprites["Item"].costume.name
        ) +
          1 ==
          10
      ) {
        this.costume = "Blood Moon Sicle3";
      }
      yield;
    }
  }
}
