import blogDataRaw from '../blog.json';

export interface Blog {
  id: number;
  title: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  keywords: string[];
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  category: string;
}

interface RawBlog {
  id: number;
  title: string;
  slug: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string[];
  content: string;
  date?: string;
  readTime?: string;
  author?: string;
  image?: string;
  category?: string;
}

const CATEGORIES = [
  'Investment Guide',
  'Legal & Compliance',
  'Lifestyle',
  'Market Analysis',
  'Home Trends'
];

const AUTHORS = [
  'DS Advisory Team',
  'Legal Desk',
  'Lifestyle Expert',
  'Market Analyst'
];

// Enrich the raw data with defaults for missing fields
const enrichedBlogs: Blog[] = (blogDataRaw as RawBlog[]).map((blog, index) => {
  // Use index to deterministically assign defaults if not present
  const category = CATEGORIES[index % CATEGORIES.length];
  const author = AUTHORS[index % AUTHORS.length];
  const date = new Date(2026, 3, 25 - (index * 2)).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const readTime = `${Math.floor(Math.random() * 5) + 3} min read`;

  return {
    ...blog,
    meta_title: blog.meta_title || blog.title,
    meta_description: blog.meta_description || '',
    date: blog.date || date,
    readTime: blog.readTime || readTime,
    author: blog.author || author,
    image: blog.image || '/blog.png', // Default to a local blog image if missing
    category: blog.category || category,
    keywords: blog.keywords || []
  } as Blog;
});

export function getAllBlogs(): Blog[] {
  return enrichedBlogs;
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return enrichedBlogs.find(blog => blog.slug === slug);
}

export function getLatestBlogs(count: number = 3): Blog[] {
  return enrichedBlogs.slice(0, count);
}
