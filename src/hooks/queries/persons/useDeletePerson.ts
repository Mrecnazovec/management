import { ADMIN_URL } from '@/config/url.config'
import { personService } from '@/services/person.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useDeletePerson(role: string) {
	const queryClient = useQueryClient()

	const router = useRouter()

	const { mutate: deletePerson, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete person'],
		mutationFn: ({ slug }: { slug: string }) => personService.delete(slug),
		onSuccess(person) {
			toast.success('Пользователь удалён')
			queryClient.invalidateQueries({
				queryKey: ['get all persons'],
			})
			router.push(ADMIN_URL.role(role))
		},
		onError() {
			toast.error('Ошибка при удалении пользователя')
		},
	})

	return useMemo(() => ({ deletePerson, isLoadingDelete }), [deletePerson, isLoadingDelete])
}
