import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { Subjects } from './Subjects'

export const metadata: Metadata = {
	title: 'Предметы',
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
			title: 'Предметы',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<Subjects />
		</>
	)
}
