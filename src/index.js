import Phaser from 'phaser';
import Game from "./scenes/game"

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        
    }
      
    create ()
    {

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1280,
    height: 780,
    scene: [
        Game
    ]
};

const game = new Phaser.Game(config);
