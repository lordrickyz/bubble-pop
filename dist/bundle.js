/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/board.js":
/*!***************************!*\
  !*** ./src/game/board.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Board);

// var img = new Image();
// img.onload = function () {
//   this.ctx.drawImage(img, 20, 20);
// };
// img.src = 'https://mangadex.org/images/avatars/373134.gif';

/***/ }),

/***/ "./src/game/bubbles.js":
/*!*****************************!*\
  !*** ./src/game/bubbles.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import { popSound } from "./sound";

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

  bubbleArea(game) {
    let checkX = this.posX;
    let checkY = this.posY;
    let collidingBalls = [];
    game.topBubbles.map((topBubble) => {
      let distanceX = checkX - topBubble.posX;
      let distanceY = checkY - topBubble.posY;

      let distance = Math.abs(
        Math.sqrt(distanceX * distanceX + distanceY * distanceY)
      );

      if (distance <= game.newBubble.radius * 2.5) {
        collidingBalls.push(topBubble);
      }
    });
    return collidingBalls;
  }

  updatePosition(game) {
    let fireAngle = ((this.angle - 90) * Math.PI) / 180;
    let bounceAngle = ((this.angle + 90) * Math.PI) / 180;

    if (this.bounceBubble(game)) {
      this.angle = -game.newBubble.angle;
      this.posY += this.vel * Math.sin(fireAngle);
      this.posX += this.vel * Math.cos(bounceAngle);
    } else if (this.stopBubble(game)) {
      let prevVelocity = this.vel;
      this.vel = 0;
      this.setBubble(this, game, prevVelocity);
    } else {
      this.posY += this.vel * Math.sin(fireAngle);
      this.posX += this.vel * Math.cos(fireAngle);
    }
  }

  bounceBubble(game) {
    return (
      this.posX < 0 + this.radius || this.posX > game.board.width - this.radius
    );
  }

  stopBubble(game) {
    let checkX = this.posX;
    let checkY = this.posY;
    let bubbleDistanceY = game.newBubble.radius * Math.sqrt(3);
    let bubbleDistanceX = (bubbleDistanceY * 2) / Math.sqrt(3);

    for (let i = 0; i < game.topBubbles.length; i++) {
      if (checkY <= game.topBubbles[i].posY + bubbleDistanceY) {
        if (
          checkX <= game.topBubbles[i].posX + bubbleDistanceX &&
          checkX >= game.topBubbles[i].posX - bubbleDistanceX
        ) {
          return true;
        }
      }
    }
    if (checkY < 0 + this.radius) {
      return true;
    }
    return false;
  }

  removeBubbles(bubblesToRemove, game) {
    bubblesToRemove.forEach((bubble) => {
      let i = game.topBubbles.indexOf(bubble);
      game.topBubbles.splice(i, 1);
      // popSound.crossOrigin = "anonymous";
      // popSound.play();
      document.getElementById("popBubble").play();
    });
  }

  matchingBubbles(bubble, arr) {
    let matchingBubbles = arr.filter((bubbleChecked) => {
      if (bubbleChecked.color == bubble.color) {
        return bubbleChecked;
      }
    });
    return matchingBubbles;
  }

  checkBubblesToRemove(game, bubble) {
    let bubblesAround = bubble.bubbleArea(game);

    let matchingBubbles = bubble.matchingBubbles(bubble, bubblesAround);

    if (matchingBubbles.length > 0) {
      let notFound = false;
      while (!notFound) {
        for (let i = 0; i < matchingBubbles.length; i++) {
          let bubblesToCheck = matchingBubbles[i].bubbleArea(
            game,
            matchingBubbles[i]
          );
          bubblesToCheck = bubble.matchingBubbles(bubble, bubblesToCheck);
          bubblesToCheck.forEach((bubbleChecked) => {
            let addToMatchingbubbles = [];
            if (!matchingBubbles.includes(bubbleChecked)) {
              addToMatchingbubbles.push(bubbleChecked);
            }
            addToMatchingbubbles.forEach((e) => {
              matchingBubbles.push(e);
            });
            if (addToMatchingbubbles.length == 0) {
              notFound = true;
            }
          });
        }
      }
    }
    if (matchingBubbles.length > 1) {
      game.newBubble.removeBubbles(matchingBubbles, game);
      game.addPoints((matchingBubbles.length + 1) * game.points);
      game.newBubble.removeFloats(game);
      if (game.topBubbles.length === 0) {
        game.nextLevel();
      }
      game.addBubble(game);
    } else {
      game.topBubbles.push(game.newBubble);
      game.addBubble(game);
    }
  }

  removeFloats(game) {
    game.topBubbles.forEach((e) => {
      let bubbleGroup = e.bubbleArea(game);

      if (bubbleGroup.length > 0) {
        let bubbleFloats = false;
        while (!bubbleFloats) {
          for (let i = 0; i < bubbleGroup.length; i++) {
            let bubblesToCheck = bubbleGroup[i].bubbleArea(game);
            bubblesToCheck.forEach((e) => {
              let addToGroup = [];
              if (!bubbleGroup.includes(e)) {
                bubbleGroup.push(e);
                addToGroup.push(e);
              }
              if (addToGroup.length == 0) {
                bubbleFloats = true;
              }
            });
          }
        }
      }

      let endLine = game.board.height;
      bubbleGroup.forEach((y) => {
        if (y.posY < endLine) {
          endLine = y.posY;
        }
      });
      if (endLine > 30) {
        game.addPoints(bubbleGroup.length * game.points * 2);
        game.newBubble.removeBubbles(bubbleGroup, game);
      }
    });
  }

  setXPos(bubble, bubbleRow) {
    if (bubbleRow % 2 == 0) {
      if (Math.round(bubble.posX / 60) <= 1) {
        bubble.posX = 30;
      } else {
        bubble.posX = Math.round(bubble.posX / 60) * 60 + 30;
      }
    } else {
      if (bubble.posX + bubble.vel < 60) {
        bubble.posX = 60;
      } else {
        bubble.posX = Math.round(bubble.posX / 60) * 60;
      }
    }
  }

  setYPos(bubble, bubbleDistanceY, bubbleRow) {
    if (bubbleRow == 0) {
      bubble.posY = 30;
    } else {
      bubble.posY = bubbleDistanceY * 2 * bubbleRow + bubble.radius;
    }
  }

  setBubble(bubble, game, prevVelocity) {
    let originalX = bubble.posX;
    let originalY = bubble.posY;
    let bubbleDistanceY = (bubble.radius * Math.sqrt(3)) / 2;
    let bubbleRow = Math.floor(bubble.posY / (bubbleDistanceY * 2));
    let settled = false;
    bubble.setYPos(bubble, bubbleDistanceY, bubbleRow);
    bubble.setXPos(bubble, bubbleRow);

    for (let i = 0; i < game.topBubbles.length; i++) {
      if (
        bubble.posX == game.topBubbles[i].posX &&
        bubble.posY == game.topBubbles[i].posY
      ) {
        if (originalX < game.topBubbles[i].posX) {
          bubble.posX = game.topBubbles[i].posX - bubble.radius * 2;
        } else {
          bubble.posX = game.topBubbles[i].posX + bubble.radius * 2;
        }
      }
    }

    let bubblesAround = game.newBubble.bubbleArea(game);
    if (bubble.posY > 30 && bubblesAround.length == 0) {
      if (bubble.angle > -180) {
        bubble.posX = originalX + 2;
      } else {
        bubble.posX = originalX - 2;
      }
      bubble.posY = originalY - 2;
      bubble.vel = prevVelocity;
      let correctAngle = ((this.angle - 90) * Math.PI) / 180;
      this.posX += this.vel * Math.cos(correctAngle);
      this.posY += this.vel * Math.sin(correctAngle);
      settled = true;
    }

    if (!settled) {
      if (this.posY > game.board.bottomBarrier - this.radius) {
        game.gameOver();
      }
      this.checkBubblesToRemove(game, bubble);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Bubble);


/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/game/board.js");
/* harmony import */ var _launcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launcher */ "./src/game/launcher.js");
/* harmony import */ var _bubbles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bubbles */ "./src/game/bubbles.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ "./src/game/levels.js");





