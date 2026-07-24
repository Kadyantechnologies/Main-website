"use client";
import { FadeIn } from "@/components/ui/fade-in";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Calendar, MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // We allow the form to submit to the target="_blank"
    // And we just update the UI state locally
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to transform your idea into reality? Fill out the form or reach out directly through any of our channels.
            </p>

            <div className="space-y-6">
              <a href="https://wa.me/919053416957" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-background rounded-2xl border hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp / Call</h4>
                  <p className="text-sm text-muted-foreground">+91 9053416957</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/company/kadyantechnologies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-background rounded-2xl border hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">LinkedIn</h4>
                  <p className="text-sm text-muted-foreground">Kadyan Technologies</p>
                </div>
              </a>

              <a href="mailto:saurabhdev@kadyantechnologies.com" className="flex items-center gap-4 p-4 bg-background rounded-2xl border hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground text-wrap break-all">saurabhdev@kadyantechnologies.com</p>
                </div>
              </a>

            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-background border shadow-xl rounded-3xl p-8 lg:p-10 min-h-[500px] flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto text-green-500 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold font-heading">Message Sent!</h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.
                </p>
                <Button variant="outline" className="mt-8" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
            <form action="https://formsubmit.co/saurabhdev@kadyantechnologies.com" method="POST" target="_blank" onSubmit={handleSubmit} className="space-y-6">
              {/* Optional FormSubmit configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Website Consultation Request!" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required placeholder="John Doe" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Acme Inc." className="h-12" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" required placeholder="saurabhdev@kadyantechnologies.com" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+91 9053416957" className="h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Project Budget</Label>
                <select id="budget" name="budget" defaultValue="" className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                  <option value="" disabled className="bg-background text-foreground">Select an estimated budget</option>
                  <option value="10k-25k" className="bg-background text-foreground">$10,000 - $25,000</option>
                  <option value="25k-50k" className="bg-background text-foreground">$25,000 - $50,000</option>
                  <option value="50k-100k" className="bg-background text-foreground">$50,000 - $100,000</option>
                  <option value="100k+" className="bg-background text-foreground">$100,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Description</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  required
                  placeholder="Tell us about your project, goals, and timeline..." 
                  className="min-h-[120px] resize-none" 
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button type="submit" size="lg" disabled={isSubmitting} className="h-12 flex-1 disabled:opacity-50">
                  <Send className={`mr-2 h-4 w-4 ${isSubmitting ? 'animate-pulse' : ''}`} /> 
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                <a href="https://wa.me/919053416957" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 flex-1" })}>
                  <Calendar className="mr-2 h-4 w-4" /> Schedule Consultation
                </a>
              </div>
            </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
