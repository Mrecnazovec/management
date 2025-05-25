'use client'

import { ContactForm } from '@/app/(root)/applicant/form-section/ContactForm'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../Dialog'
import { Button } from '../Button'

export function FormModal() {
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
						Подача документов <br /> ещё не началась
					</DialogTitle>
					<DialogDescription className='text-center text-muted-foreground'>
						Оставьте заявку и мы свяжемся с вами когда начнётся приём!
					</DialogDescription>
				</DialogHeader>
				<ContactForm />
			</DialogContent>
		</Dialog>
	)
}
