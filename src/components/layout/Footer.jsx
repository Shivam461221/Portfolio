import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../ui/BrandIcons";
import { personal } from "../../data/personal";
import { navLinks } from "../../data/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-base-line px-6 md:px-12 lg:px-20 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <a href="#home" className="font-display font-semibold text-xl text-ink">
              SL<span className="text-signal-cyan">.</span>dev
            </a>
            <p className="mt-3 text-ink-muted text-sm max-w-xs">
              {personal.roles.join(" • ")}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {personal.social.github && (
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-full border border-base-line text-ink-muted hover:text-signal-cyan hover:border-signal-cyan/40 transition-colors"
                >
                  <GithubIcon size={16} />
                </a>
              )}
              
              {personal.social.linkedin && (
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-full border border-base-line text-ink-muted hover:text-signal-cyan hover:border-signal-cyan/40 transition-colors"
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
               {personal.social.instagram && (
                <a
                  href={personal.social.instagram}
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-full border border-base-line text-ink-muted hover:text-signal-cyan hover:border-signal-cyan/40 transition-colors"
                >
                  <InstagramIcon size={16} />
                </a>
              )}
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="p-2.5 rounded-full border border-base-line text-ink-muted hover:text-signal-cyan hover:border-signal-cyan/40 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 font-mono text-sm">
            <div>
              <p className="text-ink-faint mb-3 text-xs uppercase tracking-wider">Navigate</p>
              <ul className="space-y-2">
                {navLinks.slice(0, 5).map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-ink-muted hover:text-signal-cyan transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-ink-faint mb-3 text-xs uppercase tracking-wider">More</p>
              <ul className="space-y-2">
                {navLinks.slice(5).map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-ink-muted hover:text-signal-cyan transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={personal.resumeUrl} className="text-ink-muted hover:text-signal-cyan transition-colors">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-ink-faint mb-3 text-xs uppercase tracking-wider">Contact</p>
              <ul className="space-y-2 text-ink-muted">
                <li>{personal.email}</li>
                <li>{personal.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-base-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-faint text-xs font-mono">
            © {year} {personal.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-1.5 text-xs font-mono text-ink-muted hover:text-signal-cyan transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
