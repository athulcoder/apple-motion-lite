// core.js

import { scrollProgress } from "./scroll.js";
import { damp } from "./smooth.js";

// One RAF loop (shared)
const subscribers = new Set();

function loop() {
  subscribers.forEach(fn => fn());
  requestAnimationFrame(loop);
}

loop();

export function watch(el, render) {

  let current = 0;

  function update() {

    const target = scrollProgress(el);

    current = damp(current, target);

    render(current, el);
  }

  subscribers.add(update);

  // Cleanup
  return () => subscribers.delete(update);
}
