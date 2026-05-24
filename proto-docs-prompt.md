# Proto Docs — Claude Code Prompt
> Paste this into Claude Code inside a fresh `proto-docs/` folder.
> Replace [username] and [handle] with your GitHub username and X handle before pasting.

---

```
Build a documentation site for Proto at docs.prototo.app.

Stack: Mintlify. All docs written in MDX.
Tone: designer-first. No engineering jargon. Plain language only.
Never mention Metro, bundlers, React Native internals, or package 
versions. If something is technical, explain the outcome not the mechanism.

── SETUP ────────────────────────────────────────────

Initialize a Mintlify docs project with this structure:

docs/
├── mint.json
├── introduction.mdx
├── getting-started/
│   ├── install.mdx
│   ├── first-prototype.mdx
│   └── two-windows.mdx
├── design-system/
│   ├── design-md.mdx
│   ├── themes.mdx
│   └── component-library.mdx
├── prompting/
│   ├── prompt-guide.mdx
│   └── example-prompts.mdx
└── reference/
    ├── cli.mdx
    └── troubleshooting.mdx

── MINT.JSON ────────────────────────────────────────

{
  "name": "Proto",
  "logo": {
    "light": "/logo/light.svg",
    "dark": "/logo/dark.svg"
  },
  "favicon": "/favicon.svg",
  "colors": {
    "primary": "#00A090",
    "light": "#00A090",
    "dark": "#00A090"
  },
  "topbarLinks": [
    { "name": "GitHub", "url": "https://github.com/[username]/proto" }
  ],
  "topbarCtaButton": {
    "name": "prototo.app",
    "url": "https://prototo.app"
  },
  "navigation": [
    {
      "group": "Start here",
      "pages": [
        "introduction",
        "getting-started/install",
        "getting-started/first-prototype",
        "getting-started/two-windows"
      ]
    },
    {
      "group": "Design system",
      "pages": [
        "design-system/design-md",
        "design-system/themes",
        "design-system/component-library"
      ]
    },
    {
      "group": "Prompting",
      "pages": [
        "prompting/prompt-guide",
        "prompting/example-prompts"
      ]
    },
    {
      "group": "Reference",
      "pages": [
        "reference/cli",
        "reference/troubleshooting"
      ]
    }
  ],
  "footerSocials": {
    "x": "https://x.com/[handle]",
    "github": "https://github.com/[username]/proto"
  }
}

── PAGE CONTENTS ────────────────────────────────────

Write each page fully. Designer voice throughout.
No bullet walls. Short paragraphs. Show > tell.

---

introduction.mdx

Title: What is Proto?
Subtitle: The native prototype tool with no canvas.

Content:

Proto is a prototyping tool for designers who want to feel their 
ideas on a real device — without learning React Native, without 
waiting for an engineer, and without opening Xcode beyond installing it once.

You describe what you want. It appears on your iPhone Simulator.
That's the whole product.

**The three surfaces**

Proto lives across three surfaces and nothing else:

- Terminal window 1 — runs Proto in the background. Open once, leave it.
- Terminal window 2 — runs Claude Code. This is your design tool.
- iOS Simulator — this is your canvas. Describe → see → describe again.

No Figma canvas. No IDE. No layers panel. Just prompts and a Simulator.

**Who it's for**

Proto is for product designers who:
- Prototype at native fidelity (real haptics, real Liquid Glass, 
  real scroll physics)
- Want to test interactions before involving engineers
- Work on iOS apps and need to feel iOS 26 design language on a device

**What it's not**

Proto is not a production tool. It doesn't generate code you ship.
It generates prototypes you test, share, and hand off.
The handoff to engineers is a DESIGN.md file and a folder of screens —
both readable, both useful.

---

getting-started/install.mdx

Title: Install Proto
Subtitle: One-time setup. Takes about 10 minutes.

Content:

## Before you start

Proto runs on macOS and uses the iOS Simulator.
You need two things installed before Proto will work.
Both are free. Both are one-time.

## Step 1 — Install Node.js

Node.js is the engine Proto runs on.
Download the LTS version from nodejs.org and install it.
You'll know it worked when you can open Terminal and type:

```bash
node --version
```

If you see a version number, you're done.

## Step 2 — Install Xcode

Xcode is Apple's developer tool. Proto uses its iOS Simulator —
the iPhone preview that runs on your Mac.
You never need to open Xcode itself. Just install it.

Download Xcode free from the Mac App Store:
[Download Xcode →](https://apps.apple.com/app/xcode/id497799835)

After installing, open Terminal and run this once:

```bash
xcode-select --install
```

This installs the command line tools Xcode needs to run the Simulator.

<Note>
Xcode is ~8GB. Plan for 20-40 minutes depending on your connection.
</Note>

## Step 3 — Install Claude Code

Claude Code is the AI tool you'll use to describe screens and 
generate prototypes. It's what replaces the design canvas.

Install it by running:

```bash
npm install -g @anthropic-ai/claude-code
```

You'll need an Anthropic account to use it.
Sign up at claude.ai if you don't have one.

## Step 4 — Create your first Proto project

Once the above are done:

```bash
npm create proto@latest myapp
```

The iOS Simulator will open automatically.
You'll see a screen that says "Welcome to Proto."

That's it. You're ready.

---

getting-started/first-prototype.mdx

Title: Your first prototype
Subtitle: From zero to a native screen in under 5 minutes.

Content:

Once Proto is installed and your Simulator is open,
open a second Terminal window and navigate to your project:

```bash
cd myapp
claude
```

You're now in Claude Code inside your Proto project.
Claude Code has already read your DESIGN.md and CLAUDE.md —
it knows your design system, your component library, 
and the rules for generating screens.

## Describe your first screen

Type this into Claude Code:

```
add a home screen with a balance card showing $4,280.00 
at the top, three quick action buttons (Send, Receive, Top Up) 
below it, and a recent transactions list with 4 items
```

Watch the Simulator. In about 10 seconds your screen appears.

Real native layout. Real scroll physics. Your design system applied automatically.

## Iterate with prompts

Keep describing. Claude Code keeps generating.

```
make the quick action buttons pill-shaped with an icon 
above the label, arranged in a row with equal spacing
```

```
add a bottom navigation bar with Home, Cards, 
Activity and Profile tabs
```

```
add a settings screen with toggles for notifications, 
dark mode, and Face ID
```

Each prompt updates the Simulator in seconds.
You never touch a file.

---

getting-started/two-windows.mdx

Title: The two-window model
Subtitle: This is the whole workflow. Nothing else needed.

Content:

Proto runs across two Terminal windows and a Simulator.
Once you understand this, the whole product makes sense.

## Window 1 — Proto

```bash
proto start
```

This starts Proto and opens the Simulator.
Leave this window running. You never type in it again.

On first run it will print:

```
◆ Proto
│
◇ Simulator is open
│
◇ Next → open a new terminal window, navigate to 
│ this folder, and type: claude
│ That's your design tool. Describe what you want.
│
└ Proto is running. Keep this window open.
```

## Window 2 — Claude Code

```bash
cd myapp
claude
```

This is your design tool. Everything you describe here 
appears in the Simulator.

Claude Code reads your DESIGN.md before every response —
so it already knows your colours, typography, spacing, 
and component library. You don't repeat yourself.

## The Simulator

This is your canvas. The only thing you look at.

Tap to test interactions. Watch it update after every prompt.
When it looks right, share it.

## The complete workflow

```
proto start          → Simulator opens       (Window 1, leave it)
cd myapp && claude   → Claude Code opens     (Window 2, stay here)
describe a screen    → Simulator updates     (look here)
describe a change    → Simulator updates     (look here)
proto share          → QR code appears       (send to stakeholders)
```

That's Proto. Five lines. No more complexity than this.

---

design-system/design-md.mdx

Title: DESIGN.md
Subtitle: Your design system in plain language.

Content:

Every Proto project has a DESIGN.md file at the root.
This is your design system. Claude Code reads it before 
generating every screen.

You never need to set tokens manually. You describe what 
you want and Claude Code writes DESIGN.md for you.

## Set up your design system

Run this in your project folder:

```bash
proto design
```

Answer three questions:
1. Which theme? (Liquid Glass / Material You / Base)
2. Accent colour?
3. App name?

Proto generates a complete DESIGN.md with all the right values.

## What DESIGN.md contains

```markdown
## App
- Name: My App
- Theme: liquidGlass
- Platform: iOS

