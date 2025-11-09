# Shree Balaji Foundation Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from leading non-profit and foundation websites (Charity: Water, Khan Academy, Akshaya Patra). Focus on trust-building, impact visualization, and emotional connection through authentic imagery of beneficiaries and programs.

## Core Design Principles
1. **Authentic Impact**: Real photos of foundation activities, beneficiaries, and community work
2. **Trust & Transparency**: Clear information hierarchy, accessible content structure
3. **Compassionate Aesthetics**: Warm, approachable design that inspires action
4. **Cultural Respect**: Honor Sanskrit tagline and cultural elements with dignity

## Typography System
- **Headings**: Poppins (600-700 weight) - modern, warm, readable in Indian context
- **Body Text**: Inter (400-500 weight) - excellent readability for longer content
- **Sanskrit Text**: Noto Serif Devanagari (500 weight) for tagline
- **Hierarchy**: Hero titles (text-5xl to text-7xl), Section headings (text-3xl to text-4xl), Body (text-base to text-lg)

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 consistently (p-8, gap-6, mb-12, py-20)
- **Container**: max-w-7xl for full sections, max-w-4xl for content-focused areas
- **Section Padding**: py-16 mobile, py-24 desktop
- **Grid Systems**: 2-column (md:grid-cols-2), 3-column for features (lg:grid-cols-3)

## Component Architecture

### Hero Carousel (3 Slides)
- **Structure**: Full-width carousel with large background images, automatic rotation (5s intervals), manual navigation dots, prev/next arrows
- **Slide Content**: Each slide features impact story with overlay content (left-aligned on desktop, centered on mobile)
- **Overlay Box**: Semi-transparent backdrop blur (backdrop-blur-md bg-white/90) containing headline, subtext, and CTA button
- **Image Treatment**: High-quality images showing foundation activities, children learning, community events
- **Height**: 70vh desktop, 60vh mobile
- **CTA Buttons**: Blurred background buttons with hover states built-in

### Navigation
- **Desktop**: Horizontal menu with foundation logo left, nav links center, "Donate" CTA right (sticky on scroll)
- **Mobile**: Hamburger menu with slide-in drawer
- **Elements**: Logo (includes Sanskrit tagline below), About, Programs, Gallery, Impact, Contact, Donate button (prominent)

### About Section
- **Layout**: 2-column split (60/40) - left: text content with mission/vision, right: founder/team image
- **Content**: Foundation history, mission statement, core values (grid of 3-4 value cards with icons)
- **Stats Bar**: 4 key metrics in single row (volunteers, beneficiaries, programs, years) with animated counters

### Programs Section
- **Layout**: Grid of program cards (1 col mobile, 2 cols tablet, 3 cols desktop)
- **Card Design**: Image top, category badge, title, brief description, "Learn More" link
- **Programs**: Education, Healthcare, Women Empowerment, Community Development, Skill Training, etc.
- **Spacing**: gap-8 between cards

### Impact/Gallery Section
- **Layout**: Masonry grid or 3-column gallery with varied heights
- **Lightbox**: Click to expand images with caption overlay
- **Categories**: Filterable tabs (All, Education, Events, Healthcare, Community)
- **Images**: Mix of candid shots, group photos, facility images, event coverage

### Testimonials Section
- **Layout**: 2-column quote cards with beneficiary/volunteer testimonials
- **Card Elements**: Quote text, author name, photo (circular), role/relation
- **Background**: Subtle pattern or light treatment to differentiate from surrounding sections

### Call-to-Action Section
- **Placement**: Before footer
- **Design**: Full-width with compelling background image, centered content
- **Elements**: Headline "Join Our Mission", subtext, two buttons (Donate Now, Become Volunteer)
- **Treatment**: Dark overlay on image for text readability

### Footer
- **Layout**: 4-column grid (About, Quick Links, Programs, Contact)
- **Elements**: Foundation description, social media icons, contact details, address, registration number
- **Bottom Bar**: Copyright, privacy policy, terms links
- **Newsletter**: Email signup form in footer

## Images Required
1. **Hero Carousel (3 images)**: 
   - Slide 1: Children in classroom/educational setting
   - Slide 2: Community gathering/healthcare camp
   - Slide 3: Empowerment program/skill training
2. **About Section**: Team/founder photo or foundation facility
3. **Program Cards**: 6-8 representative images for each program category
4. **Gallery**: 12-20 authentic photos from foundation activities
5. **Testimonial Photos**: 4-6 circular headshots of beneficiaries/volunteers
6. **CTA Section**: Inspiring wide-angle shot of foundation impact

## Accessibility & Performance
- Alt text for all images describing foundation activities
- Keyboard navigation for carousel
- ARIA labels for interactive elements
- Lazy loading for gallery images
- Optimized image formats (WebP with JPEG fallback)

## Animations (Minimal)
- Smooth carousel transitions (0.5s ease)
- Fade-in on scroll for stat counters
- Subtle hover lift on program cards (translate-y-1)
- No distracting or excessive motion