import React from 'react'

import { type CarouselApi } from '@/components/ui/Carousel'
import Link from 'next/link'
import { PATH_URL, PUBLIC_URL } from '@/config/url.config'
import Autoplay from 'embla-carousel-autoplay'

import { cn } from '@/lib/utils'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/Carousel'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { NewsCard } from '@/components/cards/NewsCard'

interface Props {
	classname?: string
}

export function NewsCarousel({ classname }: Props) {
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
			className={cn(classname)}
			setApi={setApi}
		>
			<CarouselContent className='mb-6 pb-6'>
				<CarouselItem className='md:basis-1/3 sm:basis-1/2 basis-1/1'>
					<NewsCard />
				</CarouselItem>
			</CarouselContent>
			<div className='border-b-2 border-b-paragraph/30 mb-6'></div>
			<div className='flex items-center gap-5 mb-4'>
				{Array.from({ length: count }).map((_, index) => (
					<button onClick={() => api?.scrollTo(index)} key={index} className='p-1 cursor-pointer'>
						<div className={cn('size-2.5 rounded-full border-2 border-main ', `${current - 1 === index && 'bg-main'}`)}></div>
					</button>
				))}
			</div>
			<div className='flex justify-end'>
				<CarouselPrevious className='top-full left-0' />
				<CarouselNext className='top-full left-10' />
				<Link href={PUBLIC_URL.news('')}>
					<Button variant={'main'}>Все новости</Button>
				</Link>
			</div>
		</Carousel>
	)
}
