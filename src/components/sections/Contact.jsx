import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Copy, Check, Loader2 } from "lucide-react";
import { personal } from "../../data/personal";
import { interestOptions } from "../../data/misc";
import Section from "../ui/Section";
import Button from "../ui/Button";

const initialForm = { name: "", email: "", phone: "", interest: interestOptions[0], message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Tell me a bit about your project or goal.";
    return e;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const subject = encodeURIComponent(`Portfolio enquiry — ${form.interest}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested in: ${form.interest}\n\n${form.message}`
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
      setTimeout(() => {
        setStatus("success");
        setForm(initialForm);
      }, 600);
    } catch {
      setStatus("error");
    }
  }

  function copyEmail() {
    navigator.clipboard?.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Section
      id="contact"
      title="Have an idea, project, or learning goal?"
      subtitle="Let's build something meaningful together."
    >
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12">
        <div className="space-y-4">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-4 rounded-2xl border border-base-line bg-base-card/60 p-5 hover:border-signal-cyan/40 transition-colors"
          >
            <span className="p-2.5 rounded-full bg-signal-cyan/10 text-signal-cyan">
              <Mail size={16} />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-ink-faint">Email</p>
              <p className="text-sm text-ink truncate">{personal.email}</p>
            </div>
            <button
              type="button"
              onClick={(evt) => {
                evt.preventDefault();
                copyEmail();
              }}
              aria-label="Copy email"
              className="p-2 text-ink-muted hover:text-signal-cyan"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
            </button>
          </a>

          <a
            href={`https://wa.me/${personal.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-base-line bg-base-card/60 p-5 hover:border-signal-cyan/40 transition-colors"
          >
            <span className="p-2.5 rounded-full bg-signal-violet/10 text-signal-violet">
              <MessageCircle size={16} />
            </span>
            <div>
              <p className="text-xs text-ink-faint">WhatsApp</p>
              <p className="text-sm text-ink">Message me directly</p>
            </div>
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-4 rounded-2xl border border-base-line bg-base-card/60 p-5 hover:border-signal-cyan/40 transition-colors"
          >
            <span className="p-2.5 rounded-full bg-signal-amber/10 text-signal-amber">
              <Phone size={16} />
            </span>
            <div>
              <p className="text-xs text-ink-faint">Phone</p>
              <p className="text-sm text-ink">{personal.phone}</p>
            </div>
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-base-line bg-base-card/60 p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" error={errors.name}>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="input"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="input"
                placeholder="you@example.com"
              />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Phone (optional)">
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="input"
                placeholder="+91 ..."
              />
            </Field>
            <Field label="I'm interested in">
              <select
                value={form.interest}
                onChange={(e) => update("interest", e.target.value)}
                className="input"
              >
                {interestOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Message" error={errors.message}>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={5}
              className="input resize-none"
              placeholder="Tell me about your project, team, or learning goal..."
            />
          </Field>

          <Button as="button" type="submit" icon={false} className="w-full justify-center">
            {status === "sending" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          {status === "success" && (
            <p className="text-sm text-signal-cyan text-center">
              Your email app should have opened — send it across and I'll reply soon.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-xs font-mono text-ink-muted">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
