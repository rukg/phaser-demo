import * as Phaser from 'phaser';
import Sprite = Phaser.Physics.Matter.Sprite;
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;

const CRYPSTER: string = 'crypster';
const ENEMY: string = 'enemy';

export class CrypsterScene extends Phaser.Scene {

    private cursors: CursorKeys;

    private crypster: Sprite
    private enemy: Sprite;

    public preload(): void {
        this.load.spritesheet(CRYPSTER, 'assets/crypster.png', {frameWidth: 100, frameHeight: 100})
        this.load.spritesheet(ENEMY, 'assets/enemy-crypster.png', {frameWidth: 100, frameHeight: 100})
    }

    public create(): void {
        this.initCrypster();
        this.initEnemy();

        this.matter.world.setBounds(0, 0, 800, 600);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    public update(): void {

        this.crypster.anims.play('blinking', true);
        this.enemy.anims.play('shaking', true);


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

        this.anims.create({
            key: 'shaking',
            frames: this.anims.generateFrameNumbers(ENEMY, {start: 0, end: 5}),
            frameRate: 7,
            repeat: -1
        });
    }


    private initCrypster(): void {

        this.crypster = this.matter.add.sprite(400, 500, CRYPSTER);

        this.anims.create({
            key: 'blinking',
            frames: this.anims.generateFrameNumbers(CRYPSTER, {start: 0, end: 5}),
            frameRate: 7,
            repeat: -1
        });
    }

}
