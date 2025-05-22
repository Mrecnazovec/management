import { Container } from '@/components/ui/Container'
import { MenuLinks } from '@/components/ui/MenuLinks'
import { PUBLIC_URL } from '@/config/url.config'
import { MenuSections } from '@/constants/menu.constants'
import Link from 'next/link'

export function Footer() {

	return (
		<footer className='bg-gradient-to-r from-main from-25% to-secondary to-75% border-t-4 border-t-danger text-white sm:py-10 py-5'>
			<Container>
				<MenuLinks menuSections={MenuSections} />
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
