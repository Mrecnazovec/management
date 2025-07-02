import { Metadata } from 'next'
import { Home } from './Home'
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME } from '@/constants/seo.constants'

export const metadata: Metadata = {
	description: SITE_DESCRIPTION,
	keywords: SITE_KEYWORDS,

	openGraph: {
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		url: 'https://msu-management.uz',
		siteName: SITE_NAME,
		images: [
			{
				url: 'https://msu-management.uz/svg/EconLogoGreen.svg',
				alt: SITE_NAME,
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		images: ['https://msu-management.uz/svg/EconLogoGreen.svg'],
	},
}

export default function HomePage() {
	return <Home />
}
