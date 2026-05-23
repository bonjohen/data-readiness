import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { topicManifestSchema, type TopicManifest } from './topic-schema';

export function discoverTopics(): TopicManifest[] {
  const hubDir = resolve(import.meta.dirname, '../..'); // src/data/ → github/_hub/
  const githubDir = resolve(hubDir, '..'); // github/_hub/ → github/
  const entries = readdirSync(githubDir, { withFileTypes: true });
  const topics: TopicManifest[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === '_hub') continue;
    const manifestPath = join(githubDir, entry.name, 'site.json');
    if (!existsSync(manifestPath)) continue;

    try {
      const raw = JSON.parse(readFileSync(manifestPath, 'utf-8'));
      const parsed = topicManifestSchema.safeParse(raw);
      if (parsed.success) {
        topics.push(parsed.data);
      } else {
        console.warn(`[discover-topics] Invalid manifest at ${manifestPath}:`, parsed.error.issues);
      }
    } catch (err) {
      console.warn(`[discover-topics] Failed to read ${manifestPath}:`, err);
    }
  }

  topics.sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));

  const seen = new Set<string>();
  return topics.filter((t) => {
    if (seen.has(t.id)) {
      console.warn(`[discover-topics] Duplicate topic id: "${t.id}" — keeping first occurrence`);
      return false;
    }
    seen.add(t.id);
    return true;
  });
}
