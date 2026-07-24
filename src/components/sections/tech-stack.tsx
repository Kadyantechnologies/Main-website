"use client";
import { FadeIn } from "@/components/ui/fade-in";
import { 
  SiNextdotjs, SiReact, SiVuedotjs, SiTailwindcss, SiNodedotjs, 
  SiPython, SiFirebase, SiMongodb, SiPostgresql, SiDocker
} from "react-icons/si";
import { FaAws, FaGoogle, FaRobot, FaMobileAlt } from "react-icons/fa";

const technologies = [
  { name: "Flutter", icon: FaMobileAlt },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Firebase", icon: SiFirebase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: FaAws },
  { name: "Google Cloud", icon: FaGoogle },
  { name: "OpenAI", icon: FaRobot },
];

export function TechStack() {
  return (
    <section className="py-24 bg-muted/30 border-y overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Modern Technology Stack</h2>
          <p className="text-muted-foreground">We use industry-leading tools to build robust and scalable solutions.</p>
        </FadeIn>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          {technologies.map((tech, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <tech.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
