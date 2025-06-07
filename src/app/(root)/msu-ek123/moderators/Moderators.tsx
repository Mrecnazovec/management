'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ADMIN_URL } from '@/config/url.config'
import { useGetUsers } from '@/hooks/queries/users/useGetUsers'
import { useProfile } from '@/hooks/useProfile'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@/components/ui/Skeleton'

export function Moderators() {
	const { users, isLoading } = useGetUsers()
	const { user: moderator, isLoading: isLoadingProfile } = useProfile()
	const router = useRouter()

	if (!isLoadingProfile && moderator?.role !== 'admin') router.push(ADMIN_URL.home())

	return (
		<Container className='h-[80vh]'>
			<div className='flex items-center justify-between gap-4 mb-14'>
				<h1 className='text-3xl'>Модераторы</h1>
				<Link href={ADMIN_URL.moderators('create')}>
					<Button variant='main'>Добавить</Button>
				</Link>
			</div>

			<div className='space-y-5'>
				{isLoading
					? Array.from({ length: 4 }).map((_, idx) => (
							<div key={idx} className='flex items-center justify-between'>
								<Skeleton className='h-6 w-48' />
								<Skeleton className='h-10 w-24 rounded-md' />
							</div>
					  ))
					: users?.map((user) => (
							<div key={user.id} className='flex items-center justify-between'>
								<p>{user.name}</p>
								{user.id === moderator?.id ? (
									<Button variant='main' type='button' disabled>
										Это вы
									</Button>
								) : (
									<Link href={ADMIN_URL.moderators(user.id)}>
										<Button variant='main'>Изменить</Button>
									</Link>
								)}
							</div>
					  ))}
			</div>
		</Container>
	)
}
