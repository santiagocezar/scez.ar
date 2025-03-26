import { defineCollection, z } from 'astro:content';

import { file, glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
    schema: ({ image }) => z.object({
        order: z.number(),
        thumbsrc: image(),
        thumbalt: z.string(),
        logosrc: z.optional(image()),
        logoalt: z.string(),
        href: z.optional(z.string()),
        hreflabel: z.optional(z.string()),
    })
});

const experience = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/experience" }),
    schema: () => z.object({
        order: z.number(),
        title: z.string(),
        since: z.string(),
        until: z.optional(z.string()),
    })
});

const otherProjects = defineCollection({
    loader: file("./src/content/other_projects.yml"),
    schema: () => z.object({
        name: z.string(),
        about: z.string(),
        year: z.number(),
        link: z.optional(z.string()),
    })
});

export const collections = { projects, experience, otherProjects };
