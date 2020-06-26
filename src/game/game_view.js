import Game from "./game.js";
const key = require("./keymaster.js");

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game();
  }

  start() {
    const that = this;
    this.bindKeyHandlers();
    that.game.startGame();
    window.requestAnimationFrame(() => {
      that.game.renderGame(that.game)
    })
  }

  bindKeyHandlers() {
    const that = this;
    key("a", function () {
      that.game.launcher.rotate(-3.5);
    });
    key("left", function () {
      that.game.launcher.rotate(-3.5);
    });
    key("right", function () {
      that.game.launcher.rotate(3.5);
    });
    key("d", function () {
      that.game.launcher.rotate(3.5);
    });
    key("space", function () {
      that.game.launcher.shoot(that.game);
    });
  }
}

export default GameView;
