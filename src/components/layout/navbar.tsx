"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const routes = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.jpeg" 
                alt="Kadyan Technologies Logo" 
                width={40} 
                height={40} 
                className="h-10 w-auto object-contain rounded-sm"
              />
              <span className="font-heading text-xl font-bold tracking-tight text-primary">
                Kadyan Technologies
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="#contact" className={buttonVariants({ variant: "default" })}>
              Book a Free Consultation
            </Link>
          </div>

          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-foreground"
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t">
              <Link href="#contact" onClick={() => setIsOpen(false)} className={buttonVariants({ variant: "default", className: "w-full" })}>
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
