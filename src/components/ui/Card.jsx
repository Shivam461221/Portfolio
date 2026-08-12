// import { motion } from "framer-motion";

// export function Card({ children, className = "", hover = true, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ duration: 0.5, delay, ease: "easeOut" }}
//       className={`rounded-2xl border border-base-line bg-base-card/60 backdrop-blur-sm p-6 md:p-8 ${
//         hover ? "transition-all duration-300 hover:border-signal-cyan/40 hover:-translate-y-1" : ""
//       } ${className}`}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export function Tag({ children, className = "" }) {
//   return (
//     <span
//       className={`inline-block font-mono text-xs px-2.5 py-1 rounded-md border border-base-line text-ink-muted ${className}`}
//     >
//       {children}
//     </span>
//   );
// }

import { motion } from "framer-motion";
import { useRef } from "react";

export function Card({ children, className = "", hover = true, delay = 0 }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={hover ? handleMouseMove : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-base-line bg-base-card/60 backdrop-blur-sm p-6 md:p-8 ${
        hover ? "transition-all duration-300 hover:border-signal-cyan/40 hover:-translate-y-1" : ""
      } ${className}`}
    >
      {hover && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(0,229,199,0.16), rgba(124,111,255,0.06) 45%, transparent 70%)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-block font-mono text-xs px-2.5 py-1 rounded-md border border-base-line text-ink-muted ${className}`}
    >
      {children}
    </span>
  );
}
