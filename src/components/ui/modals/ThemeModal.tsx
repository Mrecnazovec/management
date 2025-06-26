'use client'

import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, Flower, LayoutDashboard, Wand2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type ThemeOption = 'old' | 'new' | 'pick_me'

const themes: {
	id: ThemeOption
	title: string
	description: string
	icon: React.ReactNode
}[] = [
	{
		id: 'new',
		title: 'Новый стиль',
		description: 'Новая концепция в новых цветах',
		icon: <Wand2 className='size-6 text-new-main' />,
	},
	{
		id: 'old',
		title: 'Классический стиль',
		description: 'Привычный дизайн в рубиновом цвете',
		icon: <LayoutDashboard className='size-6 text-danger' />,
	},
	{
		id: 'pick_me',
		title: 'Весенний стиль',
		description: 'Свежий нежный дизайн',
		icon: <Flower className='size-6 text-pink-300' />,
	},
]

export function ThemeModal() {
	const [open, setOpen] = useState(false)
	const [selected, setSelected] = useState<ThemeOption | null>(null)

	useEffect(() => {
		const theme = Cookies.get('theme')
		if (!theme) setOpen(true)
	}, [])

	const handleApply = () => {
		if (!selected) return
		Cookies.set('theme', selected, { expires: 365 })
		setOpen(false)
		location.reload()
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className='sm:max-w-[500px]'>
				<DialogHeader>
					<DialogTitle>Выберите оформление сайта</DialogTitle>
					<DialogDescription>Вы можете изменить тему позже в меню.</DialogDescription>
				</DialogHeader>

				<div className='grid gap-4 mt-4'>
					{themes.map((theme) => (
						<button
							key={theme.id}
							onClick={() => setSelected(theme.id)}
							className={cn(
								'relative flex items-start gap-4 p-4 rounded-xl border transition hover:shadow-md text-left',
								selected === theme.id ? 'border-primary ring-2 ring-primary/20 bg-muted' : 'border-border'
							)}
						>
							<div>{theme.icon}</div>
							<div className='flex flex-col'>
								<span className='text-lg font-medium'>{theme.title}</span>
								<span className='text-muted-foreground text-sm'>{theme.description}</span>
							</div>
							{selected === theme.id && <CheckCircle2 className='absolute top-3 right-3 text-primary' />}
						</button>
					))}
				</div>

				<div className='flex justify-end pt-2'>
					<Button disabled={!selected} onClick={handleApply}>
						Применить
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
