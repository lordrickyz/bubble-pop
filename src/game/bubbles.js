// [Blue, Green, Yellow, Orange, Red]
const COLORS = ["#0000ff", "#00ff00", "#ffff00", "#ff8000", "#ff0000"];

class Bubble {
  constructor(posX, posY, color) {
    this.posX = posX;
    this.posY = posY;
    this.color = color;
    this.radius = 30;
    this.vel = 0;
    this.angle = 0;
  }

  renderBubble(game) {
    this.updatePosition(game);
    game.board.ctx.beginPath();
    game.board.ctx.fillStyle = this.color;
    game.board.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    game.board.ctx.fill();
  }

  updatePosition(game) {
    let fireAngle = ((this.angle - 90) * Math.PI) / 180;
    this.posX += this.vel * Math.cos(fireAngle);
    this.posY += this.vel * Math.sin(fireAngle);
  }
}

export default Bubble;
