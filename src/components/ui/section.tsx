import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  container?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, container = true, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-20 lg:py-24", className)}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 max-w-7xl">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }