const MONTHS_RU = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

/**
 * Преобразует дату в формат "8 июня 2025 года"
 * @param dateStr строка формата "2025-06-08 11:19:35.138" или ISO
 */
export function DateUtil(dateStr: Date): string {
	const date = new Date(dateStr)

	if (isNaN(date.getTime())) return 'Неверная дата'

	const day = date.getDate()
	const month = MONTHS_RU[date.getMonth()]
	const year = date.getFullYear()

	return `${day} ${month} ${year} года`
}
