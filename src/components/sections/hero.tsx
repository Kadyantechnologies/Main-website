"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Globe, Smartphone, Cloud } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mb-6">
                Premium Software Engineering Agency
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-6">
                Build Software That <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Powers Business Growth.
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Kadyan Technologies helps startups and businesses build scalable mobile apps, web platforms, AI-powered solutions, and custom software with a quality-first engineering approach.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#contact" className={buttonVariants({ variant: "default", size: "lg", className: "h-12 px-8 text-base group" })}>
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#projects" className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-8 text-base" })}>
                View Our Work
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.4} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t">
              <div>
                <h4 className="text-3xl font-bold text-foreground">50+</h4>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-foreground">100%</h4>
                <p className="text-sm text-muted-foreground mt-1">Quality Focus</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-foreground">Next-Gen</h4>
                <p className="text-sm text-muted-foreground mt-1">Technologies</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-foreground">2x</h4>
                <p className="text-sm text-muted-foreground mt-1">Faster Delivery</p>
              </div>
            </FadeIn>
          </div>
          
          {/* Animated Illustration Side */}
          <div className="relative h-[500px] lg:h-[600px] w-full hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Central Glowing Orb */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-64 h-64 bg-primary/30 rounded-full blur-3xl"
              />
              
              {/* Floating UI Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-card border shadow-xl rounded-2xl p-4 w-48 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg"><Code2 className="h-5 w-5 text-primary" /></div>
                  <span className="font-semibold text-sm">Clean Code</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full mt-2"></div>
                <div className="h-2 w-2/3 bg-muted rounded-full mt-2"></div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 bg-card border shadow-xl rounded-2xl p-4 w-52 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg"><Cpu className="h-5 w-5 text-accent" /></div>
                  <span className="font-semibold text-sm">AI Integration</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <div className="h-6 w-16 bg-muted rounded-md"></div>
                  <div className="h-6 w-16 bg-muted rounded-md"></div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-card border shadow-xl rounded-2xl p-4 w-44 backdrop-blur-sm"
              >
                 <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg"><Cloud className="h-5 w-5 text-green-500" /></div>
                  <span className="font-semibold text-sm">Cloud Native</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-1/4 right-0 bg-card border shadow-xl rounded-2xl p-4 w-48 backdrop-blur-sm"
              >
                 <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg"><Smartphone className="h-5 w-5 text-purple-500" /></div>
                  <span className="font-semibold text-sm">Mobile Apps</span>
                </div>
              </motion.div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
