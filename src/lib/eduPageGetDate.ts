export function getStartOfWeek(date?: Date): string {
	const today = date ? date : new Date()
	const dayOfWeek = today.getDay()

	const diff = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek

	const monday = new Date(today)
	monday.setDate(today.getDate() + diff)

	const year = monday.getFullYear()
	const month = String(monday.getMonth() + 1).padStart(2, '0')
	const day = String(monday.getDate()).padStart(2, '0')

	return `${year}-${month}-${day}`
}

export function getEndOfWeek(date?: Date): string {
	const today = date ? date : new Date()

	const dayOfWeek = today.getDay()

	const diff = dayOfWeek === 0 ? 0 : 7 - dayOfWeek

	const sunday = new Date(today)
	sunday.setDate(today.getDate() + diff)

	const year = sunday.getFullYear()
	const month = String(sunday.getMonth() + 1).padStart(2, '0')
	const day = String(sunday.getDate()).padStart(2, '0')

	return `${year}-${month}-${day}`
}
