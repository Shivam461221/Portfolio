import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";
import Section from "../ui/Section";
import { Card } from "../ui/Card";
import TechOrbit from "../TechOrbit";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="The technology ecosystem I work in"
      subtitle="Grouped by where each piece sits in a real application — hover a node to see what it is."
    >
      <div className="mb-16">
        <TechOrbit />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map((group, gi) => (
          <Card key={group.id} delay={gi * 0.08}>
            {/* <p className="font-mono text-xs text-signal-cyan">{group.tag}</p> */}
            <h3 className="mt-2 font-display text-lg text-ink font-semibold">{group.label}</h3>
            <div className="mt-5 flex flex-col gap-2.5">
              {group.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.08 + i * 0.04 }}
                  className="flex items-center gap-2 text-sm text-ink-muted"
                >
                  <span className="w-1 h-1 rounded-full bg-signal-violet" />
                  {item}
                </motion.div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
