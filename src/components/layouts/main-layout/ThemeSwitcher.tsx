'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import Cookies from 'js-cookie'
import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
	const router = useRouter()
	const [value, setValue] = useState('old')

	useEffect(() => {
		const current = Cookies.get('theme') || 'new'
		setValue(current)
	}, [])

	const handleChange = (newTheme: string) => {
		Cookies.set('theme', newTheme, { expires: 365 })
		setValue(newTheme)
		router.refresh()
	}

	return (
		<Select value={value} onValueChange={handleChange}>
			<SelectTrigger className='w-[160px]'>
				<SelectValue placeholder='Выберите тему' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='new'>
					Новая тема <div className='bg-gradient-to-r from-new-main to-new-secondary size-4 rounded-full'></div>
				</SelectItem>
				<SelectItem value='old'>
					Старая тема <div className='bg-danger size-4 rounded-full'></div>
				</SelectItem>
				<SelectItem value='pick_me'>
					Весенняя тема <div className='bg-pink-400 size-4 rounded-full'></div>
				</SelectItem>
			</SelectContent>
		</Select>
	)
}
