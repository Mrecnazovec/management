'use client'

import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { useGetUserById } from '@/hooks/queries/users/useGetUserById'
import { useParams } from 'next/navigation'
import { UserForm } from '../UserForm'
import { Bread } from '@/components/ui/Breadcrumb/Bread'

export function UpdateModerator() {
	const { user, isLoading } = useGetUserById()

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
			title: 'Модераторы',
			link: ADMIN_URL.moderators(),
		},
		{
			title: user?.name || 'Изменение модератора',
		},
	]
	return (
		<>
			<Bread navigation={navigation} />
			<UserForm user={user} />
		</>
	)
}
