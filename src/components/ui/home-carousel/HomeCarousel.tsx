import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../Carousel'
import { type CarouselApi } from '../Carousel'
import Link from 'next/link'
import { PATH_URL, PUBLIC_URL } from '@/config/url.config'
import Autoplay from 'embla-carousel-autoplay'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useGetTopNews } from '@/hooks/queries/news/useGetTopNews'

interface Props {
	classname?: string
}

export function HomeCarousel({ classname }: Props) {
	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)
	const [count, setCount] = React.useState(0)
	const { topNews, isLoading } = useGetTopNews()

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
				{isLoading
					? Array.from({ length: 3 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className='w-full xl:h-[380px] lg:h-[310px] sm:h-[280px] max-sm:aspect-video rounded-2xl overflow-hidden bg-muted animate-pulse' />
							</CarouselItem>
					  ))
					: topNews?.map((topNew) => (
							<CarouselItem key={topNew.id}>
								<Link
									href={PUBLIC_URL.news(topNew.slug)}
									className='w-full xl:h-[380px] lg:h-[310px] sm:h-[280px] max-sm:aspect-video rounded-2xl overflow-hidden block'
								>
									<Image src={topNew.preview} alt={topNew.title} width={1440} height={720} className='h-full object-cover' />
								</Link>
							</CarouselItem>
					  ))}
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
