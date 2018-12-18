/* eslint-env jquery */
/*  global Paddle */

function Bot(game) {
    this.game = game;
    Paddle.call(this, game);
    this.name = 'bot';
    this.speed = 5;

    this.x = game.width - this.width - 20;

    let bot = document.createElement('asside');
    bot.style.position = 'absolute';
    bot.style.width = this.width + 'px';
    bot.style.height = this.height + 'px';
    bot.style.left = this.x + 'px';
    bot.style.top = this.y + 'px';
    bot.setAttribute('id', 'bot');

    this.player = bot;

    game.canvas.append(bot);
}

Bot.prototype = Object.create(Paddle.prototype);
Bot.prototype.constructor = Bot;

Bot.prototype.draw = function() {
    var bot = this.player;
    bot.style.left = this.x + 'px';
    bot.style.top = this.y + 'px';
};

Bot.prototype.update = function() {
    var self = this;
    if (self.y < self.game.ball.y) {
        self.yVelocity = self.speed;
    } else if (self.y > self.game.ball) {
        self.yVelocity = -self.speed;
    }

    Paddle.prototype.update.apply(this, arguments);
};