const marginBottom = 40;
const COLORS = ["#0000ff", "#00ff00", "#ffff00", "#ff8000", "#ff0000"];

class Game {
  constructor() {
    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.launcher = new _launcher__WEBPACK_IMPORTED_MODULE_1__["default"](this.board);
    this.newBubble = new _bubbles__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.topBubbles = [];
    this.score = 0;
    this.level = 0;
    this.points = 10;
    this.colorsLeft = _levels__WEBPACK_IMPORTED_MODULE_3__["bubbleColors"].slice(0);
  }

  startBoard(game) {
    game.board.ctx.clearRect(0, 0, game.board.width, game.board.height);
    game.board.renderStartBoard();

  }

  renderGame(game) {
    game.board.ctx.clearRect(0, 0, game.board.width, game.board.height);
    game.board.renderBoard();
    game.launcher.renderLauncher(game.board);
    game.renderTopBubbles(this);
    game.newBubble.renderBubble(game);
    document.getElementById("bustaMove").play();
    document.getElementById("bustaMove").volume = 0.3;
    window.requestAnimationFrame(() => {
      game.renderGame(game);
    });
  }

  renderLevel() {
    let currentLevel = this.level;
    this.topBubbles = _levels__WEBPACK_IMPORTED_MODULE_3__["Levels"][currentLevel];
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
    if (this.level == _levels__WEBPACK_IMPORTED_MODULE_3__["Levels"].length - 1) {
      this.gameWin()
      return;
    }
    this.colorsLeft = _levels__WEBPACK_IMPORTED_MODULE_3__["bubbleColors"].slice(0);
    this.level += 1;
    // let currentLevelLength = Levels[this.level].length;
    this.renderLevel();
    document.getElementById("level").innerHTML = (this.level + 1);
  }