## Component Library
- Package: proto (built-in)
- Import from: ../components/proto
- Fallback: proto

## Colour
- Accent: #007AFF
- Surface primary: rgba(255,255,255,0.72)
- Text primary: #000000
- Destructive: #FF3B30

## Typography
- Title: 34px / bold / tracking -0.4
- Body: 17px / regular

## Spacing
- xs: 4 / sm: 8 / md: 16 / lg: 24 / xl: 32

## Shape
- Card radius: 22
- Button radius: 14

## Screens
- Home (initial) — starter screen
```

## Update your design system with prompts

Never edit DESIGN.md manually. Just describe the change:

```
update DESIGN.md — change the accent colour to indigo 
and tighten the card radius to 16
```

```
regenerate the Home and Settings screens with the 
updated design system
```

Claude Code updates the file and rewrites the affected screens.
The Simulator reflects the changes instantly.

---

design-system/themes.mdx

Title: Themes
Subtitle: Liquid Glass, Material You, and Base.

Content:

Proto ships with three themes. Pick one when you run proto design.

## Liquid Glass

Apple's iOS 26 design language. Translucent surfaces, blur effects,
glass cards, the navigation bar as frosted glass.

This is the right choice if you're designing for iOS 26 and want 
to feel what Liquid Glass actually looks like on a real device —
without a single line of SwiftUI.

Uses @expo/ui/swift-ui under the hood with Apple's native 
glassEffect modifier. This is the real thing, not an approximation.

## Material You

Google's design language for Android. Dynamic colour, 
rounded surfaces, Material 3 components.

Right for Android-first teams or cross-platform projects.

## Base

No theme. Clean defaults. Useful when you're bringing 
your own component library and don't want any preset styling.

## Switching themes

```
update DESIGN.md — switch the theme to Material You 
and update the colour palette accordingly
```

---

design-system/component-library.mdx

Title: Component library
Subtitle: Use Proto's built-in components or bring your own.

Content:

Every screen Claude Code generates is built from components.
By default it uses Proto's built-in component library.
If your team has its own library, you can use that instead.

## Proto built-in components

These are available in every new project:

| Component | What it does |
|-----------|--------------|
| Screen | Base wrapper with safe area and optional scroll |
| Stack | Vertical layout with gap control |
| Row | Horizontal layout |
| Text | Typography — title, headline, body, caption, label |
| Card | Surface container, optional Liquid Glass |
| Button | Primary, secondary, ghost, destructive |
| Toggle | iOS native switch |
| Nav | Bottom navigation bar |
| Modal | Bottom sheet |
| Divider | Separator |

## Using your team's component library

If your production app uses Tamagui, Gluestack, React Native Paper,
or a custom internal library — you can prototype with the exact 
same components your engineers use.

Run proto design and select your library, or tell Claude Code:

```
update DESIGN.md — switch the component library to Tamagui.
Package is @tamagui/core, import from @tamagui/core.
Then regenerate the Home screen using Tamagui components.
```

Proto installs the package and Claude Code generates screens 
using your actual production components. The prototype looks 
like the real product because it uses the real parts.

---

prompting/prompt-guide.mdx

Title: How to prompt Proto
Subtitle: Describe what you want. Be specific about layout and feel.

Content:

Proto works with Claude Code. You type in plain language.
The better your description, the closer the output to what you imagined.

## The basics

Describe screens the way you'd describe them to a designer:
what's on it, where things are, what they do.

```
add a profile screen with a large avatar at the top, 
the user's name and bio below it, and a grid of 
their recent posts underneath
```

## Be specific about layout

Vague prompts get reasonable guesses. Specific prompts get 
what you actually want.

❌ "add a card"
✅ "add a card with a blurred glass background, the merchant 
   name at the top, transaction amount large in the centre, 
   and a category tag at the bottom"

## Describe interactions

```
when the user taps the card, push a transaction 
detail screen with the full breakdown
```

```
the bottom nav should be fixed with a Liquid Glass 
blur background
```

## Update existing screens

```
on the settings screen, move the sign out button 
to the bottom and make it destructive red
```

```
make the home screen header larger and add a 
greeting — "Good morning, Priya"
```

## Update the design system

```
change the accent colour to #5856D6 and update DESIGN.md
```

```
regenerate all screens with the updated design tokens
```

## What doesn't work well

Proto generates screens from descriptions. It's not great at:
- Pixel-perfect positioning ("move this 4px to the left")
- Complex custom animations beyond standard transitions
- Data that changes in real time

For micro-adjustments, be more descriptive rather than precise:
"make the spacing between the card and the button feel tighter"
works better than "set margin to 12px".

---

prompting/example-prompts.mdx

Title: Example prompts
Subtitle: Copy, paste, adapt.

Content:

These all work. Use them as starting points.

## Screens

```
add a home screen with a large hero image at the top, 
a welcome message, and three feature cards below it
```

```
add a settings screen with sections for Account, 
Notifications, Appearance, and Privacy — each section 
has a header and 2-3 toggle rows
```

```
add an onboarding screen — full bleed background, 
large headline, short description, primary button 
at the bottom, and a "skip" link in the top right
```

```
add a checkout screen with an order summary card, 
delivery address row, payment method row, and a 
sticky confirm button at the bottom
```

```
add an empty state screen for a search with no results — 
centred illustration placeholder, headline "Nothing found", 
short message, and a button to clear the search
```

## Navigation

```
add a bottom nav with Home, Search, Saved, and Profile tabs
```

```
add a top navigation bar with a back button on the left, 
the screen title centred, and a share icon on the right
```

## Interactions

```
when the user taps the notification card, push a 
notification detail screen
```

```
when the user taps the avatar, show a modal with 
Edit Profile and Sign Out options
```

## Design system

```
run proto design — set the theme to Liquid Glass, 
accent colour #00A090, app name My App
```

```
update DESIGN.md — change the card radius to 16 
and the accent to indigo
```

```
regenerate the Home screen with the updated design tokens
```

## Shared components

```
create a shared UserAvatar component that shows initials 
as a fallback when no image is set, then use it in 
the Home and Profile screens
```

---

reference/cli.mdx

Title: CLI reference
Subtitle: Every Proto command.

Content:

## proto start

Starts Proto and opens the iOS Simulator.

```bash
proto start
```

Keep this running while you work. Open a second terminal 
window and type claude to start designing.

Add --verbose to see detailed output if something breaks:

```bash
proto start --verbose
```

---

## proto design

Sets up your design system interactively.

```bash
proto design
```

Asks three questions — theme, accent colour, app name —
and generates DESIGN.md. Run it once per project,
or again when you want to change the design system.

---

## proto new-screen

Creates a new empty screen.

```bash
proto new-screen Profile
```

With a template:

```bash
proto new-screen Profile --template list
```

Templates: home, list, detail, form, modal

---

## proto remove

Removes a screen.

```bash
proto remove Profile
```

---

## proto snapshot

Saves a named version of your current prototype.

```bash
proto snapshot "v1 — stakeholder review"
```

---

## proto share

Shares your prototype via a QR code link.

```bash
proto share
```

Generates a prototo.app/p/[token] URL and prints a QR code.
Stakeholders scan it and the prototype opens on their device.

---

## proto reset

Fixes most things when something breaks.

```bash
proto reset
```

Clears the cache, restarts the environment, 
reopens the Simulator. Use this before asking for help.

---

reference/troubleshooting.mdx

Title: Troubleshooting
Subtitle: Most problems have a one-line fix.

Content:

## Something looks broken in the Simulator

```bash
proto reset
```

This fixes 90% of issues. It clears the cache and 
restarts everything cleanly.

## "A component couldn't be found"

Claude Code generated a screen that references something 
that doesn't exist. Ask Claude Code to fix it:

```
fix any errors in the [ScreenName] screen
```

## The Simulator isn't opening

Make sure Xcode is installed and you've run:

```bash
xcode-select --install
```

Then try:

```bash
proto reset
```

## Claude Code isn't reading my design system

Make sure CLAUDE.md and DESIGN.md are at the root of your 
project folder — not inside any subfolder.

Open Claude Code from inside the project folder:

```bash
cd myapp
claude
```

## proto design isn't working

Make sure you're inside a Proto project folder:

```bash
cd myapp
proto design
```

## I need to start fresh

Delete the project folder and run:

```bash
npm create proto@latest myapp
```

## Still stuck?

Open an issue on GitHub:
github.com/[username]/proto/issues

Or reach out via prototo.app

── DEPLOYMENT ───────────────────────────────────────

After generating all pages:

1. Run: npx mintlify dev
   Verify every page renders correctly locally

2. Add to mint.json:
   "subdomain": "proto-docs"
   (or set up custom domain docs.prototo.app 
   in Mintlify dashboard)

3. Push to GitHub — Mintlify auto-deploys from the repo

4. In the Mintlify dashboard:
   Add custom domain: docs.prototo.app

5. In your domain registrar DNS:
   Add CNAME: docs → [mintlify provided target]

6. Add docs link to prototo.app nav
   Update package.json:
   "docs": "https://docs.prototo.app"

── WRITING RULES ────────────────────────────────────

Apply these to every page before finishing:

- Never say: "leverage", "robust", "seamless", "powerful"
- Never explain what Metro is
- Never mention React Native primitives or JSX
- Never use bullet walls — max 3 bullets then switch to prose
- Code blocks for every command — never inline code in prose
- Every page ends knowing what to do next
- If a step can fail, say what to do when it fails
- Short paragraphs — 2-3 sentences maximum
- Active voice — "run this", "type this", "watch the Simulator"
```
