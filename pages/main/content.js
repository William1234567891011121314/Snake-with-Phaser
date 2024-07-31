var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('greenSquare', '/pages/main/localAssets/sprites/green_square.png')
    this.load.image('wall', '/pages/main/localAssets/sprites/wall.png')
}

var walls
var cursors
var player
var lastKey = function(){}

function create ()
{
    walls = this.physics.add.staticGroup()
    walls.create(500, 25, 'wall').setDisplaySize(1000, 50).refreshBody()
    walls.create(500, 775, 'wall').setDisplaySize(1000, 50).refreshBody()
    walls.create(25, 400, 'wall').setDisplaySize(50, 800).refreshBody()
    walls.create(975, 400, 'wall').setDisplaySize(50, 800).refreshBody()
    player = this.physics.add.sprite(500, 400, 'greenSquare').setDisplaySize(50, 50)
    this.physics.add.collider(player, walls)
    cursors = this.input.keyboard.createCursorKeys()
}

function update ()
{
    if (cursors.left.isDown) {
        lastKey = () => {
            player.setVelocity(0, 0)
            player.setVelocityX(-160) 
        }
    } else if (cursors.right.isDown) {
        lastKey = () => {
            player.setVelocity(0, 0)
            player.setVelocityX(160)
            
        }
    } else if (cursors.up.isDown) {
        lastKey = () => {
            player.setVelocity(0, 0)
            player.setVelocityY(-160)
        }
    } else if (cursors.down.isDown) {
        lastKey = () => {
            player.setVelocity(0, 0)
            player.setVelocityY(160)
        }
    }
    lastKey()
}