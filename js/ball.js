/*  global Entity */

function Ball(game) {
    Entity.call(this, game);
    this.game = game;
    this.width = 20;
    this.height = 20;
    this.name = 'ball';
    this.xVelocity = 5;
    this.yVelocity = 5;

    let player = document.createElement('asside');
    player.style.position = 'absolute';
    player.style.width = this.width + 'px';
    player.style.height = this.height + 'px';
    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';
    player.setAttribute('id', 'ball');

    this.player = player;

    game.canvas.append(player);
}

Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.draw = function() {
    let ball = this.player;
    ball.style.left = this.x + 'px';
    ball.style.top = this.y + 'px';
};

Ball.prototype.reset = function() {
    this.x = this.game.width / 2 - this.width;
    this.y = this.game.height / 2 - this.height;
    let min = -5, max = 5;
    this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min);
    this.xVelocity = Math.random() > 0.5 ? 5 : -5;
};

Ball.prototype.update = function() {
    Entity.prototype.update.apply(this, arguments);

    if (this.y > this.game.height - this.height || this.y < 0) {
        this.y = this.y * -1; // 5 * -1 = -5 and -5 * -1 = 5 :)
    }

    if (this.x > this.game.width) {
        this.game.player.score += 1;
        this.reset();
    }

    if (this.x < 0) {
        this.game.bot.score += 1;
        this.reset();
    }

    var hitter;

    if (this.intersect(this.game.bot)) {
        hitter = this.game.bot;
    } else if (this.intersect(this.game.player)) {
        hitter = this.game.player;
    }

    if (hitter) {
        this.xVelocity *= -1.1;
        this.yVelocity *= -1.1;

        this.yVelocity += hitter.y / 2;
    }
};