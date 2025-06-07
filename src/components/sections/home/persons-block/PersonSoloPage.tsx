'use client'

import { Container } from '@/components/ui/Container'
import { PUBLIC_URL } from '@/config/url.config'
import { rolePerson } from '@/shared/roleTitles'
import { IPerson } from '@/shared/types/person.interface'
import Image from 'next/image'
import Link from 'next/link'

interface PersonSoloPageProps {
	person: IPerson
}

export function PersonSoloPage({ person }: PersonSoloPageProps) {
	return (
		<Container>
			<h1 className='text-3xl mb-10'>{person.name}</h1>

			<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-14'>
				<div className='relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md'>
					<Image src={person.photo} alt={person.name} fill className='object-cover' sizes='(max-width: 768px) 100vw, 50vw' priority />
				</div>
				<div className='lg:col-span-3 md:col-span-2 space-y-4'>
					<div className='prose prose-lg max-w-none' dangerouslySetInnerHTML={{ __html: person.bio }} />
					<p className='flex flex-wrap gap-x-2'>
						{person.roles.map((role, index) => (
							<span key={role} className='after:content-[","] last:after:content-none'>
								<Link href={PUBLIC_URL.role(role)} className='text-main hover:text-main/80 transition-[color]'>
									{rolePerson[role]}
								</Link>
							</span>
						))}
					</p>
				</div>
			</div>
			{person.subjects.length > 0 && <h2 className='text-2xl mb-10'>Предметы:</h2>}
			<div className='grid grid-cols-5 gap-4 mb-10'>
				{person.subjects?.map((subject) => (
					<Link key={subject.slug} href={PUBLIC_URL.subjects(subject.slug)}>
						<article className='relative aspect-[16/9] rounded-2xl mb-2'>
							<Image src={subject.image} alt={subject.title} fill className='object-cover mb-2 rounded-2xl' />
						</article>
						<p className='line-clamp-2'>{subject.title}</p>
					</Link>
				))}
			</div>
			{person.links.length > 0 && <h2 className='text-2xl mb-10'>Ссылки:</h2>}
			<div className='grid grid-cols-5 gap-4'>
				{person.links?.map((link, index) => (
					<Link key={index} href={link.url} target='_blank'>
						<article className='relative aspect-[16/9] rounded-2xl mb-2'>
							<Image src={link.image} alt={link.title} fill className='object-cover mb-2 rounded-2xl' />
						</article>
						<p className='line-clamp-2'>{link.title}</p>
					</Link>
				))}
			</div>
		</Container>
	)
}
