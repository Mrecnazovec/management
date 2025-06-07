import { personService } from '@/services/person.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetPersonsByRole = (role: string) => {
	const { data: persons, isLoading } = useQuery({
		queryKey: ['get persons by role', role],
		queryFn: ({ queryKey }) => {
			const [_key, role] = queryKey
			return personService.getByRole(role)
		},
		enabled: !!role,
	})

	return useMemo(() => ({ persons, isLoading }), [persons, isLoading])
}
