import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../Carousel'
import { type CarouselApi } from '../Carousel'
import Link from 'next/link'
import { PUBLIC_URL } from '@/config/url.config'
import Autoplay from 'embla-carousel-autoplay'

import { cn } from '@/lib/utils'

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
						<div className='w-full xl:h-[380px] lg:h-[310px] sm:h-[280px] bg-red-500 max-sm:aspect-video rounded-2xl'></div>
					</Link>
				</CarouselItem>
				<CarouselItem>2</CarouselItem>
				<CarouselItem>3</CarouselItem>
			</CarouselContent>
			<div className='flex items-center gap-5'>
				{Array.from({ length: count }).map((_, index) => (
					<button onClick={() => api?.scrollTo(index)} key={index} className='p-1 cursor-pointer'>
						<div className={cn('size-2.5 rounded-full border-2 border-main ', `${current - 1 === index && 'bg-main'}`)}></div>
					</button>
				))}
			</div>
		</Carousel>
	)
}
