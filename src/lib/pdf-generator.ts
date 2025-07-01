import jsPDF from 'jspdf'
import domtoimage from 'dom-to-image'
import toast from 'react-hot-toast'

export async function generatePdfFromDom(container: HTMLElement, filename: string) {
	toast.success('Началась конвертация')
	const children = Array.from(container.children)
	if (!children.length) toast.error('Ошибка в получении данных')

	const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' })

	for (let i = 0; i < children.length; i++) {
		const node = children[i] as HTMLElement
		const dataUrl = await domtoimage.toPng(node, { cacheBust: true, bgcolor: '#ffffff' })

		const img = new Image()
		img.src = dataUrl

		await new Promise<void>((resolve) => {
			img.onload = () => {
				const pdfWidth = pdf.internal.pageSize.getWidth()
				const pdfHeight = pdf.internal.pageSize.getHeight()
				const ratio = Math.min(pdfWidth / img.width, pdfHeight / img.height)
				const finalWidth = img.width * ratio
				const finalHeight = img.height * ratio
				const x = (pdfWidth - finalWidth) / 2
				const y = (pdfHeight - finalHeight) / 2
				if (i > 0) pdf.addPage()
				pdf.addImage(dataUrl, 'PNG', x, y, finalWidth, finalHeight)
				resolve()
			}
		})
	}
	toast.success('Начинается загрузка')
	pdf.save(filename)
}
