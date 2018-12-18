/* eslint-env jquery */
/* global Entity */ 

function Paddle(game) {
    Entity.call(this);
    this.game = game;

    this.width = 20;
    this.height = 100;
    this.score = 0;
    this.speed = 10;

    this.y = game.height / 2 - this.height;
}

// the Object.create() method creates anew object, using an existing object as the prototype. This also set the constructor function to the base class and must be reset to the current class with the next line of code.
Paddle.prototype = Object.create(Entity.prototype);
Paddle.prototype.constructor = Paddle;

Paddle.prototype.update = function() {
    Entity.prototype.update.apply(this, arguments);
    // y will always stay below or equal to 0 
    this.y = Math.min(Math.max(this.y, 0), this.game.height - this.height);
};

$('#theHeader').html('<h1>Udemy JS Fundamentals Pong Clone</h1>');
$('#theFooter').html('<p>A good style for a footer.</p>');