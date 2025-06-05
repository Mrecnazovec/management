import { Metadata } from 'next'
import { Home } from './Home'
import { SITE_DESCRIPTION, SITE_KEYWORDS } from '@/constants/seo.constants'

// export const metadata: Metadata = {
// 	title: 'Главная страница'
// }

export const metadata: Metadata = {
	description: SITE_DESCRIPTION,
	keywords: SITE_KEYWORDS,
}

export default function HomePage() {
	return <Home />
}
