import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { CreateNew } from './CreateNew'

export const metadata: Metadata = {
	title: 'Добавить новость',
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
			link: ADMIN_URL.news(),
		},
		{
			title: 'Добавить новость',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<CreateNew />
		</>
	)
}
