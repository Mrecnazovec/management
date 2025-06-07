import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { CreatePerson } from './CreatePerson'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { roleTitles } from '@/shared/roleTitles'

export const metadata: Metadata = {
	title: 'Добавить человека',
	...NO_INDEX_PAGE,
}

type Props = {
	params: Promise<{ role: string }>
}

export default async function Page({ params }: Props) {
	const role = (await params).role

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
			title: roleTitles[role],
			link: ADMIN_URL.role(role),
		},
		{
			title: 'Добавить человека',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<CreatePerson />
		</>
	)
}
