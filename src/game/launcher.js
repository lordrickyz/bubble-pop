const marginBottom = 40;

class Launcher {
  constructor(board) {
    this.angle = 180;
    this.width = 16;
    this.height = 100;
    this.posX = board.width / 2;
    this.posY = board.height - marginBottom;
  }

  renderLauncher(board) {
    board.ctx.fillStyle = "#324142";
    board.ctx.save();
    board.ctx.translate(this.posX, this.posY);
    board.ctx.rotate((Math.PI / 180) * this.angle);
    board.ctx.fillRect(-this.width / 2, 0, this.width, this.height);
    board.ctx.restore();
    board.ctx.beginPath();
    board.ctx.arc(
      board.width / 2,
      board.height - marginBottom,
      40,
      0,
      2 * Math.PI
    );
    board.ctx.fill();
  }

  rotate(direction) {
    if (this.angle > 105 && this.angle < 253) {
      this.angle += direction;
    } else if (this.angle <= 105) {
      this.angle = 106;
    } else {
      this.angle = 252;
    }
  };

  shoot(game) {
    game.newBubble.angle = game.launcher.angle;
    if (game.newBubble.vel === 0) {
      game.newBubble.vel = -25;
    }
  };

};

export default Launcher;