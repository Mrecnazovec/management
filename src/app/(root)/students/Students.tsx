import { Container } from '@/components/ui/Container'
import { PATH_URL } from '@/config/url.config'
import Link from 'next/link'

export function Students() {
	return (
		<div className='bg-[url("/png/bgstudents.png")] h-[530px] bg-no-repeat bg-cover 2xl:container mx-auto bg-[position:center] mb-15'>
			<Container className='text-white text-center pt-15'>
				<p className='mb-4 text-lg'>Полезная информация</p>
				<h1 className='text-5xl font-msu mb-15'>Студентам</h1>
				<div className='grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 gap-7 lg:max-w-[70%] mx-auto'>
					<a href={PATH_URL.pdf('guide.pdf')} download className='w-full border-2 border-white rounded-[5px] py-2.5 block text-center'>
						Гайд первокурсникам
					</a>
					<Link href='' className='w-full border-2 border-white rounded-[5px] py-2.5'>
						Памятка студентам
					</Link>
					<Link href='' className='w-full border-2 border-white rounded-[5px] py-2.5'>
						Этический кодекс МГУ
					</Link>
					<Link href='' className='w-full border-2 border-white rounded-[5px] py-2.5'>
						Устав МГУ
					</Link>
				</div>
			</Container>
		</div>
	)
}
