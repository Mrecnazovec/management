import { personService } from '@/services/person.service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export const useGetOnePerson = () => {
	const param = useParams<{ slug: string }>()

	const { data: person, isLoading } = useQuery({
		queryKey: ['get one person'],
		queryFn: () => personService.getOne(param.slug),
	})

	return useMemo(() => ({ person, isLoading }), [person, isLoading])
}
