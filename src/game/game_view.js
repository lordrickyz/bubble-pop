const Game = require("./game.js");
const Launcher = require("./launcher.js");
const key = require("./keymaster.js");

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game();
  }

  start() {
    const that = this
    this.bindKeyHandlers();
    setInterval(function() {
        that.game.draw(that);
        that.game.renderGame(that)
        // that.game.launcher.draw(that);
        // that.game.newBubble.renderBubble(that);
    }, 60);
  }

  bindKeyHandlers() {
    const that = this;
    key("a", function () {
      that.game.launcher.rotate(-2.5);
    });
    key("d", function () {
      that.game.launcher.rotate(2.5);
    });
    key("space", function () {
      // console.log(that.game)
      that.game.launcher.fireBubble(that);
    });
  }

}

module.exports = GameView;
