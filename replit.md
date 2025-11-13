# Shree Balaji Foundation Website

## Overview

This is a frontend-only website for Shree Balaji Foundation, a non-profit organization focused on empowering communities through education, healthcare, women empowerment, and social welfare programs. The website serves as the foundation's digital presence, showcasing their mission, programs, impact stories, and providing ways for visitors to connect and support the cause.

The application is built as a modern single-page application (SPA) with a pure React frontend using Vite for development and production builds. The architecture is completely frontend-only, making it suitable for static hosting platforms like Vercel, Netlify, or GitHub Pages.

## Recent Changes (November 13, 2025)

### Current Session - Campaign Section Redesign & Cancer Initiative Updates
- **Cancer Initiative Statistics Enhancement**:
  - Added comprehensive screening statistics to Cancer Initiative campaign
  - 117,622 total people examined across all medical camps
  - 104 general medical camps conducted
  - 5,279 people examined for eye conditions in 54 eye camps
  - 1,609 cataract surgeries performed
  - 3,299 women screened for breast and cervical cancer in 37 camps
  - 2,447 thermal screenings conducted
  - 117 cancer awareness programs organized
  - Enhanced longDescription with detailed screening methodology and purpose
  
- **Campaign Section Redesign**:
  - Completely redesigned "About This Campaign" section with professional rectangular Card structure
  - Improved "Campaign Highlights" section with proper rectangular card layout
  - Each campaign section now uses two equal-width Cards for better organization
  - Added icon headers with gradient backgrounds for visual appeal
  - Integrated stats directly within About card with separator border
  - Campaign highlights now displayed in scrollable list (max-height: 500px)
  - Individual highlight items have hover effects for interactivity
  - Consistent max-width (7xl) across all campaign sections
  - Improved spacing and typography hierarchy
  
- **Carousel Image Display Improvements**:
  - Changed to full-width presentation with `object-cover` for crisp, sharp images
  - Fixed 500px height for consistent display across all campaigns
  - Removed side padding for edge-to-edge image display
  - Increased autoplay timing to 5 seconds per slide
  - Better navigation controls with backdrop blur effect
  - All campaign carousels now display images without blur or distortion

### Previous Session - Navigation & Image Quality Improvements
- **Sanskrit Text Correction**: Changed motto from "सबे भवन्तु सुखिनः" to "सर्वे भवन्तु सुखिनः" (corrected first word)
- **We Work In Navigation Restructure**: 
  - Removed single "Programs" link from dropdown
  - Added all 6 program sections as individual dropdown items
  - Direct navigation to specific program sector pages

### Previous Session - Campaign Enhancement & Data Updates
- **All Campaign Pages Enhanced**: Comprehensive improvements across all campaign sections
  - **Road Safety Camp**: Added carousel with 6 campaign photos
  - **Blood Donation Camp**: Added carousel with 3 campaign photos
  - **Cancer Initiative Camp**: Added carousel with 10 campaign photos
  - **Medical Camp**: Enhanced existing 14-image carousel
  - All carousels feature autoplay (4 seconds), manual navigation, and dot indicators
  
- **Campaign Content Improvements**:
  - Added stats cards showing impact metrics (People Served, Camps Organized, Lives Impacted)
  - Enhanced descriptions with longer, more detailed content for each campaign
  - Added smooth animations for all elements (fade-in, slide-in effects)
  - Improved visual hierarchy with better spacing and typography
  
- **Foundation Year Correction**: Updated establishment year from 2013 to 2015
  - Updated in Footer, About Section, Impact page, and About Us page
  - Consistent across all references to foundation history
  
- **Navigation Improvement**: Removed active state highlighting (blue/primary color)
  - Navigation buttons now stay white/neutral colored when clicked
  - Cleaner, more consistent visual experience
  
- **Contact Information Updates**:
  - Email: Changed to contact@shreebalajifoundation.org.in (added .in domain)
  - Phone: Added contact number +91 8087678977
  - Address: Added "Pune" to location (Pune, Maharashtra, India)
  - Updates applied to both Contact page and Footer