  restartGame() {
    _levels__WEBPACK_IMPORTED_MODULE_3__["Levels"].concat(_levels__WEBPACK_IMPORTED_MODULE_3__["levelClone"])
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
    game.newBubble = new _bubbles__WEBPACK_IMPORTED_MODULE_2__["default"](
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

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/game/game_view.js":
/*!*******************************!*\
  !*** ./src/game/game_view.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game/game.js");

const key = __webpack_require__(/*! ./keymaster.js */ "./src/game/keymaster.js");

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
    })  }

  eventListener() {
    document.getElementById("start").style.display = "none"
    document.getElementById("cuteDino").style.display = "none"
    this.game.startGame();
    this.game.renderGame(this.game)
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

/* harmony default export */ __webpack_exports__["default"] = (GameView);


/***/ }),

/***/ "./src/game/keymaster.js":
/*!*******************************!*\
  !*** ./src/game/keymaster.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     keymaster.js
//     (c) 2011-2013 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.

(function (global) {
  var k,
    _handlers = {},
    _mods = { 16: false, 18: false, 17: false, 91: false },
    _scope = "all",
    // modifier keys
    _MODIFIERS = {
      "⇧": 16,
      shift: 16,
      "⌥": 18,
      alt: 18,
      option: 18,
      "⌃": 17,
      ctrl: 17,
      control: 17,
      "⌘": 91,
      command: 91,
    },
    // special keys
    _MAP = {
      backspace: 8,
      tab: 9,
      clear: 12,
      enter: 13,
      return: 13,
      esc: 27,
      escape: 27,
      space: 32,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      del: 46,
      delete: 46,
      home: 36,
      end: 35,
      pageup: 33,
      pagedown: 34,
      ",": 188,
      ".": 190,
      "/": 191,
      "`": 192,
      "-": 189,
      "=": 187,
      ";": 186,
      "'": 222,
      "[": 219,
      "]": 221,
      "\\": 220,
    },
    code = function (x) {
      return _MAP[x] || x.toUpperCase().charCodeAt(0);
    },
    _downKeys = [];

  for (k = 1; k < 20; k++) _MAP["f" + k] = 111 + k;

  // IE doesn't support Array#indexOf, so have a simple replacement
  function index(array, item) {
    var i = array.length;
    while (i--) if (array[i] === item) return i;
    return -1;
  }

  // for comparing mods before unassignment
  function compareArray(a1, a2) {
    if (a1.length != a2.length) return false;
    for (var i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) return false;
    }
    return true;
  }

  var modifierMap = {
    16: "shiftKey",
    18: "altKey",
    17: "ctrlKey",
    91: "metaKey",
  };
  function updateModifierKey(event) {
    for (k in _mods) _mods[k] = event[modifierMap[k]];
  }

  // handle keydown event
  function dispatch(event) {
    var key, handler, k, i, modifiersMatch, scope;
    key = event.keyCode;

    if (index(_downKeys, key) == -1) {
      _downKeys.push(key);
    }

    // if a modifier key, set the key.<modifierkeyname> property to true and return
    if (key == 93 || key == 224) key = 91; // right command on webkit, command on Gecko
    if (key in _mods) {
      _mods[key] = true;
      // 'assignKey' from inside this closure is exported to window.key
      for (k in _MODIFIERS) if (_MODIFIERS[k] == key) assignKey[k] = true;
      return;
    }
    updateModifierKey(event);

    // see if we need to ignore the keypress (filter() can can be overridden)
    // by default ignore key presses if a select, textarea, or input is focused
    if (!assignKey.filter.call(this, event)) return;

    // abort if no potentially matching shortcuts found
    if (!(key in _handlers)) return;

    scope = getScope();

    // for each potential shortcut
    for (i = 0; i < _handlers[key].length; i++) {
      handler = _handlers[key][i];

      // see if it's in the current scope
      if (handler.scope == scope || handler.scope == "all") {
        // check if modifiers match if any
        modifiersMatch = handler.mods.length > 0;
        for (k in _mods)
          if (
            (!_mods[k] && index(handler.mods, +k) > -1) ||
            (_mods[k] && index(handler.mods, +k) == -1)
          )
            modifiersMatch = false;
        // call the handler and stop the event if neccessary
        if (
          (handler.mods.length == 0 &&
            !_mods[16] &&
            !_mods[18] &&
            !_mods[17] &&
            !_mods[91]) ||
          modifiersMatch
        ) {
          if (handler.method(event, handler) === false) {
            if (event.preventDefault) event.preventDefault();
            else event.returnValue = false;
            if (event.stopPropagation) event.stopPropagation();
            if (event.cancelBubble) event.cancelBubble = true;
          }
        }
      }
    }
  }

  // unset modifier keys on keyup
  function clearModifier(event) {
    var key = event.keyCode,
      k,
      i = index(_downKeys, key);

    // remove key from _downKeys
    if (i >= 0) {
      _downKeys.splice(i, 1);
    }

    if (key == 93 || key == 224) key = 91;
    if (key in _mods) {
      _mods[key] = false;
      for (k in _MODIFIERS) if (_MODIFIERS[k] == key) assignKey[k] = false;
    }
  }

  function resetModifiers() {
    for (k in _mods) _mods[k] = false;
    for (k in _MODIFIERS) assignKey[k] = false;
  }

  // parse and assign shortcut
  function assignKey(key, scope, method) {
    var keys, mods;
    keys = getKeys(key);
    if (method === undefined) {
      method = scope;
      scope = "all";
    }

    // for each shortcut
    for (var i = 0; i < keys.length; i++) {
      // set modifier keys if any
      mods = [];
      key = keys[i].split("+");
      if (key.length > 1) {
        mods = getMods(key);
        key = [key[key.length - 1]];
      }
      // convert to keycode and...
      key = key[0];
      key = code(key);
      // ...store handler
      if (!(key in _handlers)) _handlers[key] = [];
      _handlers[key].push({
        shortcut: keys[i],
        scope: scope,
        method: method,
        key: keys[i],
        mods: mods,
      });
    }
  }

  // unbind all handlers for given key in current scope
  function unbindKey(key, scope) {
    var multipleKeys,
      keys,
      mods = [],
      i,
      j,
      obj;

    multipleKeys = getKeys(key);

    for (j = 0; j < multipleKeys.length; j++) {
      keys = multipleKeys[j].split("+");

      if (keys.length > 1) {
        mods = getMods(keys);
      }

      key = keys[keys.length - 1];
      key = code(key);

      if (scope === undefined) {
        scope = getScope();
      }
      if (!_handlers[key]) {
        return;
      }
      for (i = 0; i < _handlers[key].length; i++) {
        obj = _handlers[key][i];
        // only clear handlers if correct scope and mods match
        if (obj.scope === scope && compareArray(obj.mods, mods)) {
          _handlers[key][i] = {};
        }
      }
    }
  }

  // Returns true if the key with code 'keyCode' is currently down
  // Converts strings into key codes.
  function isPressed(keyCode) {
    if (typeof keyCode == "string") {
      keyCode = code(keyCode);
    }
    return index(_downKeys, keyCode) != -1;
  }

  function getPressedKeyCodes() {
    return _downKeys.slice(0);
  }

  function filter(event) {
    var tagName = (event.target || event.srcElement).tagName;
    // ignore keypressed in any elements that support keyboard data input
    return !(
      tagName == "INPUT" ||
      tagName == "SELECT" ||
      tagName == "TEXTAREA"
    );
  }

  // initialize key.<modifier> to false
  for (k in _MODIFIERS) assignKey[k] = false;

  // set current scope (default 'all')
  function setScope(scope) {
    _scope = scope || "all";
  }
  function getScope() {
    return _scope || "all";
  }

  // delete all handlers for a given scope
  function deleteScope(scope) {
    var key, handlers, i;

    for (key in _handlers) {
      handlers = _handlers[key];
      for (i = 0; i < handlers.length; ) {
        if (handlers[i].scope === scope) handlers.splice(i, 1);
        else i++;
      }
    }
  }

  // abstract key logic for assign and unassign
  function getKeys(key) {
    var keys;
    key = key.replace(/\s/g, "");
    keys = key.split(",");
    if (keys[keys.length - 1] == "") {
      keys[keys.length - 2] += ",";
    }
    return keys;
  }

  // abstract mods logic for assign and unassign
  function getMods(key) {
    var mods = key.slice(0, key.length - 1);
    for (var mi = 0; mi < mods.length; mi++) mods[mi] = _MODIFIERS[mods[mi]];
    return mods;
  }

  // cross-browser events
  function addEvent(object, event, method) {
    if (object.addEventListener) object.addEventListener(event, method, false);
    else if (object.attachEvent)
      object.attachEvent("on" + event, function () {
        method(window.event);
      });
  }

  // set the handlers globally on document
  addEvent(document, "keydown", function (event) {
    dispatch(event);
  }); // Passing _scope to a callback to ensure it remains the same by execution. Fixes #48
  addEvent(document, "keyup", clearModifier);

  // reset modifiers to false whenever the window is (re)focused.
  addEvent(window, "focus", resetModifiers);

  // store previously defined key
  var previousKey = global.key;

  // restore previously defined key and return reference to our key object
  function noConflict() {
    var k = global.key;
    global.key = previousKey;
    return k;
  }

  // set window.key and window.key.set/get/deleteScope, and the default filter
  global.key = assignKey;
  global.key.setScope = setScope;
  global.key.getScope = getScope;
  global.key.deleteScope = deleteScope;
  global.key.filter = filter;
  global.key.isPressed = isPressed;
  global.key.getPressedKeyCodes = getPressedKeyCodes;
  global.key.noConflict = noConflict;
  global.key.unbind = unbindKey;

  if (true) module.exports = assignKey;
})(this);


/***/ }),

