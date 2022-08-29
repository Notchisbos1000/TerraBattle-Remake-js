/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Platforms extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Small Grass Plat.2",
        "./Platforms/costumes/Small Grass Plat.2.svg",
        { x: 37.86237912190393, y: 8.2590797366 }
      ),
      new Costume(
        "Small Grass Plat.3",
        "./Platforms/costumes/Small Grass Plat.3.svg",
        { x: 37.862359999999995, y: 8.259080000000012 }
      ),
      new Costume("Platform", "./Platforms/costumes/Platform.svg", {
        x: 58.376120000000014,
        y: 6.177949999999981
      }),
      new Costume(
        "Small Grass Plat.4",
        "./Platforms/costumes/Small Grass Plat.4.svg",
        { x: 63.599491666666665, y: 8.425747499999972 }
      )
    ];

    this.sounds = [new Sound("pop", "./Platforms/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.TIMER_GREATER_THAN,
        { VALUE: 0 },
        this.whengreaterthan
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.stage.vars.platformId = 0;
    this.costume = this.stage.vars.platformId;
    this.goto(
      this.stage.vars.platX[this.stage.vars.platformId - 1],
      this.stage.vars.playY[this.stage.vars.platformId - 1]
    );
    for (let i = 0; i < 3; i++) {
      this.stage.vars.platformId += 1;
      this.createClone();
      yield;
    }
  }

  *startAsClone() {
    this.costume = this.stage.vars.platformId;
    this.goto(
      this.stage.vars.platX[this.stage.vars.platformId - 1],
      this.stage.vars.playY[this.stage.vars.platformId - 1]
    );
    this.visible = true;
    if (this.stage.vars.platform[this.stage.vars.platformId - 1] == "yes") {
      while (true) {
        if (this.touching(this.sprites["Player"].andClones())) {
          this.stage.vars.plat = "yes";
          this.stage.vars.platformY = this.stage.vars.playY[
            this.costumeNumber - 1
          ];
        }
        yield;
      }
    } else {
      while (true) {
        if (this.touching(this.sprites["Player"].andClones())) {
          this.stage.vars.plat = "no";
          this.stage.vars.platformY = this.stage.vars.playY[
            this.costumeNumber - 1
          ];
        }
        yield;
      }
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.platform = [];
    this.stage.vars.playY = [];
    this.stage.vars.platform.push("no");
    this.stage.vars.playY.push(-90);
    this.stage.vars.platform.push("no");
    this.stage.vars.playY.push(-90);
    this.stage.vars.platform.push("yes");
    this.stage.vars.playY.push(-60);
    this.stage.vars.platX = [];
    this.stage.vars.platX.push(180);
    this.stage.vars.platX.push(-180);
    this.stage.vars.platX.push(0);
  }

  *whengreaterthan() {
    this.visible = false;
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.stage.vars.platformId = 0;
    this.costume = this.stage.vars.platformId;
    this.goto(
      this.stage.vars.platX[this.stage.vars.platformId - 1],
      this.stage.vars.playY[this.stage.vars.platformId - 1]
    );
    for (let i = 0; i < 3; i++) {
      this.stage.vars.platformId += 1;
      this.createClone();
      yield;
    }
  }
}
