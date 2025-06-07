'use client'

import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { useGetOneSubject } from '@/hooks/queries/subjects/useGetOneSubject'
import { SubjectForm } from '../SubjectForm'

export function UpdateSubject() {
	const { subject, isLoading } = useGetOneSubject()

	const navigation = [
		{
			title: 'Главная',
			link: PUBLIC_URL.home(),
		},
		{
			title: 'Админ панель',
			link: ADMIN_URL.home(),
		},
		{
			title: 'Предметы',
			link: ADMIN_URL.subjects(),
		},
		{
			title: subject?.title || 'Изменение предмета',
		},
	]

	return (
		<>
			<Bread navigation={navigation} />
			<SubjectForm subject={subject} />
		</>
	)
}
