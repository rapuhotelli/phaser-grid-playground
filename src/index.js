import Phaser from "phaser";
import ground from "./assets/ForestPath-2.jpg";

const RES_X = 1920
const RES_Y = 1080
export const CELL_SIZE = 60

const config = {
  parent: "phaser-example",
  type: Phaser.CANVAS,
  width: RES_X,
  height: RES_Y,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('ForestPath2', ground);
}

function create() {
  const ground = this.add.image(0, 0, 'ForestPath2').setOrigin(0)
  const groundBounds = ground.getBounds()
  const cameraCenter = {
    x: groundBounds.width / 2,
    y: groundBounds.height / 2
  }
  let cameraTestDirectionToggle = -1
  this.cameras.main.centerOn(cameraCenter.x, cameraCenter.y)
  this.add
    .rectangle(0, 0, 100, 50, 0xFF0000, 0.5)
    .setInteractive()
    .setScrollFactor(0)
    .on('pointerdown', function (pointer) {
      this.scene.cameras.main.pan(
        cameraCenter.x, 
        cameraCenter.y + (400 * (cameraTestDirectionToggle *= -1)),
        1000, 
        'Quad.easeInOut'
      )
    })
  
  // here be magical grids
  
}
