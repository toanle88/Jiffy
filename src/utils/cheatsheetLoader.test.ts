import { describe, it, expect } from 'vitest';
import { loadCheatsheets } from '../utils/cheatsheetLoader';

describe('cheatsheetLoader', () => {
  describe('loadCheatsheets', () => {
    it('should load and parse cheatsheets correctly', async () => {
      const cheatsheets = await loadCheatsheets();

      expect(Array.isArray(cheatsheets)).toBe(true);
      expect(cheatsheets.length).toBeGreaterThan(0);
    });

    it('should have required properties in each cheatsheet', async () => {
      const cheatsheets = await loadCheatsheets();
      const cheatsheet = cheatsheets[0];

      expect(cheatsheet).toHaveProperty('id');
      expect(cheatsheet).toHaveProperty('title');
      expect(cheatsheet).toHaveProperty('tags');
      expect(cheatsheet).toHaveProperty('content');
      expect(cheatsheet).toHaveProperty('slug');
    });

    it('should extract slug from file path', async () => {
      const cheatsheets = await loadCheatsheets();

      cheatsheets.forEach((cheatsheet) => {
        expect(cheatsheet.id).toBe(cheatsheet.slug);
        expect(typeof cheatsheet.slug).toBe('string');
        expect(cheatsheet.slug.length).toBeGreaterThan(0);
      });
    });

    it('should parse title from frontmatter', async () => {
      const cheatsheets = await loadCheatsheets();

      cheatsheets.forEach((cheatsheet) => {
        expect(typeof cheatsheet.title).toBe('string');
        expect(cheatsheet.title.length).toBeGreaterThan(0);
      });
    });

    it('should parse tags array from frontmatter', async () => {
      const cheatsheets = await loadCheatsheets();

      cheatsheets.forEach((cheatsheet) => {
        expect(Array.isArray(cheatsheet.tags)).toBe(true);
      });
    });

    it('should extract markdown content', async () => {
      const cheatsheets = await loadCheatsheets();

      cheatsheets.forEach((cheatsheet) => {
        expect(typeof cheatsheet.content).toBe('string');
        expect(cheatsheet.content.length).toBeGreaterThan(0);
      });
    });

    it('should create cheatsheet objects matching Cheatsheet interface', async () => {
      const cheatsheets = await loadCheatsheets();
      const cheatsheet = cheatsheets[0];

      expect(cheatsheet).toMatchObject({
        id: expect.any(String),
        title: expect.any(String),
        tags: expect.any(Array),
        content: expect.any(String),
        slug: expect.any(String),
      });
    });

    it('should load at least all 14 existing cheatsheets', async () => {
      const cheatsheets = await loadCheatsheets();
      const expectedCheatsheets = [
        'azure',
        'bash',
        'docker',
        'dotnet',
        'git',
        'linux',
        'postgres',
        'python',
        'react',
        'reg',
        'sqlserver',
        'terraform',
        'vscode',
        'windows',
      ];

      const loadedSlugs = cheatsheets.map((c) => c.slug);

      expectedCheatsheets.forEach((expected) => {
        expect(loadedSlugs).toContain(expected);
      });

      expect(cheatsheets.length).toBeGreaterThanOrEqual(14);
    });
  });
});
