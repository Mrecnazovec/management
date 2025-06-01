import { PUBLIC_URL } from '@/config/url.config'

export const MenuSections = [
	{
		title: 'Абитуриентам',
		links: [
			{ href: PUBLIC_URL.applicant(), label: 'Абитуриентам', bold: true },
			{ href: PUBLIC_URL.applicant('#docs'), label: 'Документы', isClose: true },
			// { href: PUBLIC_URL.applicant('#commission'), label: 'Приёмная комиссия', isClose: true },
			{ href: 'https://msu.uz/courses', label: 'Подготовка к поступлению' },
			{ href: PUBLIC_URL.contacts(), label: 'Контакты' },
		],
	},
	{
		title: 'Студентам',
		links: [
			{ href: PUBLIC_URL.students(), label: 'Студентам', bold: true },
			{ href: PUBLIC_URL.students('plan'), label: 'Учебный план' },
			{ href: PUBLIC_URL.students('mentors'), label: 'Менторы' },
			{ href: 'https://t.me/+lrYxgfW-FjExMDgy', label: 'Помощь' },
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
			{ href: 'https://msu.uz', label: 'msu.uz' },
			{ href: 'https://www.econ.msu.ru', label: 'econ.msu.ru' },
		],
		socials: [
			{ src: '/svg/inst.svg', alt: 'instagram', href: 'https://www.instagram.com/msu_uz_management/?utm_source=ig_web_button_share_sheet' },
			{ src: '/svg/tg.svg', alt: 'telegram', href: 'https://t.me/Managment_TF_MSU' },
			{ src: '/svg/web.svg', alt: 'website', href: 'https://msu-management.uz' },
		],
	},
]
