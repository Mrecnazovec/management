'use client'

import { Container } from '@/components/ui/Container'
import { MenuLinks } from '@/components/ui/MenuLinks'
import { PUBLIC_URL } from '@/config/url.config'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const menuSections = [
	{
		title: 'Абитуриентам',
		links: [
			{ href: PUBLIC_URL.applicant(), label: 'Абитуриентам', bold: true },
			{ href: PUBLIC_URL.applicant('#docs'), label: 'Документы' },
			{ href: PUBLIC_URL.applicant('#commission'), label: 'Приёмная комиссия' },
			{ href: PUBLIC_URL.applicant('#form'), label: 'Подготовка к поступлению' },
			{ href: PUBLIC_URL.contacts(), label: 'Контакты' },
		],
	},
	{
		title: 'Студентам',
		links: [
			{ href: PUBLIC_URL.students(), label: 'Студентам', bold: true },
			{ href: PUBLIC_URL.students('plan'), label: 'Учебный план' },
			{ href: PUBLIC_URL.students('mentors'), label: 'Менторы' },
			{ href: PUBLIC_URL.students('help'), label: 'Помощь' },
			{ href: 'https://msu2006.edupage.org/timetable/', label: 'Расписание', external: true },
		],
	},
	{
		title: 'Университет',
		links: [
			{ href: PUBLIC_URL.home(), label: 'Университет', bold: true },
			{ href: PUBLIC_URL.home(), label: 'Руководство' },
			{ href: PUBLIC_URL.home(), label: 'Преподаватели' },
			{ href: PUBLIC_URL.home(), label: 'Студ. совет' },
			{ href: PUBLIC_URL.home(), label: 'Новости' },
		],
	},
	{
		title: 'Ресурсы',
		links: [
			{ href: PUBLIC_URL.home(), label: 'msu.uz' },
			{ href: PUBLIC_URL.home(), label: 'econ.msu.ru' },
		],
		socials: [
			{ src: '/svg/inst.svg', alt: 'instagram', href: '' },
			{ src: '/svg/tg.svg', alt: 'telegram', href: '' },
			{ src: '/svg/web.svg', alt: 'website', href: '' },
		],
	},
]

type MenuItem = {
	href: string
	label: string
	bold?: boolean
	external?: boolean
}

export function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='bg-gradient-to-r from-main from-25% to-secondary to-75% border-b-4 border-b-danger relative h-[90px]'>
			<Container className='py-1 flex items-center justify-between absolute z-10 left-0 right-0 m-auto'>
				<Link className='flex items-center gap-2.5 text-white w-fit p-2 hover:opacity-85 transition-opacity' href={PUBLIC_URL.home()}>
					<Image src='/svg/EconLogo.svg' alt='logo' width={80} height={62} />
					<div>
						<p className='text-xl'>Направление менеджмент</p>
						<p className='text-sm'>ТФ МГУ имени М.В.Ломоносова</p>
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
					'h-0 w-full bg-gradient-to-r from-main from-25% to-secondary to-75% transition-[height] duration-500 absolute  left-0 overflow-hidden flex items-center justify-center text-white delay-300 overflow-y-scroll',
					isOpen && 'h-screen delay-0'
				)}
			>
				<Container className={cn('opacity-0 transition-all duration-500', isOpen && 'opacity-100 delay-300')}>
					<MenuLinks menuSections={menuSections} />
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
