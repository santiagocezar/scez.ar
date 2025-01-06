import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/projects" }),
    schema: ({ image }) => z.object({
        order: z.number(),
        thumbsrc: image(),
        thumbalt: z.string(),
        logosrc: image(),
        logoalt: z.string(),
        href: z.optional(z.string()),
        hreflabel: z.optional(z.string()),
    })
});

export const collections = { projects };
