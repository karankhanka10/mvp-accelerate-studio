import { GradientButton } from "@/components/ui/gradient-button"
import { Section } from "@/components/ui/section"
import { CardHover } from "@/components/ui/card-hover"
import heroProject1 from "@/assets/hero-project-1.jpg"
import heroProject2 from "@/assets/hero-project-2.jpg"
import heroProject3 from "@/assets/hero-project-3.jpg"

const projects = [
  {
    title: "SaaS Dashboard",
    image: heroProject1,
    category: "Web App"
  },
  {
    title: "Mobile Commerce",
    image: heroProject2,
    category: "Mobile App"
  },
  {
    title: "Business Platform",
    image: heroProject3,
    category: "Website"
  }
]

export function HeroSection() {
  return (
    <Section className="pt-32 pb-20 text-center">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          From Ideas To{" "}
          <span className="gradient-blue bg-clip-text text-transparent">
            Impact
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
          MVPs that Validate And Dominate. Turn your vision into reality with our proven development process.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <GradientButton variant="glow" size="lg">
            See All Projects
          </GradientButton>
          <GradientButton variant="outline" size="lg">
            Contact Now
          </GradientButton>
        </div>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <CardHover 
            key={project.title} 
            glowOnHover
            className="overflow-hidden animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-primary font-medium mb-2">{project.category}</div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </CardHover>
        ))}
      </div>
    </Section>
  )
}