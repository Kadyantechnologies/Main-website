import { Hero } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ProcessSection } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <ProcessSection />
      <TechStack />
      <Testimonials />
      <FAQ />
      <AboutSection />
      <ContactSection />
    </>
  );
}
