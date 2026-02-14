export interface Cheatsheet {
  id: string;
  title: string;
  tags: string[];
  content: string;
  slug: string;
}

const parseFrontmatter = (fileContent: string) => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const yamlContent = match[1];
  const markdownContent = match[2];
  const data: Record<string, string | string[]> = {};

  yamlContent.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      if (value.startsWith('[') && value.endsWith(']')) {
        data[key.trim()] = value
          .slice(1, -1)
          .split(',')
          .map((item) => item.trim());
      } else {
        data[key.trim()] = value;
      }
    }
  });

  return { data, content: markdownContent };
};

export const loadCheatsheets = async (): Promise<Cheatsheet[]> => {
  const modules = import.meta.glob('/src/cheatsheets/*.md', { query: '?raw', import: 'default', eager: true });
  
  const cheatsheets = Object.entries(modules)
    .filter(([path]) => path.endsWith('.md'))
    .map(([path, content]) => {
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      const { data, content: markdownContent } = parseFrontmatter(content as string);
      
      return {
        id: slug,
        slug,
        title: (typeof data.title === 'string' ? data.title : slug),
        tags: (Array.isArray(data.tags) ? data.tags : []),
        content: markdownContent,
      };
    });

  return cheatsheets;
};