/***/ "./src/game/launcher.js":
/*!******************************!*\
  !*** ./src/game/launcher.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import { shootSound } from "./sound";
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
    game.newBubble.vel = -25;
    // shootSound.crossOrigin = "anonymous";
    // shootSound.play();
    document.getElementById("shootBubble").play();
  };

};

/* harmony default export */ __webpack_exports__["default"] = (Launcher);

/***/ }),

/***/ "./src/game/levels.js":
/*!****************************!*\
  !*** ./src/game/levels.js ***!
  \****************************/
/*! exports provided: bubbleColors, Levels, levelClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubbleColors", function() { return bubbleColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Levels", function() { return Levels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelClone", function() { return levelClone; });
/* harmony import */ var _bubbles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubbles */ "./src/game/bubbles.js");


const blue = "#0000ff";
const red = "#ff0000";
const green = "#00ff00";
const orange = "#ff8000";
const yellow = "#ffff00";
let bubbleColors = [blue, red, green, orange, yellow];


let rowDistance = 30 * Math.sqrt(3);
const Levels = [
         [ //1
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](30, 30, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](450, 30, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](60, 30 + rowDistance, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](420, 30 + rowDistance, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](30, 30 + rowDistance * 2, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30 + rowDistance * 2, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30 + rowDistance * 2, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30 + rowDistance * 2, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30 + rowDistance * 2, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30 + rowDistance * 2, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30 + rowDistance * 2, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](450, 30 + rowDistance * 2, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](60, 30 + rowDistance * 3, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance * 3, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance * 3, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance * 3, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance * 3, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance * 3, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](420, 30 + rowDistance * 3, orange),
         ],
         [ //2
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](60, 30 + rowDistance, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](420, 30 + rowDistance, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30 + rowDistance * 2, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30 + rowDistance * 2, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30 + rowDistance * 2, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30 + rowDistance * 2, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30 + rowDistance * 2, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30 + rowDistance * 2, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance * 3, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance * 3, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance * 3, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance * 3, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance * 3, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30 + rowDistance * 4, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30 + rowDistance * 4, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30 + rowDistance * 4, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30 + rowDistance * 4, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance * 5, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance * 5, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance * 5, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30 + rowDistance * 6, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30 + rowDistance * 6, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance * 7, red),
         ],
         [//3
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](30, 30, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](450, 30, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](30, 30 + rowDistance * 2, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30 + rowDistance * 2, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30 + rowDistance * 2, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](450, 30 + rowDistance * 2, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](60, 30 + rowDistance * 3, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance * 3, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance * 3, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance * 3, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance * 3, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance * 3, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](420, 30 + rowDistance * 3, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](30, 30 + rowDistance * 4, red),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30 + rowDistance * 4, green),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30 + rowDistance * 4, blue),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30 + rowDistance * 4, orange),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30 + rowDistance * 4, yellow),
           new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](450, 30 + rowDistance * 4, green),
         ],
       ];


