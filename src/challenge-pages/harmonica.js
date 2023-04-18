import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function sketch(p5) {

  let sounds;

  p5.preload = () => {
    let c1 = new Audio('./assets/C1_harmonica.wav');
    let c2 = new Audio('./assets/C2_harmonica.wav');
    let c3 = new Audio('./assets/C3_harmonica.wav');
    let c4 = new Audio('./assets/C4_harmonica.wav');
    let e1 = new Audio('./assets/E1_harmonica.wav');
    let e2 = new Audio('./assets/E2_harmonica.wav');
    let e3 = new Audio('./assets/E3_harmonica.wav');
    let g1 = new Audio('./assets/G1_harmonica.wav');
    let g2 = new Audio('./assets/G2_harmonica.wav');
    let g3 = new Audio('./assets/G3_harmonica.wav');

    sounds = [c1, e1, g1, c2, e2, g2, c3, e3, g3, c4]
  }

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
    // 48 = "0" key -> 57 = "9" key, therefore checks all number keys
    for (i = 48; i <= 57; i++) {
      if (p5.keyIsDown(i)) {
          p5.fill("lightgreen");
          p5.rect((i - 48) * 60 + 105, 125, 50, 50, 10);
          p5.fill("black");
          p5.text((i - 48), (i - 48) * 60 + 105 + 20, 125 + 27);

        
          sounds[i - 48].play()
      } else {
        sounds[i - 48].pause()
        sounds[i - 48].currentTime = 0
      }
    }
   }
}

export default function App() {
  return <ReactP5Wrapper sketch={sketch} />;
}