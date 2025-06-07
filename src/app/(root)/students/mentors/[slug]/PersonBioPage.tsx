'use client'

import { PersonSoloPage } from '@/components/sections/home/persons-block/PersonSoloPage'
import { IPerson } from '@/shared/types/person.interface'

interface PersonBioPageProps {
	person: IPerson
}

export function PersonBioPage({ person }: PersonBioPageProps) {
	return <PersonSoloPage person={person} />
}
