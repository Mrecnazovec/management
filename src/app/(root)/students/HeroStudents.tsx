import { Container } from "@/components/ui/Container"
import { PATH_URL } from "@/config/url.config"

export function HeroStudents() {
	const documents = [
		{ label: 'Гайд первокурсникам', path: PATH_URL.pdf('guide.pdf') },
		{ label: 'Памятка студентам', path: PATH_URL.doc('memo.doc') },
		{ label: 'Этический кодекс МГУ', path: PATH_URL.pdf('codex.pdf') },
		{ label: 'Устав МГУ', path: PATH_URL.pdf('charter.pdf') },
	]
	return (
		<div className='bg-[url("/png/bgstudents.png")] h-[530px] bg-no-repeat bg-cover bg-center 2xl:container mx-auto mb-15'>
			<Container className='text-white text-center pt-15'>
				<p className='mb-4 text-lg'>Полезная информация</p>
				<h1 className='text-5xl font-msu mb-15'>Студентам</h1>
				<ul className='grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 gap-7 lg:max-w-[70%] mx-auto'>
					{documents.map((doc, index) => (
						<li key={index}>
							<a
								href={doc.path}
								download
								className='w-full border-2 border-white rounded-[5px] py-2.5 block text-center hover:opacity-85 transition-opacity'
							>
								{doc.label}
							</a>
						</li>
					))}
				</ul>
			</Container>
		</div>
	)
}
