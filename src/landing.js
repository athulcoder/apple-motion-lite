// landing.js

import { lerp, clamp } from "./smooth.js";


/* Apple easing */
function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}


export function landingIntro(
  container,
  items,
  options = {}
) {

  const root =
    typeof container === "string"
      ? document.querySelector(container)
      : container;

  const elements =
    typeof items === "string"
      ? document.querySelectorAll(items)
      : items;

  if (!root || !elements.length) {
    console.warn("Landing: elements not found");
    return;
  }


  /* Config */

  const {
    speed = 0.035,
    stagger = 0.18,
    blur = 4,
    scaleFrom = 0.88,
    perspective = 1200,
    rotate = 6
  } = options;


  let current = 0;
  let target = 1;


  /* Start from below screen */
  const startY = window.innerHeight * 0.7;


  /* Perspective */
  root.style.perspective = `${perspective}px`;
  root.style.transformStyle = "preserve-3d";


  /* Animation Loop */

  function loop() {

    current = lerp(current, target, speed);

    const base = easeOutExpo(current);


    /* Move container from bottom */

    const y = startY * (1 - base);

    root.style.transform = `
      translate3d(0, ${y}px, 0)
    `;


    /* Cards */

    elements.forEach((el, i) => {

      const delay = i * stagger;

      let p = clamp((current - delay) * 1.3);

      p = easeOutCubic(p);


      /* Depth */
      const z = -160 * (1 - p);


      /* Vertical motion */
      const ty = 90 * (1 - p);


      /* Rotation */
      const r = rotate * (1 - p);


      /* Soft overshoot */
      const bounce =
        Math.sin(p * Math.PI) * 5;


      const scale =
        scaleFrom + p * (1 - scaleFrom);


      const b = blur * (1 - p);


      el.style.transform = `
        translate3d(0, ${ty - bounce}px, ${z}px)
        rotateX(${r}deg)
        scale(${scale})
      `;

      el.style.opacity = p;

      el.style.filter = `blur(${b}px)`;
    });


    if (current < 0.999) {
      requestAnimationFrame(loop);
    }
  }


  requestAnimationFrame(loop);
}
