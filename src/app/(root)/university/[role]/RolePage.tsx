'use client'

import { PersonsBlock } from '@/components/sections/home/persons-block/PersonsBlock'
import { useGetPersonsByRole } from '@/hooks/queries/persons/useGetPersonsByRole'

interface RolePageProps {
	role: string
}

export function RolePage({ role }: RolePageProps) {
	const { persons, isLoading } = useGetPersonsByRole(role)
	return <PersonsBlock persons={persons} isLoading={isLoading} role={role} />
}
