import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { constellationNodes } from "../data/skills";

// Original hero visual: a cluster of glassmorphic cards floating at
// different depths, bobbing independently, with a subtle mouse-parallax
// tilt so nearer cards drift more than farther ones.

const ACCENTS = ["#00E5C7", "#7C6FFF", "#FFB454"];

const LAYOUT = [
  { x: -170, y: -95, size: 116, depth: 1, rotate: -6 },
  { x: 55, y: -145, size: 98, depth: 0.55, rotate: 4 },
  { x: 195, y: -25, size: 124, depth: 1, rotate: 5 },
  { x: -95, y: 55, size: 104, depth: 0.75, rotate: -3 },
  { x: 135, y: 120, size: 96, depth: 0.5, rotate: 6 },
  { x: -195, y: 130, size: 90, depth: 0.4, rotate: -8 },
  { x: 5, y: 5, size: 130, depth: 1.15, rotate: 0 },
];

export default function TechCards() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const cards = useMemo(
    () =>
      constellationNodes.slice(0, LAYOUT.length).map((label, i) => ({
        label,
        accent: ACCENTS[i % ACCENTS.length],
        ...LAYOUT[i],
      })),
    []
  );

  function handleMove(e) {
    const rect = containerRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px, y: py });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full max-w-[520px] mx-auto aspect-square"
      style={{ perspective: "1200px" }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-signal-cyan/10 blur-[110px]" />
      <div className="absolute inset-0 rounded-full bg-signal-violet/10 blur-[110px] translate-x-10 translate-y-6" />

      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        {cards.map((card, i) => (
          <div
            key={card.label}
            className="absolute top-1/2 left-1/2 transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(calc(-50% + ${card.x + tilt.x * 46 * card.depth}px), calc(-50% + ${
                card.y + tilt.y * 46 * card.depth
              }px), ${card.depth * 40}px)`,
              zIndex: Math.round(card.depth * 10),
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: i * 0.08 },
                scale: { duration: 0.6, delay: i * 0.08 },
                y: {
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                },
              }}
            >
              <div
                className="group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border backdrop-blur-xl overflow-hidden"
                style={{
                  width: card.size,
                  height: card.size,
                  transform: `rotate(${card.rotate}deg)`,
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))",
                  borderColor: `${card.accent}33`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.35), 0 0 24px -8px ${card.accent}55`,
                }}
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-70"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.12), transparent)",
                  }}
                />
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: card.accent, boxShadow: `0 0 10px ${card.accent}` }}
                />
                <span className="font-mono text-[11px] text-ink text-center px-2 leading-tight">
                  {card.label}
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}