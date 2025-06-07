'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form-element/Form'

import { Input } from '@/components/ui/form-element/Input'

import { Heading } from '@/components/ui/Heading'
import { ConfirmModal } from '@/components/ui/modals/ConfirmModal'
import { useCreateUser } from '@/hooks/queries/users/useCreateUser'
import { useDeleteUser } from '@/hooks/queries/users/useDeleteUser'
import { useUpdateUser } from '@/hooks/queries/users/useUpdateUser'
import { IAuthForm } from '@/shared/types/auth.interface'
import { IUser } from '@/shared/types/user.interface'
import { Trash } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface UserFormProps {
	user?: IUser | null
}

export function UserForm({ user }: UserFormProps) {
	const { createUser, isLoadingCreate } = useCreateUser()
	const { updateUser, isLoadingUpdate } = useUpdateUser()
	const { deleteUser, isLoadingDelete } = useDeleteUser()

	const title = user ? 'Изменить модератора' : 'Добавить модератора'
	const description = user ? 'Изменить модератора модератора' : 'Добавить нового модератора'
	const action = user ? 'Сохранить' : 'Добавить'
	const userId = user?.id || ''

	const form = useForm<IAuthForm>({
		mode: 'onChange',
		defaultValues: {
			name: user?.name || '',
			password: user?.password || '',
			login: user?.login || '',
			role: user?.role || 'Модератор',
		},
	})

	useEffect(() => {
		if (user) {
			form.reset({
				name: user?.name || '',
				password: user?.password || '',
				login: user?.login || '',
				role: user?.role || 'Модератор',
			})
		}
	}, [user, form.reset])

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = form

	const onSubmit = (data: IAuthForm) => {
		if (user) updateUser({ userId, data })
		else createUser(data)
	}

	return (
		<Container>
			<div className='flex justify-between'>
				<Heading className='mb-4' title={title} description={description} />
				{user && (
					<ConfirmModal handleClick={() => deleteUser({ userId })}>
						<Button size='icon' variant='destructive' disabled={isLoadingDelete}>
							<Trash className='size-4' />
						</Button>
					</ConfirmModal>
				)}
			</div>

			<Form {...form}>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					<FormField
						control={control}
						name='name'
						rules={{ required: 'Имя обязательно' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input {...field} placeholder='Имя человека' disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='password'
						rules={{ required: 'Пароль обязателен' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input {...field} placeholder='Пароль' disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='role'
						rules={{ required: 'Роль обязательна' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input {...field} placeholder='moderator / admin' disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type='submit' variant={'main'} disabled={isSubmitting || isLoadingCreate || isLoadingUpdate} className='mt-4'>
						{action}
					</Button>
				</form>
			</Form>
		</Container>
	)
}
