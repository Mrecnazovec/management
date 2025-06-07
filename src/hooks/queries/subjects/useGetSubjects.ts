import { subjectService } from '@/services/subject.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetSubjects = () => {
	const { data: subjects, isLoading } = useQuery({
		queryKey: ['get all subjects'],
		queryFn: () => subjectService.getAll(),
	})

	return useMemo(() => ({ subjects, isLoading }), [subjects, isLoading])
}
