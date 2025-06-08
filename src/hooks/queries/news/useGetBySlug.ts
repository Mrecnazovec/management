import { newService } from '@/services/new.service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export const useGetNewBySlug = () => {
	const param = useParams<{ slug: string }>()

	const { data: dataNew, isLoading } = useQuery({
		queryKey: ['get new by slug'],
		queryFn: () => newService.getBySlug(param.slug),
	})

	return useMemo(() => ({ dataNew, isLoading }), [dataNew, isLoading])
}
