'use client'

import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { Container } from '@/components/ui/Container'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form-element/Form'
import { ImageUpload } from '@/components/ui/form-element/image-upload/ImageUpload'

import { Input } from '@/components/ui/form-element/Input'
import { RichTextEditor } from '@/components/ui/form-element/RichEditor/RichTextEditor'

import { Heading } from '@/components/ui/Heading'
import { ConfirmModal } from '@/components/ui/modals/ConfirmModal'
import { useCreateNew } from '@/hooks/queries/news/useCreateNew'
import { useDeleteNew } from '@/hooks/queries/news/useDeleteNew'
import { useUpdateNew } from '@/hooks/queries/news/useUpdateNew'
import { INewForm } from '@/shared/types/new.interface'
import { INew } from '@/shared/types/new.interface'
import { Trash } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface NewFormProps {
	post?: INew | null
}

export function NewForm({ post }: NewFormProps) {
	const { createNew, isLoadingCreate } = useCreateNew()
	const { updateNew, isLoadingUpdate } = useUpdateNew()
	const { deleteNew, isLoadingDelete } = useDeleteNew()

	const title = post ? 'Изменить новость' : 'Добавить новость'
	const description = post ? 'Изменить новость' : 'Добавить нового новость'
	const action = post ? 'Сохранить' : 'Добавить'
	const slug = post?.slug || ''

	const form = useForm<INewForm>({
		mode: 'onChange',
		defaultValues: {
			text: post?.text || '',
			preview: post?.preview || '',
			slug: post?.slug || '',
			title: post?.title || '',
			isTopNew: post?.isTopNew || false,
		},
	})

	useEffect(() => {
		if (post) {
			form.reset({
				text: post?.text || '',
				preview: post?.preview || '',
				slug: post?.slug || '',
				title: post?.title || '',
				isTopNew: post?.isTopNew || false,
			})
		}
	}, [post, form.reset])

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = form

	const onSubmit = (data: INewForm) => {
		if (post) updateNew({ slug, data })
		else createNew(data)
	}

	return (
		<Container>
			<div className='flex justify-between'>
				<Heading className='mb-4' title={title} description={description} />
				{post && (
					<ConfirmModal handleClick={() => deleteNew({ slug })}>
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
						name='preview'
						rules={{ required: 'Загрузите картинку' }}
						render={({ field }) => (
							<FormItem className='mt-4'>
								<FormLabel>Картинка</FormLabel>
								<FormControl>
									<ImageUpload
										isDisabled={isLoadingCreate || isLoadingDelete || isLoadingUpdate}
										onChange={field.onChange}
										value={field.value}
										folder={'news'}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='title'
						rules={{ required: 'Заголовок обязателен' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input {...field} placeholder='Заголовок' disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='text'
						rules={{ required: 'Текст обязателен' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Биография</FormLabel>
								<FormControl>
									<RichTextEditor value={field.value} onChange={field.onChange} disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='slug'
						// rules={{ required: 'Slug обязателен' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input {...field} placeholder='first-new' disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='isTopNew'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Топ новость?</FormLabel>
								<FormControl>
									<Checkbox checked={field.value} onCheckedChange={field.onChange} disabled={isSubmitting} />
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
