import { MetadataRoute } from 'next';
import { i18n } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://charge-one.uz';
    const lastModified = new Date();

    // Create sitemap entries for all locales and core pages
    const defaultPages = [
        {
            url: `${baseUrl}`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
    ];

    const localizedPages = i18n.locales.map((locale) => ({
        url: `${baseUrl}/${locale}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Add more dynamic pages here later if needed (e.g. blog posts)

    return [...defaultPages, ...localizedPages];
}
