import { ADMIN_URL } from '@/config/url.config'
import { userService } from '@/services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useDeleteUser() {
	const queryClient = useQueryClient()

	const router = useRouter()

	const { mutate: deleteUser, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete user'],
		mutationFn: ({ userId }: { userId: string }) => userService.delete(userId),
		onSuccess(user) {
			toast.success('Пользователь удалён')
			queryClient.invalidateQueries({
				queryKey: ['get all users'],
			})
			router.push(ADMIN_URL.moderators())
		},
		onError() {
			toast.error('Ошибка при удалении пользователя')
		},
	})

	return useMemo(() => ({ deleteUser, isLoadingDelete }), [deleteUser, isLoadingDelete])
}
