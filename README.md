# Personal Portfolio Website

A modern, responsive personal website/semi-CV built with Angular 19, featuring a clean design and professional layout.

## 🎯 Key Features

### Centralized Content Management
- **Personal Information Service**: All personal details (name, email, location, social links, etc.) managed in one place
- **Text Dictionary Service**: All text strings (menu items, buttons, labels) centralized for easy updates and future i18n support

### Professional Design
- Clean, modern interface with consistent styling
- Responsive design that works on all devices
- CSS custom properties for easy theme customization
- Professional color scheme and typography

### Developer-Friendly Architecture
- Angular 19 with standalone components
- TypeScript for type safety
- SCSS for advanced styling
- Modular component structure

## 📁 Project Structure

```
src/app/
├── header/           # Navigation header component
├── hero/             # Main hero/about section  
├── footer/           # Site footer component
└── services/
    ├── personal-info.service.ts    # Centralized personal information
    └── text-dictionary.service.ts  # Centralized text management
```

## 🚀 Quick Setup

### 1. Update Your Personal Information
Edit `src/app/services/personal-info.service.ts` to add your details:
- Name, job title, location
- Contact information
- Social media links
- Tech stack and skills
- Profile photo

See `PERSONAL-INFO-GUIDE.md` for detailed instructions.

### 2. Customize Text and Wording
Edit `src/app/services/text-dictionary.service.ts` to customize:
- Navigation menu items
- Button labels and text
- Section headings
- Placeholder content

See `TEXT-DICTIONARY-GUIDE.md` for detailed instructions.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
