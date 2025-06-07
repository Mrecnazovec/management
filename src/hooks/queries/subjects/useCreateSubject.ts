import { ADMIN_URL } from '@/config/url.config'
import { subjectService } from '@/services/subject.service'
import { ISubjectForm } from '@/shared/types/subject.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useCreateSubject() {
	const queryClient = useQueryClient()

	const router = useRouter()

	const { mutate: createSubject, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create subject'],
		mutationFn: (data: ISubjectForm) => subjectService.create(data),
		onSuccess(subject) {
			queryClient.invalidateQueries({
				queryKey: ['get all subjects'],
			})
			toast.success('Предмет создан')
			router.push(ADMIN_URL.subjects())
		},
		onError() {
			toast.error('Ошибка при создании предмета')
		},
	})

	return useMemo(() => ({ createSubject, isLoadingCreate }), [createSubject, isLoadingCreate])
}
