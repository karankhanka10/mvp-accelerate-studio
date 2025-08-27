import { Section } from "@/components/ui/section"
import { Monitor, PenTool, Globe, Smartphone } from "lucide-react"
import mvpImage from "@/assets/mvp-development.jpg"
import websiteImage from "@/assets/website-design.jpg"

const services = [
  {
    icon: Monitor,
    title: "MVP Development",
    description: "Developing breathtaking, user-centric MVPs that boost engagement, conversions, and growth, perfectly aligned with your brand.",
    hasImage: true,
    image: mvpImage
  },
  {
    icon: PenTool,
    title: "AI Automation", 
    description: "Crafting distinctive, scalable, and impactful logos that embody your brand's identity and vision.",
    hasImage: false
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Bringing ideas to life with interactive, user-centered designs that simplify complexity and elevate user experience.",
    hasImage: true,
    image: websiteImage
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Beautiful, user-friendly apps that people enjoy using—and keep coming back for.",
    hasImage: false
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <div 
              key={service.title}
              className="group relative bg-card rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] animate-fade-in border border-border/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-lg bg-primary/10 border border-primary/20">
                <IconComponent className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.description}</p>
              
              {/* Supporting image for MVP Development and Website Design */}
              {service.hasImage && (
                <div className="relative rounded-lg overflow-hidden h-32 bg-gradient-services">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-services opacity-60"></div>
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    {service.title}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}