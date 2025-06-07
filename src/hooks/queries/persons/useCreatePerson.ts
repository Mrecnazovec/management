import { ADMIN_URL } from '@/config/url.config'
import { personService } from '@/services/person.service'
import { IPersonForm } from '@/shared/types/person.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useCreatePerson(role: string) {
	const queryClient = useQueryClient()

	const router = useRouter()

	const { mutate: createPerson, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create person'],
		mutationFn: (data: IPersonForm) => personService.create(data),
		onSuccess(person) {
			queryClient.invalidateQueries({
				queryKey: ['get all persons'],
			})
			toast.success('Человек создан')
			router.push(ADMIN_URL.role(role))
		},
		onError() {
			toast.error('Ошибка при создании человека')
		},
	})

	return useMemo(() => ({ createPerson, isLoadingCreate }), [createPerson, isLoadingCreate])
}
