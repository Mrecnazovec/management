'use client'

import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { useGetOnePerson } from '@/hooks/queries/persons/useGetOnePerson'
import { PersonForm } from '../PersonForm'
import { useParams } from 'next/navigation'
import { roleTitles } from '@/shared/roleTitles'

export function UpdateSubject() {
	const { person, isLoading } = useGetOnePerson()
	const params = useParams()
	const role = params.role as string

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
			title: roleTitles[role],
			link: ADMIN_URL.role(role),
		},
		{
			title: person?.name || 'Изменение человека',
		},
	]

	return (
		<>
			<Bread navigation={navigation} />
			<PersonForm person={person} />
		</>
	)
}
