This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

## Tech Stack

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Shadcn UI](https://ui.shadcn.com) – Motion library for React to animate components with ease
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance

## How To Run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Code Style Conventions and Best Practices

### Best Practices

#### Container and Presentational Components

To follow the separation of concerns principle by differentiating between container components (handling logic and data) and presentational components (handling UI) we have the structure below:

```
components/
|-- ui/
  |-- button.tsx
  |-- dropdown-menu.tsx
  theme-provider.tsx
  theme-toggle.tsx
```

### Files and Components Naming Convention

Files should be named using kebab-case and components should use PascalCase;

### Utility Files

Utility files or helper functions should be placed inside lib folder in the project root.

```
lib/
|-- utils.ts
|-- other-file.ts
```

### Testing

To be done
