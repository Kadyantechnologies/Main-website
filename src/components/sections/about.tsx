"use client";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Engineering Products That Matter.
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="space-y-8 text-primary-foreground/90 text-lg leading-relaxed">
            <p>
              Kadyan Technologies is a premium software development company focused on building scalable, user-centric digital products. 
            </p>
            <p>
              We partner with startups and businesses globally to deliver mobile apps, web platforms, AI-powered solutions, and custom software that solve real business problems and drive measurable growth.
            </p>
            <div className="pt-4 border-t border-primary-foreground/20">
              <Button variant="secondary" size="lg" className="h-12 px-8 font-semibold">
                Learn More About Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
