import { subjectService } from '@/services/subject.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetSubjectsByCourse = ({ courseNumber, semesterNumber }: { courseNumber: string; semesterNumber: string }) => {
	const { data: subjects, isLoading } = useQuery({
		queryKey: ['get subjects by course', { courseNumber, semesterNumber }],
		queryFn: ({ queryKey }) => {
			const [_key, params] = queryKey as [string, { courseNumber: string; semesterNumber: string }]
			return subjectService.getByCourse(params.courseNumber, params.semesterNumber)
		},

		enabled: !!courseNumber && !!semesterNumber,
	})

	return useMemo(() => ({ subjects, isLoading }), [subjects, isLoading])
}
