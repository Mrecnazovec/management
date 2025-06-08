import { PUBLIC_URL } from '@/config/url.config'
import { DateUtil } from '@/lib/dateLib'
import { INew } from '@/shared/types/new.interface'
import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
	post: INew
}

export function NewsCard({ post }: NewsCardProps) {
	return (
		<Link href={PUBLIC_URL.news(post.slug)}>
			<div className='aspect-[16/9] rounded-2xl mb-4 text-xl flex items-center justify-center relative overflow-hidden'>
				{post.isTopNew && <div className='absolute top-0 right-0 bg-danger text-white p-2 rounded-sm text-sm'>В топе</div>}
				<Image src={post.preview} alt='Новый сайт' className='oject-cover' width={1440} height={720} />
			</div>
			<p className='mb-4'>{post.title}</p>
			<span className='text-muted-foreground'>{DateUtil(post.createdAt)}</span>
		</Link>
	)
}
