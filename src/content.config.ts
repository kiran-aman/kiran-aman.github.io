import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Used for sorting (newest first). Any date format like 2026-05 works.
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Short highlights shown on the home page and at the top of the project page.
    achievements: z.array(z.string()).default([]),
    // Path to a file in public/, e.g. /projects/rover/thumb.gif (png, jpg, gif, mp4, webm).
    thumbnail: z.string().optional(),
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
  }),
});

export const collections = { projects };
