import { PropsWithChildren } from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='flex flex-col h-full'>
			<div className='flex-1'>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	)
}
