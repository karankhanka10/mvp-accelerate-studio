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
    answer: "We partner with ambitious startups, innovative entrepreneurs, and forward-thinking enterprises looking to validate breakthrough ideas or expand their digital footprint. Our diverse clientele includes solo founders with game-changing concepts, scaling startups seeking technical excellence, and established companies launching new product lines. We specialize in working with visionaries who understand that speed-to-market and technical quality are equally crucial for success."
  },
  {
    question: "What's Your Design Process Like?",
    answer: "Our process begins with deep market research and user persona analysis to understand your target audience's pain points. We then conduct comprehensive wireframing sessions, create interactive prototypes for user testing, develop your MVP using agile methodologies, and provide ongoing optimization based on real user feedback. Every step is transparent, collaborative, and focused on creating products that users genuinely love."
  },
  {
    question: "How Long Does MVP Development Take?",
    answer: "Timeline varies based on complexity and scope, but most MVPs are delivered within 4-8 weeks. Simple MVPs with core functionality can be ready in 3-4 weeks, while more complex solutions with advanced features may take 6-8 weeks. We provide detailed project timelines, milestone deliverables, and weekly progress updates during our initial consultation to ensure complete transparency."
  },
  {
    question: "Do You Provide Ongoing Support?",
    answer: "Absolutely! We offer comprehensive post-launch support packages including 24/7 monitoring, bug fixes, security updates, performance optimization, feature enhancements, and technical maintenance. Our support tiers range from basic maintenance to full-scale product evolution, ensuring your MVP continues to perform optimally as you scale and grow your user base."
  },
  {
    question: "What Technologies Do You Use?",
    answer: "We leverage cutting-edge, enterprise-grade technologies including React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, Vercel, and Docker. Our tech stack selection is always strategic – we choose technologies that provide the best scalability, performance, and maintainability for your specific use case and long-term growth plans."
  },
  {
    question: "Can You Help With Funding and Investment?",
    answer: "While our core expertise is development, we support your fundraising journey by creating compelling technical documentation, investor demo materials, pitch deck assets, and detailed technical specifications that impress investors. Many of our clients have successfully raised seed rounds, Series A funding, and secured strategic partnerships after launching their MVPs with us."
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