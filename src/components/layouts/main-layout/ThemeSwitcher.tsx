'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { useTheme } from './BodyProvider'

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()

	return (
		<Select value={theme} onValueChange={setTheme}>
			<SelectTrigger className='w-[160px]'>
				<SelectValue placeholder='Выберите тему' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='new'>
					Новая тема <div className='bg-gradient-to-r from-new-main to-new-secondary size-4 rounded-full ml-auto' />
				</SelectItem>
				<SelectItem value='old'>
					Старая тема <div className='bg-danger size-4 rounded-full ml-auto' />
				</SelectItem>
				<SelectItem value='pick_me'>
					Весенняя тема <div className='bg-pink-400 size-4 rounded-full ml-auto' />
				</SelectItem>
			</SelectContent>
		</Select>
	)
}
