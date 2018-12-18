/*  global  */

function Score(game) {
    this.game = game;
    this.score_player1 = document.getElementById('score_player1');
    this.score_player2 = document.getElementById('score_player2');

    this.score_player1.style.left = game.width / 2 - 100 + 'px';
    this.score_player1.style.top = 50 + 'px';
}

Score.prototype.draw = function() {
    this.score_player1.innerHTML = 'ME: ' + this.game.player.score;
    this.score_player2.innerHTML = 'BOT: ' + this.game.bot.score;
}