'use client'

import { ContactForm } from '@/app/(root)/applicant/form-section/ContactForm'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../Dialog'
import { Button } from '../Button'
import Link from 'next/link'
import { PUBLIC_URL } from '@/config/url.config'

export default function FormModal() {
	return (
		<Dialog>
			<DialogTrigger className='cursor-pointer fixed bottom-[30px] right-[30px]' asChild>
				<Button variant={'main'} className=''>
					Подать документы онлайн!
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='text-2xl font-bold text-center mb-1'>
						<Link href={PUBLIC_URL.applicant()} className='underline text-main'>
							Инструкция по подаче документов
						</Link>
					</DialogTitle>
					<DialogDescription className='text-center text-muted-foreground'>Остались вопросы? Оставьте заявку и мы с вами свяжемся!</DialogDescription>
				</DialogHeader>
				<ContactForm />
			</DialogContent>
		</Dialog>
	)
}
