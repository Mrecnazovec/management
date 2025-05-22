import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface Props {
	className?: string
}

function Li({ children, className }: PropsWithChildren<Props>) {
	return (
		<li className={cn('flex items-center mb-4 relative pl-8.5', className)}>
			<div className='w-6 h-[2px] bg-secondary absolute left-0 top-3'></div>
			<p className='text-paragraph'>{children}</p>
		</li>
	)
}

interface LinkProps {
	href: string
	className?: string
}

function A({ children, href, className }: PropsWithChildren<LinkProps>) {
	return (
		<Link href={href} className={cn('text-main underline hover:opacity-80 transition-opacity', className)}>
			{children}
		</Link>
	)
}

function Map({ className }: Props) {
	return (
		<div className={cn('relative pt-[56.25%] mt-10 rounded-2xl overflow-hidden', className)}>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.386001138295!2d69.27853627573809!3d41.30046567131106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad1654fe4a5%3A0x3920c131719425d0!2z0KTQuNC70LjQsNC7INCc0JPQoyDQuNC8LiDQm9C-0LzQvtC90L7RgdC-0LLQsA!5e0!3m2!1sru!2s!4v1747912644159!5m2!1sru!2s'
				className='absolute top-0 left-0 w-full h-full border-0'
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	)
}

export function Contacts() {
	return (
		<>
			<Container>
				<h1 className='sr-only'>Контакты</h1>
				<h2 className='text-center sm:text-3xl text-xl lg:mb-14 mb-4'>Контакты</h2>

				<div className='flex items-center gap-14 mb-14 max-lg:flex-col'>
					<Image src='/jpg/test.jpg' alt='Абитуриентка' width={500} height={333} />
					<ul>
						<Li>+998 (71) 232-28-01 Приемная исполнительного директора</Li>
						<Li>+998 (71) 233-58-26 Канцелярия и телефон доверия</Li>
						<Li>+998 (71) 232-28-22 Направление «Менеджмент»</Li>
						<Li>+998 (71) 233-87-88 Подготовительные курсы</Li>
						<Li>+998 (71) 236-30-60 Главный бухгалтер</Li>
						<Li>
							Email для обращений: <A href='mailto:info@msu.uz'>info@msu.uz</A>
						</Li>
						<Li>
							Email для межведомственной и правительственной переписки: <A href='mailto:msu@exat.uz'>msu@exat.uz</A>
						</Li>
						<Li>
							Группа абитуриентов направления Менеджмент: <A href='https://t.me/+TOTFZ4bcaU1iNzE6'>ссылка</A>
						</Li>
					</ul>
				</div>
				<p className='text-xl font-semibold'>
					Адрес Филиала МГУ: <A href='https://yandex.uz/maps/-/CDqKQYM-'>100060, г. Ташкент, Мирабадский район, проспект Амира Темура, 22.</A>
				</p>
				<Map className='lg:block hidden' />
			</Container>
			<Map className='rounded-[0] lg:hidden block' />
		</>
	)
}
