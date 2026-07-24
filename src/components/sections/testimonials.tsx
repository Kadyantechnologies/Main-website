"use client";
import { FadeIn } from "@/components/ui/fade-in";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechStart Inc",
    content: "Kadyan Technologies delivered beyond our expectations. Their technical expertise and attention to detail transformed our vague concept into a polished, high-performing application.",
  },
  {
    name: "Sarah Williams",
    role: "Founder, EduPlatform",
    content: "Working with them felt like having an in-house engineering team. They were transparent, highly communicative, and delivered the project exactly on schedule.",
  },
  {
    name: "David Chen",
    role: "Product Manager, ScaleSaaS",
    content: "The quality of their code and the scalability of the architecture they designed has saved us hundreds of hours in technical debt. Truly a premium agency experience.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground">Hear what founders and product leaders have to say about working with us.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="bg-card border rounded-3xl p-8 shadow-sm h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-8 flex-grow">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
