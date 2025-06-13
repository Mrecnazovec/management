import { userService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export function useProfile() {
	const { data: user, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		retry: false,
	})

	return useMemo(() => ({ user, isLoading }), [user, isLoading])
}
