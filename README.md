# Nivetha Ponnambalam - Portfolio

A modern, interactive portfolio website built with React, featuring elegant animations, a Japanese-inspired aesthetic with floating sakura petals, and a showcase of featured projects.

## Features

- **Interactive Sakura Petals**: Toggle-able floating sakura petal animation background
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Modern UI**: Glassmorphism effects and elegant styling with Styled Components
- **Project Showcase**: Featured work including AI development, design systems, and prototyping
- **Contact Integration**: Direct links to professional profiles and contact methods

##  Tech Stack

- **Frontend**: React 19.2.4
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Testing**: Jest, React Testing Library
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nive1991/nivetha-ponnambalam.git
cd nivetha-ponnambalam
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 📁 Project Structure

```
src/
├── components/
│   ├── About/
│   │   └── About.jsx
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── ContactNew.jsx
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── HeroNew.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── Projects/
│   │   ├── ProjectCard.jsx
│   │   └── Projects.jsx
│   └── Sakura/
│       └── SakuraCanvas.jsx
├── styles/
│   ├── GlobalStyles.js
│   └── themes.js
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── reportWebVitals.js
└── setupTests.js
```

## Customization

### Theme Colors

The app uses a custom theme defined in `src/styles/themes.js`. Key colors include:
- Sakura pink for accents
- Lavender for headings
- Matcha green for secondary elements
- Glassmorphism effects for cards

### Sakura Petals

The floating sakura petals can be controlled via the navbar toggle. The animation intensity and density are configurable in the `SakuraCanvas` component.

##  Components
### Core Components

- **Navbar**: Navigation with petal toggle control
- **Hero**: Main introduction section with animated title
- **About**: Personal information and background
- **Projects**: Showcase of featured work with external links
- **Contact**: Contact information and professional links
- **SakuraCanvas**: Animated background petal effect

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Tests are written using Jest and React Testing Library, covering component rendering and user interactions.

## Deployment

Build for production:
```bash
npm run build
```

The build artifacts will be stored in the `build/` directory, ready for deployment to any static hosting service.

