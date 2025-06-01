import { cn } from '@/lib/utils'
import ReactLenis from 'lenis/react'
import { PropsWithChildren } from 'react'

interface ContainerProps {
	className?: string
}

export function Container({ children, className }: PropsWithChildren<ContainerProps>) {
	return (
		<ReactLenis root>
			<div className={cn('container mx-auto p-5', className)}>{children}</div>
		</ReactLenis>
	)
}
