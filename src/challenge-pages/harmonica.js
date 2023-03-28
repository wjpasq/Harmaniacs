import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(800, 250);
  }

  p5.draw = () => {
    p5.background(250);
    p5.noStroke();

    // Harmonica Body
    p5.fill("grey");
    p5.rect(90, 85, 620, 125, 10);
    p5.fill("peru");
    p5.rect(40, 120, 720, 58);
    p5.fill("saddlebrown");
    p5.rect(40, 125, 720, 48);

    // Harmonica Holes
    for (var i = 0; i < 10; i++) {
        p5.fill("cornsilk");
        p5.rect(i * 60 + 105, 125, 50, 50, 10);
        p5.fill("black");
        p5.text(i, i * 60 + 105 + 20, 125 + 27);
    }

    // Display Note Changes
    for (var i = 48; i <= 57; i++)
      if (p5.keyIsDown(i)) {
          p5.fill("lightgreen");
          p5.rect((i - 48) * 60 + 105, 125, 50, 50, 10);
          p5.fill("black");
          p5.text((i - 48), (i - 48) * 60 + 105 + 20, 125 + 27);
      }
    }
}

export default function App() {
  return <ReactP5Wrapper sketch={sketch} />;
}