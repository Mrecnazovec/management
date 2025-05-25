import { PATH_URL, PUBLIC_URL } from '@/config/url.config'
import Image from 'next/image'
import Link from 'next/link'

export function NewsCard() {
	return (
		<Link href={PUBLIC_URL.news('new-website')}>
			<div className='aspect-[16/9] bg-gradient-to-r from-main to-secondary rounded-2xl mb-4 text-xl flex items-center justify-center'>
				<Image src={PATH_URL.svg('website.svg')} alt='Новый сайт' width={200} height={200}/>
			</div>
			<p className='mb-4'>Направление Менеджмент обновил свой личный сайт для поддержки студентов и информировании абитуриентов</p>
			<span className='text-muted-foreground'>21 мая 2025</span>
		</Link>
	)
}
