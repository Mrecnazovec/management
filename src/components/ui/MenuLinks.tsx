import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type MenuSection = {
	title: string
	links: LinkItems[]
	socials?: SocialItems[]
}[]

type LinkItems = {
	href: string
	label: string
	bold?: boolean
	external?: boolean
}

type SocialItems = {
	src: string
	alt: string
	href: string
}

type Props = {
	menuSections: MenuSection
	onLinkClick?: () => void
}

export function MenuLinks({ menuSections, onLinkClick }: Props) {
	return (
		<ul className='flex justify-between pb-[30px] border-b-1 border-white flex-wrap gap-8'>
			{menuSections.map((section, i) => (
				<li key={i} className='flex flex-col gap-5'>
					{!section.links[0].bold && <p className='font-bold text-lg'>{section.title}</p>}
					{section.links.map(({ href, label, bold, external }: LinkItems, j) => (
						<Link
							key={j}
							href={href}
							target={external ? '_blank' : '_self'}
							className={cn('hover:opacity-85 transition-opacity', bold ? 'text-lg font-bold' : 'text-base font-light')}
							onClick={onLinkClick}
						>
							{label}
						</Link>
					))}
					{section.socials && (
						<>
							<p className='text-transparent'>.</p>
							<div className='flex items-center gap-5'>
								{section.socials.map(({ href, src, alt }, k) => (
									<Link key={k} href={href} className='hover:opacity-85 transition-opacity'>
										<Image src={src} width={30} height={30} alt={alt} />
									</Link>
								))}
							</div>
						</>
					)}
				</li>
			))}
		</ul>
	)
}
