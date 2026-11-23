# kiran-aman.github.io

Personal portfolio, built with [Astro](https://astro.build) and deployed to GitHub Pages
by `.github/workflows/deploy.yml` on every push to `main`.

## Editing

- **Name, intro, header links:** `src/site.ts` (empty links are hidden)
- **Resume:** put the PDF at `public/resume.pdf`
- **Add a project:** create `src/content/projects/<slug>.md` and put its images/GIFs in
  `public/projects/<slug>/`. Copy one of the existing files for the frontmatter fields.
  - `featured: true` → large entry under **Projects**; omit it → small tile under **Other work**
  - A project with body text gets its own page. One with no body links straight to `links.repo`.
  - `thumbnail` can be a `.png`, `.jpg`, `.gif`, `.mp4` or `.webm` (videos autoplay muted on loop,
    and are much smaller than GIFs)
  - `draft: true` hides a project

## Local preview

```bash
npm install
npm run dev
```
