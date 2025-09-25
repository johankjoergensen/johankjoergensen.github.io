# Personal Portfolio - Vue + Vuetify

A modern, responsive personal website/portfolio built with Vue 3, Vuetify, and TypeScript.

## 🎯 Key Features

### Centralized Content Management
- **Personal Information Composable**: All personal details managed in `usePersonalInfo()` composable
- **Text Dictionary Composable**: All text strings centralized in `useTextDictionary()` composable
- **Type Safety**: Full TypeScript support with proper interfaces

### Modern Tech Stack
- **Vue 3**: Latest Vue with Composition API
- **Vuetify 3**: Material Design component library
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **GitHub Pages Ready**: Configured for easy deployment

### Professional Design
- **Material Design**: Clean, professional UI with Vuetify
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Scrolling**: Elegant navigation between sections
- **Custom Theming**: Easy to customize colors and styling

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Your Personal Information
Edit `src/composables/usePersonalInfo.ts`:
- Name, job title, location
- Contact information  
- Social media links
- Tech stack and skills
- Profile photo

### 3. Customize Text and Wording
Edit `src/composables/useTextDictionary.ts`:
- Navigation menu items
- Button labels and text
- Section headings
- Placeholder content

### 4. Start Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

### 6. Deploy to GitHub Pages
```bash
npm run github-build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── AppHeader.vue     # Navigation header with mobile support
│   ├── AppHero.vue       # Main hero section
│   └── AppFooter.vue     # Site footer
├── composables/
│   ├── usePersonalInfo.ts    # Personal info management
│   └── useTextDictionary.ts  # Text content management
├── views/
│   └── HomeView.vue      # Main page layout
├── router/
│   └── index.ts          # Vue Router configuration
├── App.vue               # Root component
└── main.ts               # Application entry point
```

## 🎨 Customization

### Personal Information
The `usePersonalInfo()` composable manages:
- Basic info (name, title, description)
- Contact details (email, phone, location)
- Social media links with Material Design icons
- Professional tech stack
- Profile image and availability status

### Text Dictionary
The `useTextDictionary()` composable handles:
- Navigation menu labels
- Button text and CTAs
- Section headings and titles
- Placeholder content
- Accessibility labels

### Vuetify Theming
Customize the theme in `src/main.ts`:
- Primary and secondary colors
- Light/dark theme support
- Material Design color palette
- Custom CSS variables

## 📱 Components Overview

### AppHeader.vue
- Fixed navigation bar with transparency effect
- Mobile-responsive with drawer navigation
- Smooth scroll to sections
- Active section highlighting

### AppHero.vue
- Eye-catching hero section with gradient background
- Profile image or avatar placeholder
- Call-to-action buttons (Contact, Download CV)
- Location and availability status chips

### AppFooter.vue
- Comprehensive footer with multiple sections
- Contact information and social links
- Quick navigation links
- Tech stack display with chips
- Copyright and custom footer note

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Lint and format
npm run lint
npm run format

# Build for GitHub Pages
npm run github-build
```

## 🌐 GitHub Pages Deployment

The project is pre-configured for GitHub Pages:
1. Run `npm run build`
2. Built files go to `docs/` folder
3. Configure GitHub Pages to serve from `docs/` folder
4. Your site will be available at `username.github.io/repository-name`

## 🎯 Migration from Angular

This Vue version preserves the excellent architecture from the original Angular application:
- Same personal info and text dictionary concepts
- Equivalent component structure (Header, Hero, Footer)
- Identical content management approach
- Similar styling and responsive design

The Vue implementation offers:
- Simpler syntax with Composition API
- Smaller bundle size
- Material Design with Vuetify
- Faster development experience

Your content management workflow remains the same - update once, changes everywhere! 🚀