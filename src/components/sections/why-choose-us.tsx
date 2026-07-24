"use client";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle } from "lucide-react";

const timeline = [
  { title: "Quality Driven Development", desc: "Every line of code is reviewed, tested, and optimized for performance." },
  { title: "Transparent Workflow", desc: "Full visibility into the development process with regular updates and demos." },
  { title: "Fast Delivery", desc: "Agile methodologies ensure rapid prototyping and quick time-to-market." },
  { title: "Scalable Solutions", desc: "Architecture designed to grow seamlessly with your user base." },
  { title: "Startup Friendly", desc: "Flexible engagement models tailored for startups and growing businesses." },
  { title: "Post Launch Support", desc: "Continuous monitoring, maintenance, and feature enhancements." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <FadeIn className="sticky top-24">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Why Partner With Us?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We go beyond just writing code. We act as your strategic technical partners to ensure your product succeeds in the market.
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:w-2/3">
            <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 pl-8 md:pl-12 space-y-12">
              {timeline.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="relative">
                    <div className="absolute -left-[43px] md:-left-[59px] top-1 bg-background p-1">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
