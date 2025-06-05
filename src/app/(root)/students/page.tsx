import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { Metadata } from 'next'
import { Students } from './Students'

export const metadata: Metadata = {
	title: 'Студентам',
	description:
		'Информация для студентов направления "Менеджмент" Ташкентского филиала МГУ: расписание занятий, учебные материалы, важные объявления и ресурсы для успешного обучения.',
	keywords: [
		'студентам МГУ',
		'учебные материалы МГУ',
		'расписание занятий',
		'ТФ МГУ студенты',
		'ТФ МГУ студентам',
		'Студентам ТФ МГУ',
		'Студентам менеджмента',
		'Студентам направления менеджмент',
	],
	openGraph: {
		title: 'Студентам | Менеджмент МГУ Ташкент',
		description: 'Всё для студентов направления "Менеджмент"',
		url: 'https://msu-management.uz/students',
	},
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
