import { Section } from "@/components/ui/section"
import { CardHover } from "@/components/ui/card-hover"
import { GradientButton } from "@/components/ui/gradient-button"
import heroProject1 from "@/assets/hero-project-1.jpg"
import heroProject2 from "@/assets/hero-project-2.jpg"

export function CTASection() {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's Grow{" "}
          <span className="gradient-blue bg-clip-text text-transparent">
            Together
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Ready to transform your idea into a market-ready MVP? Join hundreds of successful entrepreneurs who trusted us with their vision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <GradientButton variant="glow" size="xl">
            See All Projects
          </GradientButton>
          <GradientButton variant="outline" size="xl">
            Get Started Now
          </GradientButton>
        </div>
      </div>

      {/* Project Previews */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <CardHover glowOnHover className="overflow-hidden">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={heroProject1}
              alt="Featured Project"
              className="w-full h-full object-cover transition-smooth group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="text-xs text-primary font-medium mb-2">Recent Launch</div>
            <h3 className="text-xl font-semibold mb-2">SaaS Analytics Platform</h3>
            <p className="text-muted-foreground">Helping businesses make data-driven decisions with beautiful, intuitive dashboards.</p>
          </div>
        </CardHover>

        <CardHover glowOnHover className="overflow-hidden">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={heroProject2}
              alt="Featured Project"
              className="w-full h-full object-cover transition-smooth group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="text-xs text-primary font-medium mb-2">Success Story</div>
            <h3 className="text-xl font-semibold mb-2">E-commerce Mobile App</h3>
            <p className="text-muted-foreground">From concept to $1M+ in revenue within 8 months of launch.</p>
          </div>
        </CardHover>
      </div>
    </Section>
  )
}