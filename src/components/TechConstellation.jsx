import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { constellationNodes } from "../data/skills";

// Deterministic pseudo-random layout so the graph looks organic but is stable across renders.
function layoutNodes(count, width, height) {
  const positions = [];
  const cx = width / 2;
  const cy = height / 2;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + (i % 2 === 0 ? 0.25 : -0.15);
    const radiusX = width * 0.38 * (0.7 + (i % 3) * 0.15);
    const radiusY = height * 0.36 * (0.7 + ((i + 1) % 3) * 0.15);
    positions.push({
      x: cx + Math.cos(angle) * radiusX,
      y: cy + Math.sin(angle) * radiusY,
    });
  }
  return positions;
}

export default function TechConstellation() {
  const width = 560;
  const height = 480;
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const nodes = useMemo(() => {
    const positions = layoutNodes(constellationNodes.length, width, height);
    return constellationNodes.map((label, i) => ({ label, ...positions[i] }));
  }, []);

  const edges = useMemo(() => {
    const list = [];
    nodes.forEach((_, i) => {
      const next = (i + 1) % nodes.length;
      list.push([i, next]);
      if (i % 2 === 0) list.push([i, (i + 3) % nodes.length]);
    });
    return list;
  }, [nodes]);

  function handleMouseMove(e) {
    const rect = containerRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 10, y: py * -10 });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[560px] mx-auto aspect-[560/480] select-none"
      aria-hidden="true"
    >
      <motion.svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full"
        animate={{ rotateX: tilt.y, rotateY: tilt.x }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00E5C7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7C6FFF" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5C7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00E5C7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#edgeGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 + i * 0.05, ease: "easeInOut" }}
          />
        ))}

        {nodes.map((n, i) => (
          <g key={n.label}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="26"
              fill="url(#nodeGlow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="4.5"
              fill="#0E1424"
              stroke={i % 3 === 0 ? "#00E5C7" : "#7C6FFF"}
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            />
            <motion.text
              x={n.x}
              y={n.y - 14}
              textAnchor="middle"
              className="font-mono"
              fontSize="11"
              fill="#8B93AC"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
            >
              {n.label}
            </motion.text>
          </g>
        ))}
      </motion.svg>
    </div>
  );
}
