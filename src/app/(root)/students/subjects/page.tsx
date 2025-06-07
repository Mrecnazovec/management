import { Metadata } from 'next'
import { Plan } from './Plan'
import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'

export const metadata: Metadata = {
	title: 'Учебный план',
}

export const revalidate = 60

export default function page() {
	const navigation = [
		{
			title: 'Главная',
			link: PUBLIC_URL.home(),
		},
		{
			title: 'Студентам',
			link: PUBLIC_URL.students(),
		},
		{
			title: 'Предметы',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<Plan />
		</>
	)
}
