import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Business & Finance', 'Technology']),
    summary: z.string(),
    seoTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    takeaways: z.array(z.string()).optional(),
    toc: z.array(z.object({
      label: z.string(),
      id: z.string()
    })).optional(),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts };
