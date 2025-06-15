import { PropsWithChildren } from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { ThemeModal } from '@/components/ui/modals/ThemeModal'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex flex-col h-full'>
			<div className='flex-1'>
				<Header />
				<main className='relative'>{children}</main>
				<ThemeModal />
				<Footer />
			</div>
		</div>
	)
}
