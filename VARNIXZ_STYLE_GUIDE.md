# Varnixz Website Style Guide

## Brand Identity
**Agency Name**: Varnixz
**Tagline**: "From Ideas To Impact"
**Industry**: Premium MVP Development Agency

---

## Typography

### Primary Font
- **Font Family**: Satoshi
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 900 (Black)
- **Fallbacks**: Inter, system-ui, sans-serif

### Typography Hierarchy
```css
/* Headings */
h1: 5xl-7xl font-bold (80px-112px)
h2: 4xl-5xl font-bold (56px-80px) 
h3: 2xl font-semibold (24px)
h4: xl font-semibold (20px)

/* Body Text */
Body Large: text-xl (20px)
Body Regular: text-base (16px)
Body Small: text-sm (14px)

/* Eyebrow Headings */
Eyebrow: text-xs font-medium uppercase tracking-wider
```

---

## Color Palette

### Core Colors (HSL Format)
```css
/* Premium Dark Theme */
--background: 0 0% 2%           /* #050505 - Deep Black */
--foreground: 0 0% 98%          /* #FAFAFA - Pure White */

/* Card System */
--card: 0 0% 4%                 /* #0A0A0A - Dark Card */
--card-foreground: 0 0% 98%     /* #FAFAFA - Card Text */
--card-hover: 0 0% 7%           /* #121212 - Card Hover */

/* Brand Colors */
--primary: 260 100% 70%         /* #8B5CF6 - Purple Primary */
--primary-glow: 260 100% 80%    /* #A78BFA - Purple Glow */

--accent: 285 100% 75%          /* #D946EF - Pink Accent */
--accent-glow: 285 100% 85%     /* #E879F9 - Pink Glow */

/* Muted Elements */
--muted: 0 0% 6%                /* #0F0F0F - Muted Background */
--muted-foreground: 0 0% 60%    /* #999999 - Muted Text */

/* Borders */
--border: 0 0% 15%              /* #262626 - Border Color */
```

### Gradient System
```css
/* Premium Gradients */
--gradient-primary: linear-gradient(135deg, hsl(260 100% 70%), hsl(280 100% 75%))
--gradient-secondary: linear-gradient(135deg, hsl(285 100% 75%), hsl(305 100% 80%))
--gradient-accent: linear-gradient(135deg, hsl(320 100% 75%), hsl(340 100% 70%))
--gradient-subtle: linear-gradient(135deg, hsl(0 0% 2%), hsl(0 0% 6%))
```

---

## Layout System

### Container & Spacing
- **Max Width**: 1200px (max-w-7xl)
- **Section Padding**: 80px top/bottom (py-20)
- **Container Padding**: 32px horizontal (px-8)
- **Grid Gaps**: 24px-32px (gap-6 to gap-8)

### Grid System
```css
/* Responsive Grids */
Services: grid md:grid-cols-2 gap-8
Process: grid md:grid-cols-2 lg:grid-cols-4 gap-6
Testimonials: grid md:grid-cols-3 gap-6
Pricing: grid md:grid-cols-2 gap-8
```

---

## Component Design

### Navigation
- **Style**: Fixed sticky with glass effect on scroll
- **Background**: Transparent → rgba(0,0,0,0.3) with backdrop blur
- **Height**: 64px (h-16)
- **Logo**: Gradient primary text with font-bold

### Buttons
```css
/* Primary Gradient Button */
.gradient-button-primary {
  background: var(--gradient-primary);
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.gradient-button-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px hsl(260 100% 70% / 0.4);
}

/* Outline Button */
.button-outline {
  border: 1px solid hsl(var(--border));
  background: transparent;
  backdrop-filter: blur(10px);
}
```

### Cards
```css
/* Hover Card Effect */
.card-hover {
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
}

.card-hover:hover {
  background: hsl(var(--card-hover));
  transform: translateY(-4px);
  box-shadow: 0 20px 40px hsl(0 0% 0% / 0.4);
}

/* Glow Card (Premium) */
.card-glow:hover {
  border-color: hsl(var(--primary));
  box-shadow: 0 0 30px hsl(var(--primary) / 0.3);
}
```

### Eyebrow Headings
```css
.eyebrow-heading {
  font-size: 12px;
  font-weight: 500;
  color: hsl(var(--primary));
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
  text-align: center;
}
```

---

## Page Structure

