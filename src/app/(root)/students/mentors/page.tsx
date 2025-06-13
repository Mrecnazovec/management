import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { PUBLIC_URL } from '@/config/url.config'
import type { Metadata } from 'next'
import { MentorsPage } from './MentorsPage'

export const metadata: Metadata = {
	title: 'Менторы',
	description:
		'Менторы Ташкентского филиала МГУ — это старшие студенты, готовые поддержать первокурсников в адаптации к учебе, поделиться опытом и помочь освоиться в университетской среде. Узнайте больше о наших менторах и их роли в жизни студентов.',
}

export const revalidate = 60

export default function Page() {
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
			title: 'Менторы',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<MentorsPage />
		</>
	)
}
