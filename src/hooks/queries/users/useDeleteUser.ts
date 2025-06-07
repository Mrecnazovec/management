import { userService } from '@/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useDeleteUser() {
	const queryClient = useQueryClient()

	const { mutate: deleteUser, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete user'],
		mutationFn: ({ userId }: { userId: string }) => userService.delete(userId),
		onSuccess(user) {
			toast.success('Пользователь удалён')
			queryClient.invalidateQueries({
				queryKey: ['get all users'],
			})
		},
		onError() {
			toast.error('Ошибка при удалении пользователя')
		},
	})

	return useMemo(() => ({ deleteUser, isLoadingDelete }), [deleteUser, isLoadingDelete])
}
