"use client";

import { motion } from "framer-motion";
import { Cpu, Fan, Monitor, Shield } from "lucide-react";

const features = [
  {
    title: "Advanced Cooling",
    description:
      "Hyper-chamber thermal design keeps your system cool under extreme loads.",
    icon: Fan,
    className: "md:col-span-2",
  },
  {
    title: "RTX Graphics",
    description:
      "Powered by NVIDIA GeForce RTX 40 Series for ultimate performance.",
    icon: Cpu,
    className: "md:col-span-1",
  },
  {
    title: "High-Refresh Display",
    description: "165Hz variable refresh rate for buttery smooth gameplay.",
    icon: Monitor,
    className: "md:col-span-1",
  },
  {
    title: "Durable Build",
    description:
      "Military-grade durability testing ensures reliability in any condition.",
    icon: Shield,
    className: "md:col-span-2",
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6 bg-[#050505]" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight"
        >
          Uncompromised
          <br />
          Performance.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ${feature.className}`}
            >
              <feature.icon className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
