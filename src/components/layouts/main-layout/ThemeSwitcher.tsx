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
		const current = Cookies.get('theme') || 'old'
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
				<SelectItem value='old'>Старая тема</SelectItem>
				<SelectItem value='new'>Новая тема</SelectItem>
			</SelectContent>
		</Select>
	)
}
