// presets.js

export function fadeUp(el, p) {

  const y = 60 * (1 - p);

  el.style.transform = `
    translateY(${y}px)
  `;

  el.style.opacity = p;
}


export function zoomIn(el, p) {

  const s = 0.9 + p * 0.1;

  el.style.transform = `
    scale(${s})
  `;

  el.style.opacity = p;
}


export function parallax(el, p) {

  const y = -120 * p;

  el.style.transform = `
    translateY(${y}px)
  `;
}
