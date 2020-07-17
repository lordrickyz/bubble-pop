# Bubble Pop

##[<>Live Site<>](https://lordrickyz.github.io/bubble-pop/)

![SplashSite](https://lordrickyz.github.io/bubble-pop/dist/preview/smallPreview.png)

## Background:

Bubble Pop is a clone of a popular 1994 tile-matching arcade puzzle game called [Puzzle Bobble](https://en.wikipedia.org/wiki/Puzzle_Bobble). 

At the start of each round, the gamespace will contain prearranged patterns of colored bubbles or balls. At the bottom of the screen, the player controls a device called a "pointer", which aims and fires bubbles up the screen. The color of bubbles fired is randomly generated and chosen from the colors of bubbles still left on the screen. The objective of the game is to clear all the bubbles from the arena without any bubble crossing the bottom line.

## GamePlay:

<img src="./dist/preview/bubbleLink.gif?raw=true" width="1000px">

Users are able to control the launcher using the left arrow and right arrow keys. The spacebar is the launch button for the bubbles.

## Architecture and Technology

* `HTML5 Canvas` for Game Rendering
* `Vanilla JavaScript` for Game Logic
* `Webpack` for Bundling JS Files - v4.43.0
* `SASS` for Styling - v1.26.8
* `Keymaster` for Launcher Key Binding - v1.6.3

## Features

<img src="./dist/preview/snapBubble.gif?raw=true" width="1000px">

In order to snap bubbles onto the board, the bubble must collide with another set bubble to allow calculations of distance and position.

Using the bubbleArea function to check if surrounding the bubbles area includes any other bubbles. If it does, when the bubble is launched, as collision occurs, the position of the bubble will be shifted towards the closes empty position and snaps onto it.
```js
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
```

<img src="./dist/preview/snapBubble2.gif?raw=true" width="1000px">

If the row is empty, the bubble will attach to where ever it goes in:
```js
let originalX = bubble.posX;
let originalY = bubble.posY;

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
```


## Features Directions
* Mobile Support [React Native/Swift]
* 2 Players Versus
* Drop Bubbles When Bursts
* Burst Bubbles
* Replacing Bubbles and Launcher With Sprite Animations
* Special Skills When Ultimate Meter is Maxed Out 
  * Able to Pierce through Bubbles No Matter What Color
  * Rainbow Bubble -> Any Set of Color