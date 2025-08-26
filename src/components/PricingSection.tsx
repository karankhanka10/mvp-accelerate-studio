import { Section } from "@/components/ui/section"
import { CardHover } from "@/components/ui/card-hover"
import { GradientButton } from "@/components/ui/gradient-button"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "MVP Standard Plan",
    price: "$1,999",
    period: "/project",
    description: "Perfect for startups and entrepreneurs ready to validate their ideas.",
    features: [
      "Complete MVP Development",
      "Responsive Web Design",
      "Basic SEO Optimization",
      "3 Rounds of Revisions",
      "30 Days Support",
      "Source Code Included"
    ],
    popular: false
  },
  {
    name: "MVP Growth Retainer Plan",
    price: "$2,999",
    period: "/project",
    description: "Ideal for businesses ready to scale and dominate their market.",
    features: [
      "Everything in Standard",
      "Advanced Features & Integrations",
      "Custom Design System",
      "Performance Optimization",
      "90 Days Priority Support",
      "Ongoing Maintenance Included",
      "Analytics & Monitoring",
      "Unlimited Revisions"
    ],
    popular: true
  }
]

export function PricingSection() {
  return (
    <Section id="pricing" className="bg-gradient-subtle">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Simple Pricing.{" "}
          <span className="gradient-blue bg-clip-text text-transparent">
            Maximum Value.
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transparent pricing with no hidden fees. Choose the plan that fits your project needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <CardHover 
            key={plan.name}
            className={`p-8 relative animate-fade-in ${
              plan.popular ? "border-primary shadow-glow" : ""
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="gradient-blue px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Most Popular
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <GradientButton 
              variant={plan.popular ? "glow" : "gradient"} 
              size="lg" 
              className="w-full"
            >
              Book a Call
            </GradientButton>
          </CardHover>
        ))}
      </div>
    </Section>
  )
}