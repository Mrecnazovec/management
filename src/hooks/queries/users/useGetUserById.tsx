import { userService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export const useGetUserById = () => {
	const params = useParams()
	const userId = params.userId as string

	const { data: user, isLoading } = useQuery({
		queryKey: ['get user by id'],
		queryFn: () => userService.getById(userId),
	})

	return useMemo(() => ({ user, isLoading }), [user, isLoading])
}
