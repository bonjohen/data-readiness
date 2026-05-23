import { z } from 'astro/zod';

export const topicManifestSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, 'id must be lowercase alphanumeric with hyphens'),
  name: z.string().min(1),
  shortDescription: z.string().min(10).max(200),
  regulation: z.string().min(1),
  status: z.enum(['live', 'placeholder']),
  url: z.string().url().optional(),
  order: z.number().int().min(1).max(99),
  category: z.string().min(1),
  icon: z.string().optional(),
}).refine(
  (data) => data.status !== 'live' || (data.url !== undefined && data.url !== ''),
  { message: 'url is required when status is "live"', path: ['url'] }
);

export type TopicManifest = z.infer<typeof topicManifestSchema>;
