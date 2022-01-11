import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
import Sprite = Phaser.Physics.Matter.Sprite;

export class BoundScene extends Phaser.Scene {
  private cursors: CursorKeys;

  private crypster: Sprite;

  public preload(): void {
    this.load.image('arena', 'assets/arena.png');
    this.load.spritesheet('crypster', 'assets/crypster.png', { frameWidth: 100, frameHeight: 100 });
  }

  public create(): void {
    this.add.image(400, 300, 'arena');

    const l1 = this.matter.add.rectangle(578, 310, 10, 359, { isStatic: true });
    const l2 = this.matter.add.rectangle(218, 310, 10, 369, { isStatic: true });

    const l3 = this.matter.add.rectangle(248, 93, 10, 80, {
      isStatic: true,
      angle: Phaser.Math.DegToRad(45),
    });
    const l4 = this.matter.add.rectangle(248, 531, 10, 80, {
      isStatic: true,
      angle: Phaser.Math.DegToRad(-45),
    });

    const l5 = this.matter.add.rectangle(395, 60, 230, 10, { isStatic: true });
    const l6 = this.matter.add.rectangle(395, 563, 230, 10, { isStatic: true });

    const l7 = this.matter.add.rectangle(545, 93, 10, 80, {
      isStatic: true,
      angle: Phaser.Math.DegToRad(-45),
    });
    const l8 = this.matter.add.rectangle(545, 531, 10, 80, {
      isStatic: true,
      angle: Phaser.Math.DegToRad(45),
    });

    this.crypster = this.matter.add.sprite(400, 85, 'crypster');

    this.matter.world.setBounds(0, 0, 800, 600);
    this.matter.add.mouseSpring();
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  public override update(time: number, delta: number): void {
    if (this.cursors.up.isDown) {
      this.crypster.setVelocityY(-10);
      console.log('press up');
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

    console.log(
      'screen x: ' + this.input.x,
      'screen y: ' + this.input.y,
      'world x: ' + this.input.mousePointer.worldX,
      'world y: ' + this.input.mousePointer.worldY,
    );
  }
}
