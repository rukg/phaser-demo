import * as Phaser from 'phaser';
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
import SpriteWithDynamicBody = Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

export class DemoScene extends Phaser.Scene {

    private cursors: CursorKeys;
    private player: SpriteWithDynamicBody;
    private crypster: SpriteWithDynamicBody;
    private enemy: SpriteWithDynamicBody;


    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('crypster', 'assets/crypster.png', {frameWidth: 100, frameHeight: 100})
        this.load.spritesheet('enemy', 'assets/enemy-crypster.png', {frameWidth: 100, frameHeight: 100})

        this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 48});
    }

    create() {
        this.add.image(400, 300, 'sky');

        const platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        // this.player = this.physics.add.sprite(100, 450, 'dude');
        // this.player.setBounce(0.2);
        // this.player.setCollideWorldBounds(true);

        this.crypster = this.physics.add.sprite(100, 450, 'crypster');
        this.crypster.setBounce(0.2);
        this.crypster.setCollideWorldBounds(true);

        this.anims.create({
            key: 'crypo',
            frames: this.anims.generateFrameNumbers('crypster', {start: 0, end: 5}),
            frameRate: 7,
            repeat: -1
        })


        this.enemy = this.physics.add.sprite(250, 450, 'enemy');
        this.enemy.setBounce(0.2);
        this.enemy.setCollideWorldBounds(true);

        this.anims.create({
            key: 'enemy',
            frames: this.anims.generateFrameNumbers('enemy', {start: 0, end: 5}),
            frameRate: 6,
            repeat: -1
        })

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', {start: 4, end: 8}),
            frameRate: 10,
            repeat: -1
        })

        this.cursors = this.input.keyboard.createCursorKeys();

        // this.physics.add.collider(this.player, platforms);
        this.physics.add.collider(this.crypster, platforms);
        this.physics.add.collider(this.enemy, platforms);

    }

    update() {

        this.crypster.anims.play('crypo', true);
        this.enemy.anims.play('enemy', true);


        // if (this.cursors.left.isDown) {
        //     this.player.setVelocityX(-160);
        //
        //     this.player.anims.play('left', true);
        // }
        //
        // if (this.cursors.right.isDown) {
        //     this.player.setVelocityX(160);
        //     this.player.anims.play('right', true);
        // }
        //
        // if (this.cursors.up.isDown) {
        //     this.player.setVelocityY(-330);
        // }
    }

}
