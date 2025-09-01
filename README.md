# Jarida Website

[![Deploy to GitHub Pages](https://github.com/jaridahq/jarida/actions/workflows/deploy.yml/badge.svg)](https://github.com/jaridahq/jarida/actions/workflows/deploy.yml)

A modern, responsive website for Jarida - empowering African tech innovation through open-source solutions and global developer communities.

## 🌟 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Multi-language Support**: English and Kiswahili (Swahili)
- **Brand Perfect**: Exact Jarida brand colors and typography
- **Mobile First**: Responsive design for all devices
- **SEO Optimized**: Meta tags, Open Graph, and performance optimized
- **Accessibility**: WCAG AA compliant
- **Fast Loading**: Code splitting and optimized assets

## 🎨 Brand Guidelines

### Colors (EXACT VALUES)
- **Jarida Purple**: `#8C52FF` (primary buttons, highlights)
- **Jarida Charcoal**: `#171616` (headings, text)
- **Jarida White**: `#fff9f9` (text on dark backgrounds)
- **Light Grey**: `#F5F5F5` (backgrounds, dividers)
- **Accent White**: `#FFFFFF` (high contrast text)

### Typography
- **Comfortaa**: Primary headings
- **Inter**: Body text
- **Quicksand**: Accent elements

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaridahq/jarida.git
   cd jarida/jarida-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌍 Internationalization

The website supports multiple languages:

- **English** (`en`) - Default
- **Kiswahili** (`sw`) - Swahili translation

Translation files are located in `public/locales/` and the language switcher is available in the header.

## 🔧 Development

### Project Structure
```
src/
├── components/           # React components
│   ├── common/          # Reusable components
│   ├── layout/          # Layout components
│   ├── sections/        # Page sections
│   └── ui/             # UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── assets/             # Static assets
└── types/              # TypeScript types
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large screens**: 1440px+

## ⚡ Performance

- **Lighthouse Score**: 90+ for Performance, Accessibility, Best Practices, and SEO
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components
- **Optimized Fonts**: Preloaded Google Fonts
- **Compressed Assets**: Build optimization

## 🚀 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions when code is pushed to the main branch.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   The `dist` folder contains all the static files ready for deployment.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](../../CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## 🌍 Community

- **Website**: [https://jaridahq.github.io/jarida/](https://jaridahq.github.io/jarida/)
- **GitHub**: [https://github.com/jaridahq](https://github.com/jaridahq)
- **Email**: hello@jarida.dev

## 🙏 Acknowledgments

- All contributors who have helped build this project
- The amazing African tech community
- Open source libraries that make this possible

---

Made with ❤️ in Africa for the World