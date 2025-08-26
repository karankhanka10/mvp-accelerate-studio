import { Section } from "@/components/ui/section"

const footerLinks = {
  Services: ["MVP Development", "Logo Design", "Website Design", "App Development"],
  Company: ["Process", "Examples", "Pricing", "Contact"],
  Resources: ["FAQ", "Blog", "Case Studies", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
}

export function Footer() {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              Varnixz
            </div>
            <p className="text-muted-foreground">
              Transforming ideas into market-ready MVPs with premium development expertise.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Varnixz. All rights reserved. Building the future, one MVP at a time.</p>
        </div>
      </Section>
    </footer>
  )
}