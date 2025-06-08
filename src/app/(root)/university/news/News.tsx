'use client'

import { NewsCard } from '@/components/cards/NewsCard'
import { NewsCardSkeleton } from '@/components/cards/NewsCardSkeleton'
import { Container } from '@/components/ui/Container'
import { useGetNews } from '@/hooks/queries/news/useGetNews'

export function NewsPage() {
	const { posts, isLoading } = useGetNews()
	return (
		<Container>
			<h1 className='text-4xl mb-14'>Все новости</h1>
			<div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
				{isLoading ? <NewsCardSkeleton /> : posts?.map((post) => <NewsCard key={post.id} post={post} />)}
			</div>
		</Container>
	)
}
