/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class EocHp extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume12", "./EocHp/costumes/costume12.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume11", "./EocHp/costumes/costume11.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume10", "./EocHp/costumes/costume10.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume9", "./EocHp/costumes/costume9.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume8", "./EocHp/costumes/costume8.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume7", "./EocHp/costumes/costume7.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume6", "./EocHp/costumes/costume6.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume5", "./EocHp/costumes/costume5.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume4", "./EocHp/costumes/costume4.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume2", "./EocHp/costumes/costume2.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume3", "./EocHp/costumes/costume3.png", {
        x: 50,
        y: 10
      }),
      new Costume("costume1", "./EocHp/costumes/costume1.png", { x: 50, y: 10 })
    ];

    this.sounds = [new Sound("pop", "./EocHp/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Kill eye" },
        this.whenIReceiveKillEye
      ),
      new Trigger(Trigger.BROADCAST, { name: "EoC" }, this.whenIReceiveEoc)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveKillEye() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveEoc() {
    this.visible = true;
    while (true) {
      this.goto(this.sprites["Eoc"].x, this.sprites["Eoc"].y - 60);
      if (this.stage.vars.eocHp < 117) {
        this.costume = "costume12";
      } else {
        this.costume = Math.round((this.stage.vars.eocHp / 2800) * 12);
      }
      yield;
    }
  }
}
