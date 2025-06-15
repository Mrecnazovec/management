import { getEndOfWeek, getStartOfWeek } from '@/lib/eduPageGetDate'
import { eduPageService } from '@/services/edupage.service'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import Cookies from 'js-cookie'

export const useGetEduPageTimeTable = () => {
	const searchParams = useSearchParams()
	const datefrom = searchParams.get('datefrom') ?? getStartOfWeek()
	const dateto = searchParams.get('dateto') ?? getEndOfWeek()
	const groupId = Cookies.get('group_id') ?? '-143'
	const id = groupId ?? searchParams.get('id') ?? '-143'

	const { data, isLoading } = useQuery({
		queryKey: ['get eduPage TimeTable', datefrom, dateto, id],
		queryFn: () => {
			return eduPageService.getTimeTable(datefrom, dateto, id)
		},
	})

	return useMemo(
		() => ({
			eduPageTimeTable: data,
			isLoading,
		}),
		[data, isLoading]
	)
}
