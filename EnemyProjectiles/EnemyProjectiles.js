/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class EnemyProjectiles extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Musket_Ball",
        "./EnemyProjectiles/costumes/Musket_Ball.svg",
        { x: 11.922840000000008, y: 11.89622 }
      ),
      new Costume(
        "Musket_Ball3",
        "./EnemyProjectiles/costumes/Musket_Ball3.svg",
        { x: 4, y: 4 }
      ),
      new Costume(
        "Musket_Ball2",
        "./EnemyProjectiles/costumes/Musket_Ball2.svg",
        { x: 6, y: 1 }
      ),
      new Costume(
        "Starfury_%28projectile%29",
        "./EnemyProjectiles/costumes/Starfury_%28projectile%29.png",
        { x: 32, y: 32 }
      ),
      new Costume(
        "Wooden_Arrow",
        "./EnemyProjectiles/costumes/Wooden_Arrow.png",
        { x: 32, y: 14 }
      )
    ];

    this.sounds = [new Sound("pop", "./EnemyProjectiles/sounds/pop.wav")];

    this.triggers = [];

    this.vars.bitsOfFleshHp = 3600;
    this.vars.thisListMakesThisProjectWork8 = [];
  }
}
