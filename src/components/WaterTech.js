import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WaterTech.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * UnderwaterScrollSection
 * ------------------------
 * Scroll-triggered image-sequence section for "Underwater Technologies".
 * The whole thing plays out over 4 viewport-heights of scroll (400vh):
 *  - the frame sequence scrubs from frame 0 -> last frame across that range
 *  - the heading fades in (centered) early and then stays fixed on screen
 *  - the 3 points reveal one by one, centered, as the user keeps scrolling,
 *    and stay visible once revealed (a building checklist, not a crossfade)
 *  - everything (heading + all points) finishes appearing by 95% scroll
 *    progress, well inside the 4-scroll section
 *
 * Setup:
 * 1. npm install gsap
 * 2. Frame images live in /public/frames/ (ezgif-frame-001.png ... ezgif-frame-041.png)
 *    NOTE: must be under /public, not /src/assets — files under /src are not
 *    served as static URLs unless imported individually.
 * 3. Adjust FRAME_COUNT / getFramePath below if your asset path/naming/extension changes.
 */

const FRAME_COUNT = 41;
const SCROLL_LENGTH_VH = 400; // 4 "scrolls" worth of height for the full sequence
const FRAME_PATH = (index) =>
  `/frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.png`;

const DEFAULT_EYEBROW = "◉ EXPLORE TECHNOLOGY";
const DEFAULT_TITLE = "Underwater Technologies";
const DEFAULT_POINTS = [
  "Passive & Active Arrays",
  "AI-Based Acoustic Classification",
  "For Ships, UUVs & USVs",
];

export default function UnderwaterScrollSection({
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  points = DEFAULT_POINTS,
  frameCount = FRAME_COUNT,
  scrollLengthVh = SCROLL_LENGTH_VH,
  getFramePath = FRAME_PATH,
}) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const headingRef = useRef(null);
  const pointRefs = useRef([]);
  const imagesRef = useRef([]);
  const stateRef = useRef({ frame: 0 });

  pointRefs.current = [];
  const setPointRef = (el) => {
    if (el) pointRefs.current.push(el);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const wrapperEl = wrapperRef.current; // captured once — avoids stale-ref cleanup warning

    // ---- preload every frame ----
    const images = new Array(frameCount);
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.onerror = () =>
        console.error(`Failed to load frame ${i}: ${getFramePath(i)}`);
      img.src = getFramePath(i);
      images[i] = img;
    }
    imagesRef.current = images;

    // ---- draw a frame, cover-fit into the canvas ----
    const drawFrame = (index) => {
      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) {
        console.warn(`Frame ${index} not ready/loaded: ${getFramePath(index)}`);
        return;
      }

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      let sx, sy, sw, sh;

      if (imgRatio > canvasRatio) {
        sh = img.naturalHeight;
        sw = sh * canvasRatio;
        sx = (img.naturalWidth - sw) / 2;
        sy = 0;
      } else {
        sw = img.naturalWidth;
        sh = sw / canvasRatio;
        sx = 0;
        sy = (img.naturalHeight - sh) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    };

    const render = () => drawFrame(Math.round(stateRef.current.frame));

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = wrapperEl.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      render();
    };

    images[0].onload = render;
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // ---- scroll -> frame index ----
    const frameST = ScrollTrigger.create({
      trigger: wrapperEl,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        stateRef.current.frame = Math.min(
          frameCount - 1,
          Math.floor(self.progress * frameCount)
        );
        render();
      },
    });

    // ---- heading: fades in once, then stays put for the rest of the scroll ----
    let headingTween;
    if (headingRef.current) {
      gsap.set(headingRef.current, { opacity: 0, y: 24 });
      headingTween = gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapperEl,
          start: "top top",
          end: "+=15%",
          scrub: true,
        },
      });
    }

    // ---- points: reveal one at a time as the user scrolls, then hold ----
    const n = pointRefs.current.length;
    let pointTriggers = [];
    if (n > 0) {
      gsap.set(pointRefs.current, { opacity: 0, y: 16 });

      // points occupy the back 70% of the scroll range, evenly spaced,
      // each one appears and simply stays visible (no fade-out).
      // rangeEnd is a % of scroll PROGRESS (not vh), so all points still
      // finish appearing before the section ends, now compressed into 4vh.
      const rangeStart = 0.2;
      const rangeEnd = 0.95;
      const step = (rangeEnd - rangeStart) / n;

      pointRefs.current.forEach((el, i) => {
        const start = rangeStart + i * step;
        const trigger = ScrollTrigger.create({
          trigger: wrapperEl,
          start: `top+=${start * 100}% top`,
          end: `top+=${(start + 0.08) * 100}% top`,
          scrub: true,
          animation: gsap.fromTo(
            el,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, ease: "power1.out" }
          ),
        });
        pointTriggers.push(trigger);
      });
    }

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      frameST.kill();
      if (headingTween?.scrollTrigger) headingTween.scrollTrigger.kill();
      pointTriggers.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === wrapperEl) t.kill();
      });
    };
  }, [frameCount, getFramePath, points.length]);

  return (
    <div className="uw-container-fluid">
      <section
        ref={wrapperRef}
        className="uw-wrapper"
        style={{ height: `${scrollLengthVh}vh` }}
      >
        <div className="uw-stage">
          <canvas ref={canvasRef} className="uw-canvas" />
          <div className="uw-vignette" />

          <div className="uw-content">
            <div ref={headingRef} className="uw-heading-block">
              {eyebrow && <p className="uw-eyebrow eyebrow">{eyebrow}</p>}
              {title && <h2 className="uw-title">{title}</h2>}
            </div>

            <ul className="uw-points">
              {points.map((p, i) => (
                <li key={i} ref={setPointRef} className="uw-point">
                  <span className="uw-point-marker" />
                  <span className="uw-point-text">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}