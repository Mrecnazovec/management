import { NewsCard } from '@/components/cards/NewsCard'
import { Container } from '@/components/ui/Container'

export function NewsPage() {
	return (
		<Container >
			<h1 className='text-4xl mb-14'>Все новости</h1>
			<div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</div>
		</Container>
	)
}
