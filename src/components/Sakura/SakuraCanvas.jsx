// src/components/Sakura/SakuraCanvas.jsx
import { useEffect, useRef, useMemo } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;            /* sits behind the content */
  pointer-events: none;  /* never blocks clicks/scroll */
`;

const usePrefersReducedMotion = () => {
  return useMemo(() => {
    if (typeof window === "undefined" || typeof matchMedia === "undefined") return false;
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      return false;
    }
  }, []);
};

/**
 * SakuraCanvas
 * Props:
 *  - intensity: "calm" | "breeze" | "windy"
 *  - density: number | "auto"   (petals on screen)
 *  - colors: string[]           (hex or rgba)
 */
export default function SakuraCanvas({
  intensity = "calm",
  density = "auto",
  colors = ["#F6D6E1", "#F6DDE6", "#FBECEF", "#D9D4F1", "rgba(246,214,225,0.8)"],
}) {
  const canvasRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return; // Respect user setting

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    // Map intensity → wind / gravity
    const settingsByIntensity = {
      calm:   { gravity: 0.08, windMean: 0.05, windOsc: 0.04 },
      breeze: { gravity: 0.12, windMean: 0.08, windOsc: 0.06 },
      windy:  { gravity: 0.18, windMean: 0.12, windOsc: 0.08 },
    };
    const cfg = settingsByIntensity[intensity] || settingsByIntensity.calm;

    // Density "auto" scales with screen area (clamped 18–60)
    const autoCount = Math.round((width * height) / 45000);
    const PETAL_COUNT = Math.min(60, Math.max(18, density === "auto" ? autoCount : density));

    // Petal class
    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(fromTop = false) {
        // Size as a base for shape
        this.size = 10 + Math.random() * 16; // 10–26px
        // Position
        this.x = Math.random() * width;
        this.y = fromTop ? (-20 - Math.random() * 100) : (Math.random() * height);
        // Speed
        this.vy = cfg.gravity * (0.8 + Math.random() * 1.2) * (0.6 + this.size / 26);
        this.baseVx = cfg.windMean * (0.6 + Math.random() * 1.2);
        // Swing
        this.swingAmp = 6 + Math.random() * 10;   // px
        this.swingFreq = 0.6 + Math.random() * 0.9; // frequency factor
        // Rotation
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? -1 : 1);
        // Color
        this.color = colors[Math.floor(Math.random() * colors.length)];
        // Opacity per petal
        this.alpha = 0.7 + Math.random() * 0.3;
        // Time offset
        this.t = Math.random() * 1000;
      }

      update(globalT) {
        this.t += 0.016;
        // Wind oscillates slightly over time
        const wind = this.baseVx + Math.sin((globalT + this.t) * 0.4) * (cfg.windOsc);
        const sway = Math.sin((globalT * this.swingFreq) + this.t) * this.swingAmp;

        this.x += wind + (sway * 0.02);
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        const margin = 40;
        if (this.y > height + margin || this.x < -margin || this.x > width + margin) {
          this.reset(true);
          this.y = -20 - Math.random() * 40;
          this.x = Math.random() * (width + margin * 2) - margin;
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Draw a sakura-like petal with bezier curves
        const s = this.size;
        ctx.fillStyle = this.color;

        ctx.beginPath();
        // A soft teardrop/heart-ish petal
        ctx.moveTo(0, -s * 0.2);
        ctx.bezierCurveTo(
          s * 0.6, -s * 0.9,     // control1
          s * 1.0,  s * 0.2,     // control2
          0,         s * 0.9     // end
        );
        ctx.bezierCurveTo(
          -s * 1.0,  s * 0.2,    // control1
          -s * 0.6, -s * 0.9,    // control2
          0,        -s * 0.2     // end back to top
        );
        ctx.closePath();
        ctx.fill();

        // Optional subtle highlight stroke
        ctx.lineWidth = 0.6;
        ctx.strokeStyle = "rgba(255,255,255,0.25)";
        ctx.stroke();

        ctx.restore();
      }
    }

    // Create petals
    let petals = new Array(PETAL_COUNT).fill(0).map(() => new Petal());

    // Animation loop
    let rafId = 0;
    let start = performance.now();

    const frame = (ts) => {
      const t = (ts - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.update(t);
        p.draw(ctx);
      }

      rafId = requestAnimationFrame(frame);
    };
    rafId = requestAnimationFrame(frame);

    // Resize handling (debounced)
    let resizeTimer = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeCanvas();
        // Adjust auto density when viewport changes
        if (density === "auto") {
          const newAuto = Math.round((width * height) / 45000);
          const newCount = Math.min(60, Math.max(18, newAuto));
          if (newCount !== petals.length) {
            petals = new Array(newCount).fill(0).map(() => new Petal());
          }
        }
      }, 120);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [intensity, density, colors, prefersReducedMotion]);

  if (prefersReducedMotion) return null;
  return <Canvas ref={canvasRef} aria-hidden="true" />;
}