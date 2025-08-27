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
    <Section className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="eyebrow-heading">Premium MVP Development</div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          From Ideas To{" "}
          <span className="gradient-primary bg-clip-text text-transparent">
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
    </Section>
  )
}