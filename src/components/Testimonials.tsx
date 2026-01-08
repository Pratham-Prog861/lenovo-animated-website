"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The thermal management is absolute wizardry. It stays cool even during 4K rendering.",
    author: "TechReviewer",
    role: "Senior Editor",
  },
  {
    quote:
      "A masterpiece of engineering. The build quality feels incredibly premium.",
    author: "GamingDaily",
    role: "Hardware Specialist",
  },
  {
    quote:
      "Finally, a gaming laptop that doesn't look like a toy. Sleek, powerful, perfect.",
    author: "DesignWeekly",
    role: "Creative Director",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-32 px-6 bg-[#050505] border-t border-white/5"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight text-center"
        >
          Verified Excellence.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-linear-to-b from-white/5 to-transparent border border-white/10"
            >
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                &quot;{t.quote}&quot;
              </p>
              <div>
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-sm text-white/40">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
