import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface ContainerProps {
	className?: string
}

export function Container({ children, className }: PropsWithChildren<ContainerProps>) {
	return <div className={cn('container mx-auto p-5', className)}>{children}</div>
}
