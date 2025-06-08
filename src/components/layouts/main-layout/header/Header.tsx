'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MenuLinks } from '@/components/ui/MenuLinks'
import { ADMIN_URL, PUBLIC_URL } from '@/config/url.config'
import { MenuSections } from '@/constants/menu.constants'
import { useProfile } from '@/hooks/useProfile'
import { cn } from '@/lib/utils'
import { UserCog2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const [showHeader, setShowHeader] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const { user, isLoading } = useProfile()

	const pathname = usePathname()

	useEffect(() => {
		setIsOpen(false)
	}, [pathname])

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	useEffect(() => {
		const handleHashChange = () => {
			setIsOpen(false)
		}

		window.addEventListener('hashchange', handleHashChange)

		return () => {
			window.removeEventListener('hashchange', handleHashChange)
		}
	}, [])

	// === Скролл-логика ===
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			if (currentScrollY > lastScrollY && currentScrollY > 70) {
				// Скролл вниз
				setShowHeader(false)
			} else {
				// Скролл вверх
				setShowHeader(true)
			}
			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [lastScrollY])

	return (
		<header
			className={cn(
				'bg-gradient-to-r from-main from-25% to-secondary to-75% border-b-4 border-b-danger fixed top-0 left-0 w-full z-30 h-[90px] max-[390px]:h-[70px] transition-transform duration-300',
				!showHeader && 'transform -translate-y-full'
			)}
		>
			<Container
				className={cn(
					'py-1 flex items-center justify-between absolute z-20 left-0 right-0 m-auto max-[390px]:bg-gradient-to-r max-[390px]:from-main max-[390px]:from-25% max-[390px]:to-secondary max-[390px]:to-75%',
					`${isOpen && 'fixed'}`
				)}
			>
				<Link className='flex items-center gap-2.5 text-white w-fit p-2 hover:opacity-85 transition-opacity' href={PUBLIC_URL.home()}>
					<Image src='/svg/EconLogo.svg' alt='logo' width={80} height={62} className='max-[390px]:w-[60px]' />
					<div>
						<p className='text-xl max-[390px]:text-sm'>
							Направление <br className='sm:hidden block' /> менеджмент
						</p>
						<p className='text-sm sm:block hidden'>ТФ МГУ имени М.В.Ломоносова</p>
					</div>
				</Link>

				<div className='flex items-center'>
					{user && (
						<Link href={ADMIN_URL.home()} className='mr-4'>
							<Button type='button' size={'icon'} variant={'link'}>
								<UserCog2 className='text-white size-6' />
							</Button>
						</Link>
					)}
					<button onClick={() => setIsOpen(!isOpen)} className='relative w-6 h-4 cursor-pointer'>
						<div className={cn('w-6 h-[2px] bg-white absolute transition-all duration-500', isOpen ? 'rotate-45 top-2' : 'top-0')} />
						<div className={cn('w-6 h-[2px] bg-white absolute transition-all duration-500', isOpen ? 'opacity-0' : 'top-2')} />
						<div className={cn('w-6 h-[2px] bg-white absolute transition-all duration-500', isOpen ? '-rotate-45 top-2' : 'top-4')} />
					</button>
				</div>
			</Container>

			<div
				className={cn(
					'h-0 w-full bg-gradient-to-r from-main from-25% to-secondary to-75% transition-all duration-500 fixed top-[84px] left-0 overflow-hidden flex items-start justify-center text-white delay-300 overflow-y-scroll z-10 no-scrollbar pt-0 max-[390px]:top-[70px]',
					isOpen && 'h-screen delay-0 '
				)}
			>
				<Container className={cn('opacity-0 transition-all duration-500 ', isOpen && 'opacity-100 delay-300 ')}>
					<MenuLinks menuSections={MenuSections} onLinkClick={() => setIsOpen(false)} />
					<ul className='flex justify-between flex-wrap pt-[30px]'>
						<li className='flex flex-col gap-[30px]'>
							<p className='text-base font-semibold'>Направление Менеджмент ТФ МГУ имени М.В.Ломоносова</p>
							<p className='text-base font-normal'>© 2023-2025</p>
						</li>
					</ul>
				</Container>
			</div>
		</header>
	)
}
