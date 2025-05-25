import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../Carousel'
import { type CarouselApi } from '../Carousel'
import Link from 'next/link'
import { PATH_URL, PUBLIC_URL } from '@/config/url.config'
import Autoplay from 'embla-carousel-autoplay'

import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Props {
	classname?: string
}

export function HomeCarousel({ classname }: Props) {
	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)
	const [count, setCount] = React.useState(0)

	React.useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 7000,
					stopOnMouseEnter: true,
				}),
			]}
			className={classname}
			setApi={setApi}
		>
			<CarouselContent className='mb-[25px]'>
				<CarouselItem>
					<Link href={PUBLIC_URL.news('new-website')}>
						<div className='w-full xl:h-[380px] lg:h-[310px] sm:h-[280px] bg-gradient-to-r from-main to-secondary max-sm:aspect-video rounded-2xl flex items-center justify-center flex-col p-2'>
							<Image src={PATH_URL.svg('website.svg')} alt='Новый вебсайт' width={300} height={300} className='h-[80%]' />
							<p className='text-white font-semibold xs:text-xl text-center	'>Глобальное обновление сайта</p>
						</div>
					</Link>
				</CarouselItem>
				<CarouselItem>
					<Link
						href='https://msu-store.com'
						className='w-full xl:h-[380px] lg:h-[310px] sm:h-[280px] max-sm:aspect-video rounded-2xl overflow-hidden block'
					>
						<Image src={PATH_URL.svg('msustore.svg')} alt='Магазин MSU-STORE' width={1440} height={720} className='h-full object-cover' />
					</Link>
				</CarouselItem>
			</CarouselContent>
			<div className='flex items-center gap-5'>
				{Array.from({ length: count }).map((_, index) => (
					<button onClick={() => api?.scrollTo(index)} key={index} className='p-1 cursor-pointer'>
						<div
							className={cn('size-2.5 rounded-full border-[1px] border-main bg-main/0 transition-all', `${current - 1 === index && 'bg-main/100'}`)}
						></div>
					</button>
				))}
			</div>
		</Carousel>
	)
}
