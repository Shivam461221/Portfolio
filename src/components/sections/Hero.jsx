// import { motion } from "framer-motion";
// import { Download } from "lucide-react";
// import { personal } from "../../data/personal";
// import Button from "../ui/Button";
// import TechConstellation from "../TechConstellation";
// import TechCards from "../TechCards";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
//       <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-signal-violet/10 rounded-full blur-[100px]" />
//       <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-signal-cyan/10 rounded-full blur-[100px]" />

//       <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full">
//         <div>
//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-flex items-center gap-2 font-mono text-xs text-signal-cyan border border-signal-cyan/25 rounded-full px-3 py-1.5 mb-6"
//           >
//             <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan animate-pulse" />
//             available for work &amp; training
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink"
//           >
//             {personal.name}
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="mt-4 font-mono text-sm md:text-base text-signal-violet"
//           >
//             {personal.roles.join(" • ")}
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="mt-6 text-ink-muted text-base md:text-lg max-w-xl leading-relaxed"
//           >
//             {personal.heroSubline}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.4 }}
//             className="mt-9 flex flex-wrap items-center gap-4"
//           >
//             <Button href="#projects">View My Work</Button>
//             <Button href="#contact" variant="secondary">
//               Hire Me
//             </Button>
//             <Button href={personal.resumeUrl} variant="ghost" icon={false} className="!px-2">
//               <Download size={16} /> Download Resume
//             </Button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-6 max-w-l"
//           >
//             {personal.stats.map((s) => (
//               <div key={s.label}>
//                 <p className="font-display text-xl md:text-2xl text-ink font-semibold">{s.value}</p>
//                 <p className="text-xs text-ink-faint mt-1">{s.label}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="hidden md:block">
//           <TechConstellation />
//           {/* <TechCards/> */}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { personal } from "../../data/personal";
import Button from "../ui/Button";
import TechConstellation from "../TechConstellation";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (event) => {
      setIsDesktop(event.matches);
    };

    // Initial value
    setIsDesktop(mediaQuery.matches);

    // Listen for resize/orientation changes
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isDesktop;
}

export default function Hero() {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-signal-violet/10 rounded-full blur-[100px]" />

      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-signal-cyan/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full">
        <div>
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-signal-cyan border border-signal-cyan/25 rounded-full px-3 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal-cyan animate-pulse" />
            available for work &amp; training
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink"
          >
            {personal.name}
          </motion.h1>

          {/* Roles */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-mono text-sm md:text-base text-signal-violet"
          >
            {personal.roles.join(" • ")}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-ink-muted text-base md:text-lg max-w-xl leading-relaxed"
          >
            {personal.heroSubline}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects">
              View My Work
            </Button>

            <Button href="#contact" variant="secondary">
              Hire Me
            </Button>

            <Button
              href={personal.resumeUrl}
              variant="ghost"
              icon={false}
              className="!px-2"
            >
              <Download size={16} />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-6 max-w-xl"
          >
            {personal.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-xl md:text-2xl text-ink font-semibold">
                  {s.value}
                </p>

                <p className="text-xs text-ink-faint mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP / TABLET ONLY
            TechConstellation is NOT mounted on mobile.
            ===================================================== */}

        {isDesktop && (
          <div>
            <TechConstellation />
          </div>
        )}
      </div>
    </section>
  );
}