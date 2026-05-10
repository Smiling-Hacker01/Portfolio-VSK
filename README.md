# Vishal's Developer Portfolio

A production-grade, single-page developer portfolio built with React (Vite), TypeScript, and Tailwind CSS.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## ✏️ Customization

All personal data, skills, projects, and work experience are managed from a single source of truth:
`src/data/portfolio.ts`

To update your portfolio content, you ONLY need to edit this file. The TypeScript interfaces will guide you on the required data shapes.

### Updating your Resume Link
In `src/data/portfolio.ts`, update the `greeting.resumeLink` property to your Google Drive PDF link:
```typescript
export const greeting: Greeting = {
  // ...
  resumeLink: "https://drive.google.com/...", 
};
```

## 🌐 Deployment

### Vercel (Recommended)
This repository includes a `vercel.json` file for automatic one-click deployment to Vercel. 
1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Vercel will automatically detect the Vite setup and deploy your portfolio.

### GitHub Pages
To deploy to GitHub Pages, run:
```bash
npm run deploy
```
Make sure your `package.json` name and homepage are configured correctly for GitHub Pages if deploying to a subpath.
