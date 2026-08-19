import { MetadataRoute } from 'next';
import { getAllBlogs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getAllBlogs();

  const blogEntries = blogs.map((blog) => ({
    url: `https://dslivingspaces.com/blog/${blog.slug}`,
    lastModified: new Date(blog.date || Date.now()),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://dslivingspaces.com',
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://dslivingspaces.com/about',
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://dslivingspaces.com/projects',
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://dslivingspaces.com/projects/bird-song-yash-value-spaces',
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://dslivingspaces.com/projects/the-meadows',
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://dslivingspaces.com/amenities-gallery',
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://dslivingspaces.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://dslivingspaces.com/contact',
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://dslivingspaces.com/privacy-policy',
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://dslivingspaces.com/terms-and-conditions',
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    ...blogEntries,
  ];
}