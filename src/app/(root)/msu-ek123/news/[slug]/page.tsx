import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { UpdateNew } from './UpdateNew'

export const metadata: Metadata = {
	title: 'Изменение новости',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return <UpdateNew />
}
