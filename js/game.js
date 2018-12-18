/* eslint-env jquery */
/* global  */  

function Game(canvas) {
    var self = this;
    this.canvas = canvas;
    this.width = canvas.offsetWidth;
    this.height = canvas.offsetHeight;

    this.keyPressed = {};

    document.addEventListener('keydown', function(e) {
        handleEvent(e);
    });
    document.addEventListener('keyup', function(e) {
        handleEvent(e);
    });

    function handleEvent(e) {
        var keyName = Game.keys[e.which];
        if (keyName) {
            e.preventDefault();
            self.keyPressed[keyName] = (e.type === 'keydown');
        }
    }
}

Game.prototype.start = function() {
    var self = this;
    (function loop() {
        window.requestAnimationFrame(loop);
        self.update();
        self.draw();
    }());
};

Game.keys = {
    38: 'up',
    40: 'down'
};

Game.prototype.update = function(entity) {
    this.entities.forEach(function(entity) {
        if(entity.update) {
            entity.update();
        }
    });
};

Game.prototype.draw = function(entity) {
    this.entities.forEach(function(entity) {
        if(entity.draw) {
            entity.draw();
        }
    });
};