const levelClone = [
        [ //1
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](30, 30, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](450, 30, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](60, 30 + rowDistance, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](420, 30 + rowDistance, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](30, 30 + rowDistance * 2, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30 + rowDistance * 2, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30 + rowDistance * 2, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30 + rowDistance * 2, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30 + rowDistance * 2, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30 + rowDistance * 2, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30 + rowDistance * 2, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](450, 30 + rowDistance * 2, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](60, 30 + rowDistance * 3, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance * 3, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance * 3, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance * 3, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance * 3, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance * 3, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](420, 30 + rowDistance * 3, orange),
        ],
        [ //2
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](60, 30 + rowDistance, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](420, 30 + rowDistance, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30 + rowDistance * 2, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30 + rowDistance * 2, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30 + rowDistance * 2, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30 + rowDistance * 2, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30 + rowDistance * 2, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30 + rowDistance * 2, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance * 3, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance * 3, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance * 3, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance * 3, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance * 3, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30 + rowDistance * 4, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30 + rowDistance * 4, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30 + rowDistance * 4, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30 + rowDistance * 4, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance * 5, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance * 5, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance * 5, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30 + rowDistance * 6, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30 + rowDistance * 6, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance * 7, red),
        ],
        [//3
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](30, 30, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](450, 30, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](30, 30 + rowDistance * 2, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](90, 30 + rowDistance * 2, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](390, 30 + rowDistance * 2, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](450, 30 + rowDistance * 2, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](60, 30 + rowDistance * 3, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](120, 30 + rowDistance * 3, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](180, 30 + rowDistance * 3, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](240, 30 + rowDistance * 3, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](300, 30 + rowDistance * 3, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](360, 30 + rowDistance * 3, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](420, 30 + rowDistance * 3, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](30, 30 + rowDistance * 4, red),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](150, 30 + rowDistance * 4, green),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](210, 30 + rowDistance * 4, blue),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](270, 30 + rowDistance * 4, orange),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](330, 30 + rowDistance * 4, yellow),
          new _bubbles__WEBPACK_IMPORTED_MODULE_0__["default"](450, 30 + rowDistance * 4, green),
        ],
      ];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game_view */ "./src/game/game_view.js");


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

  const view = new _game_game_view__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  view.start();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map