interface DateTagProps {
	date: string
}

export function DateTag({ date }: DateTagProps) {
	return (
		<div className='flex justify-end mb-14'>
			<div className='bg-[#F5F8FD] border-l-3 border-l-black px-9'>
				<p>{date}</p>
			</div>
		</div>
	)
}
