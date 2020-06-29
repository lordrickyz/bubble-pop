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

    document.getElementById("ctrl-btn").addEventListener("click", () => {
      this.toggleControl();
    })

    document.getElementById("resume-btn").addEventListener("click", () => {
      this.toggleControl();
    })
  }

  eventListener() {
    document.getElementById("start").style.display = "none"
    document.getElementById("cuteDino").style.display = "none"
    document.getElementById("music").style.visibility = "visible";
    document.getElementById("shootBubble").muted = false;
    this.game.startGame();
    this.game.renderGame(this.game)
    this.game.started = true;
  }

  toggleMusic() {
    let audio = document.getElementById("bustaMove")
    if (audio.muted) {
      audio.muted = false;
      document.getElementById("shootBubble").muted = false;
      document.getElementById("popBubble").muted = false;
      document.getElementById("volumeIcon").setAttribute("src", "dist/images/volumeUp.svg")
    } else {
      audio.muted = true;
      document.getElementById("shootBubble").muted = true;
      document.getElementById("popBubble").muted = true;
      document.getElementById("volumeIcon").setAttribute("src", "dist/images/volumeMute.svg")
    }
  }

  toggleControl() {
    let controlMenu = document.getElementById("controlsContainer")
    let controlBtn = document.getElementById("ctrl-btn")
    let that = this;
    if (controlMenu.style.visibility === "hidden") {
      key.unbind('space')
      controlMenu.style.visibility = "visible";
      controlBtn.style.visibility = "hidden"
      this.stopBGM();
      document.getElementById("volumeIcon").setAttribute("src", "dist/images/volumeMute.svg")
    } else {
      controlMenu.style.visibility = "hidden";
      controlBtn.style.visibility = "visible"
      this.startBGM();
      key("space", function () {that.game.launcher.shoot(that.game);});
      document.getElementById("volumeIcon").setAttribute("src", "dist/images/volumeUp.svg")
    }
  }

  stopBGM(){
    if (this.game.started) {
      document.getElementById("bustaMove").muted = true;
      document.getElementById("shootBubble").muted = true;
      document.getElementById("popBubble").muted = true;
    }
  }

  startBGM(){
    if (this.game.started) {
      document.getElementById("bustaMove").muted = false;
      document.getElementById("shootBubble").muted = false;
      document.getElementById("popBubble").muted = false;
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
