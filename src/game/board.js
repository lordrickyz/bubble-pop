class Board {
  constructor() {
    this.width = document.getElementById("canvas").getAttribute("width");
    this.height = document.getElementById("canvas").getAttribute("height");
    this.ctx = document.getElementById("canvas").getContext("2d");
    this.bottomBarrier = this.height - 100;
  }

  renderBoard() {
    this.ctx.save();
    this.ctx.fillStyle = "#f2f4f4";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "#85a5af";
    this.ctx.fillRect(0, this.bottomBarrier, this.width, 5);
    this.ctx.restore();
  }
}

export default Board;
