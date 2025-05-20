import { Container } from '@/components/ui/Container'
import { MenuLinks } from '@/components/ui/MenuLinks'
import { PUBLIC_URL } from '@/config/url.config'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function Footer() {
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
			{ href: PUBLIC_URL.university(), label: 'Университет', bold: true },
			{ href: PUBLIC_URL.university('administration'), label: 'Руководство' },
			{ href: PUBLIC_URL.university('teachers'), label: 'Преподаватели' },
			{ href: PUBLIC_URL.university('union'), label: 'Студ. совет' },
			{ href: PUBLIC_URL.university('news'), label: 'Новости' },
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

	return (
		<footer className='bg-gradient-to-r from-main from-25% to-secondary to-75% border-t-4 border-t-danger text-white'>
			<Container>
				<MenuLinks menuSections={menuSections} />
				<ul className='flex justify-between flex-wrap pt-[30px]'>
					<li className='flex flex-col gap-[30px]'>
						<p className='text-base font-semibold'>
							Направление Менеджмент <br /> ТФ МГУ имени М.В.Ломоносова
						</p>
						<p className='text-base font-normal'>© 2023-2025</p>
					</li>
					<li className='flex flex-col gap-[30px]'>
						<p className='text-base font-semibold max-w-[410px]'>
							При использовании материалов, размещенных на этом web-сайте, ссылка на источник обязательна!
						</p>
						<Link href={PUBLIC_URL.applicant()} className='text-base font-normal underline'>
							Политика обработки данных
						</Link>
					</li>
					<li className='flex flex-col gap-[30px]'>
						<p className='text-base font-semibold max-w-[214px]'>Сайт выполнен Научным сектором Менеджмента</p>
					</li>
				</ul>
			</Container>
		</footer>
	)
}
