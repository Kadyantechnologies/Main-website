import Link from "next/link";
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.jpeg" 
                alt="Kadyan Technologies Logo" 
                width={40} 
                height={40} 
                className="h-10 w-auto object-contain rounded-md"
              />
              <span className="font-heading text-xl font-bold tracking-tight text-primary">
                Kadyan Technologies
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs pt-2">
              Building Digital Products That Scale. We help startups and businesses transform ideas into exceptional digital products.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link href="#process" className="text-sm text-muted-foreground hover:text-foreground">Process</Link></li>
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">Mobile App Development</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">Web Development</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">Custom Software</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">AI Solutions</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/kadyantechnologies" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://x.com/kadyantech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <FaXTwitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a href="https://www.instagram.com/kadyantechnologies" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="mailto:saurabhdev@kadyantechnologies.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kadyan Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
