import { Section } from "@/components/ui/section"
import { CardHover } from "@/components/ui/card-hover"
import { Monitor, Palette, Globe, Smartphone } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "MVP Development",
    description: "Full-stack web applications built with modern technologies, scalable architecture, and clean code.",
    gradient: "gradient-primary"
  },
  {
    icon: Palette,
    title: "Logo Design", 
    description: "Memorable brand identities that capture your vision and resonate with your target audience.",
    gradient: "gradient-secondary"
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Stunning, responsive websites that convert visitors into customers with optimized user experience.",
    gradient: "gradient-accent"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    gradient: "gradient-primary"
  }
]

export function ServicesSection() {
  return (
    <Section id="services">
      <div className="text-center mb-16">
        <div className="eyebrow-heading">What We Offer</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Development{" "}
          <span className="gradient-accent bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive solutions to transform your ideas into market-ready products.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <div 
              key={service.title}
              className="animated-border group relative bg-gradient-to-br from-slate-900/40 to-slate-800/20 p-8 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mb-6 ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
              
              {/* Subtle accent line */}
              <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}