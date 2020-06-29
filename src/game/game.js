import Board from "./board";
import Launcher from "./launcher";
import Bubble from "./bubbles";
import { Levels, bubbleColors, levelClone } from "./levels";

const marginBottom = 40;
const COLORS = ["#0000ff", "#00ff00", "#ffff00", "#ff8000", "#ff0000"];

class Game {
  constructor() {
    this.board = new Board();
    this.launcher = new Launcher(this.board);
    this.newBubble = new Bubble();
    this.topBubbles = [];
    this.score = 0;
    this.level = 0;
    this.points = 10;
    this.colorsLeft = bubbleColors.slice(0);
  }

  startBoard(game) {
    game.board.ctx.clearRect(0, 0, game.board.width, game.board.height);
    game.board.renderStartBoard();
    document.getElementById("shootBubble").muted = true;
  }

  renderGame(game) {
    game.board.ctx.clearRect(0, 0, game.board.width, game.board.height);
    game.board.renderBoard();
    game.launcher.renderLauncher(game.board);
    game.renderTopBubbles(this);
    game.newBubble.renderBubble(game);
    document.getElementById("shootBubble").muted = false;
    document.getElementById("bustaMove").play();
    document.getElementById("bustaMove").volume = 0.3;
    document.getElementById("bustaMove").loop = true;
    window.requestAnimationFrame(() => {
      game.renderGame(game);
    });
  }

  renderLevel() {
    let currentLevel = this.level;
    this.topBubbles = Levels[currentLevel];
  }

  startGame() {
    this.renderLevel();
    this.addBubble(this);
  }

  gameOver() {
    window.alert("YOU LOST -> GAME OVER!");
    location.reload();
  }

  gameWin() {
    window.alert("YOU WIN")
    location.reload();
  }
  

  nextLevel() {
    if (this.level == Levels.length - 1) {
      this.gameWin()
      return;
    }
    this.colorsLeft = bubbleColors.slice(0);
    this.level += 1;
    // let currentLevelLength = Levels[this.level].length;
    this.renderLevel();
    document.getElementById("level").innerHTML = (this.level + 1);
  }

  restartGame() {
    Levels.concat(levelClone)
    this.renderLevel();
  }

  colorToRender(game) {
    let colorsLeft = [];
    game.topBubbles.forEach((bubble) => {
      if (!colorsLeft.includes(bubble.color)) {
        colorsLeft.push(bubble.color);
      }
    })

    for (let i = 0; i < game.colorsLeft.length; i++) {
      if (!colorsLeft.includes(game.colorsLeft[i])) {
        game.colorsLeft.splice(i, 1);
      }
    };
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

  addPoints(points) {
    this.score += points;
    this.updateScore();
  }

  updateScore() {
    document.getElementById("score").innerHTML = this.score;
  }

  updateLevel() {
    document.getElementById("level").innerHTML = this.level + 1;
  }
}

export default Game;
