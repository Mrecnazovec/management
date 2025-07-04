import { ChevronRight } from 'lucide-react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../Breadcrumb'
import { Container } from '../Container'
import Link from 'next/link'

interface Props {
	navigation: NavigationProps[]
}

interface NavigationProps {
	title: string
	link?: string
}

export function Bread({ navigation }: Props) {
	return (
		<div className='bg-main/5'>
			<Container>
				<Breadcrumb>
					<BreadcrumbList>
						{navigation.map((item, index) => (
							<div key={index} className='flex items-center gap-2.5'>
								<BreadcrumbItem>
									{item.link ? (
										<Link href={item.link}>{item.title}</Link>
									) : (
										<BreadcrumbPage className='text-main'>{item.title}</BreadcrumbPage>
									)}
								</BreadcrumbItem>
								{item.link && (
									<BreadcrumbSeparator>
										<ChevronRight />
									</BreadcrumbSeparator>
								)}
							</div>
						))}
					</BreadcrumbList>
				</Breadcrumb>
			</Container>
		</div>
	)
}
