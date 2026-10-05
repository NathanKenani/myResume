# Nathan Kenani — Resume Website

A responsive, single-page application that presents Nathan Kenani’s professional profile, work experience, education, skills, languages, and contact information. The resume content is stored in a JSON asset and loaded by the Angular app, keeping the displayed information separate from the page components.

## Tech stack

- **Angular 22** with standalone components and Angular Router
- **TypeScript 6** and RxJS
- **Bootstrap 5.1** CSS and JavaScript bundle
- Component-level CSS and global CSS (no Sass/SCSS)
- **Karma and Jasmine** for unit testing
- **Vercel** deployment with an SPA rewrite for Angular routes

## Pages

- `/home` — profile introduction and a summary of recent experience
- `/experience` — work history and responsibilities
- `/history` — education, skills, and languages
- `/contact-us` — address, phone, and email links

The root path redirects to `/home`; unknown paths also return to `/home`.

## Resume content

Update `src/assets/data.json` to change the profile, contact details, experience, education, skills, or languages shown in the app. The content service loads this file at runtime.

## Run locally

From this directory (`myResume`):

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:4200/`.

## Build and tests

```bash
npm run build
npm test
```

The production build is written to `dist/myResume`.

## Deploy to Vercel

Set the Vercel project’s **Root Directory** to `myResume`. The `vercel.json` file rewrites incoming paths to `/index.html`, allowing Angular Router to handle direct visits and refreshes on app routes.

