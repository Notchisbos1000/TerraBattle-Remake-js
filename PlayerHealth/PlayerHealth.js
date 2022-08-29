/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerHealth extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Health (200)10",
        "./PlayerHealth/costumes/Health (200)10.png",
        { x: 220, y: 22 }
      ),
      new Costume(
        "Health (200)9",
        "./PlayerHealth/costumes/Health (200)9.png",
        { x: 220, y: 22 }
      ),
      new Costume(
        "Health (200)8",
        "./PlayerHealth/costumes/Health (200)8.png",
        { x: 220, y: 22 }
      ),
      new Costume(
        "Health (200)7",
        "./PlayerHealth/costumes/Health (200)7.png",
        { x: 220, y: 22 }
      ),
      new Costume(
        "Health (200)6",
        "./PlayerHealth/costumes/Health (200)6.png",
        { x: 220, y: 22 }
      ),
      new Costume(
        "Health (200)5",
        "./PlayerHealth/costumes/Health (200)5.png",
        { x: 220, y: 22 }
      ),
      new Costume(
        "Health (200)4",
        "./PlayerHealth/costumes/Health (200)4.png",
        { x: 220, y: 22 }
      ),
      new Costume(
        "Health (200)3",
        "./PlayerHealth/costumes/Health (200)3.png",
        { x: 220, y: 22 }
      ),
      new Costume(
        "Health (200)2",
        "./PlayerHealth/costumes/Health (200)2.png",
        { x: 220, y: 22 }
      ),
      new Costume("Health (200)", "./PlayerHealth/costumes/Health (200).png", {
        x: 220,
        y: 22
      }),
      new Costume("costume1", "./PlayerHealth/costumes/costume1.png", {
        x: 220,
        y: 22
      })
    ];

    this.sounds = [new Sound("pop", "./PlayerHealth/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = this.sprites["Player"].vars["hp2"] / 40 + 0.5;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.goto(153, 165);
    while (true) {
      if (this.sprites["Player"].vars["hp2"] < 1) {
        this.broadcast("player death");
        /* TODO: Implement stop other scripts in sprite */ null;
        this.costume = "Health (200)10";
        return;
      }
      yield;
    }
  }
}
