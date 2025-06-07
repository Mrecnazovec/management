import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { CreateModerator } from './CreateModerator'

export const metadata: Metadata = {
	title: 'Добавить модератора',
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
			title: 'Модераторы',
			link: ADMIN_URL.moderators(),
		},
		{
			title: 'Добавить модератора',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<CreateModerator />
		</>
	)
}
