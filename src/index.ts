import {DemoScene} from './demo-scene';
import GameConfig = Phaser.Types.Core.GameConfig;

const config: GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: [DemoScene],
}

const game = new Phaser.Game(config);
