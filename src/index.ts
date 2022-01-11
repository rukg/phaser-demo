import { CrypsterScene } from './crypster-scene';

const game = new Phaser.Game({
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  physics: {
    default: 'matter',
    matter: {
      debug: {
        showBody: true,
        showStaticBody: true,
        showAxes: true,
        showInternalEdges: true,
      },
      gravity: {
        x: 0,
        y: 0,
      },
    },
  },
  scene: [CrypsterScene],
});
