"use client";
import { useTransitionState } from "next-transition-router";
import { useEffect, useRef } from "react";

const LAYERS = [
  { color: "#052638", offsetY: 65, amp: 18, freq: 1.3, speed: 0.8 },
  { color: "#073B57", offsetY: 45, amp: 24, freq: 1.6, speed: 1.2 },
  { color: "#0A5C7A", offsetY: 26, amp: 30, freq: 1.9, speed: 1.7 },
  { color: "#0E85A0", offsetY: 9, amp: 28, freq: 2.2, speed: 2.2 },
  { color: "#1AA3BE", offsetY: -8, amp: 22, freq: 2.6, speed: 2.8 },
  { color: "#2BBDD6", offsetY: -22, amp: 16, freq: 3.0, speed: 3.4 },
];

const DURATION = 1000;

function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const SEGMENTS = 60;

function drawWave(ctx, W, H, waveY, amp, freq, phase) {
  ctx.beginPath();
  for (let i = 0; i <= SEGMENTS; i++) {
    const x = (i / SEGMENTS) * W;
    const t = i / SEGMENTS;
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
  const startLoopRef = useRef(null);
  const animRef = useRef({
    raf: null,
    phase: "idle",
    startTs: null,
  });

  useEffect(() => {
    const a = animRef.current;
    if (stage === "leaving") {
      // Waves rise to cover the screen.
      a.phase = "in";
      a.startTs = null;
    } else if (stage === "entering") {
      // Hold a fully-covered (solid) screen while the new page mounts.
      a.phase = "covered";
    } else if (stage === "none" && a.phase === "covered") {
      // The new page has mounted and the cover delay elapsed: reveal it.
      a.phase = "out";
      a.startTs = null;
    }
    // Wake the render loop only while a transition is active; it parks itself
    // back to idle (no rAF) once the animation finishes, so it doesn't burn
    // frames the rest of the time.
    if (a.phase !== "idle") startLoopRef.current?.();
  }, [stage]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = Math.round(window.innerWidth);
      canvas.height = Math.round(window.innerHeight);
    }
    resize();
    window.addEventListener("resize", resize);

    function startLoop() {
      const a = animRef.current;
      if (a.raf == null) a.raf = requestAnimationFrame(tick);
    }
    startLoopRef.current = startLoop;

    function tick(ts) {
      const a = animRef.current;
      const W = canvas.width;
      const H = canvas.height;

      if (a.phase === "idle") {
        // Nothing to animate: stop the loop entirely until the next transition.
        a.raf = null;
        return;
      }

      if (a.phase === "covered") {
        ctx.fillStyle = LAYERS[0].color;
        ctx.fillRect(0, 0, W, H);
        a.raf = requestAnimationFrame(tick);
        return;
      }

      if (a.startTs == null) a.startTs = ts;
      const elapsed = ts - a.startTs;
      const raw = Math.min(elapsed / DURATION, 1);
      const time = ts / 1000;

      ctx.clearRect(0, 0, W, H);

      if (a.phase === "in") {
        const PUSH_UP = 100; // Costante per spingere le onde oltre il bordo superiore
        const lead = LAYERS[LAYERS.length - 1];
        const leadP = ease(Math.max(0, Math.min((raw - (LAYERS.length - 1) * 0.08) / (1 - (LAYERS.length - 1) * 0.08), 1)));

        // Il target Y di fine animazione è 100px più in alto
        const targetLeadY = lead.offsetY - PUSH_UP;
        const coverY = H + 80 - leadP * (H + 80 - targetLeadY);

        ctx.fillStyle = LAYERS[0].color;
        ctx.fillRect(0, Math.max(0, coverY), W, H - Math.max(0, coverY));

        [...LAYERS].reverse().forEach((layer, i) => {
          const ri = LAYERS.length - 1 - i;
          const delay = ri * 0.08;
          const span = 1 - delay;
          const p = ease(Math.max(0, Math.min((raw - delay) / span, 1)));

          // Anche per le singole onde, spingiamo l'obiettivo più su
          const targetY = layer.offsetY - PUSH_UP;
          const waveY = H + 80 - p * (H + 80 - targetY);

          ctx.fillStyle = layer.color;
          drawWave(ctx, W, H, waveY, layer.amp * 1.8 * (1 - p * 0.15), layer.freq, time * layer.speed);
        });

        if (raw >= 1) {
          ctx.fillStyle = LAYERS[0].color;
          ctx.fillRect(0, 0, W, H);
          a.phase = "covered";
        }

      } else if (a.phase === "out") {
        const PUSH_UP = 100;

        [...LAYERS].reverse().forEach((layer, i) => {
          // Invertiamo il ritardo: l'onda più scura cade giù subito, trascinando le altre.
          const ri = LAYERS.length - 1 - i;
          const delay = ri * 0.08;
          const span = 1 - delay;
          const p = ease(Math.max(0, Math.min((raw - delay) / span, 1)));

          // Riprendiamo la posizione "fuori schermo" esatta in cui avevamo lasciato le onde
          const startY = layer.offsetY - PUSH_UP;
          const waveY = startY + p * (H + 150 - startY); // Le spingiamo fino a H+150 per farle sparire sotto

          ctx.fillStyle = layer.color;
          drawWave(ctx, W, H, waveY, layer.amp * 1.8 * (1 - p * 0.25), layer.freq, time * layer.speed);
        });

        if (raw >= 1) {
          ctx.clearRect(0, 0, W, H);
          a.phase = "idle";
        }
      }

      a.raf = requestAnimationFrame(tick);
    }

    // Kick off only if a transition is already in flight on mount; otherwise
    // stay parked and let the stage effect wake the loop on demand.
    if (animRef.current.phase !== "idle") startLoop();

    return () => {
      window.removeEventListener("resize", resize);
      startLoopRef.current = null;
      const { raf } = animRef.current;
      if (raf) cancelAnimationFrame(raf);
      animRef.current.raf = null;
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