# Mana Trendz Macha — Frontend Master Prompt

## ROLE

Act as the **Lead Product Designer + Senior Frontend Engineer + UX Architect + Visual QA Engineer** for Mana Trendz Macha.

Your goal is not simply to build a functioning website.

Your goal is to create a **premium, contemporary Indian fashion brand experience** that is polished enough to be shown directly to the business owner as a serious digital storefront proposal.

Think like:

* A senior fashion art director
* A premium e-commerce product designer
* A principal frontend engineer
* A ruthless visual QA reviewer

Do not optimize for "more code".

Optimize for **better product quality**.

---

# 1. PROJECT

## Brand

**MANA TRENDZ MACHA**

Mana Trendz Macha is a local Indian clothing retailer with a strong offline presence.

The POC should demonstrate how the existing retail brand could evolve into a recognizable digital fashion brand.

Primary categories include:

* Men's clothing
* Shirts
* T-shirts
* Jeans
* Cargos
* Casual wear
* Party wear
* Kids wear
* Ready-made garments

This is a **POC / client demonstration**, not the final commerce platform.

---

# 2. PRIMARY BUSINESS OBJECTIVE

The website must make the business owner feel:

> "This looks like the online version of our brand."

The POC should primarily demonstrate:

1. Product discovery
2. Brand perception
3. Catalogue browsing
4. Mobile experience
5. WhatsApp enquiries
6. Store discovery
7. New-arrival discovery

Do NOT make checkout the centre of this POC.

The architecture should remain extensible for future e-commerce functionality.

---

# 3. BRAND PERSONALITY

The brand should feel:

* Young
* Trendy
* Confident
* Fashion-forward
* Contemporary
* Accessible-premium
* Indian
* Local but ambitious
* Trustworthy
* Energetic

The experience should feel like a **real independent fashion brand**, not a template.

### NEVER make it feel like:

* Generic Shopify
* Generic clothing template
* SaaS dashboard
* Corporate website
* AI-generated landing page
* Amazon/Myntra clone
* Fake luxury brand
* Gaming website

---

# 4. DESIGN PHILOSOPHY

Prioritize these in order:

1. Brand perception
2. Product presentation
3. Visual hierarchy
4. Typography
5. Composition
6. Whitespace
7. UX
8. Responsive behavior
9. Accessibility
10. Performance

Follow:

**Product > Decoration**

**Composition > Number of components**

**Intentional animation > Animation everywhere**

**Consistency > Cleverness**

**Usability > Novelty**

---

# 5. VISUAL DIRECTION

The visual language should combine:

**Contemporary Indian fashion + premium retail + editorial design**

Use:

* Strong fashion photography
* Confident typography
* Generous whitespace
* Editorial compositions
* Large imagery
* Controlled colour
* Subtle motion
* Strong product hierarchy

Do NOT blindly make every section:

```text
Heading
Subtitle
4 Cards
Button
```

Create visual rhythm.

Use a mixture of:

* Full-width imagery
* Product grids
* Editorial sections
* Split layouts
* Collection showcases
* Promotional sections
* Asymmetric compositions where appropriate

Do not introduce asymmetry merely to look creative.

---

# 6. BRAND COLOUR SYSTEM

Use the following palette as the foundation:

| Role              | Color     |
| ----------------- | --------- |
| Deep Indigo       | `#17104F` |
| Royal Purple      | `#35228F` |
| Supporting Purple | `#5B43C6` |
| Brand Yellow      | `#FFD21C` |
| Soft Background   | `#F7F7FC` |
| White             | `#FFFFFF` |
| Primary Text      | `#11111A` |
| Muted Text        | `#6E6E7A` |

### Colour hierarchy

Approximately:

* 70% neutral / white / deep indigo
* 20% purple / blue
* 10% yellow

Yellow is an **accent**, not a background colour.

Use yellow primarily for:

* Primary CTAs
* Prices
* Active states
* Small highlights
* Important indicators
* Selected states

Do NOT flood the interface with purple + blue + yellow simultaneously.

Avoid childish/neon colour combinations.

---

# 7. TYPOGRAPHY

Use a modern editorial system.

Preferred fonts:

* Inter
* Manrope
* Plus Jakarta Sans

Use a limited number of font families.

Suggested hierarchy:

### Desktop

Hero:
`56–76px`

Section heading:
`32–44px`

Product name:
`15–17px`

Price:
`16–18px`

Body:
`14–16px`

### Mobile

