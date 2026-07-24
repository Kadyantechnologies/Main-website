"use client";
import { FadeIn } from "@/components/ui/fade-in";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "ApnaHisab",
    category: "Personal Finance",
    description: "India's Privacy-First Personal Finance App that helps users track expenses, manage budgets, and gain financial insights while keeping their data private.",
    features: ["Expense Tracking", "Budget Management", "Analytics Dashboard", "Secure Data"],
    technology: ["Flutter", "Firebase", "Material Design"],
    status: "Live Product",
    image: "https://placehold.co/800x600/2563EB/ffffff?text=ApnaHisab+App", // Placeholder
    link: "https://apnahisab-kadyan-technologies.vercel.app/"
  },
  {
    title: "Klasora",
    category: "Education Technology",
    description: "A modern education platform designed to simplify learning, classroom management, student engagement, and digital education experiences.",
    features: ["Student Dashboard", "Teacher Portal", "Course Management", "Assignments"],
    technology: ["Flutter", "Firebase", "REST APIs"],
    status: "In Development",
    image: "https://placehold.co/800x600/F97316/ffffff?text=Klasora+Platform", // Placeholder
    link: "https://klasora.kadyantechnologies.com/"
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">Explore some of our recent work that demonstrates our technical capabilities and design approach.</p>
        </FadeIn>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <FadeIn className="w-full lg:w-1/2" direction={index % 2 === 0 ? "right" : "left"}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur text-foreground text-xs font-semibold rounded-full shadow-sm">
                      {project.status}
                    </span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn className="w-full lg:w-1/2 space-y-6" delay={0.2} direction={index % 2 === 0 ? "left" : "right"}>
                <div>
                  <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technology.map((tech, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-md border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "default", className: "group" })}>
                    View Project <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </FadeIn>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
