"use client";
import { useTransitionState } from "next-transition-router";
import { useEffect, useRef } from "react";

const LAYERS = [
  { color: "#052638", offsetY: 65, amp: 18, freq: 1.3, speed: 0.8 },
  { color: "#073B57", offsetY: 45, amp: 24, freq: 1.6, speed: 1.2 },
  { color: "#0A5C7A", offsetY: 26, amp: 30, freq: 1.9, speed: 1.7 },
  { color: "#0E85A0", offsetY:  9, amp: 28, freq: 2.2, speed: 2.2 },
  { color: "#1AA3BE", offsetY: -8, amp: 22, freq: 2.6, speed: 2.8 },
  { color: "#2BBDD6", offsetY:-22, amp: 16, freq: 3.0, speed: 3.4 },
];

const DURATION = 1000;

function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function drawWave(ctx, W, H, waveY, amp, freq, phase) {
  ctx.beginPath();
  for (let i = 0; i <= 100; i++) {
    const x = (i / 100) * W;
    const t = i / 100;
    const y =
      waveY +
      Math.sin(t * Math.PI * 2 * freq + phase) * amp +
      Math.sin(t * Math.PI * 2 * freq * 1.7 + phase * 1.3) * amp * 0.38 +
      Math.sin(t * Math.PI * 2 * freq * 0.6 + phase * 0.7) * amp * 0.22;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.lineTo(W, H + 2);
  ctx.lineTo(0, H + 2);
  ctx.closePath();
  ctx.fill();
}

export default function WaveOverlay() {
  const { stage } = useTransitionState();
  const canvasRef = useRef(null);
  const animRef = useRef({
    raf: null,
    phase: "idle",
    startTs: null,
  });

  useEffect(() => {
    const a = animRef.current;
    if (stage === "leaving") {
      a.phase = "in";
      a.startTs = null;
    } else if (stage === "entering") {
      a.phase = "out";
      a.startTs = null;
    }
  }, [stage]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function tick(ts) {
      const a = animRef.current;
      const W = canvas.width;
      const H = canvas.height;

      if (a.phase === "idle") {
        a.raf = requestAnimationFrame(tick);
        return;
      }

      if (a.phase === "covered") {
        ctx.fillStyle = LAYERS[0].color;
        ctx.fillRect(0, 0, W, H);
        a.raf = requestAnimationFrame(tick);
        return;
      }

      if (!a.startTs) a.startTs = ts;
      const elapsed = ts - a.startTs;
      const raw = Math.min(elapsed / DURATION, 1);
      const time = ts / 1000;

      ctx.clearRect(0, 0, W, H);

      if (a.phase === "in") {
        // Waves rise bottom → top to cover the screen
        [...LAYERS].reverse().forEach((layer, i) => {
          const ri = LAYERS.length - 1 - i;
          const delay = ri * 0.08;
          const span = 1 - delay;
          const p = ease(Math.max(0, Math.min((raw - delay) / span, 1)));
          const waveY = H + 80 - p * (H + 80 - layer.offsetY);
          ctx.fillStyle = layer.color;
          drawWave(ctx, W, H, waveY, layer.amp * 1.8 * (1 - p * 0.15), layer.freq, time * layer.speed);
        });

        if (raw >= 1) {
          ctx.fillStyle = LAYERS[0].color;
          ctx.fillRect(0, 0, W, H);
          a.phase = "covered";
        }

      } else if (a.phase === "out") {
        // Waves sweep top → bottom to reveal the new screen.
        // Reverse so the lightest (topmost) layer leads the exit first.
        [...LAYERS].reverse().forEach((layer, i) => {
          const delay = i * 0.08;
          const span = 1 - delay;
          const p = ease(Math.max(0, Math.min((raw - delay) / span, 1)));
          // Move waveY downward from its resting position to below the screen
          const waveY = layer.offsetY + p * (H + 100 - layer.offsetY);
          ctx.fillStyle = layer.color;
          drawWave(ctx, W, H, waveY, layer.amp * 1.8 * (1 - p * 0.25), layer.freq, time * layer.speed);
        });

        if (raw >= 1) {
          canvas.style.transition = "opacity 0.18s ease";
          canvas.style.opacity = "0";
          setTimeout(() => {
            ctx.clearRect(0, 0, W, H);
            canvas.style.transition = "";
            canvas.style.opacity = "1";
            a.phase = "idle";
          }, 200);
        }
      }

      a.raf = requestAnimationFrame(tick);
    }

    animRef.current.raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      const { raf } = animRef.current;
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}