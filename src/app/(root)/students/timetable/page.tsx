import type { Metadata } from 'next'
import { TimeTable } from './TimeTable'
import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { Suspense } from 'react'
import { LoaderSkeleton } from './LoaderSkeleton'

export const metadata: Metadata = {
	title: 'Расписание',
	description:
		'Актуальное расписание занятий для студентов направления "Менеджмент" Ташкентского филиала МГУ. Узнайте расписание пар по дням недели и датам.',
	keywords: [
		'Расписание МГУ Ташкент',
		'Расписание занятий',
		'ТФ МГУ Менеджмент',
		'Менеджмент МГУ Ташкент',
		'Ташкентский филиал МГУ расписание',
		'Занятия МГУ Ташкент',
		'Расписание пар',
	],
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
			title: 'Расписание',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<Suspense fallback={<LoaderSkeleton />}>
				<TimeTable />
			</Suspense>
		</>
	)
}
