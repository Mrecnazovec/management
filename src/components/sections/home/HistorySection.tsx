import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { PUBLIC_URL } from '@/config/url.config'
import Link from 'next/link'

export default function HistorySection() {
	return (
		<Container className='pt-20'>
			<h2 className='mb-10 text-3xl'>История ТФ МГУ</h2>
			<p className='mb-10'>
				Ташкентский филиал МГУ создан в 2006 году, это учебное заведение сегодня является ведущим центром подготовки специалистов в области
				менеджмента, психологии, математики, информатики, психологии и филологии для нужд Узбекистана. <br />
				<br /> Направление Менеджмент было открыто в 2023/2024 учебном году.
			</p>
			<div className='flex justify-end'>
				<Link href={PUBLIC_URL.university()}>
					<Button className='' variant={'main'}>
						Читать дальше
					</Button>
				</Link>
			</div>
		</Container>
	)
}
