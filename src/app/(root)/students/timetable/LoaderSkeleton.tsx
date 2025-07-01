import { Skeleton } from '@/components/ui/Skeleton'

export function LoaderSkeleton() {
	return (
		<>
			<div className='hidden lg:block space-y-2'>
				{/* <Skeleton className='h-6 w-1/3 mx-auto mb-4' />

				<div className='flex'>
					<Skeleton className='h-10 w-32' />
					{Array.from({ length: 6 }).map((_, idx) => (
						<Skeleton key={idx} className='h-10 flex-1 mx-1' />
					))}
				</div>

				{Array.from({ length: 5 }).map((_, rowIdx) => (
					<div key={rowIdx} className='flex'>
						<Skeleton className='h-24 w-32' />
						{Array.from({ length: 6 }).map((_, colIdx) => (
							<Skeleton key={colIdx} className='h-24 flex-1 mx-1' />
						))}
					</div>
				))} */}
				{Array.from({ length: 4 }).map((_, idx) => (
					<Skeleton key={idx} className='w-full h-[600px] mb-10' />
				))}
			</div>

			{/* <div className='block md:hidden space-y-4'>
				{Array.from({ length: 5 }).map((_, idx) => (
					<div key={idx} className='border rounded-lg shadow-sm p-4 space-y-2'>
						<Skeleton className='h-6 w-2/3' />
						{Array.from({ length: 3 }).map((_, j) => (
							<div key={j} className='space-y-1'>
								<Skeleton className='h-4 w-1/2' />
								<Skeleton className='h-4 w-full' />
								<Skeleton className='h-4 w-3/4' />
							</div>
						))}
					</div>
				))}
			</div> */}
		</>
	)
}
