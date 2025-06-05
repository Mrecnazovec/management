'use client'

import { Container } from '@/components/ui/Container'
import { useState } from 'react'
import { useAuthForm } from './useAuthForm'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Form } from '@/components/ui/form-element/Form'
import { AuthFields } from './AuthFields'
import { Button } from '@/components/ui/Button'

export function Auth() {
	const [isReg, setIsReg] = useState(false)

	const { onSubmit, form, isPending } = useAuthForm(isReg)
	return (
		<Container className='h-[80vh] flex items-center justify-center'>
			<Card className='w-full'>
				<CardHeader>
					<CardTitle>{isReg ? 'Создать аккаунт' : 'Войти в аккаунт'}</CardTitle>

				</CardHeader>
				<CardContent className=''>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<AuthFields form={form} isPending={isPending} isReg={isReg} />

							<Button variant={'main'} disabled={isPending}>
								{isReg ? 'Создать' : 'Войти'}
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</Container>
	)
}
