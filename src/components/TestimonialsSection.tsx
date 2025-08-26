import { Section } from "@/components/ui/section"
import { CardHover } from "@/components/ui/card-hover"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechFlow",
    content: "MVP Studio transformed our rough idea into a polished product in just 6 weeks. The attention to detail and technical expertise exceeded our expectations.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "CEO, GrowthLabs",
    content: "Working with MVP Studio was a game-changer. They understood our vision perfectly and delivered an MVP that helped us secure our Series A funding.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager, InnovateCorp",
    content: "The team's process-driven approach and clear communication made the entire development journey smooth and predictable. Highly recommended!",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Clients{" "}
          <span className="gradient-purple bg-clip-text text-transparent">
            Love Me
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied clients have to say.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <CardHover 
            key={testimonial.name}
            className="p-6 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-muted-foreground mb-6 italic">
              "{testimonial.content}"
            </blockquote>
            
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          </CardHover>
        ))}
      </div>
    </Section>
  )
}