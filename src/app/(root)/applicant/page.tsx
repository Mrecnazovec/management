import { Applicant } from './Applicant'
import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Абитуриентам',
	description:
		'Информация для поступающих на направление "Менеджмент" Ташкентского филиала МГУ имени М.В. Ломоносова: условия приёма, документы, сроки подачи и преимущества обучения.',
	keywords: [
		'абитуриентам МГУ Ташкент',
		'менеджмент МГУ Ташкент',
		'направление менеджмент',
		'поступление МГУ Ташкент',
		'документы для поступления',
		'приемная комиссия МГУ Ташкент',
		'обучение менеджмент МГУ',
		'бакалавриат менеджмент',
		'ТФ МГУ поступление',
	],
	openGraph: {
		title: 'Абитуриентам | Менеджмент МГУ Ташкент',
		description: 'Поступление на направление "Менеджмент" в ТФ МГУ: что нужно знать абитуриенту.',
		url: 'https://msu-management.uz/applicant',
	},
}

export default function page() {
	const navigation = [
		{
			title: 'Главная',
			link: PUBLIC_URL.home(),
		},
		{
			title: 'Абитуриентам',
		},
	]

	return (
		<>
			<Bread navigation={navigation} />
			<Applicant />
		</>
	)
}
