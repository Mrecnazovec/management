import { ADMIN_URL } from '@/config/url.config'
import { newService } from '@/services/new.service'
import { INewForm } from '@/shared/types/new.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useCreateNew() {
	const queryClient = useQueryClient()

	const router = useRouter()

	const { mutate: createNew, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create new'],
		mutationFn: (data: INewForm) => newService.create(data),
		onSuccess(newData) {
			queryClient.invalidateQueries({
				queryKey: ['get all news'],
			})
			toast.success('Новость создана')
			router.push(ADMIN_URL.news())
		},
		onError() {
			toast.error('Ошибка при создании новости')
		},
	})

	return useMemo(() => ({ createNew, isLoadingCreate }), [createNew, isLoadingCreate])
}
