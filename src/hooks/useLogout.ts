import { ADMIN_URL } from '@/config/url.config'
import { authService } from '@/services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import toast from 'react-hot-toast'

export function useLogout() {
	const router = useRouter()

	const { mutate: logout, isPending: isLogout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess(user) {
			toast.success('Выход произошёл успешно')
			router.push(ADMIN_URL.auth())
		},
		onError() {
			toast.error('Ошибка при выходе')
		},
	})

	return useMemo(() => ({ logout, isLogout }), [logout, isLogout])
}
