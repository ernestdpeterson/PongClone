/* eslint-env jquery */
/* global Paddle */ 

function Player(game) {
    Paddle.call(this, game);
    this.game = game;

    this.x = 20;
    this.name = 'player';

    let player = document.createElement('asside');
    player.style.position = 'absolute';
    player.style.width = this.width + 'px';
    player.style.height = this.height + 'px';
    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';
    player.setAttribute('id', 'player');

    this.player = player;

    game.canvas.append(player);
}

Player.prototype = Object.create(Paddle.prototype);
Player.prototype.contructor = Player;

Player.prototype.draw = function() {
    let player = this.player;
    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';
};

Player.prototype.update = function() {
    var self = this;
    var speed = 10;
    if (self.game.keyPressed.up) {
        self.yVelocity = -speed;
    } else if (self.game.keyPressed.down) {
        self.yVelocity = speed;
    } else {
        self.yVelocity = 0;
    }

    Paddle.prototype.update.apply(self, arguments);
};