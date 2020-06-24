// const Game = require("./game/game");
const GameView = require("./game/game_view");

document.onkeypress = function (e) {
  e = e || window.event;
  var charCode = e.keyCode || e.which;
  if (charCode === 32) {
    e.preventDefault();
    return false;
  }
};

window.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("canvas");
  const ctx = canvasEl.getContext("2d");

  const view = new GameView(ctx);
  view.start();
});