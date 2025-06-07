import { ADMIN_URL } from '@/config/url.config'
import { subjectService } from '@/services/subject.service'
import { ISubjectForm } from '@/shared/types/subject.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useUpdateSubject() {
	const queryClient = useQueryClient()

	const router = useRouter()

	const { mutate: updateSubject, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update subject'],
		mutationFn: ({ slug, data }: { slug: string; data: ISubjectForm }) => subjectService.update(slug, data),
		onSuccess(subject) {
			queryClient.invalidateQueries({
				queryKey: ['get all subjects'],
			})
			toast.success('Предмет обновлён')
			router.push(ADMIN_URL.subjects())
		},
		onError() {
			toast.error('Ошибка при обновлении предмета')
		},
	})

	return useMemo(() => ({ updateSubject, isLoadingUpdate }), [updateSubject, isLoadingUpdate])
}
