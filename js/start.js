/* eslint-env jquery */
/*  global Game, Player, Bot, Ball */

var canvas = document.getElementById('game'),
    game = new Game(canvas);

game.entities = [
    game.player = new Player(game),
    game.bot = new Bot(game),
    game.ball = new Ball(game),
    game.score = new Score(game)
];

game.start();
canvas.focus();
