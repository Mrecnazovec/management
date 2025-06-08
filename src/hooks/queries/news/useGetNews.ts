import { newService } from '@/services/new.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetNews = (limit?: number) => {
	const { data: posts, isLoading } = useQuery({
		queryKey: ['get all news', limit],
		queryFn: () => newService.getAll(limit),
	})

	return useMemo(() => ({ posts, isLoading }), [posts, isLoading])
}
