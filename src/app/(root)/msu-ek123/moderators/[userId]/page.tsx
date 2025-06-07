import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { UpdateModerator } from './UpdateModerator'

export const metadata: Metadata = {
	title: 'Изменение модератора',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return <UpdateModerator />
}
