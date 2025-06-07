import { ADMIN_URL } from '@/config/url.config'
import { userService } from '@/services/user.service'
import { IAuthForm } from '@/shared/types/auth.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useCreateUser() {
	const queryClient = useQueryClient()

	const router = useRouter()

	const { mutate: createUser, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create user'],
		mutationFn: (data: IAuthForm) => userService.create(data),
		onSuccess(user) {
			queryClient.invalidateQueries({
				queryKey: ['get all users'],
			})
			toast.success('Пользователь создан')
			router.push(ADMIN_URL.moderators())
		},
		onError() {
			toast.error('Ошибка при создании пользователя')
		},
	})

	return useMemo(() => ({ createUser, isLoadingCreate }), [createUser, isLoadingCreate])
}
