import { subjectService } from '@/services/subject.service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export const useGetOneSubject = () => {
	const param = useParams<{ slug: string }>()

	const { data: subject, isLoading } = useQuery({
		queryKey: ['get one subject'],
		queryFn: () => subjectService.getOne(param.slug),
	})

	return useMemo(() => ({ subject, isLoading }), [subject, isLoading])
}
