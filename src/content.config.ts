import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.string(),
    tags: z.array(z.string()).default([]),
    // Path to a file in public/, e.g. /projects/rover/thumb.gif (png, jpg, gif, mp4, webm).
    thumbnail: z.string().optional(),
    // Big image(s) at the top of the project page. One path, or a list shown side by side.
    // Defaults to the thumbnail when left out.
    hero: z.union([z.string(), z.array(z.string())]).optional(),
    heroCaption: z.string().optional(),
    // true = big entry in "Projects"; false = small tile in "Other work".
    featured: z.boolean().default(false),
    achievements: z.array(z.string()).default([]),
    links: z
      .object({
        repo: z.string().optional(),
        demo: z.string().optional(),
        paper: z.string().optional(),
      })
      .default({}),
    draft: z.boolean().default(false),
    order: z.number().default(0)
  }),
});

// Design iterations for a project: src/content/versions/<project-id>.yaml
// (e.g. versions/spm.yaml goes with projects/spm.md).
const categoryDetails = z.object({
  images: z.array(z.string()).default([]),
  specs: z.record(z.string(), z.coerce.string()).default({}),
  notes: z.string().optional(),
});

const versions = defineCollection({
  loader: glob({ pattern: '*.{yaml,yml}', base: './src/content/versions' }),
  schema: z
    .object({
      title: z.string().default('Design iterations'),
      // Rows of the comparison, in order.
      categories: z.array(
        z.object({
          id: z.string().regex(/^[a-z0-9-]+$/, 'use lowercase letters, numbers and dashes'),
          title: z.string(),
          specs: z.array(z.string()).default([]),
          // Footnotes shown full width under this category. One string or a list (one per line).
          notes: z.union([z.string(), z.array(z.string())]).optional(),
        }),
      ),
      // Columns of the comparison, oldest first.
      versions: z.array(
        z
          .object({
            name: z.string(),
            label: z.string().optional(),
            date: z.coerce.string().optional(),
            status: z.string().optional(),
            summary: z.string().optional(),
            links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
            improvements: z.array(z.string()).default([]),
          })
          // Every other key is a category id from the list above.
          .catchall(categoryDetails),
      ),
    })
    .superRefine((data, ctx) => {
      const ids = new Set(data.categories.map((c) => c.id));
      const fixed = new Set(['name', 'label', 'date', 'status', 'summary', 'links', 'improvements']);
      data.versions.forEach((v, i) => {
        for (const key of Object.keys(v)) {
          if (!fixed.has(key) && !ids.has(key)) {
            ctx.addIssue({
              code: 'custom',
              path: ['versions', i, key],
              message: `"${key}" is not a category id. Known ids: ${[...ids].join(', ')}`,
            });
          }
        }
      });
    }),
});

export const collections = { projects, versions };
