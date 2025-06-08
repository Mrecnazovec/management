import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { NewsControl } from './NewsControl'

export const metadata: Metadata = {
	title: 'Новости',
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
			link: ADMIN_URL.home(),
		},
		{
			title: 'Новости',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<NewsControl />
		</>
	)
}
