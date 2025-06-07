import { userService } from '@/services/user.service'
import { IAuthForm } from '@/shared/types/auth.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useUpdateUser() {
	const queryClient = useQueryClient()

	const { mutate: updateUser, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update user'],
		mutationFn: ({ userId, data }: { userId: string; data: IAuthForm }) => userService.update(userId, data),
		onSuccess(user) {
			queryClient.invalidateQueries({
				queryKey: ['get all users'],
			})
			toast.success('Пользователь обновлён')
		},
		onError() {
			toast.error('Ошибка при обновлении пользователя')
		},
	})

	return useMemo(() => ({ updateUser, isLoadingUpdate }), [updateUser, isLoadingUpdate])
}