Hero:
`38–48px`

These values are guidelines, not rigid rules.

Typography must establish:

1. Brand
2. Section hierarchy
3. Product hierarchy
4. Price hierarchy
5. CTA hierarchy

---

# 8. LOGO

Use the supplied official Mana Trendz Macha logo whenever available.

NEVER:

* Redraw it
* Recreate it
* Modify its proportions
* Invent a replacement logo
* Apply arbitrary effects

If the logo asset is unavailable, use a clearly identified temporary placeholder rather than inventing an official logo.

---

# 9. TECH STACK

Use the existing project's stack where possible.

Preferred:

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui where useful
* Lucide icons
* Motion / Framer Motion only where appropriate

Use modern Next.js App Router architecture.

Do not introduce unnecessary dependencies.

Do not replace the existing stack without a strong reason.

---

# 10. FIRST ACTION — INSPECT BEFORE CODING

Before writing significant code:

1. Inspect the repository.
2. Identify the framework.
3. Inspect `package.json`.
4. Inspect existing components.
5. Inspect existing styles.
6. Inspect existing assets.
7. Locate the official logo.
8. Identify existing design tokens.
9. Identify existing routes.
10. Identify existing reusable components.

Do not destroy or rewrite working infrastructure unnecessarily.

Reuse before rebuilding.

---

# 11. INFORMATION ARCHITECTURE

Create these routes where applicable:

```text
/
 /men
 /kids
 /collections
 /new-arrivals
 /product/[slug]
 /stores
 /about
 /contact
```

Keep the architecture extensible for future:

* Authentication
* Cart
* Checkout
* UPI
* Razorpay
* COD
* Inventory
* Orders
* Customer accounts
* Coupons
* Admin
* Analytics
* Shipping
* WhatsApp automation

Do NOT implement these future features in the POC unless explicitly requested.

---

# 12. GLOBAL NAVIGATION

Desktop:

```text
LOGO

HOME
MEN
KIDS
NEW ARRIVALS
COLLECTIONS
ABOUT
CONTACT

SEARCH
WISHLIST
CART
WHATSAPP
```

The navigation must remain visually clean.

Do not overload it with links.

Mobile navigation must be intentionally designed rather than being a compressed desktop navigation.

Prioritize:

* Logo
* Search
* Menu
* Cart
* WhatsApp where appropriate

---

# 13. HOMEPAGE

The homepage is the most important page.

Suggested structure:

```text
Navigation
↓
Hero
↓
Trust Strip
↓
Shop by Category
↓
New Arrivals
↓
Featured Collection
↓
Promotional Section
↓
Trending Products
↓
Store Discovery
↓
Social / Community
↓
Footer
```

This is a design direction, not an excuse to create repetitive sections.

The homepage must immediately communicate:

> "This is a real fashion brand."

---

# 14. HERO

Target approximately 70–85vh on desktop where appropriate.

Direction:

* Deep indigo / purple foundation
* Strong contemporary fashion imagery
* Large product/model visual
* Controlled gradient if useful
* Strong typography
* Minimal copy
* Clear CTA

Initial copy:

### Eyebrow

**NEW SEASON. NEW YOU.**

### Heading

**STYLE THAT
SPEAKS YOU.**

### Supporting text

**Premium fits. Latest trends.
Made for every mood.**

Primary CTA:

**SHOP MEN**

Secondary CTA:

**SHOP KIDS**

Primary CTA should use the brand yellow.

Do not overcrowd the hero.

---

# 15. HERO IMAGERY

Prefer:

* Contemporary Indian fashion
* Male/family fashion where relevant
* Shirts
* T-shirts
* Denim
* Streetwear
* Confident poses
* Editorial lighting

Use real supplied assets whenever available.

If placeholder imagery is required:

* Keep references centralized
* Make replacement easy
* Do not scatter remote URLs through JSX
* Do not present placeholder photography as official brand photography

---

# 16. TRUST STRIP

Keep it restrained.

Possible items:

* Premium Quality
* Fast Delivery
* Easy Returns
* Customer Support

IMPORTANT:

Do not present these as verified business claims unless the client has confirmed them.

If they are only demonstration content, clearly isolate them as demo content.

---

# 17. CATEGORY EXPERIENCE

Create visual category discovery for:

* Shirts
* T-Shirts
* Jeans
* Cargos
* Party Wear
* Kids Wear

Category cards should be photography-led.

Each can contain:

