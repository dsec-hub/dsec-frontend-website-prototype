import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dsec.club';

  // Define all routes
  const routes = [
    '',
    '/about',
    '/projects',
    '/events',
    '/contact',
    '/hackathon',
    '/socials',
    '/search',
    '/status',
    '/privacy',
    '/terms',
    '/accessibility',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/hackathon' ? 0.9 : 0.8,
  })) as MetadataRoute.Sitemap;
}
