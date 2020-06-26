import Board from './board';
import Launcher from './launcher';

class Game {
  constructor() {
    this.board = new Board();
    this.launcher = new Launcher(this.board);
  }

  renderGame(game) {
    game.board.ctx.clearRect(0, 0, game.board.width, game.board.height);
    game.board.renderBoard();
    game.launcher.renderLauncher(game.board);
    window.requestAnimationFrame(() => {
      game.renderGame(game);
    });
  }

  gameOver() {
    window.alert("YOU LOST -> GAME OVER!");
  }

};

export default Game;
