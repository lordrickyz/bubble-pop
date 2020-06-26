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

export default Bubble;
