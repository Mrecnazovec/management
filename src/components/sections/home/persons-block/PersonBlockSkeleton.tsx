interface Props {
	role: string
}

export function PersonBlockSkeleton({ role }: Props) {
	const colStartClasses = ['lg:col-start-1', 'lg:col-start-2', 'lg:col-start-3', 'lg:col-start-4', 'lg:col-start-5', 'lg:col-start-6']
	return (
		<div className='space-y-10'>
			{(role === 'administration' || role === 'union') && (
				<div className='grid lg:grid-cols-5 sm:grid-cols-3 mb-5'>
					<div className='animate-pulse lg:col-start-3 sm:col-start-2'>
						<div className='bg-gray-300 rounded-2xl w-full aspect-[3/4]' />
						<div className='h-4 bg-gray-300 mt-2 rounded w-full' />
					</div>
				</div>
			)}

			{role === 'administration' && (
				<div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 mb-10'>
					{Array.from({ length: 4 }).map((_, index) => (
						<div key={index} className={`${colStartClasses[index + 1]} animate-pulse`}>
							<div className='bg-gray-300 rounded-2xl w-full aspect-[3/4]' />
							<div className='h-4 bg-gray-300 mt-2 rounded w-full' />
						</div>
					))}
				</div>
			)}

			<div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 mb-14'>
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className='animate-pulse'>
						<div className='bg-gray-300 rounded-2xl w-full aspect-[3/4]' />
						<div className='h-4 bg-gray-300 mt-2 rounded w-full' />
					</div>
				))}
			</div>
		</div>
	)
}
