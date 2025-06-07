'use client'

import { Container } from '@/components/ui/Container'
import { SubjectsBlock } from '../../msu-ek123/subjects/SubjectsBlock'

export function Plan() {
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
			<h1 className='text-3xl mb-14'>Учебный план</h1>
			{combinations.map((combo) => (
				<SubjectsBlock
					key={`${combo.courseNumber}-${combo.semesterNumber}`}
					courseNumber={combo.courseNumber}
					semesterNumber={combo.semesterNumber}
					isAdmin={false}
				/>
			))}
		</Container>
	)
}
