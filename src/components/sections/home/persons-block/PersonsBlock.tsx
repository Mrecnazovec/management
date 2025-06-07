import { IPerson } from '@/shared/types/person.interface'
import { Container } from '../../../ui/Container'
import { roleTitles } from '@/shared/roleTitles'
import Image from 'next/image'
import Link from 'next/link'
import { PUBLIC_URL } from '@/config/url.config'
import { useMemo } from 'react'
import { PersonBlockSkeleton } from './PersonBlockSkeleton'

interface PersonsBlockProps {
	persons: IPerson[] | undefined
	isLoading: boolean
	role: string
}

export function PersonsBlock({ persons, isLoading, role }: PersonsBlockProps) {
	const topLevel = persons?.find((p) => (p.types?.includes('top') && p.roles?.includes('administration')) || p.roles?.includes('union'))

	const headLevel = persons?.filter((p) => p.types?.includes('head') && p.roles?.includes('administration'))

	const managementTop = persons?.find((p) => p.types?.includes('management') && p.types?.includes('top'))

	const management = persons?.filter((p) => p.types?.includes('management') && p.types?.includes('static'))

	const mentors = persons?.filter((p) => p.roles?.includes('mentors'))

	const shuffledManagement = useMemo(() => {
		return [...(management || [])].sort(() => Math.random() - 0.5)
	}, [management])

	const others = persons?.filter(
		(p) =>
			p.slug !== topLevel?.slug &&
			p.slug !== managementTop?.slug &&
			!headLevel?.some((h) => h.slug === p.slug) &&
			!management?.some((h) => h.slug === p.slug)
	)

	const colStartClasses = ['lg:col-start-1', 'lg:col-start-2', 'lg:col-start-3', 'lg:col-start-4', 'lg:col-start-5', 'lg:col-start-6']

	return (
		<Container>
			<h1 className='text-3xl mb-14'>{roleTitles[role]}</h1>
			{isLoading ? (
				<PersonBlockSkeleton role={role} />
			) : (
				<div>
					{(role === 'administration' || role === 'union') && (
						<div className='grid lg:grid-cols-5 sm:grid-cols-3 mb-5'>
							<Link href={PUBLIC_URL.role(role, topLevel?.slug)} className='lg:col-start-3 sm:col-start-2'>
								<div className='relative overflow-hidden aspect-[3/4] rounded-2xl'>
									<Image src={topLevel?.photo || ''} fill alt='test' className='object-cover' />
								</div>
								<p>{topLevel?.name}</p>
							</Link>
						</div>
					)}
					{role == 'administration' && (
						<div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 mb-10'>
							{headLevel?.map((person, index) => (
								<Link key={person.slug} href={PUBLIC_URL.role(role, person?.slug)} className={`${colStartClasses[index + 1]}`}>
									<div className='relative overflow-hidden aspect-[3/4] rounded-2xl'>
										<Image src={person?.photo || ''} fill alt='test' className='object-cover' />
									</div>
									<p>{person?.name}</p>
								</Link>
							))}
						</div>
					)}
					{role !== 'mentors' ? (
						<div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 mb-14'>
							{others?.map((person, index) => (
								<Link key={person.slug} href={PUBLIC_URL.role(role, person?.slug)}>
									<div className='relative overflow-hidden aspect-[3/4] rounded-2xl'>
										<Image src={person?.photo || ''} fill alt='test' className='object-cover' />
									</div>
									<p>{person?.name}</p>
								</Link>
							))}
						</div>
					) : (
						<div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 mb-14'>
							{mentors?.map((person) => (
								<Link key={person.slug} href={PUBLIC_URL.role(role, person?.slug)}>
									<div className='relative overflow-hidden aspect-[3/4] rounded-2xl'>
										<Image src={person?.photo || ''} fill alt='test' className='object-cover' />
									</div>
									<p>{person?.name}</p>
								</Link>
							))}
						</div>
					)}
					{role === 'union' && <h1 className='text-3xl mb-14'>Команда научного сектора Менеджмента</h1>}

					{role === 'union' && managementTop && (
						<div className='grid lg:grid-cols-5 sm:grid-cols-3 mb-5'>
							<Link href={PUBLIC_URL.role(role, managementTop?.slug)} className='lg:col-start-3 sm:col-start-2'>
								<div className='relative overflow-hidden aspect-[3/4] rounded-2xl'>
									<Image src={managementTop?.photo || ''} fill alt='test' className='object-cover' />
								</div>
								<p>{managementTop?.name}</p>
							</Link>
						</div>
					)}
					{role == 'union' && shuffledManagement.length > 0 && (
						<div className='grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 mb-10'>
							{shuffledManagement?.map((person, index) => (
								<Link key={person.slug} href={PUBLIC_URL.role(role, person?.slug)} className={`${colStartClasses[index + 1]}`}>
									<div className='relative overflow-hidden aspect-[3/4] rounded-2xl'>
										<Image src={person?.photo || ''} fill alt='test' className='object-cover' />
									</div>
									<p>{person?.name}</p>
								</Link>
							))}
						</div>
					)}
				</div>
			)}
		</Container>
	)
}