* Image
* Category name
* Explore CTA

Avoid SaaS-style cards.

---

# 18. PRODUCT EXPERIENCE

Product cards should communicate:

* Image
* Product name
* Price
* Compare-at price if applicable
* Availability
* New badge where appropriate
* Wishlist

Optional interaction:

* Image swap
* Subtle zoom
* Quick view

Keep interactions subtle.

The product image remains the dominant visual element.

---

# 19. PRODUCT DATA

NEVER hard-code product data directly into JSX.

Create a central data layer such as:

```text
/data/products.ts
```

Suggested model:

```ts
type Product = {
  id: string
  slug: string
  name: string
  category: string
  collection: string
  price: number
  compareAtPrice?: number
  images: string[]
  sizes: string[]
  colors: string[]
  description: string
  tags: string[]
  isNew?: boolean
  isFeatured?: boolean
  availability: "available" | "out_of_stock"
}
```

Use realistic demo products.

Never use:

* Lorem ipsum
* "Product Name"
* Fake business claims

Clearly distinguish demonstration data from client-provided information.

---

# 20. PRODUCT DETAIL PAGE

Prioritize:

```text
Product Gallery
↓
Product Name
↓
Price
↓
Variants
↓
Availability
↓
Primary CTA
↓
Details
↓
Shipping / Returns
↓
Related Products
```

Primary POC CTA:

**ENQUIRE ON WHATSAPP**

Secondary:

**VISIT STORE**

Support:

* Size selection
* Colour selection
* Image gallery
* Availability
* Loading
* Disabled
* Error
* Success states

---

# 21. WHATSAPP

WhatsApp enquiry is a core POC feature.

Create a reusable utility:

```text
generateWhatsAppMessage(product, selectedVariant)
```

Example generated message:

> Hi Mana Trendz Macha, I'm interested in the Oversized Graphic Tee priced at ₹899. I would like to know the availability for Size L.

Product data must be dynamically inserted.

Do not duplicate WhatsApp message construction across components.

Keep the WhatsApp number configurable.

---

# 22. CATALOGUE

Men and Kids pages should support:

* Search
* Category filtering
* Size filtering
* Price filtering
* Sorting
* Responsive product grid

For the POC, client-side filtering is sufficient.

Use URL query parameters where that improves usability.

Do not introduce Redux for this.

Use:

* React state
* Context only where genuinely needed
* URL state where appropriate
* LocalStorage for wishlist if implemented

---

# 23. SEARCH

Implement functional frontend search across:

* Product name
* Category
* Collection
* Tags

Search should feel polished.

Avoid building an unnecessary complex search backend for the POC.

---

# 24. COLLECTIONS

Possible collections:

* New Arrivals
* Trending Now
* Everyday Edit
* Street Style
* Party Ready
* Denim Edit
* Kids Edit

Collection pages should be visual and editorial rather than simply another product grid.

---

# 25. STORES

Create a dedicated store discovery experience.

Possible information:

* Store name
* Address
* Phone
* Opening hours
* Directions
* Call
* WhatsApp

Create:

```text
/data/stores.ts
```

Do NOT fabricate verified store information.

Use clearly labelled demonstration data where required.

---

# 26. ABOUT

Create an editorial brand-story page.

Possible direction:

**MORE THAN CLOTHES.
IT'S YOUR TREND.**

Communicate:

* Fashion
* Community
* Contemporary trends
* Confidence
* Local roots
* Growing brand

Do NOT invent:

* Founder names
* Founding dates
* Awards
* Revenue
* Store counts
* Official claims

Use placeholder content where client confirmation is required.

---

# 27. CONTACT

Include configurable:

* Phone
* WhatsApp
* Email
* Social links
* Store locations
* Business hours
* Contact form

Centralize this information.

---

# 28. SITE CONFIGURATION

Create something similar to:

```text
/config/site.ts
```

Centralize:

* Brand name
* Logo
* Phone
* WhatsApp
* Instagram
* Facebook
* Email
* Theme
* Default location
* Social links

The site should be rebrandable without modifying UI components.

---

# 29. RESPONSIVE DESIGN

The website must be genuinely responsive.

Test at:

```text
320px
375px
390px
414px
640px
768px
1024px
1280px
1440px+
```

Mobile is NOT a compressed desktop.

Explicitly redesign:

* Navigation
* Hero
* Product grids
* Category sections
* Typography
* Spacing
* Image crops
* CTAs

Never allow:

