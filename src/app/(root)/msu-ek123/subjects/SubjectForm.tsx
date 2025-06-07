'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form-element/Form'
import { ImageUpload } from '@/components/ui/form-element/image-upload/ImageUpload'
import { Input } from '@/components/ui/form-element/Input'
import { RichTextEditor } from '@/components/ui/form-element/RichEditor/RichTextEditor'
import { Heading } from '@/components/ui/Heading'
import { ConfirmModal } from '@/components/ui/modals/ConfirmModal'
import { Textarea } from '@/components/ui/Textarea'
import { useCreateSubject } from '@/hooks/queries/subjects/useCreateSubject'
import { useDeleteSubject } from '@/hooks/queries/subjects/useDeleteSubject'
import { useUpdateSubject } from '@/hooks/queries/subjects/useUpdateSubject'
import { ISubject, ISubjectForm } from '@/shared/types/subject.interface'
import { Plus, Trash } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface SubjectFormProps {
	subject?: ISubject | null
}

export function SubjectForm({ subject }: SubjectFormProps) {
	const { createSubject, isLoadingCreate } = useCreateSubject()
	const { updateSubject, isLoadingUpdate } = useUpdateSubject()
	const { deleteSubject, isLoadingDelete } = useDeleteSubject()

	const title = subject ? 'Изменить данные' : 'Создать предмет'
	const description = subject ? 'Изменить данные предмета' : 'Добавить новый предмет'
	const action = subject ? 'Сохранить' : 'Создать'
	const slug = subject ? subject.slug : ''

	const form = useForm<ISubjectForm>({
		mode: 'onChange',
		defaultValues: {
			title: subject?.title || '',
			description: subject?.description || '',
			result: subject?.result || '',
			duration: subject?.duration || '',
			image: subject?.image || '',
			slug: subject?.slug || '',
			courseNumbers: subject?.courseNumbers || [],
			semesterNumbers: subject?.semesterNumbers || [],
		},
	})

	useEffect(() => {
		if (subject) {
			form.reset({
				title: subject?.title || '',
				description: subject?.description || '',
				result: subject?.result || '',
				duration: subject?.duration || '',
				image: subject?.image || '',
				slug: subject?.slug || '',
				courseNumbers: subject?.courseNumbers || [],
				semesterNumbers: subject?.semesterNumbers || [],
			})
		}
	}, [subject, form.reset])

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = form

	const onSubmit = (data: ISubjectForm) => {
		if (subject) updateSubject({ slug, data })
		else createSubject(data)
	}

	return (
		<Container>
			<div className='flex justify-between'>
				<Heading className='mb-4' title={title} description={description} />
				{subject && (
					<ConfirmModal handleClick={() => deleteSubject({ slug })}>
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
						name='image'
						rules={{ required: 'Загрузите картинку' }}
						render={({ field }) => (
							<FormItem className='mt-4'>
								<FormLabel>Картинка</FormLabel>
								<FormControl>
									<ImageUpload
										isDisabled={isLoadingCreate || isLoadingDelete || isLoadingUpdate}
										onChange={field.onChange}
										value={field.value}
										folder='subjects'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='title'
						rules={{ required: 'Название обязательно' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Название</FormLabel>
								<FormControl>
									<Input {...field} placeholder='Название предмета' disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='description'
						rules={{ required: 'Описание обязательно' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Описание</FormLabel>
								<FormControl>
									<RichTextEditor value={field.value} onChange={field.onChange} disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='duration'
						rules={{ required: 'Продолжительность обязательна' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Продолжительность</FormLabel>
								<FormControl>
									<Input {...field} placeholder='x недель' disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='result'
						rules={{ required: 'Итог обязателен' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Итог</FormLabel>
								<FormControl>
									<Input {...field} placeholder='Экзамен / зачет' disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name='slug'
						rules={{ required: 'Slug обязателен' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Slug</FormLabel>
								<FormControl>
									<Input {...field} placeholder='math-for-management' disabled={isSubmitting} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name='courseNumbers'
						rules={{ required: 'Курс обязателен' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Курс</FormLabel>
								<div className='space-y-2'>
									{field.value?.map((course, index) => (
										<div key={index} className='flex items-center space-x-2'>
											<FormControl>
												<Input
													value={course}
													onChange={(e) => {
														const newCourse = [...field.value]
														newCourse[index] = e.target.value
														field.onChange(newCourse)
													}}
													placeholder='Введите курс'
													disabled={isLoadingCreate || isLoadingUpdate}
												/>
											</FormControl>
											<Button
												disabled={isLoadingCreate || isLoadingUpdate}
												type='button'
												variant={'destructive'}
												onClick={() => field.onChange(field.value.filter((_, i) => i !== index))}
											>
												Удалить
											</Button>
										</div>
									))}
									<Button
										type='button'
										variant={'outline'}
										onClick={() => field.onChange([...(field.value || []), ''])}
										disabled={isLoadingCreate || isLoadingUpdate}
									>
										<Plus /> Добавить курс
									</Button>
								</div>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={control}
						name='semesterNumbers'
						rules={{ required: 'Семестр обязателен' }}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Семестр</FormLabel>
								<div className='space-y-2'>
									{field.value?.map((semester, index) => (
										<div key={index} className='flex items-center space-x-2'>
											<FormControl>
												<Input
													value={semester}
													onChange={(e) => {
														const newSemester = [...field.value]
														newSemester[index] = e.target.value
														field.onChange(newSemester)
													}}
													placeholder='Введите семестр'
													disabled={isLoadingCreate || isLoadingUpdate}
												/>
											</FormControl>
											<Button
												disabled={isLoadingCreate || isLoadingUpdate}
												type='button'
												variant={'destructive'}
												onClick={() => field.onChange(field.value.filter((_, i) => i !== index))}
											>
												Удалить
											</Button>
										</div>
									))}
									<Button
										type='button'
										variant={'outline'}
										onClick={() => field.onChange([...(field.value || []), ''])}
										disabled={isLoadingCreate || isLoadingUpdate}
									>
										<Plus /> Добавить семестр
									</Button>
								</div>
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
