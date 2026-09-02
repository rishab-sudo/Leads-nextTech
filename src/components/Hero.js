import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import submarineBg from '../assets/submarine.png';
import sonarImg from '../assets/sonar.png';
import navalGunImg from '../assets/naval gun.png';
import heroVideo from "../assets/video/hero_bg.mp4";
import './Hero.css';

const slides = [
  {
    id: 'gun-technologies',
    domain: '01 // GUN TECHNOLOGIES',
    word1: 'GUARDING',
    word2: 'THE SKIES',
    gradientClass: 'nxt-gradient-gold',
    desc: 'Engineering next-generation gun systems and precision fire-control technologies, built for superior accuracy, stability, and mission readiness.',
    image: navalGunImg,
    alt: 'Precision Gun Technologies Platform',
    hudTag: 'KINETIC ARTILLERY // READY',
    hudStat: 'TARGET LOCK: XX AUTO',
    theme: 'gold',
  },
  {
    id: 'underwater-technologies',
    domain: '02 // UNDERWATER TECH',
    word1: 'RULING',
    word2: 'THE DEPTHS',
    gradientClass: 'nxt-gradient-cyan',
    desc: 'Developing advanced underwater sensing and acoustic intelligence systems for next-generation maritime and deep-sea operations.',
    image: sonarImg,
    alt: 'Underwater Technologies Platform',
    hudTag: 'TACTICAL SONAR // ACTIVE',
    hudStat: 'RANGE: XX DEPTH SCAN',
    theme: 'cyan',
  },
];

// Smooth ease-out-expo style curve — replaces the snappier 'easeOut'
const SMOOTH_EASE_IN = [0.22, 1, 0.36, 1];
const SMOOTH_EASE_OUT = [0.4, 0, 1, 1];

// Left text slide animation variants — enters first, no delay
const textSlideVariants = {
  initial: {
    opacity: 0,
    x: -40,
    filter: 'blur(6px)',
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: SMOOTH_EASE_IN,
      staggerChildren: 0.14,
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    filter: 'blur(6px)',
    transition: {
      duration: 0.5,
      ease: SMOOTH_EASE_OUT,
    },
  },
};

const childVariant = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: SMOOTH_EASE_IN },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.4, ease: SMOOTH_EASE_OUT },
  },
};

// Right image slide animation variants — delayed so it enters AFTER the text
const imageSlideVariants = {
  initial: {
    opacity: 0,
    x: 60,
    scale: 0.9,
    filter: 'blur(8px)',
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      delay: 0.35, // text-first feel: image waits for text to start settling
      ease: SMOOTH_EASE_IN,
    },
  },
  exit: {
    opacity: 0,
    x: 40,
    scale: 0.92,
    filter: 'blur(8px)',
    transition: {
      duration: 0.45,
      ease: SMOOTH_EASE_OUT,
    },
  },
};

export default function Herosection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, []);

  // Kick off the video download the instant this component mounts —
  // don't wait for the <video> tag to be parsed/hydrated. This is what
  // removes the "delay before it starts playing" on first paint.
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = heroVideo;
    link.type = 'video/mp4';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="nxt-hero-fullscreen" aria-label="NXTTECH Defence Systems Hero">
      {/* ── FULLSCREEN VIMEO BACKGROUND ── */}
      <div className="nxt-hero-bg-container">
        {/* Poster image — shown until the video finishes loading,
            so there's no flash of black on first paint */}
        <img
          src={submarineBg}
          alt=""
          className={`nxt-hero-bg-poster ${videoLoaded ? 'is-hidden' : ''}`}
          aria-hidden="true"
        />

        <div className="nxt-hero-bg-video-wrap">
          <video
            className="nxt-hero-bg-video"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            // @ts-ignore — fetchpriority isn't in older React typings but is a valid DOM attr
            fetchpriority="high"
            onCanPlay={() => setVideoLoaded(true)}
            onLoadedData={() => setVideoLoaded(true)}
            aria-hidden="true"
          />
        </div>

        {/* Cinematic Overlays & Gradients */}
        <div className="nxt-bg-overlay-dark" />
        <div className="nxt-bg-overlay-radial" />
        <div className="nxt-bg-overlay-grid" />
        <div className="nxt-bg-glow-cyan" />
      </div>

      {/* ── MAIN 2-COLUMN CONTAINER ── */}
      <div className="nxt-hero-main-container">
        {/* LEFT COLUMN: Headings & Content */}
        <div className="nxt-hero-left-wrapper">
          {/* Eyebrow Badge */}
          <motion.div
            className="nxt-hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SMOOTH_EASE_IN }}
          >
            <span className="nxt-badge-pulse" />
            <span className="nxt-badge-text">NXTTECH DEFENCE INITIATIVE // ACTIVE MISSION</span>
          </motion.div>

          {/* Dynamic Content Switcher (AnimatePresence) */}
          <div className="nxt-slide-viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                className="nxt-slide-content"
                variants={textSlideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Domain Tag */}
                <motion.span className="nxt-title-domain" variants={childVariant}>
                  {slide.domain}
                </motion.span>

                {/* Main Heading Stacked on 2 Lines */}
                <motion.h1 className="nxt-hero-title" variants={childVariant}>
                  <span className="nxt-title-line-1">{slide.word1}</span>
                  <span className={`nxt-title-line-2 ${slide.gradientClass}`}>{slide.word2}</span>
                </motion.h1>

                {/* Description */}
                <motion.p className="nxt-hero-description" variants={childVariant}>
                  {slide.desc}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Progress Indicators */}
          <div className="nxt-slide-indicators">
            {slides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(index)}
                className={`nxt-indicator-bar ${index === currentSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className="nxt-indicator-fill"
                  key={index === currentSlide ? `active-${index}` : `inactive-${index}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Synchronized Visual Showcase (Sonar / Naval Gun) */}
        <div className="nxt-hero-right-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className={`nxt-right-visual-card theme-${slide.theme}`}
              variants={imageSlideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Dynamic Aura Backlight */}
              <div className={`nxt-visual-glow glow-${slide.theme}`} />

              {/* Floating Asset Visual */}
              <motion.div
                className="nxt-visual-img-box"
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-0.4, 0.4, -0.4],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="nxt-showcase-img"
                  loading="eager"
                />
              </motion.div>

              {/* HUD Status Overlay Card */}
              <motion.div
                className="nxt-visual-hud"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: SMOOTH_EASE_IN }}
              >
                <span className={`nxt-hud-dot dot-${slide.theme}`} />
                <div className="nxt-hud-info">
                  <span className="nxt-hud-tag">{slide.hudTag}</span>
                  <span className="nxt-hud-stat">{slide.hudStat}</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}