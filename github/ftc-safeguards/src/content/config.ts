import { z, defineCollection } from 'astro:content';

const controlSchema = z.object({
  domain: z.string(),
  order: z.number(),
  description: z.string(),
  requirements: z.array(z.string()),
  evidence_examples: z.array(z.object({
    artifact: z.string(),
    owner: z.string(),
    frequency: z.string(),
  })),
  criteria: z.array(z.string()),
});

const advisorySchema = z.object({
  module_name: z.string(),
  order: z.number(),
  why_credible: z.string(),
  additions: z.array(z.string()),
});

const serviceSchema = z.object({
  name: z.string(),
  order: z.number(),
  duration: z.string(),
  price_range: z.string(),
  deliverables: z.array(z.string()),
});

const toolSchema = z.object({
  name: z.string(),
  category: z.enum(['compliance', 'operational']),
  good_fit: z.string(),
  cautions: z.string(),
});

export const collections = {
  controls: defineCollection({ type: 'content', schema: controlSchema }),
  advisory: defineCollection({ type: 'content', schema: advisorySchema }),
  services: defineCollection({ type: 'content', schema: serviceSchema }),
  tools: defineCollection({ type: 'content', schema: toolSchema }),
};
