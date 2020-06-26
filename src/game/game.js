import Board from './board';
import Launcher from './launcher';
import Bubble from './bubbles';

// const now = Date.now();
// let delta = 0;
const marginBottom = 40;
const COLORS = ["#0000ff", "#00ff00", "#ffff00", "#ff8000", "#ff0000"];

class Game {
  constructor() {
    this.board = new Board();
    this.launcher = new Launcher(this.board);
    this.newBubble = new Bubble();
  }

  renderGame(game) {
    game.board.ctx.clearRect(0, 0, game.board.width, game.board.height);
    game.board.renderBoard();
    game.launcher.renderLauncher(game.board);
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
