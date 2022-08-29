import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Hair from "./Hair/Hair.js";
import Body from "./Body/Body.js";
import Legs from "./Legs/Legs.js";
import Arms from "./Arms/Arms.js";
import Item from "./Item/Item.js";
import Inventory from "./Inventory/Inventory.js";
import Shiverthorn from "./Shiverthorn/Shiverthorn.js";
import ManaStar from "./ManaStar/ManaStar.js";
import Bullets from "./Bullets/Bullets.js";
import BloodMoonSicle from "./BloodMoonSicle/BloodMoonSicle.js";
import PlayerHealth from "./PlayerHealth/PlayerHealth.js";
import PlayerMana from "./PlayerMana/PlayerMana.js";
import Debuffs from "./Debuffs/Debuffs.js";
import EnemyProjectiles from "./EnemyProjectiles/EnemyProjectiles.js";
import EowHp from "./EowHp/EowHp.js";
import EocHp from "./EocHp/EocHp.js";
import Eoc from "./Eoc/Eoc.js";
import Eow from "./Eow/Eow.js";
import Sound from "./Sound/Sound.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";
import Platforms from "./Platforms/Platforms.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: 0,
    y: -24,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 20
  }),
  Hair: new Hair({
    x: 0,
    y: -28,
    direction: 90,
    costumeNumber: 12,
    size: 200,
    visible: true,
    layerOrder: 3
  }),
  Body: new Body({
    x: 0,
    y: -28,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 2
  }),
  Legs: new Legs({
    x: 0,
    y: -28,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 4
  }),
  Arms: new Arms({
    x: 0,
    y: -28,
    direction: 90,
    costumeNumber: 7,
    size: 200,
    visible: true,
    layerOrder: 21
  }),
  Item: new Item({
    x: 10,
    y: -36,
    direction: 150,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  Inventory: new Inventory({
    x: -36,
    y: 162,
    direction: 90,
    costumeNumber: 16,
    size: 70,
    visible: true,
    layerOrder: 1
  }),
  Shiverthorn: new Shiverthorn({
    x: 52.80368545015825,
    y: 27.63555897972262,
    direction: -94.22721866532675,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  ManaStar: new ManaStar({
    x: 7.211600786943598,
    y: -171.92611840284,
    direction: 178.82607045560735,
    costumeNumber: 6,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Bullets: new Bullets({
    x: -22.221546636036305,
    y: -30.576766089611418,
    direction: 178.82607045560735,
    costumeNumber: 6,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  BloodMoonSicle: new BloodMoonSicle({
    x: 89.2483046300506,
    y: -52.72977191035552,
    direction: 178.82607045560735,
    costumeNumber: 6,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  PlayerHealth: new PlayerHealth({
    x: 153,
    y: 165,
    direction: 90,
    costumeNumber: 11,
    size: 70,
    visible: true,
    layerOrder: 16
  }),
  PlayerMana: new PlayerMana({
    x: 222,
    y: 145,
    direction: 90,
    costumeNumber: 1,
    size: 90,
    visible: true,
    layerOrder: 17
  }),
  Debuffs: new Debuffs({
    x: 185,
    y: 135,
    direction: 90,
    costumeNumber: 18,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  EnemyProjectiles: new EnemyProjectiles({
    x: -94,
    y: -174,
    direction: -175,
    costumeNumber: 3,
    size: 200,
    visible: false,
    layerOrder: 5
  }),
  EowHp: new EowHp({
    x: 149,
    y: 140,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: false,
    layerOrder: 12
  }),
  EocHp: new EocHp({
    x: -138.7865,
    y: -25.731499999999997,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Eoc: new Eoc({
    x: -138.7865,
    y: 34.2685,
    direction: 174.82509432287333,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 14
  }),
  Eow: new Eow({
    x: 83.0160313785698,
    y: 111.83550195948821,
    direction: 156.33066185053877,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 18
  }),
  Sound: new Sound({
    x: 55,
    y: -33,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 111.00000000000001,
    visible: false,
    layerOrder: 22
  }),
  Platforms: new Platforms({
    x: 0,
    y: 0,
    direction: 101.46288400474965,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 19
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
