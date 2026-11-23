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
  - `achievements:` is a list of short highlights shown on the home page and the project page:
    ```yaml
    achievements:
      - 1st place, NJIT Hackathon 2026
      - Reduced path-planning time by 40%
    ```
  - `draft: true` hides a project

## Local preview

```bash
npm install
npm run dev
```
