import { Container } from '@/components/ui/Container'
import { DataTag } from '@/components/ui/DataTag'
import { PATH_URL } from '@/config/url.config'
import Image from 'next/image'
import Link from 'next/link'

export function SingleNews() {
	return (
		<Container>
			<h1 className='text-4xl mb-5'>Мы обновили наш сайт</h1>
			<div className='md:w-[40%] md:float-left mr-4 mb-2'>
				<div className='aspect-[16/9] bg-gradient-to-r from-main to-secondary rounded-2xl mb-4 text-xl flex items-center justify-center'>
					<Image src={PATH_URL.svg('website.svg')} alt='Новый сайт' width={200} height={200} />
				</div>
			</div>
			<p className='mb-4'>Мы рады сообщить что у факультета Менеджмент ТФ МГУ обновился личный сайт!</p>
			<p className='mb-4'>
				Сайт предлагает студентам и абитуриентам удобный доступ ко всем необходимым материалам и информации. На сайте представлены разделы с самыми
				свежими новостями, где можно узнать о последних событиях и обновлениях, связанных с жизнью факультета.
			</p>
			<p className='mb-4'>
				Руководство и преподаватели факультета размещены в отдельных разделах, где каждый может ознакомиться с профессиональным составом. Студенческий
				совет также имеет свою страницу, где можно узнать о текущем составе совета.
			</p>
			<p className='mb-4'>
				Учебные материалы и учебный план доступны для студентов в удобном формате, что позволяет легко следить за учебным процессом и готовиться к
				занятиям. Для абитуриентов предусмотрена отдельная вкладка, где можно найти всю информацию о процессе поступления, требованиях и сроках подачи
				документов.
			</p>
			<p className='mb-4'>
				Сайт также предлагает постоянную помощь студентам, обеспечивая доступ к ресурсам и поддержке, необходимым для успешного обучения и развития на
				факультете менеджмента.
			</p>
			<p className='mb-4'>
				На данный момент сайт находится в стадии активной разработки. Мы продолжаем работать над улучшением его функционала и наполнением контентом,
				чтобы обеспечить пользователей максимально полной и актуальной информацией.
			</p>
			<p className='mb-4'>
				В ближайшем будущем на сайте откроются страницы: учебный план, менторы, руководство, преподаватели, студенческий совет. Мы стремимся создать
				современную и удобную платформу для всех участников образовательного процесса.
			</p>
			<p className='mb-4'>
				Для тех, кто привык пользоваться прежними ресурсами, временно доступен{' '}
				<Link href='https://msu-management.vercel.app' className='text-main' target='_blank'>
					старый сайт
				</Link>
				.
			</p>
			<p className='mb-4'>Каждый может дать обратную связь и выбрать какой вариант лучше, а также оценить удобство функционала.</p>
			<p className='mb-14'>
				Благодарим за вашу поддержку и интерес к нашему направлению. Мы уверены, что новый сайт станет полезным и удобным инструментом для студентов,
				преподавателей и абитуриентов!
			</p>
			<DataTag />
			<div>
				<p className='mb-4'>Подписывайтесь на наши соцсети:</p>
				<div className='flex items-center gap-4 flex-wrap'>
					<Link className='px-2 py-1 bg-[#27a7e7] flex text-white items-center gap-4 w-fit  rounded-[5px]' href='https://t.me/Managment_TF_MSU'>
						<Image src={PATH_URL.svg('tg.svg')} alt='Телеграм канал' width={30} height={30} />
						Telegram
					</Link>
					<Link
						className='px-2 py-1 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex text-white items-center gap-4 w-fit rounded-[5px]'
						href='https://www.instagram.com/msu_uz_management/?utm_source=ig_web_button_share_sheet'
					>
						<Image src={PATH_URL.svg('inst.svg')} alt='Телеграм канал' width={30} height={30} />
						Instagram
					</Link>
				</div>
			</div>
		</Container>
	)
}
