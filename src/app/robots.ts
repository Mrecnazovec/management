import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/msu-ek123/',
		},
		sitemap: `${process.env.APP_URL}/sitemap.xml`,
	}
}
