import type { Metadata, ResolvingMetadata } from 'next'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { RolePage } from './RolePage'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { roleTitles } from '@/shared/roleTitles'

export async function generateStaticParams() {
	const roles = Object.keys(roleTitles)
	return roles.map((role) => ({ role }))
}

type Props = {
	params: Promise<{ role: string }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const role = (await params).role

	return {
		title: roleTitles[role] || role,
		...NO_INDEX_PAGE,
	}
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
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<RolePage role={role} />
		</>
	)
}
