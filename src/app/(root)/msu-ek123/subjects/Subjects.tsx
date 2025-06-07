'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ADMIN_URL } from '@/config/url.config'
import Link from 'next/link'
import { SubjectsBlock } from './SubjectsBlock'

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

	return (
		<Container>
			<div className='flex items-center justify-between gap-4 mb-14'>
				<h1 className='text-3xl'>Предметы</h1>
				<Link href={ADMIN_URL.subjects('create')}>
					<Button variant='main'>Добавить</Button>
				</Link>
			</div>

			{combinations.map((combo) => (
				<SubjectsBlock
					key={`${combo.courseNumber}-${combo.semesterNumber}`}
					courseNumber={combo.courseNumber}
					semesterNumber={combo.semesterNumber}
					isAdmin={true}
				/>
			))}
		</Container>
	)
}
