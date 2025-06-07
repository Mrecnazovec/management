import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { CreateSubject } from './CreateSubject'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'

export const metadata: Metadata = {
	title: 'Создание предмета',
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
			link: ADMIN_URL.subjects(),
		},
		{
			title: 'Добавить новый предмет',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<CreateSubject />
		</>
	)
}
