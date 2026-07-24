"use client";
import { FadeIn } from "@/components/ui/fade-in";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const channels = [
  {
    label: "WhatsApp / Call",
    description: "Chat or call us directly — we respond fast.",
    detail: "+91 9053416957",
    href: "https://wa.me/919053416957",
    icon: MessageCircle,
    colorClass: "bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366]",
    buttonLabel: "Message on WhatsApp",
    buttonClass: "bg-[#25D366] hover:bg-[#1ebe57] text-white",
  },
  {
    label: "Email",
    description: "Drop us an email anytime and we'll get back within 24h.",
    detail: "saurabhdev@kadyantechnologies.com",
    href: "mailto:saurabhdev@kadyantechnologies.com",
    icon: Mail,
    colorClass: "bg-accent/10 text-accent group-hover:bg-accent",
    buttonLabel: "Send an Email",
    buttonClass: "bg-accent hover:bg-accent/80 text-white",
  },
  {
    label: "LinkedIn",
    description: "Connect with us professionally on LinkedIn.",
    detail: "Kadyan Technologies",
    href: "https://www.linkedin.com/company/kadyantechnologies",
    icon: FaLinkedin,
    colorClass: "bg-[#0A66C2]/10 text-[#0A66C2] group-hover:bg-[#0A66C2]",
    buttonLabel: "Connect on LinkedIn",
    buttonClass: "bg-[#0A66C2] hover:bg-[#0A66C2]/80 text-white",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Let&apos;s Build Something <span className="text-primary">Amazing</span> Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your idea into reality? Reach out directly through any of our channels — we&apos;re here to help you get started.
          </p>
        </FadeIn>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {channels.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <FadeIn key={ch.label} delay={i * 0.1}>
                <a
                  href={ch.href}
                  target={ch.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-background border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:text-white ${ch.colorClass}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold font-heading mb-2">{ch.label}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{ch.description}</p>
                  <p className="text-sm font-medium text-foreground mb-6 break-all">{ch.detail}</p>

                  {/* Button */}
                  <span className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${ch.buttonClass}`}>
                    {ch.buttonLabel}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
