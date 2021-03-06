import Bubble from "./bubbles";

const blue = "#0000ff";
const red = "#ff0000";
const green = "#00ff00";
const orange = "#ff8000";
const yellow = "#ffff00";
export let bubbleColors = [blue, red, green, orange, yellow];


let rowDistance = 30 * Math.sqrt(3);
export const Levels = [
         [ //1
            new Bubble(30, 30, red),
            new Bubble(90, 30, red),
            new Bubble(150, 30, yellow),
            new Bubble(210, 30, yellow),
            new Bubble(270, 30, blue),
            new Bubble(330, 30, blue),
            new Bubble(390, 30, green),
            new Bubble(450, 30, green),
            new Bubble(60, 30 + rowDistance, red),
            new Bubble(120, 30 + rowDistance, red),
            new Bubble(180, 30 + rowDistance, yellow),
            new Bubble(240, 30 + rowDistance, yellow),
            new Bubble(300, 30 + rowDistance, blue),
            new Bubble(360, 30 + rowDistance, blue),
            new Bubble(420, 30 + rowDistance, green),
            new Bubble(30, 30 + rowDistance * 2, blue),
            new Bubble(90, 30 + rowDistance * 2, orange),
            new Bubble(150, 30 + rowDistance * 2, green),
            new Bubble(210, 30 + rowDistance * 2, green),
            new Bubble(270, 30 + rowDistance * 2, red),
            new Bubble(330, 30 + rowDistance * 2, yellow),
            new Bubble(390, 30 + rowDistance * 2, orange),
            new Bubble(450, 30 + rowDistance * 2, orange),
            new Bubble(60, 30 + rowDistance * 3, blue),
            new Bubble(120, 30 + rowDistance * 3, orange),
            new Bubble(180, 30 + rowDistance * 3, green),
            new Bubble(240, 30 + rowDistance * 3, green),
            new Bubble(300, 30 + rowDistance * 3, red),
            new Bubble(360, 30 + rowDistance * 3, yellow),
            new Bubble(420, 30 + rowDistance * 3, orange),
          ],
          [ //2
            new Bubble(90, 30, orange),
            new Bubble(150, 30, orange),
            new Bubble(330, 30, orange),
            new Bubble(390, 30, orange),
            new Bubble(60, 30 + rowDistance, orange),
            new Bubble(120, 30 + rowDistance, blue),
            new Bubble(180, 30 + rowDistance, orange),
            new Bubble(240, 30 + rowDistance, orange),
            new Bubble(300, 30 + rowDistance, orange),
            new Bubble(360, 30 + rowDistance, blue),
            new Bubble(420, 30 + rowDistance, orange),
            new Bubble(90, 30 + rowDistance * 2, red),
            new Bubble(150, 30 + rowDistance * 2, blue),
            new Bubble(210, 30 + rowDistance * 2, yellow),
            new Bubble(270, 30 + rowDistance * 2, yellow),
            new Bubble(330, 30 + rowDistance * 2, blue),
            new Bubble(390, 30 + rowDistance * 2, red),
            new Bubble(120, 30 + rowDistance * 3, red),
            new Bubble(180, 30 + rowDistance * 3, green),
            new Bubble(240, 30 + rowDistance * 3, yellow),
            new Bubble(300, 30 + rowDistance * 3, green),
            new Bubble(360, 30 + rowDistance * 3, red),
            new Bubble(150, 30 + rowDistance * 4, red),
            new Bubble(210, 30 + rowDistance * 4, green),
            new Bubble(270, 30 + rowDistance * 4, green),
            new Bubble(330, 30 + rowDistance * 4, red),
            new Bubble(180, 30 + rowDistance * 5, red),
            new Bubble(240, 30 + rowDistance * 5, green),
            new Bubble(300, 30 + rowDistance * 5, red),
            new Bubble(210, 30 + rowDistance * 6, red),
            new Bubble(270, 30 + rowDistance * 6, red),
            new Bubble(240, 30 + rowDistance * 7, red),
         ],
         [//3
            new Bubble(30, 30, yellow),
            new Bubble(90, 30, yellow),
            new Bubble(390, 30, blue),
            new Bubble(450, 30, blue),
            new Bubble(120, 30 + rowDistance, yellow),
            new Bubble(360, 30 + rowDistance, blue),
            new Bubble(30, 30 + rowDistance * 2, red),
            new Bubble(90, 30 + rowDistance * 2, green),
            new Bubble(390, 30 + rowDistance * 2, yellow),
            new Bubble(450, 30 + rowDistance * 2, yellow),
            new Bubble(60, 30 + rowDistance * 3, red),
            new Bubble(120, 30 + rowDistance * 3, green),
            new Bubble(180, 30 + rowDistance * 3, blue),
            new Bubble(240, 30 + rowDistance * 3, blue),
            new Bubble(300, 30 + rowDistance * 3, orange),
            new Bubble(360, 30 + rowDistance * 3, yellow),
            new Bubble(420, 30 + rowDistance * 3, green),
            new Bubble(30, 30 + rowDistance * 4, red),
            new Bubble(150, 30 + rowDistance * 4, green),
            new Bubble(210, 30 + rowDistance * 4, blue),
            new Bubble(270, 30 + rowDistance * 4, orange),
            new Bubble(330, 30 + rowDistance * 4, yellow),
            new Bubble(450, 30 + rowDistance * 4, green),
         ],
        [//4
          new Bubble(90, 30, orange),
          new Bubble(150, 30, red),
          new Bubble(210, 30, yellow),
          new Bubble(270, 30, green),
          new Bubble(330, 30, yellow),
          new Bubble(390, 30, green),
          new Bubble(60, 30 + rowDistance, red),
          new Bubble(120, 30 + rowDistance, red),
          new Bubble(240, 30 + rowDistance, orange),
          new Bubble(360, 30 + rowDistance, blue),
          new Bubble(420, 30 + rowDistance, red),
          new Bubble(30, 30 + rowDistance * 2, blue),
          new Bubble(90, 30 + rowDistance * 2, orange),
          new Bubble(150, 30 + rowDistance * 2, green),
          new Bubble(210, 30 + rowDistance * 2, blue),
          new Bubble(270, 30 + rowDistance * 2, red),
          new Bubble(330, 30 + rowDistance * 2, yellow),
          new Bubble(390, 30 + rowDistance * 2, red),
          new Bubble(450, 30 + rowDistance * 2, blue),
          new Bubble(60, 30 + rowDistance * 3, red),
          new Bubble(180, 30 + rowDistance * 3, red),
          new Bubble(300, 30 + rowDistance * 3, red),
          new Bubble(420, 30 + rowDistance * 3, orange),
          new Bubble(30, 30 + rowDistance * 4, blue),
          new Bubble(90, 30 + rowDistance * 4, red),
          new Bubble(150, 30 + rowDistance * 4, yellow),
          new Bubble(210, 30 + rowDistance * 4, red),
          new Bubble(270, 30 + rowDistance * 4, orange),
          new Bubble(330, 30 + rowDistance * 4, blue),
          new Bubble(390, 30 + rowDistance * 4, red),
          new Bubble(450, 30 + rowDistance * 4, red),
          new Bubble(60, 30 + rowDistance * 5, orange),
          new Bubble(120, 30 + rowDistance * 5, green),
          new Bubble(240, 30 + rowDistance * 5, orange),
          new Bubble(360, 30 + rowDistance * 5, orange),
          new Bubble(420, 30 + rowDistance * 5, green),
        ],
       ];


