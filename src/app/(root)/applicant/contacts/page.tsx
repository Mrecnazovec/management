import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { Contacts } from './Contacts'
import { PUBLIC_URL } from '@/config/url.config'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Контакты'
}

export default function page() {
	const navigation = [
		{
			title: 'Главная',
			link: PUBLIC_URL.home(),
		},
		{
			title: 'Абитуриентам',
			link: PUBLIC_URL.applicant(),
		},
				{
			title: 'Контакты',
		},
	]
	return (
		<>
			{' '}
			<Bread navigation={navigation} />
			<Contacts />
		</>
	)
}
