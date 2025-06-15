import { Skeleton } from "@/components/ui/Skeleton";

export function LoaderSkeleton() {
	return (
		<>
			<div className='hidden md:block space-y-2'>
				{Array.from({ length: 5 }).map((_, rowIdx) => (
					<div key={rowIdx} className='flex gap-2'>
						<Skeleton className='h-16 w-32' />
						{Array.from({ length: 5 }).map((_, colIdx) => (
							<Skeleton key={colIdx} className='h-16 flex-1' />
						))}
					</div>
				))}
			</div>

			<div className='block md:hidden space-y-4'>
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
			</div>
		</>
	)
}
