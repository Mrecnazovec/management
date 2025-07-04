'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Input } from '@/components/ui/form-element/Input'
import { ADMIN_URL } from '@/config/url.config'
import { useGetPersonsByRole } from '@/hooks/queries/persons/useGetPersonsByRole'
import { roleTitles } from '@/shared/roleTitles'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

interface RolePageProps {
	role: string
}

export function RolePage({ role }: RolePageProps) {
	const { persons, isLoading } = useGetPersonsByRole(role)
	const [search, setSearch] = useState('')

	const filteredPersons = useMemo(() => {
		if (!search.trim()) return persons
		return persons?.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))
	}, [search, persons])

	return (
		<Container>
			<div className='flex items-center justify-between gap-4 mb-6'>
				<h1 className='text-3xl'>{roleTitles[role]}</h1>
				<Link href={ADMIN_URL.role(role, 'create')}>
					<Button variant='main'>Добавить</Button>
				</Link>
			</div>

			<Input placeholder='Поиск по имени...' value={search} onChange={(e) => setSearch(e.target.value)} className='mb-6' />

			<div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4'>
				{isLoading
					? Array.from({ length: 12 }).map((_, i) => (
							<div key={i} className='animate-pulse'>
								<div className='bg-gray-300 rounded-2xl w-full aspect-[3/4]' />
								<div className='h-4 bg-gray-300 mt-2 rounded w-full' />
								<div className='h-4 bg-gray-300 mt-1 rounded w-3/4' />
							</div>
					  ))
					: filteredPersons?.map((person) => (
							<Link key={person.id} href={ADMIN_URL.role(role, person.slug)}>
								<article className='relative aspect-[3/4] rounded-2xl mb-2'>
									<Image src={person.photo} alt={person.name} fill className='object-cover mb-2 rounded-2xl' />
								</article>
								<p className='line-clamp-2'>{person.name}</p>
							</Link>
					  ))}
			</div>
		</Container>
	)
}
