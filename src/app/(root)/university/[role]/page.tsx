import type { Metadata, ResolvingMetadata } from 'next'
import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { roleDescription, roleTitles } from '@/shared/roleTitles'
import { RolePage } from './RolePage'

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
		description: roleDescription[role] || '',
	}
}

export const revalidate = 60

export default async function Page({ params }: Props) {
	const role = (await params).role

	const navigation = [
		{
			title: 'Главная',
			link: PUBLIC_URL.home(),
		},
		{
			title: 'Университет',
			link: PUBLIC_URL.university(),
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
