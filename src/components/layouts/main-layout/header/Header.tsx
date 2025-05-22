'use client'

import { Container } from '@/components/ui/Container'
import { MenuLinks } from '@/components/ui/MenuLinks'
import { PUBLIC_URL } from '@/config/url.config'
import { MenuSections } from '@/constants/menu.constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'


export function Header() {
	const [isOpen, setIsOpen] = useState(false)

	const pathname = usePathname()

	useEffect(() => {
		setIsOpen(false)
	}, [pathname])

	return (
		<div className='bg-gradient-to-r from-main from-25% to-secondary to-75% border-b-4 border-b-danger relative h-[90px] max-[390px]:h-[70px]'>
			<Container
				className={cn(
					'py-1 flex items-center justify-between absolute z-20 left-0 right-0 m-auto bg-gradient-to-r from-main from-25% to-secondary to-75%',
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

				<button onClick={() => setIsOpen(!isOpen)} className='relative w-6 h-4 cursor-pointer'>
					<div className={cn('w-6 h-[2px] bg-white absolute transition-all duration-500', isOpen ? 'rotate-45 top-2' : 'top-0')} />
					<div className={cn('w-6 h-[2px] bg-white absolute transition-all duration-500', isOpen ? 'opacity-0' : 'top-2')} />
					<div className={cn('w-6 h-[2px] bg-white absolute transition-all duration-500', isOpen ? '-rotate-45 top-2' : 'top-4')} />
				</button>
			</Container>

			<div
				className={cn(
					'h-0 w-full bg-gradient-to-r from-main from-25% to-secondary to-75% transition-[height] duration-500 fixed  left-0 overflow-hidden flex items-center justify-center text-white delay-300 overflow-y-scroll max-[390px]:top-[0] z-10 no-scrollbar',
					isOpen && 'h-screen delay-0'
				)}
			>
				<Container
					className={cn('opacity-0 transition-all duration-500 ', isOpen && 'opacity-100 delay-300 max-[390px]:pt-[230px] max-[300px]:pt-[450px]')}
				>
					<MenuLinks menuSections={MenuSections} />
					<ul className='flex justify-between flex-wrap pt-[30px]'>
						<li className='flex flex-col gap-[30px]'>
							<p className='text-base font-semibold'>Направление Менеджмент ТФ МГУ имени М.В.Ломоносова</p>
							<p className='text-base font-normal'>© 2023-2025</p>
						</li>
					</ul>
				</Container>
			</div>
		</div>
	)
}
