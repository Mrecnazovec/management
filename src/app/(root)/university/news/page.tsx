import { Metadata } from 'next'
import { NewsPage } from './News'
import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'

export const metadata: Metadata = {
	title: 'Новости',
	description:
		'Актуальные новости и события направления Менеджмент Ташкентского филиала МГУ. Узнайте о мероприятиях, достижениях студентов и новых возможностях.',
	keywords: [
		'МГУ Ташкент',
		'менеджмент',
		'новости МГУ',
		'новости менеджмент',
		'ТФ МГУ',
		'МГУ Узбекистан',
		'высшее образование',
		'МГУ Ташкент новости',
	],
}

const navigation = [
	{
		title: 'Главная',
		link: PUBLIC_URL.home(),
	},
	{
		title: 'Новости',
	},
]

export default function page() {
	return (
		<>
			<Bread navigation={navigation} />
			<NewsPage />
		</>
	)
}
