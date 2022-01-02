import Phaser from 'phaser';

export class TestScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'TestScene',
    });
  }

  preload(): void{
    this.load.image('tower_fire', 'assets/tower_fire.png');
    this.load.image('tower_brick', 'assets/tower_brick.png');
  }

  create(): void {
    const boxTower = this.add.rectangle(150, 100, 240, 148);
    boxTower.setStrokeStyle(2, 0x1a65ac)

    this.add.image(200, 100, 'tower_brick').setScale(0.5);
    this.add.image(100, 100, 'tower_fire').setScale(0.5);

    const boxMap = this.add.rectangle(900, 500, 640, 640);
    boxMap.setStrokeStyle(2, 0x1a65ac)
  }
}
