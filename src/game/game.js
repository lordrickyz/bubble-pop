const Launcher = require('./launcher');
const Bubble = require('./bubble');

const bottom = 40;

class Game {
  constructor() {
    this.DIMX = 800;
    this.DIMY = 800;
    this.launcher = new Launcher();
    this.newBubble = new Bubble();
    this.topBubbles = [];
  }

  draw(view) {
    view.ctx.clearRect(0, 0, this.DIMX, this.DIMY);
    view.ctx.fillStyle = "grey";
    view.ctx.fillRect(0, 0, this.DIMX, this.DIMY);
  }

  renderTop(view) {
    for (let i = 0; i < view.game.topBubbles.length; i++) {
      view.ctx.beginPath();
      view.ctx.fillStyle = view.game.topBubbles[i].color;
      view.ctx.arc(
        view.game.topBubbles[i].posX,
        view.game.topBubbles[i].posY,
        view.game.topBubbles[i].radius,
        0,
        2 * Math.PI
      );
      view.ctx.fill();
    }
  }

  renderGame(view) {
    this.launcher.draw(view);
    this.newBubble.renderBubble(view);
    this.renderTop(view);
  }

};

module.exports = Game;

