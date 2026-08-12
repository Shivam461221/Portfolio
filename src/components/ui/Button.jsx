import { ArrowUpRight } from "lucide-react";

const variants = {
  primary:
    "bg-signal-cyan text-base font-medium hover:shadow-glow hover:-translate-y-0.5",
  secondary:
    "bg-transparent border border-base-line text-ink hover:border-signal-cyan/60 hover:-translate-y-0.5",
  ghost: "bg-transparent text-ink-muted hover:text-signal-cyan",
};

export default function Button({
  as = "a",
  href = "#",
  onClick,
  children,
  variant = "primary",
  icon = true,
  className = "",
  ...rest
}) {
  const Comp = as;
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 ease-out";

  return (
    <Comp
      href={as === "a" ? href : undefined}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon && <ArrowUpRight size={16} strokeWidth={2.2} />}
    </Comp>
  );
}
