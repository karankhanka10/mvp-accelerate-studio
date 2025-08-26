import { Section } from "@/components/ui/section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who Do You Work With?",
    answer: "We partner with startups, entrepreneurs, and established businesses looking to validate new ideas or expand their digital presence. Our clients range from solo founders to enterprise teams."
  },
  {
    question: "What's Your Design Process Like?",
    answer: "Our process starts with understanding your vision and market needs. We then create wireframes, design prototypes, develop your MVP, and provide ongoing support for iterations and improvements."
  },
  {
    question: "How Long Does MVP Development Take?",
    answer: "Most MVPs are completed within 4-8 weeks, depending on complexity and requirements. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do You Provide Ongoing Support?",
    answer: "Yes! We offer various support packages including bug fixes, feature updates, performance monitoring, and technical maintenance to ensure your MVP continues to perform optimally."
  },
  {
    question: "What Technologies Do You Use?",
    answer: "We use modern, scalable technologies including React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and Vercel. We choose the best tech stack for your specific needs."
  },
  {
    question: "Can You Help With Funding and Investment?",
    answer: "While we focus on development, we can provide technical documentation and demo materials that help with investor presentations. Many of our clients have successfully raised funding after launching their MVPs."
  }
]

export function FAQSection() {
  return (
    <Section id="faq" className="bg-gradient-subtle">
      <div className="text-center mb-16">
        <div className="eyebrow-heading">Common Inquiries</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked{" "}
          <span className="gradient-accent bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about working with our MVP development studio.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:bg-card-hover transition-smooth"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}