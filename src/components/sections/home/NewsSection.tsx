import { Container } from '@/components/ui/Container'
import { NewsCarousel } from './news-carousel/NewsCarousel'

export default function NewsSection() {
	return (
		<Container className='mb-20'>
			<h2 className='text-3xl mb-[30px]'>Последние новости</h2>
			<NewsCarousel />
		</Container>
	)
}
