---
name: Mana Trendz Macha
description: Gold foil on black — neighbourhood fashion floor, WhatsApp-first.
colors:
  void: "#050505"
  ivory: "#f4ead0"
  gold: "#d4af37"
  gold-bright: "#f3e0a3"
  gold-deep: "#8a6a1f"
  card: "#100e0a"
  border: "#2c2618"
  muted: "#c4b48a"
typography:
  display:
    fontFamily: "Bodoni Moda, Times New Roman, serif"
    fontSize: "clamp(2.7rem, 6vw, 5.4rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bodoni Moda, Times New Roman, serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Sora, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.22em"
rounded:
  sm: "0px"
  md: "2px"
  lg: "4px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "64px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "#0a0906"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.gold-bright}"
    textColor: "#0a0906"
  button-ghost-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.gold-bright}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    height: "48px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.md}"
---

# Design System: Mana Trendz Macha

## Overview

**Creative North Star: "Gold foil on a black boutique bag"**

The storefront is a Hyderabad fashion floor after dark. Black is the field; metallic gold is the lockup, the stitch, and the action. The official MTM mark — serif monogram, shopping-bag silhouette, crescent arc, tracked sans name, hairline and diamond — is the identity. Do not invent a wordmark to replace it.

The previous indigo / purple / yellow system is anti-reference. Photography sits in shadow; type is ivory; primary actions are gold foil, not neon.

**Key Characteristics:**

- Official logo, top-left, on void black
- Bodoni Moda display, Sora body
- Metallic gold CTAs with a foil gradient
- Hairline + diamond divider taken from the logo lockup
- WhatsApp as the conversion control, not checkout

## Colors

Committed gold on black. Gold is a surface for buttons and a line for rules, not a wash over photography.

### Primary
- **Foil gold** (`#d4af37`): buttons, active nav, icons, foil rules
- **Champagne** (`#f3e0a3`): hover highlights, metallic button top
- **Bronze** (`#8a6a1f`): gradient foot of foil

### Neutral
- **Void** (`#050505`): page, hero overlay, footer, photography scrim
- **Ivory** (`#f4ead0`): body and display type
- **Card ink** (`#100e0a`): product and store panels
- **Warm brass mute** (`#c4b48a`): secondary copy

Selection, caret, and scrollbar thumb use foil gold on void.

## Typography

Display is Bodoni Moda at medium weight — the MTM serif, not a heavy poster cut. Body is Sora, matching the tracked sans under the monogram. Labels are Sora at 11px, 0.22em tracking, uppercase — used for nav and category ticks, never as a kicker stacked above a heading.

Headings stay at or above the body; more space above a heading than below it.

## Layout

Max width 1440px. Page gutter 24 / 40 / 64 / 96 / 128. Sections 64px block, 96px from `md`. Header 68px (`lg` 76px), sticky, logo first and inset with the same gutter as body copy. Hero pulls under the header. Street Style and other edits sit inside that gutter rather than full-bleed. Catalogue is filter column plus grid. Product is gallery | facts.

## Elevation & Depth

Tonal, not shadowed. Photography is the depth. Cards use a 1px warm border (`#2c2618`) on `#100e0a`, not a halo. Header uses a 1px gold-tinged rule when scrolled.

## Shapes

Tailored, almost sharp: 2px default radius. Foil mark is a hairline interrupted by a 45° gold square. Display headings may carry a 1.5px gold foil rule on the left — that line is the logo's divider, not a generic callout bar.

## Components

- **Logo:** `/brand/mtm-logo.png` in the header (top-left) and footer. Never a stacked type lockup.
- **Primary button:** foil gradient (`#f6e7b2` → `#d4af37` → `#9a7518`), black label, uppercase tracked, shine on hover.
- **On-dark button:** transparent, gold hairline, champagne label.
- **Nav:** tracked labels, gold underline on active/hover.
- **Product card:** 3:4 image, hover swap, void "View look" bar in gold type.
- **Sheets / dialogs:** void field, 70% black overlay.

## Do's and Don'ts

**Do**

- Put the official logo top-left on black
- Keep WhatsApp as the primary conversion
- Label demonstration inventory, stores, and the WhatsApp number
- Pair Bodoni headings with Sora UI

**Don't**

- Reintroduce indigo, purple, or brand yellow `#FFD21C`
- Replace the logo with a CSS wordmark
- Invent founder names, awards, store counts, or live social URLs
- Add checkout, UPI, or accounts
- Stack a kicker above a heading
