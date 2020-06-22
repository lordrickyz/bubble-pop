# Bubble Pop

## Background:

Bubble Pop is a clone of a popular 1994 tile-matching arcade puzzle game called [Puzzle Bobble](https://en.wikipedia.org/wiki/Puzzle_Bobble). 

At the start of each round, the gamespace will contain prearranged patterns of colored bubbles or balls. At the bottom of the screen, the player controls a device called a "pointer", which aims and fires bubbles up the screen. The color of bubbles fired is randomly generated and chosen from the colors of bubbles still left on the screen. The objective of the game is to clear all the bubbles from the arena without any bubble crossing the bottom line. 

## Functionality and MVPs

The Game:
* Start the game with randomized patterns of colored bubbles.
* Row of same colored bubbles will disappear if more than two are connected after impact of new bubble. 
* Pointer can shoot out randomized set of bubbles
* Players can control the pointer in left and right motion. [ A / D & Left / Right Arrow Keys ]
* Bubbles bounce off the walls
* Leaderboard
* Music And Sprites Addition

The Page:
* Links to Github & Personal Page
* How to Play Instructions


## Wireframes

![wireframe](https://i.imgur.com/AC4KjmT.png)

## Architecture and Technology

* `HTML5 Canvas` for Game Rendering
* `Vanilla JavaScript` for Game Logic
* `Webpack` for bundling JS Files
* `Keymaster` for Pointer Key Binding

## Implementation Timeline

### Day 1
* Plan and Write General Game Logic
* Implement Collision of Bubbles Logic
* Render Simple Canvas for Bubbles and Pointer

### Day 2
* Continue on General Game Logic
* Implement Scoring Function and Logic
* Keymap Bindings to Pointer

### Day 3
* Continue on General Game Logic
* Page Styling and Polishing
* Implement Leaderboard Logic

### Day 4
* Complete General Game Logic
* Add Toggle-able Game Music


### Bonus Feature
* 2 players versus feature
* Special Skills When Ultimate Meter is Maxed Out 
  * Able to Pierce through Bubbles No Matter What Color
  * Rainbow Bubble -> Any Set of Color