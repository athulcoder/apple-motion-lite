// scroll.js

import { clamp } from "./smooth.js";

export function scrollProgress(el) {

  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;

  return clamp(
    1 - rect.top / (vh + rect.height)
  );
}
