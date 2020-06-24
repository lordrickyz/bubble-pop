const bottom = 250;

class Launcher {
  constructor() {
    this.angle = 180;
    this.width = 16;
    this.height = 100;
    this.posX = document.getElementById("canvas").getAttribute("width") / 2;
    this.posY = document.getElementById("canvas").getAttribute("height") - bottom;
  };


  draw(view) {
    view.ctx.fillStyle = "#324142";
    view.ctx.save();
    view.ctx.translate(this.posX, this.posY);
    view.ctx.rotate((Math.PI / 180) * this.angle);
    view.ctx.fillRect(-this.width / 2, 0, this.width, this.height);
    view.ctx.restore();
    view.ctx.beginPath();
    view.ctx.arc(this.posX, this.posY, 40, 0, 2 * Math.PI);
    view.ctx.fill();
  };

  rotate(direction) {
    if (this.angle > 105 && this.angle < 260) {
      this.angle += direction;
    } else if (this.angle <= 105) {
      this.angle = 106;
    } else {
      this.angle = 259;
    }
  };

  fireBubble(view) {
    const newbubble = view.game.newBubble;
    console.log(newbubble);
    newbubble.speed = -25;
    newbubble.angle = this.angle;
  }
  
}

module.exports = Launcher;