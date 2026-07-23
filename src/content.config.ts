import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ 
    pattern: "**/*.md", 
    base: "./src/content/pages" 
  }),
  schema: z.object({
    title: z.string(),
    heroTitle: z.string().optional(),
    heroText: z.string().optional(),
    servicesTitle: z.string().optional(),
    servicesContent: z.string().optional(),
    aboutContent: z.string().optional(),
  }),
});

export const collections = {
  pages,
};