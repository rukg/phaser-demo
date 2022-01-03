import {DemoScene} from './demo-scene';
import {CrypsterScene} from './crypster-scene';
import GameConfig = Phaser.Types.Core.GameConfig;

const crypsters: GameConfig = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#675cef',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0
            },
        }
    },
    scene: [CrypsterScene]
}


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

const game = new Phaser.Game(crypsters);
