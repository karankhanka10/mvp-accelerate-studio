import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ProcessSection } from "@/components/ProcessSection"
import { ServicesSection } from "@/components/ServicesSection"
import { PricingSection } from "@/components/PricingSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProcessSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
