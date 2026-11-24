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

## Project page extras

- **Hero images:** `hero:` in a project's frontmatter takes one path or a list shown side by side,
  with an optional `heroCaption:`. Without it, the thumbnail is used. A list inside the list is a
  column of square images stacked top to bottom; next to a single image, it's sized to match
  that image's height:
  ```yaml
  hero:
    - /projects/spm/poster.jpg
    - - /projects/spm/gif-1.mp4
      - /projects/spm/gif-2.mp4
      - /projects/spm/gif-3.mp4
  ```
- **Click to enlarge:** hero images, design-iteration images and images in write-ups open full size
  when clicked.
- **Design iterations:** create `src/content/versions/<project-id>.yaml` (e.g. `versions/spm.yaml`
  for `projects/spm.md`) to add a Compare / Generations section to that project page.
  `categories` are the rows, `versions` are the columns (oldest first). See `versions/spm.yaml`
  for a commented example. A category can have `notes:` (full-width footnotes, e.g. for `*` or `†`
  markers in spec values). Images go in `public/projects/<project-id>/`.

## Local preview

```bash
npm install
npm run dev
```
