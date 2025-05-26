import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form-element/Form'
import { Input } from '@/components/ui/form-element/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { validPhone } from '@/shared/regex'
import Link from 'next/link'
import { PUBLIC_URL } from '@/config/url.config'

interface IContactFormInput {
	name: string
	tel: string
	telegram: string
	status: string
	agreed: boolean
}

export function ContactForm() {
	const form = useForm<IContactFormInput>({
		mode: 'onChange',
		defaultValues: {
			name: '',
			tel: '',
			telegram: '',
			status: '',
			agreed: false,
		},
	})

	const { control, handleSubmit, setValue } = form

	const agreed = form.watch('agreed')

	const sendToTelegram = async (data: IContactFormInput) => {
		const chatId = process.env.CHAT_ID
		const token = process.env.TELEGRAM_TOKEN
		const url = `https://api.telegram.org/bot${token}/sendMessage`

		console.log(data)

		const message = `
Новая заявка:
Имя: ${data.name}
Телефон: ${data.tel}
Телеграм: ${data.telegram}
Статус: ${data.status}
Согласие на обработку: ${data.agreed ? 'Да' : 'Нет'}
`

		try {
			await axios.post(url, {
				chat_id: chatId,
				text: message,
				parse_mode: 'HTML',
			})
			toast.success('Сообщение отправлено')
			form.reset()
		} catch (error) {
			toast.error('Ошибка при отправке')
		}
	}

	const onSubmit: SubmitHandler<IContactFormInput> = (data) => {
		if (!data.agreed) {
			toast.error('Необходимо согласие на обработку персональных данных')
			return
		}
		sendToTelegram(data)
	}

	return (
		<div className='w-full mx-auto mb-10'>
			<Form {...form}>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					<FormField
						control={control}
						name='name'
						rules={{ required: 'Введите ваше имя' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input placeholder='Введите ваше ФИО' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name='tel'
						rules={{
							required: 'Введите номер телефона',
							// pattern: {
							// 	value: validPhone,
							// 	message: 'Некорректный номер',
							// },
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Номер телефона</FormLabel>
								<FormControl>
									<Input placeholder='Введите ваш номер телефона' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name='telegram'
						// rules={{ required: 'Введите ваш юзернейм' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Юзер телеграмм</FormLabel>
								<FormControl>
									<Input placeholder='Введите ваш юзернейм' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name='status'
						rules={{ required: 'Выберите статус' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Статус</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder='Выберите ваш статус' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value='Из Ташкента'>Из Ташкента</SelectItem>
										<SelectItem value='Иногородний'>Иногородний</SelectItem>
										<SelectItem value='Иностранный'>Иностранный</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name='agreed'
						rules={{ required: true }}
						render={({ field }) => (
							<FormItem className='flex items-center gap-2'>
								<FormControl>
									<Checkbox checked={field.value} onCheckedChange={field.onChange} />
								</FormControl>
								<FormLabel className='text-sm text-muted-foreground gap-1'>
									<p>
										Даю согласие на обработку{' '}
										<Link href={PUBLIC_URL.agreement()} className='underline inline'>
											персональных данных
										</Link>
									</p>
								</FormLabel>
							</FormItem>
						)}
					/>

					<Button type='submit' variant={'main'} className='w-full' disabled={!form.formState.isValid}>
						Отправить
					</Button>
				</form>
			</Form>
		</div>
	)
}
