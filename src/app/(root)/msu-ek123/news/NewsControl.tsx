'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ADMIN_URL } from '@/config/url.config'
import { useGetNews } from '@/hooks/queries/news/useGetNews'
import { DateUtil } from '@/lib/dateLib'
import Image from 'next/image'
import Link from 'next/link'

export function NewsControl() {
	const { posts, isLoading } = useGetNews()

	return (
		<Container>
			<div className='flex items-center justify-between gap-4 mb-14'>
				<h1 className='text-3xl'>Новости</h1>
				<Link href={ADMIN_URL.news('create')}>
					<Button variant='main'>Добавить</Button>
				</Link>
			</div>
			<div className='grid sm:grid-cols-3 gap-4'>
				{isLoading
					? Array.from({ length: 12 }).map((_, i) => (
							<div key={i} className='animate-pulse'>
								<div className='bg-gray-300 rounded-2xl w-full aspect-[16/9]' />
								<div className='h-4 bg-gray-300 mt-2 rounded w-full' />
								<div className='h-4 bg-gray-300 mt-1 rounded w-3/4 mb-4' />
								<div className='h-4 bg-gray-300 mt-1 rounded w-[30%]' />
							</div>
					  ))
					: posts?.map((post) => (
							<Link key={post.id} href={ADMIN_URL.news(post.slug)}>
								<article className='relative aspect-[16/9] rounded-2xl mb-2'>
									<Image src={post.preview} alt={post.title} fill className='object-cover mb-2 rounded-2xl' />
								</article>
								<p className='line-clamp-2 mb-4'>{post.title}</p>
								<span className='text-muted-foreground'>{DateUtil(post.createdAt)}</span>
							</Link>
					  ))}
			</div>
		</Container>
	)
}
