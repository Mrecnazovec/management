import { Container } from '@/components/ui/Container'
import { HeroStudents } from './HeroStudents'
import Link from 'next/link'
import { PUBLIC_URL } from '@/config/url.config'
import { ArrowUpFromDot } from 'lucide-react'

export function Students() {
	return (
		<>
			<HeroStudents />
			<Container className='grid grid-cols-2 gap-7.5 mb-14'>
				<Link
					href='https://msu2006.edupage.org/timetable/'
					target='_blank'
					className='sm:aspect-[585/384] aspect-[810/400] sm:col-span-1 col-span-3 relative rounded-2xl bg-[url("/jpg/schedule.jpg")] bg-no-repeat bg-cover object-cover bg-[position:top_20%_center]'
				>
					<div className='flex items-center gap-2 text-white text-xl absolute md:bottom-[30px] bottom-[5px] md:left-[30px] left-[5px] font-semibold font-msu'>
						<p>Расписание</p>
						<ArrowUpFromDot className='rotate-90' />
					</div>
				</Link>
				<Link
					href={PUBLIC_URL.students('plan')}
					className='sm:aspect-[585/384] aspect-[810/400] sm:col-span-1 col-span-3 relative rounded-2xl bg-[url("/jpg/plan.jpg")] bg-no-repeat bg-cover object-cover bg-[position:top_20%_center]'
				>
					<div className='flex items-center gap-2 text-white text-xl absolute md:bottom-[30px] bottom-[5px] md:left-[30px] left-[5px] font-semibold font-msu'>
						<p>Расписание</p>
						<ArrowUpFromDot className='rotate-90' />
					</div>
				</Link>
				<Link
					href={PUBLIC_URL.students('mentors')}
					className='sm:aspect-[585/384] aspect-[810/400] sm:col-span-1 col-span-3 relative rounded-2xl bg-[url("/jpg/mentors.jpg")] bg-no-repeat bg-cover object-cover bg-[position:top_20%_center]'
				>
					<div className='flex items-center gap-2 text-white text-xl absolute md:bottom-[30px] bottom-[5px] md:left-[30px] left-[5px] font-semibold font-msu'>
						<p>Менторы</p>
						<ArrowUpFromDot className='rotate-90' />
					</div>
				</Link>
				<Link
					href='https://urait.ru'
					target='_blank'
					className='sm:aspect-[585/384] aspect-[810/400] sm:col-span-1 col-span-3 relative rounded-2xl bg-[url("/jpg/lib.jpg")] bg-no-repeat bg-cover object-cover bg-[position:top_20%_center]'
				>
					<div className='flex items-center gap-2 text-white text-xl absolute md:bottom-[30px] bottom-[5px] md:left-[30px] left-[5px] font-semibold font-msu'>
						<p>Библиотека</p>
						<ArrowUpFromDot className='rotate-90' />
					</div>
				</Link>
			</Container>
		</>
	)
}
