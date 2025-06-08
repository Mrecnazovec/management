import { newService } from '@/services/new.service'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetTopNews = () => {
	const { data: topNews, isLoading } = useQuery({
		queryKey: ['get top news'],
		queryFn: () => newService.getTopNews(),
	})

	return useMemo(() => ({ topNews, isLoading }), [topNews, isLoading])
}
