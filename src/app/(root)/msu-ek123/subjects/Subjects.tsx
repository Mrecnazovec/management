'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import Link from 'next/link'
import { SubjectsBlock } from './SubjectsBlock'
import { useMemo, useState } from 'react'
import { useGetSubjects } from '@/hooks/queries/subjects/useGetSubjects'
import { Input } from '@/components/ui/form-element/Input'
import Image from 'next/image'

export function Subjects() {
	const combinations = [
		{ courseNumber: '1', semesterNumber: '1' },
		{ courseNumber: '1', semesterNumber: '2' },
		{ courseNumber: '2', semesterNumber: '3' },
		{ courseNumber: '2', semesterNumber: '4' },
		{ courseNumber: '3', semesterNumber: '5' },
		{ courseNumber: '3', semesterNumber: '6' },
		{ courseNumber: '4', semesterNumber: '7' },
		{ courseNumber: '4', semesterNumber: '8' },
	]

	const { subjects, isLoading } = useGetSubjects()
	const [search, setSearch] = useState('')

	const filteredSubjects = useMemo(() => {
		if (!search.trim()) return subjects ?? []
		return subjects?.filter((subject) => subject.title.toLowerCase().includes(search.toLowerCase())) ?? []
	}, [search, subjects])

	return (
		<Container>
			<div className='flex items-center justify-between gap-4 mb-14'>
				<h1 className='text-3xl'>Предметы</h1>
				<Link href={ADMIN_URL.subjects('create')}>
					<Button variant='main'>Добавить</Button>
				</Link>
			</div>
			<Input placeholder='Поиск по названию...' value={search} onChange={(e) => setSearch(e.target.value)} className='mb-6' />

			{search ? (
				<div className='grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4'>
					{filteredSubjects?.map((subject) => (
						<Link key={subject.id} href={ADMIN_URL.subjects(subject.slug)}>
							<article className='relative aspect-[16/9] rounded-2xl mb-2'>
								<Image src={subject.image} alt={subject.title} fill className='object-cover mb-2 rounded-2xl' />
							</article>
							<p className='line-clamp-2'>{subject.title}</p>
						</Link>
					))}
				</div>
			) : (
				combinations.map((combo) => (
					<SubjectsBlock
						key={`${combo.courseNumber}-${combo.semesterNumber}`}
						courseNumber={combo.courseNumber}
						semesterNumber={combo.semesterNumber}
						isAdmin={true}
					/>
				))
			)}
		</Container>
	)
}
