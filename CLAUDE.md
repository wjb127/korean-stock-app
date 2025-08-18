# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture Overview

This is a Next.js 15 application built with React 19 and TypeScript, focusing on a Korean stock trading interface.

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **UI Components**: shadcn/ui components library (pre-configured in components/ui/)
- **Styling**: Tailwind CSS v4 with CSS variables
- **State Management**: React hooks and client-side state
- **Package Manager**: pnpm

### Project Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page rendering the stock trading interface
- `components/` - React components
  - `ui/` - shadcn/ui component library (extensive collection of pre-built components)
  - `stock-trading-interface.tsx` - Main stock trading application component
- `lib/utils.ts` - Utility functions including `cn()` for className merging
- `hooks/` - Custom React hooks

### Development Notes

The project uses shadcn/ui components configured via `components.json`:
- Style: new-york
- Base color: neutral
- Icon library: lucide-react
- Path aliases configured with @ prefix

The main application (`stock-trading-interface.tsx`) is a client component that displays Korean stock market data with filtering capabilities.

Build errors and TypeScript errors are currently ignored in production builds (see `next.config.mjs`).