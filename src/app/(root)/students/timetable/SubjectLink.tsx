import { PUBLIC_URL } from '@/config/url.config'
import { useGetSubjects } from '@/hooks/queries/subjects/useGetSubjects'
import Link from 'next/link'

interface Props {
	subjectTitleFromSchedule: string | null
}

export function SubjectLink({ subjectTitleFromSchedule }: Props) {
	const { subjects, isLoading } = useGetSubjects()

	if (!subjectTitleFromSchedule) return

	if (isLoading) return <span>{subjectTitleFromSchedule}</span>

	const matchedSubject = subjects?.find((subject) => subjectTitleFromSchedule.startsWith(subject.title))

	console.log(matchedSubject)

	if (!matchedSubject) return <span>{subjectTitleFromSchedule}</span>

	return (
		<Link href={PUBLIC_URL.subjects(matchedSubject.slug)} className='text-main hover:text-main-800'>
			{subjectTitleFromSchedule}
		</Link>
	)
}
