// smooth.js

export function clamp(v, min = 0, max = 1) {
  return Math.min(max, Math.max(min, v));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Damping = buttery motion
export function damp(current, target, speed = 0.08) {
  return lerp(current, target, speed);
}
