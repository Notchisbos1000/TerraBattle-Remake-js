/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class EowHp extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume12", "./EowHp/costumes/costume12.svg", {
        x: 27.42368000000002,
        y: 5
      }),
      new Costume("costume11", "./EowHp/costumes/costume11.svg", {
        x: 27.42368000000002,
        y: 5
      }),
      new Costume("costume10", "./EowHp/costumes/costume10.svg", {
        x: 27.42368000000002,
        y: 5
      }),
      new Costume("costume9", "./EowHp/costumes/costume9.svg", {
        x: 27.42368000000002,
        y: 5
      }),
      new Costume("costume8", "./EowHp/costumes/costume8.svg", {
        x: 27.42367910256411,
        y: 5
      }),
      new Costume("costume7", "./EowHp/costumes/costume7.svg", {
        x: 27.42368000000002,
        y: 5
      }),
      new Costume("costume6", "./EowHp/costumes/costume6.svg", {
        x: 27.42368000000002,
        y: 5
      }),
      new Costume("costume5", "./EowHp/costumes/costume5.svg", {
        x: 27.42368000000002,
        y: 5
      }),
      new Costume("costume4", "./EowHp/costumes/costume4.svg", {
        x: 27.42368000000002,
        y: 5
      }),
      new Costume("costume2", "./EowHp/costumes/costume2.svg", {
        x: 27.42368000000002,
        y: 5
      }),
      new Costume("costume3", "./EowHp/costumes/costume3.svg", {
        x: 27.42368000000002,
        y: 5
      }),
      new Costume("costume1", "./EowHp/costumes/costume1.svg", {
        x: 27.42368000000002,
        y: 5
      })
    ];

    this.sounds = [new Sound("pop", "./EowHp/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "kill boss" },
        this.whenIReceiveKillBoss
      ),
      new Trigger(Trigger.BROADCAST, { name: "EoW" }, this.whenIReceiveEow)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveKillBoss() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveEow() {}
}
