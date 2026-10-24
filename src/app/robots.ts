import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// AI search and assistant crawlers, explicitly welcome so the site can be
// cited in ChatGPT, Claude, Perplexity, Gemini, Apple Intelligence, etc.
const AI_CRAWLERS = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'Bingbot',
]

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: '*', allow: '/' },
            { userAgent: AI_CRAWLERS, allow: '/' },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    }
}
