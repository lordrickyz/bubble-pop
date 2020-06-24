const blue = "#0000ff";
const green = "#00ff00";
const yellow = "#ffff00";
const orange = "#ff8000";
const red = "#ff0000";
var COLORS = [blue, green, yellow, orange, red]
const bottom = 250;

//  array[Math.floor(Math.random() * array.length)];

class Bubble {
  constructor() {
    this.radius = 30;
    this.posX = document.getElementById("canvas").getAttribute("width") / 2;;
    this.posY = document.getElementById("canvas").getAttribute("height") - bottom;;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.speed = 0;
    this.angle = 0;
    this.inMotion = false;
  }

  renderBubble(view) {
    this.updatePos(view)
    view.ctx.fillStyle = this.color;
    view.ctx.beginPath();
    view.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    view.ctx.fill();
  }

  addBubble(view) {
    view.game.newBubble = new Bubble(view.game.DIMX / 2, view.game.DIMY - bottom, COLORS[Math.floor(Math.random() * COLORS.length)])
  }

  updatePos(view) {
    let fireAngle =  (this.angle - 90) * Math.PI / 180;
    let bounceAngle = ((this.angle + 90) * Math.PI) / 180;

    if (this.bounceBubble(view)) {
      this.angle = -view.game.newBubble.angle;
      this.posX += this.speed * Math.cos(bounceAngle);
      this.posY += this.speed * Math.sin(fireAngle);
    } else if (this.stopBubble(view)) {
      this.speed = 0;
      view.game.topBubbles.push(this);
      view.game.newBubble.addBubble(view);
    } else {
      this.posX += this.speed * Math.cos(fireAngle);
      this.posY += this.speed * Math.sin(fireAngle);
    }
  }

  bounceBubble(view) {
    return (
      this.posX < 0 + this.radius || this.posX > view.game.DIMX - this.radius
    );
  };

  stopBubble(view) {
    return this.posY < 0 + this.radius - this.speed;
  }





}

module.exports = Bubble;