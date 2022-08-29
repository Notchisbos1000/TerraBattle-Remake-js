/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 337.53119000000004,
        y: 180.50974999999997
      })
    ];

    this.sounds = [new Sound("Item_3", "./Stage/sounds/Item_3.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "m" }, this.whenKeyMPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "b" }, this.whenKeyBPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.mana = 200;
    this.vars.manaSickness = 0;
    this.vars.direction = 0;
    this.vars.eocHp = -5;
    this.vars.chaosState = 0;
    this.vars.manaCooldown = -1;
    this.vars.prexYCoord = -129;
    this.vars.fallSpeed = 12;
    this.vars.shiverlength = 6;
    this.vars._ = 0;
    this.vars.xx = 0;
    this.vars.yy = 179;
    this.vars.platformId = 3;
    this.vars.platformY = -60;
    this.vars.newdirection = -113.72449521003178;
    this.vars.star = "no";
    this.vars.parts = 1;
    this.vars.eowHp = 500;
    this.vars.boss = 0;
    this.vars.actualEowHp = -5;
    this.vars.potionSickness = 0;
    this.vars.hp = 400;
    this.vars.bulletsonscreen = 0;
    this.vars.eowHpDistance = 0;
    this.vars.siclereturn = "true";
    this.vars.plat = "yes";
    this.vars.platX = [180, -180, 0];
    this.vars.playY = [-90, -90, -60];
    this.vars.x1 = [
      "Starfury",
      "Starfury",
      -37.5981560033552,
      "Starfury",
      "Minishark",
      "Starfury",
      "Starfury",
      "Starfury",
      "Starfury",
      "Starfury"
    ];
    this.vars.y1 = [0, 0, -41.68221279597376];
    this.vars.tlmtgf = [
      "RoD",
      "RoD",
      "Starfury",
      "Starfury",
      "Icemourne",
      "Icemourne",
      "Soul Scythe",
      "Soul Scythe",
      "Blood Moon Sicle",
      "Blood Moon Sicle",
      "Shiverthorn",
      "Shiverthorn",
      "Minishark",
      "Minishark",
      "SprayGun",
      "SprayGun",
      "Blood Moon Sicle"
    ];
    this.vars.thisListMakesTheGameFunction = [
      "RoD1",
      "RoD2",
      "Starfury1",
      "Starfury2",
      "Icemourne1",
      "Icemourne2",
      "Soul Scythe1",
      "Soul Scythe2",
      "Blood Moon Sicle1",
      "Blood Moon Sicle2",
      "Shiverthorn1",
      "Shiverthorn2",
      "Minishark1",
      "Minishark2",
      "SprayGun1",
      "SprayGun2",
      "Blood Moon Sicle3"
    ];
    this.vars.l = [];
    this.vars.bossId = ["EoC", "EoW"];
    this.vars.bossesByNumber = [
      "Eye of Cthulu -  One of the simplist bosses, flying eyeball that swoops to attack",
      "Eater of Worlds - Worm/s that burrow underground and jump out to attack"
    ];
    this.vars.platform = ["no", "no", "yes"];

    this.watchers.bossesByNumber = new Watcher({
      label: "Bosses By Number",
      style: "normal",
      visible: false,
      value: () => this.vars.bossesByNumber,
      x: 240,
      y: 180,
      width: 480,
      height: 251
    });
  }

  *whenKeyMPressed() {
    if (!(this.vars.manaCooldown > 0)) {
      yield* this.startSound("Item_3");
      this.vars.manaCooldown = 1;
      this.vars.mana = 200;
      this.vars.mana += 200 - this.vars.mana;
      this.vars.manaSickness += 5;
    }
  }

  *whenGreenFlagClicked() {
    this.vars.siclereturn = "true";
    while (true) {
      if (
        this.mouse.down &&
        !(this.sprites["BloodMoonSicle"].vars["mousetouch"] == "yes")
      ) {
        if (
          this.vars.tlmtgf[
            this.vars.thisListMakesTheGameFunction.indexOf(
              this.sprites["Item"].costume.name
            ) +
              1 -
              1
          ] == "Starfury"
        ) {
          this.broadcast("SwordSwing");
          yield* this.broadcastAndWait("Starfury");
        } else {
          if (
            this.vars.tlmtgf[
              this.vars.thisListMakesTheGameFunction.indexOf(
                this.sprites["Item"].costume.name
              ) +
                1 -
                1
            ] == "Shiverthorn"
          ) {
            this.broadcast("Shiverthorn");
            yield* this.wait(1.5);
          } else {
            if (
              this.vars.tlmtgf[
                this.vars.thisListMakesTheGameFunction.indexOf(
                  this.sprites["Item"].costume.name
                ) +
                  1 -
                  1
              ] == "RoD"
            ) {
              yield* this.broadcastAndWait("SwordSwing");
              this.broadcast("Rod Of Discord");
              yield* this.wait(1);
            } else {
              if (
                this.vars.tlmtgf[
                  this.vars.thisListMakesTheGameFunction.indexOf(
                    this.sprites["Item"].costume.name
                  ) +
                    1 -
                    1
                ] == "Minishark" ||
                this.vars.tlmtgf[
                  this.vars.thisListMakesTheGameFunction.indexOf(
                    this.sprites["Item"].costume.name
                  ) +
                    1 -
                    1
                ] == "Spraygun"
              ) {
                if (
                  this.vars.tlmtgf[
                    this.vars.thisListMakesTheGameFunction.indexOf(
                      this.sprites["Item"].costume.name
                    ) +
                      1 -
                      1
                  ] == "Minishark"
                ) {
                  while (!!this.mouse.down) {
                    yield* this.broadcastAndWait("Shoot");
                    yield;
                  }
                } else {
                  this.broadcast("gunaim");
                  this.broadcast("bullet");
                  yield* this.wait(1.2);
                }
              } else {
                if (
                  this.vars.tlmtgf[
                    this.vars.thisListMakesTheGameFunction.indexOf(
                      this.sprites["Item"].costume.name
                    ) +
                      1 -
                      1
                  ] == "Blood Moon Sicle"
                ) {
                  if (this.vars.siclereturn == "false") {
                    null;
                  } else {
                    if (59 < this.vars.mana) {
                      this.vars.mana += -60;
                      yield* this.broadcastAndWait("SwordSwing");
                      this.broadcast("Bloodsicle throw");
                    } else {
                      null;
                    }
                  }
                } else {
                  yield* this.broadcastAndWait("SwordSwing");
                }
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenKeyBPressed() {
    this.watchers.bossesByNumber.visible = true;
    yield* this.askAndWait("Summon Which Boss? (1-2)");
    this.watchers.bossesByNumber.visible = false;
    this.broadcast(this.vars.bossId[this.answer - 1]);
  }

  *whenGreenFlagClicked2() {
    this.watchers.bossesByNumber.visible = false;
    this.vars.bossId = [];
    this.vars.bossId.push("EoC");
    this.vars.bossId.push("EoW");
    this.vars.bossesByNumber = [];
    this.vars.bossesByNumber.push(
      "Eye of Cthulu -  One of the simplist bosses, flying eyeball that swoops to attack"
    );
    this.vars.bossesByNumber.push(
      "Eater of Worlds - Worm/s that burrow underground and jump out to attack"
    );
  }

  *whenGreenFlagClicked3() {
    this.vars.manaSickness = 0;
    this.vars.potionSickness = 0;
  }
}
