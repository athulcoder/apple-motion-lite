// index.js

import { watch } from "./core.js";
import * as presets from "./presets.js";

export function animate(el, preset) {

  if (!presets[preset]) {
    console.warn(`Preset "${preset}" not found`);
    return;
  }

  return watch(el, (p) => {
    presets[preset](el, p);
  });
}
export { landingIntro } from "./landing.js";
export { presets };
