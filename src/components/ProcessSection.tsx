import { Section } from "@/components/ui/section"

const processes = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "We analyze your market, define clear objectives, and create a strategic roadmap for your MVP's success in the competitive landscape."
  },
  {
    step: 2,
    title: "Design & Development",
    description: "Our expert team crafts intuitive user experiences and builds robust, scalable solutions using cutting-edge technologies."
  },
  {
    step: 3,
    title: "Testing & Launch",
    description: "Comprehensive quality assurance, performance optimization, and strategic market deployment to ensure flawless execution."
  },
  {
    step: 4,
    title: "Growth & Scale",
    description: "Continuous optimization, feature enhancement, and data-driven improvements to maximize your product's market impact."
  }
]

export function ProcessSection() {
  return (
    <Section id="process" className="bg-gradient-subtle">
      <div className="text-center mb-16">
        <div className="eyebrow-heading">Our Methodology</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Process is{" "}
          <span className="gradient-secondary bg-clip-text text-transparent">
            Everything
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our battle-tested methodology ensures your MVP is built right, launched fast, and scaled smart.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        {processes.map((process, index) => (
          <div 
            key={process.step}
            className="animated-border group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-8 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-glow animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Step Number Circle */}
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">
              <span className="text-sm font-semibold text-white">{process.step}</span>
            </div>
            
            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white leading-tight">
                {process.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {process.description}
              </p>
            </div>
            
            {/* Divider */}
            <div className="border-t border-gray-700 mt-6 mb-4"></div>
            
            {/* Step Label */}
            <div className="flex justify-start">
              <span className="px-3 py-1 text-xs rounded-full border border-gray-600 text-gray-400 font-medium">
                Step {process.step}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}