import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/Breadcrumb'
import { Applicant } from './Applicant'
import { Slash } from 'lucide-react'
import { PUBLIC_URL } from '@/config/url.config'
import { Container } from '@/components/ui/Container'
import { Bread } from '@/components/ui/Breadcrumb/Bread'

export default function page() {
	const navigation = [
		{
			title: 'Главная',
			link: PUBLIC_URL.home(),
		},
		{
			title: 'Абитуриентам',
		},
	]

	return (
		<>
			<Bread navigation={navigation}/>
			<Applicant />
		</>
	)
}
