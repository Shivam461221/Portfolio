import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/nav";
import { personal } from "../../data/personal";
import Button from "../ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <nav
          className={`flex items-center justify-between rounded-2xl border transition-all duration-300 px-4 md:px-5 ${
            scrolled
              ? "bg-base-elevated/85 backdrop-blur-md border-base-line py-2.5 shadow-lg shadow-black/20"
              : "bg-transparent border-transparent py-2"
          }`}
        >
          <a href="#home" className="font-display font-semibold text-ink text-lg tracking-tight">
            SL<span className="text-signal-cyan">.</span>dev
          </a>

          <ul className="hidden lg:flex items-center gap-1 font-mono text-[13px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition-colors duration-200 border ${
                    active === link.href
                      ? "text-signal-cyan border-signal-cyan/30 bg-signal-cyan/5"
                      : "text-ink-muted border-transparent hover:text-ink"
                  }`}
                >
                  {link.path}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#contact" variant="primary" className="!px-5 !py-2.5 text-xs">
              Hire Me
            </Button>
          </div>

          <button
            className="lg:hidden text-ink p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-6 mt-2 rounded-2xl border border-base-line bg-base-elevated/95 backdrop-blur-md p-5"
          >
            <ul className="flex flex-col gap-1 font-mono text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg ${
                      active === link.href ? "text-signal-cyan bg-signal-cyan/5" : "text-ink-muted"
                    }`}
                  >
                    {link.path}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-base-line flex flex-col gap-2">
              <Button href="#contact" onClick={() => setOpen(false)} className="justify-center">
                Hire Me
              </Button>
              <Button
                href={personal.resumeUrl}
                variant="secondary"
                onClick={() => setOpen(false)}
                className="justify-center"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
