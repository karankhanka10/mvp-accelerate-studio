import { Section } from "@/components/ui/section"
import { CardHover } from "@/components/ui/card-hover"
import { Lightbulb, Code, Rocket, TrendingUp } from "lucide-react"

const processes = [
  {
    icon: Lightbulb,
    title: "Concept",
    description: "We dive deep into your vision, understanding market needs and defining clear objectives for your MVP."
  },
  {
    icon: Code,
    title: "Execution",
    description: "Our expert team brings your idea to life with cutting-edge technology and proven development practices."
  },
  {
    icon: Rocket,
    title: "Kickoff",
    description: "Launch your MVP to market with comprehensive testing, optimization, and deployment strategies."
  },
  {
    icon: TrendingUp,
    title: "Beyond Growth",
    description: "Scale your success with ongoing support, feature iterations, and data-driven improvements."
  }
]

export function ProcessSection() {
  return (
    <Section id="process" className="bg-gradient-subtle">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Process is{" "}
          <span className="gradient-purple bg-clip-text text-transparent">
            Everything
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our battle-tested methodology ensures your MVP is built right, launched fast, and scaled smart.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processes.map((process, index) => {
          const IconComponent = process.icon
          return (
            <CardHover 
              key={process.title}
              className="p-8 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 gradient-blue rounded-xl flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
              <p className="text-muted-foreground">{process.description}</p>
            </CardHover>
          )
        })}
      </div>
    </Section>
  )
}