import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // IDs include the language folder so translated entries can share a public slug.
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    language: z.enum(['en', 'de']).default('en'),
    title: z.string(),
    description: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional(),
    order: z.number().default(100),
    year: z.string().optional(),
    status: z.string().optional(),
    category: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    repository: z.string().url().optional(),
    live: z.string().url().optional(),
    cover: z.object({ src: z.string(), alt: z.string() }).optional(),
    images: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).default([]),
    example: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
