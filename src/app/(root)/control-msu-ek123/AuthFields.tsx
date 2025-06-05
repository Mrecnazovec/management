import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form-element/Form'
import { Input } from '@/components/ui/form-element/Input'
import { validEmail, validPhone, validTelegramUsername } from '@/shared/regex'
import { IAuthForm } from '@/shared/types/auth.interface'
import { UseFormReturn } from 'react-hook-form'

interface AuthFieldsProps {
	form: UseFormReturn<IAuthForm, any, IAuthForm>
	isPending: boolean
	isReg?: boolean
}

export function AuthFields({ form, isPending, isReg = false }: AuthFieldsProps) {
	return (
		<>
			<FormField
				control={form.control}
				name='login'
				rules={{
					required: 'Логин обязателен',
				}}
				render={({ field }) => (
					<FormItem>
						<FormMessage />
						<FormControl>
							<Input placeholder='Логин' disabled={isPending} {...field} value={field.value ?? ''} className='mb-4' />
						</FormControl>
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name='password'
				rules={{
					required: 'Пароль обязателен',
					minLength: {
						value: 6,
						message: 'Минимум 6 символов',
					},
				}}
				render={({ field }) => (
					<FormItem>
						<FormMessage />
							<FormControl>
							<Input placeholder='******' type='password' disabled={isPending} {...field} value={field.value ?? ''} className='mb-4' />
						</FormControl>
					</FormItem>
				)}
			/>
		</>
	)
}
