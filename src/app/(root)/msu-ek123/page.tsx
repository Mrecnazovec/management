import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { AdminPage } from './AdminPage'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { PUBLIC_URL } from '@/config/url.config'

export const metadata: Metadata = {
	title: 'Админ панель',
	...NO_INDEX_PAGE,
}

export default function Page() {
	const navigation = [
		{
			title: 'Главная',
			link: PUBLIC_URL.home(),
		},
		{
			title: 'Админ панель',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<AdminPage />
		</>
	)
}
