export function stripHtml(html: string): string {
	return (
		html
			.replace(/<[^>]*>?/gm, '') // удаляет все теги
			.replace(/\s+/g, ' ') // нормализует пробелы
			.trim()
			.slice(0, 200)
			.trim() + '...'
	)
}