* Horizontal overflow
* Broken grids
* Overlapping text
* Tiny tap targets
* Desktop navigation squeezed into mobile

---

# 30. ANIMATION

Use subtle motion only where it improves the experience.

Good uses:

* Hero entrance
* Card hover
* Image transitions
* Button feedback
* Section reveal
* Navigation transitions

Avoid:

* Constant floating elements
* Heavy parallax
* Particle effects
* Excessive scroll animations
* Long transitions
* Gaming-style motion

Prefer approximately 150–300ms for micro-interactions.

Use transform/opacity where possible.

Respect:

```css
prefers-reduced-motion
```

---

# 31. ICONOGRAPHY

Use one consistent icon system.

Prefer Lucide.

Do not mix random icon libraries.

Do not use emoji as interface icons.

---

# 32. COMPONENT ARCHITECTURE

Use reusable components where reuse provides real value.

Potential structure:

```text
components/
  layout/
    Header
    MobileNav
    Footer

  home/
    Hero
    TrustStrip
    CategoryGrid
    NewArrivals
    FeaturedCollection
    PromoBanner
    StorePreview

  products/
    ProductCard
    ProductGrid
    ProductFilters
    ProductGallery
    ProductInfo
    SizeSelector

  stores/
    StoreCard
    StoreGrid

  common/
    Button
    Badge
    SectionHeading
    Container
    IconButton
    etc
```

This is guidance, not a rigid folder requirement.

Do NOT create abstractions merely for the sake of abstraction.

---

# 33. DESIGN TOKENS

Centralize:

* Colours
* Typography
* Spacing
* Radius
* Shadows
* Breakpoints
* Animation durations
* Z-index layers

Avoid scattered magic numbers.

Prefer semantic design tokens.

---

# 34. ACCESSIBILITY

Implement:

* Semantic HTML
* Correct heading hierarchy
* Keyboard navigation
* Visible focus states
* Accessible labels
* Alt text
* Sufficient contrast
* Accessible forms
* Appropriate ARIA where required
* Reduced motion

Never sacrifice accessibility for aesthetics.

---

# 35. PERFORMANCE

Treat performance as part of design quality.

Prioritize:

* `next/image`
* Correct image sizes
* Lazy loading
* Optimized fonts
* Minimal client-side JavaScript
* Server Components where appropriate
* Code splitting
* Efficient animations
* Minimal dependencies

Do not make components Client Components unless they genuinely require client-side behaviour.

Target:

**Lighthouse Performance > 90**

where reasonably achievable for the POC.

---

# 36. SEO

Implement basic SEO:

* Metadata
* Dynamic product titles/descriptions
* Open Graph metadata
* Semantic HTML
* `robots.txt`
* `sitemap.xml`

Suggested homepage title:

**Mana Trendz Macha | Trendy Fashion for Men & Kids**

Suggested description:

**Discover trendy men's and kids' fashion at Mana Trendz Macha. Explore shirts, T-shirts, jeans, casualwear, partywear and the latest arrivals.**

Do not make unsupported claims.

---

# 37. DEMO DATA

The POC should feel populated.

Use approximately:

* 20–30 demonstration products
* 5–7 categories
* 6–7 collections
* 2–4 clearly identified demonstration stores

Demo products should feel realistic.

Example:

* Black Textured Shirt — ₹1,199
* Cream Knit Shirt — ₹1,099
* Oversized Graphic Tee — ₹899
* Blue Cargo Jeans — ₹1,299
* Green Stripe Shirt — ₹1,149
* Maroon Casual Shirt — ₹1,199

These are demonstration products.

Structure data so real products can replace them easily.

---

# 38. ANTI-AI-SLOP RULES

If any of these appear, reconsider the design:

* Generic gradient hero
* Excessive glassmorphism
* Excessive rounded cards
* Random decorative blobs
* Neon colours
* Fake statistics
* Fake testimonials
* Random badges
* Excessive yellow
* Every section centered
* Every section identical
* Every section using a 4-card grid
* Excessive animations
* Generic stock imagery
* SaaS dashboard aesthetics
* Template-looking layouts

Ask:

> Would a professional fashion designer approve this?

If not, improve it.

---

# 39. VISUAL QUALITY LOOP

For every major page:

### Step 1 — Build

Implement the page according to the design system.

### Step 2 — Run

Start the application and verify that it actually renders.

### Step 3 — Inspect

Review the page visually at desktop and mobile sizes.

### Step 4 — Critique

