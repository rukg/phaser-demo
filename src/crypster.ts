import Sprite = Phaser.Physics.Matter.Sprite;
import * as Phaser from 'phaser';

export class Crypster extends Sprite {
  constructor(world: Phaser.Physics.Matter.World, x: number, y: number, textureKey: string) {
    super(world, x, y, textureKey);

  }

  public Shake(): void {
    this.anims.play('shaking');
  }

}

