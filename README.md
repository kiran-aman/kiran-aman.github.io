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
  with an optional `heroCaption:`. Without it, the thumbnail is used; `hero: false` hides it. A list inside the list is a
  column of square images stacked top to bottom; next to a single image, it's sized to match
  that image's height:
  ```yaml
  hero:
    - /projects/spm/poster.jpg
    - - /projects/spm/gif-1.mp4
      - /projects/spm/gif-2.mp4
      - /projects/spm/gif-3.mp4
  ```
- **Banner:** a short full-width strip under the title, e.g. on the machining page:
  ```yaml
  banner:
    logo: /projects/machining/makerspace-logo-white.svg   # white logos work best
    alt: NJIT Makerspace
    text: Optional text on the right
    color: "#cc0000"                                      # default NJIT red; "none" = no
                                                          # background (red logo in light mode,
                                                          # white in dark mode, larger)
    image: /projects/machining/shop.jpg                   # optional darkened photo instead of color
  ```
- **Click to enlarge:** hero images, design-iteration images and images in write-ups open full size
  when clicked.
- **Design iterations:** create `src/content/versions/<project-id>.yaml` (e.g. `versions/spm.yaml`
  for `projects/spm.md`) to add a Compare / Generations section to that project page.
  `categories` are the rows, `versions` are the columns (oldest first). See `versions/spm.yaml`
  for a commented example. A category can have `notes:` (full-width footnotes, e.g. for `*` or `†`
  markers in spec values). Images go in `public/projects/<project-id>/`.

- **Curriculum and parts gallery:** create `src/content/parts/<project-id>.yaml` (see
  `parts/machining.yaml` for every field, with comments). Curriculum lessons show a photo next to
  the guide PDF (embedded on desktop, a tap-to-open card on phones) and are sorted by `order`.
  Gallery parts show in two columns; extra photos open with arrows; long `story` text gets
  "Read more".

## Write-up extras

- **Collapsible section** (starts collapsed). Keep the blank lines:
  ```html
  <details>
  <summary><h2>How it works</h2></summary>

  Normal Markdown here...

  </details>
  ```
  Add `open` (`<details open>`) to start it expanded.
- **Square image to the right of a paragraph:** put `![alt](/projects/spm/fig.jpg){.side}` on its
  own line just before the paragraph. It's cropped to 1:1 and moves above the text on phones.

- **Figure links:** give a figure an id, then link to it:
  ```markdown
  ![Torque curve](/projects/spm/torque.png){#fig-torque}

  As shown in [Fig. 2](#fig-torque), ...            ← scrolls to it (opens collapsed sections)
  See [the torque curve](#fig-torque){.zoom}.       ← pops it open full size
  See [the demo](/projects/spm/demo.mp4){.zoom}.    ← pops any file open, image or video
  ```
  Hero images already have ids: `#hero-1`, and `#hero-2-1`, `#hero-2-2`, ... for a stacked column.
- **Formatting in the versions YAML:** spec values, notes, summaries and improvements support
  **bold**, *italics*, links (including figure links and `{.zoom}`) and `$math$`. Smart punctuation
  is off everywhere (Markdown and YAML), so `0.5"`, quotes and `--` show exactly as typed.

## Math

Write LaTeX in any project write-up: `$\tau = J\ddot{\theta}$` inline, or a display equation:

```
$$
M(q)\ddot{q} + C(q,\dot{q})\dot{q} + G(q) = \tau
$$
```

It's rendered with KaTeX at build time (see `astro.config.mjs`). Math only works in the Markdown
body, not in frontmatter or the versions YAML.

## Local preview

```bash
npm install
npm run dev
```
