import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://pabloranea.com';

    // Rutas comunes en ambos idiomas (sin el prefijo de idioma)
    const pages = ['', '/about', '/dashboard', '/partners', '/popup', '/press', '/travelmendoza'];

    // Prefijos de idioma
    const locales = ['es', 'en'];

    // Array donde guardamos todas las entradas del sitemap
    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Agregar la página principal sin prefijo de idioma
    sitemapEntries.push({
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0, // Mayor prioridad para la home sin prefijo de idioma
    });

    // Generar URLs para cada idioma
    locales.forEach((locale) => {
        pages.forEach((page) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${page}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: page === '' ? 1.0 : 0.7, // Home con alta prioridad
            });
        });
    });

    return sitemapEntries;
}
