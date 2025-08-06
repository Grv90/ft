# Provider Management System

A modern Next.js application for managing internet service providers with a comprehensive design system.

## 🚀 Features

- **Provider Management**: Browse and compare internet service providers
- **Design System**: Complete component library with documentation
- **Modern UI**: Built with SCSS and custom design tokens
- **API Integration**: RESTful API with mock data
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
src/
├── app/
│   ├── providers/              # 📋 Provider management feature
│   │   ├── components/         # Provider-specific components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── images/            # Provider logos and assets
│   │   └── page.tsx           # Provider list page
│   ├── tools/
│   │   └── design-system/     # 🎨 Design system documentation
│   ├── api/                   # 🔌 API routes
│   │   └── providers/
│   │       └── route.ts       # Provider API endpoints
│   └── layout.tsx             # 📄 Root layout
├── components/                # 🧩 Shared UI components
│   ├── Button/
│   ├── Card/
│   ├── Chip/
│   ├── Input/
│   ├── Navbar/
│   └── ...
├── styles/                    # 🎨 Design system
│   ├── _design-system.scss    # Single entry point for all styles
│   ├── _tokens.scss          # Design tokens
│   ├── _variables.scss       # Design variables
│   ├── _mixins.scss          # Utility mixins
│   └── main.scss             # Main stylesheet
├── lib/                      # 📚 Shared utilities
│   ├── services/             # API services
│   ├── types/                # TypeScript types
│   └── utils/                # Utility functions
└── store/                    # 🗄️ State management
    ├── slices/               # Redux slices
    └── hooks/                # Redux hooks
```

## 🎯 Key URLs

- **Home**: `/` - Frontend Developer Challenge Landing Page with "Providers" and "Design System" buttons
- **Providers**: `/providers` - Provider Management Feature
- **Design System**: `/tools/design-system` - Component Documentation

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ft
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

The project includes a comprehensive design system with:

- **Typography**: Consistent font scales and weights
- **Colors**: Semantic color palette with CSS custom properties
- **Spacing**: Systematic spacing scale
- **Components**: Reusable UI components
- **Documentation**: Live design system at `/tools/design-system`

### Using Design System Variables

Import the design system in any SCSS file:

```scss
@import "../../styles/design-system";

.my-component {
  padding: $spacing-md;
  color: $text-primary;
  font-size: $font-size-base;
}
```

## 🔌 API

The application includes a RESTful API with mock data:

- `GET /api/providers` - Fetch all providers
- Mock data includes provider details, pricing, and features

## 🧩 Components

### Core Components

- **Button**: Multiple variants (primary, secondary, subtle)
- **Card**: Flexible content containers
- **Chip**: Status and category indicators
- **Input**: Text, dropdown, and date picker inputs
- **Navbar**: Navigation header
- **Table**: Data display component

### Provider Components

- **ProvidersList**: Main provider listing
- **ProviderPurchaseForm**: Purchase workflow
- **ProviderOverlay**: Modal overlays

## 🗄️ State Management

Uses Redux Toolkit for state management:

- Provider purchase form state
- UI state management
- API data caching

## 📱 Responsive Design

Built with mobile-first approach using:

- CSS Grid and Flexbox
- Responsive breakpoints
- Touch-friendly interactions

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js