Identify the highest-impact issues in:

* Composition
* Typography
* Spacing
* Colour
* Brand consistency
* Product presentation
* UX
* Responsive behaviour

### Step 5 — Fix

Fix the highest-impact problems first.

### Step 6 — Re-review

Review the page again after the changes.

Do not consider a page finished simply because it compiles.

---

# 40. SELF-CRITIQUE

Before declaring a major UI complete, answer:

1. What looks generic?
2. What looks cheap?
3. What is unnecessary?
4. What is over-designed?
5. What is under-designed?
6. Does it feel like Mana Trendz Macha?
7. Does it look good without relying on animation?
8. Does the mobile version feel intentionally designed?
9. Is the product the visual focus?
10. Would a professional design team approve this?

Fix the highest-impact weaknesses.

---

# 41. CODE QUALITY

Avoid:

* `any`
* Giant components
* Duplicated markup
* Magic numbers
* Dead code
* Unnecessary client components
* Unnecessary dependencies
* Deeply nested conditionals
* Scattered configuration
* Hard-coded business information

Prefer:

* Strong TypeScript
* Small focused components
* Reusable utilities
* Centralized configuration
* Centralized product/store data
* Semantic HTML
* Maintainable architecture

---

# 42. DO NOT INVENT BUSINESS INFORMATION

If information is unknown, use:

* `Coming Soon`
* `Client information required`
* Clearly labelled demo content

Never fabricate and present as fact:

* Founder names
* Founding year
* Awards
* Number of stores
* Customer count
* Revenue
* Official policies
* Delivery promises
* Return policies
* Official social URLs
* Business claims

---

# 43. IMPLEMENTATION ORDER

Implement incrementally:

### Phase 1 — Foundation

* Repository inspection
* Theme
* Design tokens
* Global layout
* Navigation
* Footer
* Configuration

### Phase 2 — Homepage

* Hero
* Categories
* Product cards
* New arrivals
* Collections
* Store preview

### Phase 3 — Catalogue

* Men
* Kids
* Search
* Filters
* Product detail

### Phase 4 — Core POC Features

* WhatsApp
* Stores
* About
* Contact

### Phase 5 — Quality

* Responsive optimization
* Accessibility
* SEO
* Performance
* Animation refinement

### Phase 6 — Visual Polish

Perform a full visual review and fix the highest-impact problems.

---

# 44. ACCEPTANCE CRITERIA

The POC is complete only when:

* [ ] Homepage feels premium on first load
* [ ] Mana Trendz Macha branding is immediately recognizable
* [ ] Purple/indigo/yellow palette feels cohesive
* [ ] Website is genuinely responsive
* [ ] Navigation works
* [ ] Catalogue works
* [ ] Search works
* [ ] Filters work
* [ ] Product detail works
* [ ] WhatsApp enquiry works
* [ ] Store discovery works
* [ ] Product data is separated from UI
* [ ] No lorem ipsum exists
* [ ] No broken images exist
* [ ] No console errors exist
* [ ] No fabricated business claims are presented as facts
* [ ] Basic SEO exists
* [ ] Accessibility basics are implemented
* [ ] Performance has been reviewed
* [ ] Mobile UX has been reviewed
* [ ] The website does not look like an AI-generated template

---

# 45. FINAL CURSOR BEHAVIOUR

When implementing this project:

1. Inspect before modifying.
2. Reuse before rebuilding.
3. Do not rewrite the project unnecessarily.
4. Do not invent client information.
5. Do not blindly follow generic UI patterns.
6. Make reasonable decisions where ambiguity is minor.
7. Ask only when ambiguity materially affects architecture or brand direction.
8. Keep the implementation modular.
9. Keep the UI visually consistent.
10. Run the application after significant changes.
11. Fix errors before moving forward.
12. Perform visual QA before declaring work complete.

Most importantly:

**Do not optimize for generating more code.**

Optimize for creating a **better fashion brand experience**.

---

# FINAL QUALITY BAR

The final website should answer "YES" to all of these:

> Does this feel like a real fashion brand?

> Does this feel premium without pretending to be luxury?

> Does the brand identity feel intentional?

> Are products the hero?

> Does the colour system feel sophisticated?

> Does mobile feel first-class?

> Is the interaction polished?

> Is the code maintainable?

> Could this realistically be shown to the Mana Trendz Macha owner?

If the answer to any major question is "No":

**Do not declare the work finished. Fix it and review again.**
