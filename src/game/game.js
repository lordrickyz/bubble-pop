import Board from "./board";
import Launcher from "./launcher";
import Bubble from "./bubbles";

// const now = Date.now();
// let delta = 0;
const marginBottom = 40;
const COLORS = ["#0000ff", "#00ff00", "#ffff00", "#ff8000", "#ff0000"];

class Game {
  constructor() {
    this.board = new Board();
    this.launcher = new Launcher(this.board);
    this.newBubble = new Bubble();
    this.topBubbles = [];
  }

  renderGame(game) {
    game.board.ctx.clearRect(0, 0, game.board.width, game.board.height);
    game.board.renderBoard();
    game.launcher.renderLauncher(game.board);
    game.renderTopBubbles(this);
    game.newBubble.renderBubble(game);
    window.requestAnimationFrame(() => {
      game.renderGame(game);
    });
  }

  startGame() {
    this.addBubble(this);
  }

  gameOver() {
    window.alert("YOU LOST -> GAME OVER!");
  }

  renderTopBubbles(game) {
    for (let i = 0; i < game.topBubbles.length; i++) {
      game.board.ctx.beginPath();
      game.board.ctx.fillStyle = game.topBubbles[i].color;
      game.board.ctx.arc(
        game.topBubbles[i].posX,
        game.topBubbles[i].posY,
        game.topBubbles[i].radius,
        0,
        2 * Math.PI
      );
      game.board.ctx.fill();
    }
  }

  addBubble(game) {
    let randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    game.newBubble = new Bubble(
      game.board.width / 2,
      game.board.height - marginBottom,
      randomColor
    );
  }
};

export default Game;
