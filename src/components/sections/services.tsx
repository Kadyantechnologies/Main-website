"use client";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Monitor, Code, BrainCircuit, PenTool, TestTube } from "lucide-react";

const services = [
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that offer seamless user experiences.",
    icon: Smartphone,
    tags: ["Flutter", "Android", "iOS", "Cross Platform"],
  },
  {
    title: "Web Development",
    description: "High-performance, responsive web applications built with modern frameworks.",
    icon: Monitor,
    tags: ["React", "Next.js", "Node.js", "Full Stack"],
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to solve your specific business challenges.",
    icon: Code,
    tags: ["ERP", "CRM", "Business Automation", "Admin Panels"],
  },
  {
    title: "AI Solutions",
    description: "Intelligent systems that automate processes and provide actionable insights.",
    icon: BrainCircuit,
    tags: ["OpenAI", "LLM Integration", "AI Chatbots", "Automation"],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive conversions.",
    icon: PenTool,
    tags: ["Modern Interfaces", "Wireframes", "Prototypes"],
  },
  {
    title: "QA & Testing",
    description: "Rigorous testing to ensure your software is bug-free, secure, and performs flawlessly.",
    icon: TestTube,
    tags: ["Manual Testing", "Automation", "Performance", "Regression"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive software engineering solutions tailored to your unique business needs.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button variant="outline">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative bg-card/50 backdrop-blur-sm border rounded-3xl p-8 hover:bg-card hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] -z-10 transition-all duration-500 group-hover:scale-110"></div>
                
                <div className="w-14 h-14 bg-background border rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-primary font-semibold mt-auto group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
