#  Apple Motion Lite

A lightweight, high-performance animation library inspired by Apple-style
landing pages and product websites.

Built with native browser APIs for maximum smoothness.

No React re-renders. No heavy dependencies. No bloat.

---

## Features

- 🚀 Apple-style landing intro animations
- 📜 Scroll-linked animations
- 🎬 Smooth damping motion
- 🧠 Zero React state updates
- ⚡ GPU accelerated (transform + opacity only)
- 📦 Tiny bundle (~5kb)
- ⚛️ Works with React / Vanilla JS

---

##  Demo

> Live demo: https://athulcoder.github.io/apple-motion-lite/public/

---

##  Installation

```bash
npm install apple-motion-lite

```


##  Quick Start (Vanilla JS)
```bash
<div id="box" class="card"></div>

<script type="module">
  import { animate } from "apple-motion-lite";

  animate(document.getElementById("box"), "fadeUp");
</script>

```

## React Usage (Recommended)
```bash

import { useEffect, useRef } from "react";
import { landingIntro } from "apple-motion-lite";

export default function Landing() {

  const containerRef = useRef(null);

  useEffect(() => {


    const cards =
      containerRef.current.querySelectorAll(".card");

    landingIntro(containerRef.current, cards, {
      speed: 0.018,
      stagger: 0.24,
      rotate: 5,
      blur: 3
    });

  }, []);

  return (
    <div className="hero">

      <div ref={containerRef} className="cutouts">

        <div className="card c1" />
        <div className="card c2" />
        <div className="card c3" />

      </div>

    </div>
  );
}

```
