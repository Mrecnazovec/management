'use client'

import { PersonsBlock } from '@/components/sections/home/persons-block/PersonsBlock'
import { useGetPersonsByRole } from '@/hooks/queries/persons/useGetPersonsByRole'

export function MentorsPage() {
	const role = 'mentors'
	const { persons, isLoading } = useGetPersonsByRole(role)
	return <PersonsBlock persons={persons} isLoading={isLoading} role={role} />
}
