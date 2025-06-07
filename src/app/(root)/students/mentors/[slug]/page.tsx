import { personService } from '@/services/person.service'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { PUBLIC_URL } from '@/config/url.config'
import { Bread } from '@/components/ui/Breadcrumb/Bread'
import { roleTitles } from '@/shared/roleTitles'
import { PersonBioPage } from './PersonBioPage'

export const revalidate = 60

export async function generateStaticParams() {
	const persons = await personService.getAll()

	return persons.map((person) => ({
		slug: person.slug,
	}))
}

async function getPerson(slug: string) {
	try {
		return await personService.getOne(slug)
	} catch {
		notFound()
	}
}

type Props = {
	params: Promise<{ slug: string; role: string }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const person = await getPerson((await params).slug)

	return {
		title: person.name,
		description: person.bio,
	}
}

export default async function Page({ params }: Props) {
	const person = await getPerson((await params).slug)
	const role = 'mentors'

	if (!person) return notFound()

	const navigation = [
		{ title: 'Главная', link: PUBLIC_URL.home() },
		{ title: `${role === 'mentors' ? 'Студентам' : 'Университет'}`, link: role === 'mentors' ? PUBLIC_URL.students() : PUBLIC_URL.university() },
		{ title: roleTitles[role], link: PUBLIC_URL.role(role) },
		{ title: person.name },
	]

	return (
		<>
			<Bread navigation={navigation} />
			<PersonBioPage person={person} />
		</>
	)
}
