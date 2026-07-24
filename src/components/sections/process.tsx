"use client";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Understand business requirements." },
  { num: "02", title: "Planning", desc: "Architecture and roadmap." },
  { num: "03", title: "Design", desc: "UI/UX prototypes." },
  { num: "04", title: "Development", desc: "Agile implementation." },
  { num: "05", title: "Testing", desc: "Quality Assurance." },
  { num: "06", title: "Deployment", desc: "Production Launch." },
  { num: "07", title: "Maintenance", desc: "Continuous Improvement." },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Development Process</h2>
          <p className="text-lg text-primary-foreground/80">A proven, transparent workflow designed to deliver successful digital products on time and within budget.</p>
        </FadeIn>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-primary-foreground/20">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.15} className="relative">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-background text-primary flex items-center justify-center font-bold text-xl mb-6 shadow-xl border-2 border-transparent group-hover:border-accent transition-colors relative z-10">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
