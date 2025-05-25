import { PropsWithChildren } from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { FormModal } from '@/components/ui/modals/FormModal'
import { Container } from '@/components/ui/Container'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex flex-col h-full'>
			<div className='flex-1'>
				<Header />
				<main className='relative'>
					{children}
					<FormModal />
				</main>
				<Footer />
			</div>
		</div>
	)
}
