"use client";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does development take?",
    a: "The timeline depends on the project's complexity and scope. A typical MVP takes 8-12 weeks, while more complex enterprise applications can take 4-6 months. We provide a detailed timeline during the discovery phase."
  },
  {
    q: "How do we start?",
    a: "It starts with a free consultation where we discuss your vision. If we're a good fit, we move into the Discovery & Planning phase to define architecture, design, and project roadmap before development begins."
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with startups and businesses globally. We overlap our working hours to ensure seamless communication and regular syncs regardless of your time zone."
  },
  {
    q: "Can you redesign an existing application?",
    a: "Absolutely. We often help clients modernize legacy applications, improving both the user interface (UI/UX) and the underlying architecture for better performance and scalability."
  },
  {
    q: "Do you sign NDA?",
    a: "Yes, we prioritize your intellectual property. We are happy to sign a Non-Disclosure Agreement (NDA) before any detailed discussions to ensure your ideas remain secure."
  },
  {
    q: "What technologies do you use?",
    a: "We specialize in modern stacks: React/Next.js for web, Flutter for cross-platform mobile, Node.js for backend, and integrate heavily with AWS, Google Cloud, Firebase, and OpenAI."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about working with Kadyan Technologies.</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6 bg-card/50">
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