### Navigation Bar
- Logo (left): "Varnixz" with gradient-primary
- Menu Items: Services, Process, Examples, Pricing, FAQ
- CTA Button: "Book a Call" with glow effect

### Page Sections

#### 1. Hero Section
- **Eyebrow**: "Premium MVP Development"
- **Headline**: "From Ideas To Impact"
- **Subtext**: MVP validation messaging
- **CTAs**: "See All Projects" + "Contact Now"
- **Featured Grid**: 3 project cards with hover effects

#### 2. Process Section
- **Eyebrow**: "Our Methodology"
- **Headline**: "Process is Everything"
- **Cards**: 4 steps (Concept, Execution, Kickoff, Beyond Growth)
- **Icons**: Gradient primary backgrounds

#### 3. Services Section
- **Eyebrow**: "What We Offer"
- **Headline**: "Development Services"
- **Grid**: 2x2 service cards with gradient icons
- **Services**: MVP Development, Logo Design, Website Design, App Development

#### 4. Pricing Section
- **Eyebrow**: "Investment Plans"
- **Headline**: "Simple Pricing. Maximum Value"
- **Plans**: Standard ($1,999) + Growth ($2,999)
- **Popular Badge**: Gradient primary with star icon

#### 5. Testimonials
- **Eyebrow**: "Client Success Stories"
- **Headline**: "Clients Love Us"
- **Format**: 3-column testimonial cards with star ratings

#### 6. FAQ Section
- **Eyebrow**: "Common Inquiries"
- **Headline**: "Frequently Asked Questions"
- **Format**: Accordion-style expandable questions

#### 7. CTA Section
- **Eyebrow**: "Ready to Start?"
- **Headline**: "Let's Grow Together"
- **CTAs**: "See All Projects" + "Get Started Now"
- **Preview**: 2 featured project cards

#### 8. Footer
- **Brand**: Varnixz logo with gradient
- **Links**: Organized by category (Services, Company, Resources, Legal)
- **Copyright**: "© 2024 Varnixz. All rights reserved."

---

## Animation System

### Keyframes
```css
/* Fade In Animation */
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Scale In Animation */
@keyframes scale-in {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

/* Glow Pulse Animation */
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px hsl(260 100% 70% / 0.3); }
  50% { box-shadow: 0 0 30px hsl(260 100% 70% / 0.5); }
}
```

### Animation Classes
```css
.animate-fade-in { animation: fade-in 0.3s ease-out; }
.animate-scale-in { animation: scale-in 0.2s ease-out; }
.animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
.transition-smooth { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
```

---

## Interactive States

### Hover Effects
- **Cards**: Lift (translateY(-4px)) + glow shadow
- **Buttons**: Scale (1.05) + enhanced glow
- **Images**: Scale (1.1) on project previews
- **Links**: Color transition to primary

### Focus States
- **Buttons**: Ring offset with primary color
- **Form Elements**: Primary border + ring
- **Navigation**: Underline animation for links

---

## Responsive Design

### Breakpoints
```css
sm: 640px    /* Mobile Large */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large Desktop */
2xl: 1536px  /* Extra Large */
```

### Mobile Adaptations
- **Typography**: Reduced sizes (5xl → 4xl for h1)
- **Spacing**: Reduced padding (py-20 → py-16)
- **Grid**: Single column on mobile
- **Navigation**: Hamburger menu with slide transition

---

## Technical Implementation

### CSS Custom Properties
All colors use HSL format for consistency and theming support.

### Component Architecture
- Reusable UI components (Button, Card, Section)
- Consistent prop interfaces
- Tailwind CSS for styling
- Framer Motion for animations (optional)

### Performance Considerations
- Lazy loading for images
- Optimized font loading with font-display: swap
- Minimal CSS bundle with Tailwind purging
- Compressed image assets

---

## Brand Guidelines

### Tone of Voice
- **Professional**: Expert, reliable, trustworthy
- **Premium**: High-quality, sophisticated, exclusive
- **Innovative**: Cutting-edge, modern, forward-thinking
- **Results-Driven**: Impact-focused, outcome-oriented

### Visual Principles
- **Minimalism**: Clean, spacious, uncluttered
- **Contrast**: High contrast for accessibility
- **Hierarchy**: Clear information architecture
- **Premium Feel**: Subtle animations, quality imagery
- **Consistency**: Unified design language throughout

This style guide ensures consistent, premium design implementation across the Varnixz website while maintaining brand integrity and user experience excellence.