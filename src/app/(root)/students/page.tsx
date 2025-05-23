import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { Metadata } from 'next'
import { Students } from './Students'

export const metadata: Metadata = {
	title: 'Студентам',
	description:
		'Информация для студентов направления "Менеджмент" Ташкентского филиала МГУ: расписание занятий, учебные материалы, важные объявления и ресурсы для успешного обучения.',
	keywords: [
		'МГУ Ташкент',
		'Менеджмент МГУ',
		'студентам МГУ',
		'учебные материалы МГУ',
		'расписание занятий',
		'МГУ Узбекистан',
		'ТФ МГУ студенты',
		'высшее образование Узбекистан',
		'менеджмент Ташкент',
	],
}

export default function page() {
	const navigation = [
		{
			title: 'Главная',
			link: PUBLIC_URL.home(),
		},
		{
			title: 'Студентам',
		},
	]

	return (
		<>
			<Bread navigation={navigation} />
			<Students />
		</>
	)
}
