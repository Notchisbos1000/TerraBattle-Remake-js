/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sound extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sound/costumes/costume1.png", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("Zombie_0", "./Sound/sounds/Zombie_0.wav"),
      new Sound("Unlock", "./Sound/sounds/Unlock.wav"),
      new Sound("Tink_2", "./Sound/sounds/Tink_2.wav"),
      new Sound("Tink_1", "./Sound/sounds/Tink_1.wav"),
      new Sound("Tink_0", "./Sound/sounds/Tink_0.wav"),
      new Sound("Splash_1", "./Sound/sounds/Splash_1.wav"),
      new Sound("Splash_0", "./Sound/sounds/Splash_0.wav"),
      new Sound("Run", "./Sound/sounds/Run.wav"),
      new Sound("Roar_1", "./Sound/sounds/Roar_1.wav"),
      new Sound("Roar_0", "./Sound/sounds/Roar_0.wav"),
      new Sound("Player_Killed", "./Sound/sounds/Player_Killed.wav"),
      new Sound("Player_Hit_2", "./Sound/sounds/Player_Hit_2.wav"),
      new Sound("Player_Hit_1", "./Sound/sounds/Player_Hit_1.wav"),
      new Sound("NPC_Killed_19", "./Sound/sounds/NPC_Killed_19.wav"),
      new Sound("NPC_Killed_18", "./Sound/sounds/NPC_Killed_18.wav"),
      new Sound("NPC_Killed_17", "./Sound/sounds/NPC_Killed_17.wav"),
      new Sound("NPC_Killed_16", "./Sound/sounds/NPC_Killed_16.wav"),
      new Sound("NPC_Killed_15", "./Sound/sounds/NPC_Killed_15.wav"),
      new Sound("NPC_Killed_14", "./Sound/sounds/NPC_Killed_14.wav"),
      new Sound("NPC_Killed_13", "./Sound/sounds/NPC_Killed_13.wav"),
      new Sound("NPC_Killed_12", "./Sound/sounds/NPC_Killed_12.wav"),
      new Sound("NPC_Killed_11", "./Sound/sounds/NPC_Killed_11.wav"),
      new Sound("NPC_Killed_10", "./Sound/sounds/NPC_Killed_10.wav"),
      new Sound("NPC_Killed_9", "./Sound/sounds/NPC_Killed_9.wav"),
      new Sound("NPC_Killed_8", "./Sound/sounds/NPC_Killed_8.wav"),
      new Sound("NPC_Killed_7", "./Sound/sounds/NPC_Killed_7.wav"),
      new Sound("NPC_Killed_6", "./Sound/sounds/NPC_Killed_6.wav"),
      new Sound("NPC_Killed_5", "./Sound/sounds/NPC_Killed_5.wav"),
      new Sound("NPC_Killed_4", "./Sound/sounds/NPC_Killed_4.wav"),
      new Sound("NPC_Killed_3", "./Sound/sounds/NPC_Killed_3.wav"),
      new Sound("NPC_Killed_2", "./Sound/sounds/NPC_Killed_2.wav"),
      new Sound("NPC_Killed_1", "./Sound/sounds/NPC_Killed_1.wav"),
      new Sound("NPC_Hit_13", "./Sound/sounds/NPC_Hit_13.wav"),
      new Sound("NPC_Hit_12", "./Sound/sounds/NPC_Hit_12.wav"),
      new Sound("NPC_Hit_11", "./Sound/sounds/NPC_Hit_11.wav"),
      new Sound("NPC_Hit_10", "./Sound/sounds/NPC_Hit_10.wav"),
      new Sound("NPC_Hit_9", "./Sound/sounds/NPC_Hit_9.wav"),
      new Sound("NPC_Hit_8", "./Sound/sounds/NPC_Hit_8.wav"),
      new Sound("NPC_Hit_7", "./Sound/sounds/NPC_Hit_7.wav"),
      new Sound("NPC_Hit_6", "./Sound/sounds/NPC_Hit_6.wav"),
      new Sound("NPC_Hit_5", "./Sound/sounds/NPC_Hit_5.wav"),
      new Sound("NPC_Hit_4", "./Sound/sounds/NPC_Hit_4.wav"),
      new Sound("NPC_Hit_3", "./Sound/sounds/NPC_Hit_3.wav"),
      new Sound("NPC_Hit_2", "./Sound/sounds/NPC_Hit_2.wav"),
      new Sound("NPC_Hit_1", "./Sound/sounds/NPC_Hit_1.wav"),
      new Sound("Menu_Tick", "./Sound/sounds/Menu_Tick.wav"),
      new Sound("Menu_Open", "./Sound/sounds/Menu_Open.wav"),
      new Sound("Menu_Close", "./Sound/sounds/Menu_Close.wav"),
      new Sound("Mech_0", "./Sound/sounds/Mech_0.wav"),
      new Sound("MaxMana", "./Sound/sounds/MaxMana.wav"),
      new Sound("Jump_2", "./Sound/sounds/Jump_2.wav"),
      new Sound("Jump_1", "./Sound/sounds/Jump_1.wav"),
      new Sound("Item_51", "./Sound/sounds/Item_51.wav"),
      new Sound("Item_50", "./Sound/sounds/Item_50.wav"),
      new Sound("Item_49", "./Sound/sounds/Item_49.wav"),
      new Sound("Item_48", "./Sound/sounds/Item_48.wav"),
      new Sound("Item_47", "./Sound/sounds/Item_47.wav"),
      new Sound("Item_46", "./Sound/sounds/Item_46.wav"),
      new Sound("Item_45", "./Sound/sounds/Item_45.wav"),
      new Sound("Item_44", "./Sound/sounds/Item_44.wav"),
      new Sound("Item_43", "./Sound/sounds/Item_43.wav"),
      new Sound("Item_42", "./Sound/sounds/Item_42.wav"),
      new Sound("Item_41", "./Sound/sounds/Item_41.wav"),
      new Sound("Item_40", "./Sound/sounds/Item_40.wav"),
      new Sound("Item_39", "./Sound/sounds/Item_39.wav"),
      new Sound("Item_38", "./Sound/sounds/Item_38.wav"),
      new Sound("Item_37", "./Sound/sounds/Item_37.wav"),
      new Sound("Item_36 (Shotgun)", "./Sound/sounds/Item_36 (Shotgun).wav"),
      new Sound("Item_35", "./Sound/sounds/Item_35.wav"),
      new Sound("Item_34", "./Sound/sounds/Item_34.wav"),
      new Sound("Item_33", "./Sound/sounds/Item_33.wav"),
      new Sound("Item_32", "./Sound/sounds/Item_32.wav"),
      new Sound("Item_31", "./Sound/sounds/Item_31.wav"),
      new Sound("Item_30", "./Sound/sounds/Item_30.wav"),
      new Sound("Item_29", "./Sound/sounds/Item_29.wav"),
      new Sound("Item_28", "./Sound/sounds/Item_28.wav"),
      new Sound("Item_27", "./Sound/sounds/Item_27.wav"),
      new Sound("Item_26", "./Sound/sounds/Item_26.wav"),
      new Sound("Item_25", "./Sound/sounds/Item_25.wav"),
      new Sound("Item_24", "./Sound/sounds/Item_24.wav"),
      new Sound("Item_23", "./Sound/sounds/Item_23.wav"),
      new Sound("Item_22", "./Sound/sounds/Item_22.wav"),
      new Sound("Item_21", "./Sound/sounds/Item_21.wav"),
      new Sound("Item_20", "./Sound/sounds/Item_20.wav"),
      new Sound("Item_19", "./Sound/sounds/Item_19.wav"),
      new Sound("Item_18", "./Sound/sounds/Item_18.wav"),
      new Sound("Item_17", "./Sound/sounds/Item_17.wav"),
      new Sound("Item_16", "./Sound/sounds/Item_16.wav"),
      new Sound("Item_15", "./Sound/sounds/Item_15.wav"),
      new Sound("Item_14", "./Sound/sounds/Item_14.wav"),
      new Sound("Item_13", "./Sound/sounds/Item_13.wav"),
      new Sound("Item_12", "./Sound/sounds/Item_12.wav"),
      new Sound("Item_11", "./Sound/sounds/Item_11.wav"),
      new Sound("Item_10", "./Sound/sounds/Item_10.wav"),
      new Sound("Item_9", "./Sound/sounds/Item_9.wav"),
      new Sound("Item_8", "./Sound/sounds/Item_8.wav"),
      new Sound("Item_7", "./Sound/sounds/Item_7.wav"),
      new Sound("Item_6", "./Sound/sounds/Item_6.wav"),
      new Sound("Item_5", "./Sound/sounds/Item_5.wav"),
      new Sound("Item_4", "./Sound/sounds/Item_4.wav"),
      new Sound("Item_3", "./Sound/sounds/Item_3.wav"),
      new Sound("Item_2", "./Sound/sounds/Item_2.wav"),
      new Sound("Item_1", "./Sound/sounds/Item_1.wav"),
      new Sound("Grass", "./Sound/sounds/Grass.wav"),
      new Sound("Grab", "./Sound/sounds/Grab.wav"),
      new Sound("Female_Hit_2", "./Sound/sounds/Female_Hit_2.wav"),
      new Sound("Female_Hit_1", "./Sound/sounds/Female_Hit_1.wav"),
      new Sound("Female_Hit_0", "./Sound/sounds/Female_Hit_0.wav"),
      new Sound("Drown", "./Sound/sounds/Drown.wav"),
      new Sound("Double_Jump", "./Sound/sounds/Double_Jump.wav"),
      new Sound("Door_Opened", "./Sound/sounds/Door_Opened.wav"),
      new Sound("Door_Closed", "./Sound/sounds/Door_Closed.wav"),
      new Sound("Dig_2", "./Sound/sounds/Dig_2.wav"),
      new Sound("Dig_1", "./Sound/sounds/Dig_1.wav"),
      new Sound("Dig_0", "./Sound/sounds/Dig_0.wav"),
      new Sound("Coins", "./Sound/sounds/Coins.wav"),
      new Sound("Chat", "./Sound/sounds/Chat.wav"),
      new Sound("Zombie_9", "./Sound/sounds/Zombie_9.wav"),
      new Sound("Zombie_8", "./Sound/sounds/Zombie_8.wav"),
      new Sound("Zombie_7", "./Sound/sounds/Zombie_7.wav"),
      new Sound("Shatter", "./Sound/sounds/Shatter.wav"),
      new Sound("Player_Hit_0", "./Sound/sounds/Player_Hit_0.wav"),
      new Sound("Pixie", "./Sound/sounds/Pixie.wav"),
      new Sound("Zombie_6", "./Sound/sounds/Zombie_6.wav"),
      new Sound("Zombie_5", "./Sound/sounds/Zombie_5.wav"),
      new Sound("Zombie_4", "./Sound/sounds/Zombie_4.wav"),
      new Sound("Zombie_3", "./Sound/sounds/Zombie_3.wav"),
      new Sound("Zombie_2", "./Sound/sounds/Zombie_2.wav"),
      new Sound("Zombie_1", "./Sound/sounds/Zombie_1.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hit eye" },
        this.whenIReceiveHitEye
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Kill eye" },
        this.whenIReceiveKillEye
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "player death" },
        this.whenIReceivePlayerDeath
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "player damage" },
        this.whenIReceivePlayerDamage
      ),
      new Trigger(Trigger.BROADCAST, { name: "Roar!" }, this.whenIReceiveRoar),
      new Trigger(
        Trigger.BROADCAST,
        { name: "kill boss" },
        this.whenIReceiveKillBoss
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hit boss" },
        this.whenIReceiveHitBoss
      )
    ];
  }

  *whenIReceiveHitEye() {
    yield* this.startSound("NPC_Hit_1");
  }

  *whenIReceiveKillEye() {
    yield* this.startSound("NPC_Killed_1");
  }

  *whenIReceivePlayerDeath() {
    yield* this.startSound("Player_Killed");
  }

  *whenIReceivePlayerDamage() {
    yield* this.startSound("Player_Hit_0");
  }

  *whenIReceiveRoar() {
    yield* this.startSound("Roar_0");
  }

  *whenIReceiveKillBoss() {
    yield* this.startSound("NPC_Killed_1");
  }

  *whenIReceiveHitBoss() {
    yield* this.startSound("NPC_Hit_13");
  }
}
