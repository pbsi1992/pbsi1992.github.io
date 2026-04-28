import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/programs" }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    duration: z.string(),
    description: z.string(),
    fullDescription: z.string(),
    objectives: z.array(z.string()),
    curriculum: z.array(z.object({
      semester: z.string(),
      courses: z.array(z.string())
    })),
    admissionRequirements: z.array(z.string()),
    careerPaths: z.array(z.string()),
  })
});

export const collections = { programs };