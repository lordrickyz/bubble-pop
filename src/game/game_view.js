import Game from "./game.js";
const key = require("./keymaster.js");

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game();
  }

  start() {
    const that = this;
    this.bindKeyHandlers();
    that.game.startBoard(that.game);
    document.getElementById("cuteDino").addEventListener("click", () => {
      this.eventListener()
    })
    document.getElementById("start").addEventListener("click", () => {
      this.eventListener()
    })  
    document.getElementById("music").addEventListener("click", () => {
      this.toggleMusic();
    })
  }

  eventListener() {
    document.getElementById("start").style.display = "none"
    document.getElementById("cuteDino").style.display = "none"
    this.game.startGame();
    this.game.renderGame(this.game)
  }

  toggleMusic() {
    if (audio.muted) {
      document.getElementById("bustaMove").muted = false;
      document.getElementById("shootBubble").muted = false;
      document.getElementById("popBubble").muted = false;
      document.getElementById("audioIcon").setAttribute("src", "https://github.com/lordrickyz/bubble-pop/blob/master/dist/images/volumeUp.svg")
    } else {
      document.getElementById("bustaMove").muted = true;
      document.getElementById("shootBubble").muted = true;
      document.getElementById("popBubble").muted = true;
      document.getElementById("audioIcon").setAttribute("src", "https://github.com/lordrickyz/bubble-pop/blob/master/dist/images/volumeMute.svg")
    }
  }



  bindKeyHandlers() {
    const that = this;
    key("a", function () {
      that.game.launcher.rotate(-3.5);
    });
    key("left", function () {
      that.game.launcher.rotate(-3.5);
    });
    key("right", function () {
      that.game.launcher.rotate(3.5);
    });
    key("d", function () {
      that.game.launcher.rotate(3.5);
    });
    key("space", function () {
      that.game.launcher.shoot(that.game);
    });
  }
}

export default GameView;
