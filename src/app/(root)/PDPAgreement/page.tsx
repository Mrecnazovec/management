import { Metadata } from 'next'
import { PDAgreement } from './PDAgreement'
import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'

export const metadata: Metadata = {
	title: 'Соглашение об обработке персональных данных',
	description:
		'Ознакомьтесь с условиями использования сайта Ташкентского филиала МГУ имени М.В. Ломоносова. Пользовательское соглашение регулирует права и обязанности посетителей ресурса.',
	keywords: [
		'пользовательское соглашение',
		'условия использования сайта',
		'правила сайта МГУ Ташкент',
		'документ соглашение МГУ',
		'юридическая информация',
		'ТФ МГУ пользователь',
		'соглашение сайт МГУ',
	],
}

export default function page() {
	const navigation = [
		{
			title: 'Главная',
			link: PUBLIC_URL.home(),
		},
		{
			title: 'Соглашение об обработке персональных данных',
		},
	]
	return (
		<>
			<Bread navigation={navigation} /> 
			<PDAgreement />
		</>
	)
}
