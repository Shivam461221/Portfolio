import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 px-6 md:px-12 lg:px-20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14 md:mb-16"
          >
            {eyebrow && (
              <span className="font-mono text-sm text-signal-cyan tracking-tight">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-ink leading-tight max-w-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-ink-muted max-w-2xl text-base md:text-lg">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
