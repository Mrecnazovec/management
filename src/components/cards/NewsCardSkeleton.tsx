import { CarouselItem } from '../ui/Carousel'

export function NewsCardSkeletonCarousel() {
	return (
		<>
			{Array.from({ length: 3 }).map((_, index) => (
				<CarouselItem key={index} className='md:basis-1/3 sm:basis-1/2 basis-1/1'>
					<div className='space-y-4'>
						<div className='aspect-[16/9] rounded-2xl bg-muted animate-pulse' />
						<div className='h-6 rounded-md bg-muted animate-pulse w-4/5' />
						<div className='h-4 rounded-md bg-muted animate-pulse w-1/3' />
					</div>
				</CarouselItem>
			))}
		</>
	)
}

export function NewsCardSkeleton() {
	return (
		<>
			{Array.from({ length: 6 }).map((_, index) => (
				<div key={index} className='md:basis-1/3 sm:basis-1/2 basis-1/1'>
					<div className='space-y-4'>
						<div className='aspect-[16/9] rounded-2xl bg-muted animate-pulse' />
						<div className='h-6 rounded-md bg-muted animate-pulse w-4/5' />
						<div className='h-4 rounded-md bg-muted animate-pulse w-1/3' />
					</div>
				</div>
			))}
		</>
	)
}
