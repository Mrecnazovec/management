'use client'

import CountdownTimer from '@/components/sections/home/CountdownTimer'
import { HistorySection } from '@/components/sections/home/HistorySection'
import { NavigationSection } from '@/components/sections/home/NavigationSection'
import { NewsSection } from '@/components/sections/home/NewsSection'
import { NumberSection } from '@/components/sections/home/NumberSection'

export function Home() {
	return (
		<>
			<h1 className='sr-only'>Направление Менеджмент ТФ МГУ</h1>
			<NavigationSection />
			<CountdownTimer />
			<NumberSection />
			<HistorySection />
			<NewsSection />
		</>
	)
}
