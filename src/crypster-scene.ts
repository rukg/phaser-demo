import * as Phaser from 'phaser';
import Sprite = Phaser.Physics.Matter.Sprite;
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
import { Crypster } from './crypster';

const CRYPSTER: string = 'crypster';
const ENEMY: string = 'enemy';

export class CrypsterScene extends Phaser.Scene {
  private cursors: CursorKeys;

  private crypster: Sprite;
  private enemy: Sprite;

  public preload(): void {
    this.load.image('arena', 'assets/arena.png');
    this.load.image('bg', 'assets/bg.png');
    this.load.spritesheet(CRYPSTER, 'assets/crypster.png', { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet(ENEMY, 'assets/enemy-2.png', { frameWidth: 100, frameHeight: 100 });
  }

  public create(): void {
    this.add.image(400, 300, 'bg');

    this.initArena();
    this.initCrypster();
    this.initEnemy();

    this.matter.world.setBounds(0, 0, 800, 600);
    this.matter.add.mouseSpring();
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  public override update(time: number, delta: number): void {
    if (this.cursors.up.isDown) {
      this.crypster.setVelocityY(-10);
    }

    if (this.cursors.down.isDown) {
      this.crypster.setVelocityY(10);
    }

    if (this.cursors.left.isDown) {
      this.crypster.setVelocityX(-10);
    }

    if (this.cursors.right.isDown) {
      this.crypster.setVelocityX(10);
    }
  }

  private initEnemy(): void {
    this.enemy = this.matter.add.sprite(400, 100, ENEMY);
    this.enemy.setCircle(60);

    this.anims.create({
      key: 'shaking',
      frames: this.anims.generateFrameNumbers(ENEMY, { start: 0, end: 4 }),
      frameRate: 6,
      repeat: -1,
    });

    this.enemy.anims.play('shaking', true);
  }

  private initCrypster(): void {
    this.crypster = this.matter.add.sprite(400, 500, CRYPSTER);
    this.crypster.setCircle(60);

    this.anims.create({
      key: 'blinking',
      frames: this.anims.generateFrameNumbers(CRYPSTER, { start: 0, end: 5 }),
      frameRate: 7,
      repeat: -1,
    });

    this.crypster.anims.play('blinking', true);
  }

  private initArena(): void {
    this.add.image(400, 300, 'arena');

    const rect1 = this.matter.bodies.rectangle(580, 300, 10, 370);

    const rect2 = this.matter.bodies.rectangle(220, 300, 10, 370);

    const rect3 = this.matter.bodies.rectangle(245, 87, 10, 110, {
      angle: Phaser.Math.DegToRad(45),
    });
    const rect4 = this.matter.bodies.rectangle(245, 513, 10, 110, {
      angle: Phaser.Math.DegToRad(-45),
    });

    const rect5 = this.matter.bodies.rectangle(395, 49, 250, 10);

    const rect6 = this.matter.bodies.rectangle(555, 87, 10, 110, {
      angle: Phaser.Math.DegToRad(-45),
    });

    const rect7 = this.matter.bodies.rectangle(395, 551, 250, 10);

    const rect8 = this.matter.bodies.rectangle(547, 521, 10, 110, {
      angle: Phaser.Math.DegToRad(45),
    });

    const compoundBody = this.matter.body.create({
      isStatic: true,
      parts: [rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8],
    });

    this.matter.world.add(compoundBody);
  }
}
