class Board {
  constructor() {
    this.width = document.getElementById("canvas").getAttribute("width");
    this.height = document.getElementById("canvas").getAttribute("height");
    this.ctx = document.getElementById("canvas").getContext("2d");
    this.bottomBarrier = this.height - 100;
  }

  renderBoard() {
    this.ctx.save();
    this.ctx.fillStyle = "rgb(228, 228, 228)";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = "rgb(74, 125, 167)";
    this.ctx.fillRect(0, this.bottomBarrier, this.width, 5);
    this.ctx.restore();
  }

  renderStartBoard() {
    this.ctx.save();
    this.ctx.fillStyle = "rgb(228, 228, 228)";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.restore();
  }


}

export default Board;

// var img = new Image();
// img.onload = function () {
//   this.ctx.drawImage(img, 20, 20);
// };
// img.src = 'https://mangadex.org/images/avatars/373134.gif';