### Previous Session (November 12, 2025)
- **Frontend-Only Conversion**: Completely removed Express server and all backend code
- **Vercel Deployment Ready**: Configured for static deployment with vercel.json
- **Education Image Update**: Replaced education program image with user-provided image
- **Donate Button Styling**: Changed "Donate Now" button color to orange (#FF6B35)
- **Dependency Cleanup**: Removed 138 unused server-related packages (Express, Passport, Drizzle, etc.)
- **Build Optimization**: Pure Vite build pipeline for faster development and production builds

### Previous Updates
- **Hero Animation**: Added smooth floating animation to hero image for dynamic visual appeal
- **Footer Enhancement**: Redesigned footer with single-line foundation text, larger logo (48px), and centered copyright
- **Navigation Improvement**: Added "Share Feedback" as dropdown under "Contact" in navigation menu
- **Programs Page Fix**: Fixed all "Learn More" button links to work correctly with proper sector routing
- **Feedback Page Refactor**: Converted feedback page to use PageLayout component, eliminating duplicate navigation/footer
- **Mobile Responsiveness**: Maintained all mobile menu functionality including collapsible navigation

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing (alternative to React Router)
- **TanStack Query** (React Query) for server state management and data fetching

**UI Component System**
- **Shadcn/ui** component library based on Radix UI primitives for accessible, composable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for managing component variants
- Design system follows the "new-york" style from Shadcn with custom theming

**Styling Approach**
- Custom CSS variables defined for light mode theming (primary colors, backgrounds, borders)
- Typography system uses Inter for body text, Poppins for headings, and Noto Serif Devanagari for Sanskrit text
- Spacing primitives based on Tailwind's scale (4, 6, 8, 12, 16, 20)
- Responsive design with mobile-first breakpoints
- Custom animations including `float-hero` for smooth floating effects

**Component Structure**
- Page-level components in `client/src/pages/` (Home, About Us, Programs, Impact, Gallery, Contact, Feedback, Sector pages)
- Reusable UI components in `client/src/components/` (ModernNavigation, ModernHero, About, Programs, Gallery, Testimonials, CallToAction, Footer, PageLayout)
- Component examples in `client/src/components/examples/` for development and testing
- Shadcn UI components in `client/src/components/ui/`
- Consistent use of PageLayout wrapper for all pages to avoid duplicate navigation/footer

**Key Design Patterns**
- Component composition pattern for building complex UIs from simple components
- Props-based component customization for flexibility
- Mobile-responsive hamburger menu with slide-in drawer pattern
- Carousel pattern with auto-rotation and manual navigation
- Card-based layouts for programs, testimonials, and impact metrics
- Modal/dialog patterns for image galleries and forms

### Deployment & Build

**Development**
- Pure Vite development server running on port 5000
- Hot Module Replacement (HMR) for instant updates during development
- Command: `npm run dev`

**Production Build**
- Static site generation via Vite build
- Output directory: `dist/`
- Command: `npm run build`
- Preview: `npm run preview`

**Deployment Platforms**
- **Vercel**: Configured with vercel.json for seamless deployment
- **Netlify**: Compatible with standard SPA deployment
- **GitHub Pages**: Can be deployed as static site
- **Any Static Host**: Works with any platform supporting SPAs

**Build Configuration**
- Vite config optimized for frontend-only builds
- All assets bundled and optimized
- Client-side routing handled via Wouter
- No server-side dependencies required

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** - Comprehensive set of accessible component primitives (@radix-ui/react-*)
- **Lucide React** - Icon library for UI elements
- **Embla Carousel** - Carousel/slider functionality for hero section
- **CMDK** - Command menu component
- **React Day Picker** - Calendar/date picker component (implied by calendar component)

**Utility Libraries**
- **clsx** and **tailwind-merge** - Class name manipulation and merging
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation
- **zod** - Runtime type validation and schema definition

**Build & Development Tools**
- **TypeScript** - Static type checking
- **PostCSS** with Autoprefixer - CSS processing
- **esbuild** - Fast server bundling for production
- **tsx** - TypeScript execution for development server
- **Drizzle Kit** - Database migration and schema management tools

**Replit Integration**
- @replit/vite-plugin-runtime-error-modal - Error overlay
- @replit/vite-plugin-cartographer - Code navigation
- @replit/vite-plugin-dev-banner - Development banner

**Asset Management**
- Images stored in `attached_assets/` directory
- Vite alias `@assets` for easy asset imports
- Custom images for programs (including user-provided education image)
- All assets optimized and bundled during build process

## Key Features

**Navigation System**
- Responsive top navigation with dropdown menus
- Contact dropdown includes "Contact Us" and "Share Feedback" options
- Mobile hamburger menu with smooth transitions
- Active page highlighting

**Program Sections**
- Quality Education
- Women Empowerment
- Health and Wellness
- Community Development
- Skill Development and Training
- Environmental Initiatives
- All "Learn More" buttons properly linked to dedicated sector pages

**Campaign Sections**
- Medical Camp (with interactive photo carousel showcasing 14 real medical camp activities)
- Road Safety Camp
- Blood Donation Camp
- Cancer Initiative Camp
- All campaigns accessible via dropdown in navigation menu

**User Engagement**
- Animated hero section with floating image effect
- Gallery with modern card layouts
- Testimonials section
- Feedback form with toast notifications
- Call-to-action sections throughout the site

**Design Elements**
- Consistent use of primary orange (#FF6B35) and accent teal (#4ECDC4) colors
- Clean, modern UI with card-based layouts
- Smooth animations and transitions
- Fully responsive design for all screen sizes