export const levelClone = [
  [ //1
    new Bubble(30, 30, red),
    new Bubble(90, 30, red),
    new Bubble(150, 30, yellow),
    new Bubble(210, 30, yellow),
    new Bubble(270, 30, blue),
    new Bubble(330, 30, blue),
    new Bubble(390, 30, green),
    new Bubble(450, 30, green),
    new Bubble(60, 30 + rowDistance, red),
    new Bubble(120, 30 + rowDistance, red),
    new Bubble(180, 30 + rowDistance, yellow),
    new Bubble(240, 30 + rowDistance, yellow),
    new Bubble(300, 30 + rowDistance, blue),
    new Bubble(360, 30 + rowDistance, blue),
    new Bubble(420, 30 + rowDistance, green),
    new Bubble(30, 30 + rowDistance * 2, blue),
    new Bubble(90, 30 + rowDistance * 2, orange),
    new Bubble(150, 30 + rowDistance * 2, green),
    new Bubble(210, 30 + rowDistance * 2, green),
    new Bubble(270, 30 + rowDistance * 2, red),
    new Bubble(330, 30 + rowDistance * 2, yellow),
    new Bubble(390, 30 + rowDistance * 2, orange),
    new Bubble(450, 30 + rowDistance * 2, orange),
    new Bubble(60, 30 + rowDistance * 3, blue),
    new Bubble(120, 30 + rowDistance * 3, orange),
    new Bubble(180, 30 + rowDistance * 3, green),
    new Bubble(240, 30 + rowDistance * 3, green),
    new Bubble(300, 30 + rowDistance * 3, red),
    new Bubble(360, 30 + rowDistance * 3, yellow),
    new Bubble(420, 30 + rowDistance * 3, orange),
  ],
  [ //2
    new Bubble(90, 30, orange),
    new Bubble(150, 30, orange),
    new Bubble(330, 30, orange),
    new Bubble(390, 30, orange),
    new Bubble(60, 30 + rowDistance, orange),
    new Bubble(120, 30 + rowDistance, blue),
    new Bubble(180, 30 + rowDistance, orange),
    new Bubble(240, 30 + rowDistance, orange),
    new Bubble(300, 30 + rowDistance, orange),
    new Bubble(360, 30 + rowDistance, blue),
    new Bubble(420, 30 + rowDistance, orange),
    new Bubble(90, 30 + rowDistance * 2, red),
    new Bubble(150, 30 + rowDistance * 2, blue),
    new Bubble(210, 30 + rowDistance * 2, yellow),
    new Bubble(270, 30 + rowDistance * 2, yellow),
    new Bubble(330, 30 + rowDistance * 2, blue),
    new Bubble(390, 30 + rowDistance * 2, red),
    new Bubble(120, 30 + rowDistance * 3, red),
    new Bubble(180, 30 + rowDistance * 3, green),
    new Bubble(240, 30 + rowDistance * 3, yellow),
    new Bubble(300, 30 + rowDistance * 3, green),
    new Bubble(360, 30 + rowDistance * 3, red),
    new Bubble(150, 30 + rowDistance * 4, red),
    new Bubble(210, 30 + rowDistance * 4, green),
    new Bubble(270, 30 + rowDistance * 4, green),
    new Bubble(330, 30 + rowDistance * 4, red),
    new Bubble(180, 30 + rowDistance * 5, red),
    new Bubble(240, 30 + rowDistance * 5, green),
    new Bubble(300, 30 + rowDistance * 5, red),
    new Bubble(210, 30 + rowDistance * 6, red),
    new Bubble(270, 30 + rowDistance * 6, red),
    new Bubble(240, 30 + rowDistance * 7, red),
  ],
  [//3
    new Bubble(30, 30, yellow),
    new Bubble(90, 30, yellow),
    new Bubble(390, 30, blue),
    new Bubble(450, 30, blue),
    new Bubble(120, 30 + rowDistance, yellow),
    new Bubble(360, 30 + rowDistance, blue),
    new Bubble(30, 30 + rowDistance * 2, red),
    new Bubble(90, 30 + rowDistance * 2, green),
    new Bubble(390, 30 + rowDistance * 2, yellow),
    new Bubble(450, 30 + rowDistance * 2, yellow),
    new Bubble(60, 30 + rowDistance * 3, red),
    new Bubble(120, 30 + rowDistance * 3, green),
    new Bubble(180, 30 + rowDistance * 3, blue),
    new Bubble(240, 30 + rowDistance * 3, blue),
    new Bubble(300, 30 + rowDistance * 3, orange),
    new Bubble(360, 30 + rowDistance * 3, yellow),
    new Bubble(420, 30 + rowDistance * 3, green),
    new Bubble(30, 30 + rowDistance * 4, red),
    new Bubble(150, 30 + rowDistance * 4, green),
    new Bubble(210, 30 + rowDistance * 4, blue),
    new Bubble(270, 30 + rowDistance * 4, orange),
    new Bubble(330, 30 + rowDistance * 4, yellow),
    new Bubble(450, 30 + rowDistance * 4, green),
  ],
  [//4
    new Bubble(90, 30, orange),
    new Bubble(150, 30, red),
    new Bubble(210, 30, yellow),
    new Bubble(270, 30, green),
    new Bubble(330, 30, yellow),
    new Bubble(390, 30, green),
    new Bubble(60, 30 + rowDistance, red),
    new Bubble(120, 30 + rowDistance, red),
    new Bubble(240, 30 + rowDistance, orange),
    new Bubble(360, 30 + rowDistance, blue),
    new Bubble(420, 30 + rowDistance, red),
    new Bubble(30, 30 + rowDistance * 2, blue),
    new Bubble(90, 30 + rowDistance * 2, orange),
    new Bubble(150, 30 + rowDistance * 2, green),
    new Bubble(210, 30 + rowDistance * 2, blue),
    new Bubble(270, 30 + rowDistance * 2, red),
    new Bubble(330, 30 + rowDistance * 2, yellow),
    new Bubble(390, 30 + rowDistance * 2, red),
    new Bubble(450, 30 + rowDistance * 2, blue),
    new Bubble(60, 30 + rowDistance * 3, red),
    new Bubble(180, 30 + rowDistance * 3, red),
    new Bubble(300, 30 + rowDistance * 3, red),
    new Bubble(420, 30 + rowDistance * 3, orange),
    new Bubble(30, 30 + rowDistance * 4, blue),
    new Bubble(90, 30 + rowDistance * 4, red),
    new Bubble(150, 30 + rowDistance * 4, yellow),
    new Bubble(210, 30 + rowDistance * 4, red),
    new Bubble(270, 30 + rowDistance * 4, orange),
    new Bubble(330, 30 + rowDistance * 4, blue),
    new Bubble(390, 30 + rowDistance * 4, red),
    new Bubble(450, 30 + rowDistance * 4, red),
    new Bubble(60, 30 + rowDistance * 5, orange),
    new Bubble(120, 30 + rowDistance * 5, green),
    new Bubble(240, 30 + rowDistance * 5, orange),
    new Bubble(360, 30 + rowDistance * 5, orange),
    new Bubble(420, 30 + rowDistance * 5, green),
  ],
];