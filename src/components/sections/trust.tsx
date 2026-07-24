"use client";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2, HeartHandshake, ShieldCheck, Zap, Scale, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    title: "Quality-First Engineering",
    description: "We follow industry best practices, write clean code, and ensure every product is rigorously tested.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Communication",
    description: "No hidden costs or technical jargon. We keep you updated at every stage of the development process.",
    icon: HeartHandshake,
  },
  {
    title: "Agile Development",
    description: "Iterative delivery allows us to adapt to changes quickly and deliver value faster.",
    icon: Zap,
  },
  {
    title: "Scalable Architecture",
    description: "We build systems designed to handle growth, ensuring your software scales with your business.",
    icon: Scale,
  },
  {
    title: "Long-Term Partnership",
    description: "We're not just an agency; we act as your dedicated technical partner for long-term success.",
    icon: CheckCircle2,
  },
  {
    title: "Dedicated Support",
    description: "Comprehensive post-launch support and maintenance to keep your product running smoothly.",
    icon: HeadphonesIcon,
  },
];

export function TrustSection() {
  return (
    <section className="py-24 bg-muted/50 border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Why Businesses Choose Kadyan Technologies</h2>
          <p className="text-lg text-muted-foreground">We combine technical excellence with business acumen to deliver products that drive real results.</p>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <reason.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
