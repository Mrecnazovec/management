import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { UpdateSubject } from './UpdateSubject'

export const metadata: Metadata = {
	title: 'Изменение человека',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return <UpdateSubject />
}
