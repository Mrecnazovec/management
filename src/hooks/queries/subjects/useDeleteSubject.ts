import { ADMIN_URL } from '@/config/url.config'
import { subjectService } from '@/services/subject.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useDeleteSubject() {
	const queryClient = useQueryClient()

	const router = useRouter()

	const { mutate: deleteSubject, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete subject'],
		mutationFn: ({ slug }: { slug: string }) => subjectService.delete(slug),
		onSuccess(subject) {
			toast.success('Предмет удалён')
			queryClient.invalidateQueries({
				queryKey: ['get all subjects'],
			})
			router.push(ADMIN_URL.subjects())
		},
		onError() {
			toast.error('Ошибка при удалении предмета')
		},
	})

	return useMemo(() => ({ deleteSubject, isLoadingDelete }), [deleteSubject, isLoadingDelete])
}
