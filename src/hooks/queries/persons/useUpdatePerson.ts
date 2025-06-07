import { ADMIN_URL } from '@/config/url.config'
import { personService } from '@/services/person.service'
import { IPersonForm } from '@/shared/types/person.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useUpdatePerson(role: string) {
	const queryClient = useQueryClient()

	const router = useRouter()

	const { mutate: updatePerson, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update person'],
		mutationFn: ({ slug, data }: { slug: string; data: IPersonForm }) => personService.update(slug, data),
		onSuccess(person) {
			queryClient.invalidateQueries({
				queryKey: ['get all persons'],
			})
			toast.success('Пользователь обновлён')
			router.push(ADMIN_URL.role(role))
		},
		onError() {
			toast.error('Ошибка при обновлении пользователя')
		},
	})

	return useMemo(() => ({ updatePerson, isLoadingUpdate }), [updatePerson, isLoadingUpdate])
}
