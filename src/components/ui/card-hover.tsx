import * as React from "react"
import { cn } from "@/lib/utils"

interface CardHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  glowOnHover?: boolean
}

const CardHover = React.forwardRef<HTMLDivElement, CardHoverProps>(
  ({ className, children, glowOnHover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-xl border border-border bg-card text-card-foreground shadow-card transition-smooth hover:bg-card-hover hover:scale-105",
          glowOnHover && "hover:shadow-glow",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CardHover.displayName = "CardHover"

export { CardHover }