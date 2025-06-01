import { Metadata } from 'next'
import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { University } from './University'

export const metadata: Metadata = {
	title: 'Университет',
	description: 'Узнайте больше о Ташкентском филиале МГУ: история, миссия, академические направления и возможности для студентов.',
	keywords: [
		'Ташкентский филиал МГУ',
		'университет МГУ в Узбекистане',
		'менеджмент МГУ',
		'высшее образование Ташкент',
		'обучение в МГУ',
		'академические программы МГУ',
		'филиал МГУ Ташкент',
	],
	openGraph: {
		title: 'Университет | Менеджмент МГУ Ташкент',
		description: 'О Ташкентском филиале МГУ и направлении "Менеджмент"',
		url: 'https://msu-management.uz/university',
	},
}

export default function page() {
	const navigation = [
		{
			title: 'Главная',
			link: PUBLIC_URL.home(),
		},
		{
			title: 'Университет',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<University />
		</>
	)
}
