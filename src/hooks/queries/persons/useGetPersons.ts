import { personService } from '@/services/person.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetPersons = () => {
	const { data: persons, isLoading } = useQuery({
		queryKey: ['get all persons'],
		queryFn: () => personService.getAll(),
	})

	return useMemo(() => ({ persons, isLoading }), [persons, isLoading])
}
