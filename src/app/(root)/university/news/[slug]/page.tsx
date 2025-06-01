import { Metadata } from 'next'
import { SingleNews } from './SingleNews'
import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'

export const metadata: Metadata = {
	title: 'Обновление сайта',
	description: 'Направление Менеджмент обновил свой личный сайт для поддержки студентов и информировании абитуриентов',
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
		title: 'Университет',
		link: PUBLIC_URL.university(''),
	},
	{
		title: 'Новости',
		link: PUBLIC_URL.university('news'),
	},
	{
		title: 'Обновление сайта',
	},
]

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	return (
		<>
			<Bread navigation={navigation} />
			<SingleNews />
		</>
	)
}
