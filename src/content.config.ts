import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['Business Performance Reviews', 'Business Analysis & Strategy', 'Information Systems & Process Improvement']),
    summary: z.string(),
    seoTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    takeaways: z.array(z.string()).optional(),
    sources: z.array(z.object({ text: z.string(), url: z.string().url().optional() })).optional(),
    toc: z.array(z.object({ label: z.string(), id: z.string() })).optional(),
    image: z.string(),
    imageAlt: z.string(),
    advertorial: z.boolean().default(false),
    sponsor: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts };

