import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface PProps {
	className?: string
}

function P({ children, className }: PropsWithChildren<PProps>) {
	return <p className={cn('text-xl mb-4', className)}>{children}</p>
}

interface SpanProps {
	className?: string
}

function Span({ children, className }: PropsWithChildren<SpanProps>) {
	return <span className={cn('text-base mb-4 text-paragraph', className)}>{children}</span>
}

function Li({ children }: PropsWithChildren) {
	return (
		<li className='flex items-center gap-2.5 mb-4'>
			<div className='w-6 h-[2px] bg-secondary'></div>
			<p className='text-paragraph'>{children}</p>
		</li>
	)
}

interface LinkProps {
	href: string
	className?: string
}

function A({ children, href, className }: PropsWithChildren<LinkProps>) {
	return (
		<Link href={href} className={cn('text-main underline hover:opacity-80 transition-opacity', className)}>
			{children}
		</Link>
	)
}

export function Applicant() {
	return (
		<Container>
			<h1 className='sr-only'>Абитуриентам</h1>
			<h2 className='text-center text-3xl mb-4'>Информация для абитуриентов направления «Менеджмент»</h2>
			<p className='text-xl text-center mb-8'>Уважаемый абитуриент!</p>
			<div className='flex items-center gap-14 mb-8'>
				<Image src='/jpg/test.jpg' alt='Абитуриентка' width={500} height={333} />
				<p className='max-w-[560px] leading-[38px] text-xl'>
					Сроки приёма документов на обучение в 2025/2026 учебном году — с 20 июня по 10 июля 2025 года. <br /> <br /> Списки поступающих, успешно
					прошедших вступительные испытания, будут опубликованы не позднее 20 августа 2025 года.
				</p>
			</div>
			<div>
				<P>Подать документы в Филиал МГУ в городе Ташкенте можно:</P>
				<ul>
					<Li>
						через систему дистанционной подачи документов МГУ – <A href='https://webanketa.msu.ru/index.php?ckattempt=1'>webanketa.msu.ru</A>
					</Li>
					<Li>лично в приемную комиссию Филиала МГУ в городе Ташкенте.</Li>
				</ul>
				<p className='text-xl font-semibold mb-4'>
					Памятка абитуриенту для подачи заявления через электронную информационную систему МГУ – webanketa.msu.ru (
					<A href='https://msu.dvaoblaka.ru/media/2022/06/62b6d8e9b00b6_Памятка%20по%20web-anketa.pdf'>скачать</A>)
				</p>
				<P>Вступительные экзамены:</P>
				<ul>
					<Li>Математика (письменно)</Li>
					<Li>Русский язык (письменно)</Li>
				</ul>
				<A href='https://t.me/tfmsu_exams' className='mb-4 block'>
					Варианты экзаменов прошлых лет
				</A>
				<P>Контрольные цифры приема на 2025-2026 учебный год:</P>
				<Span className='mb-4 block'>50 мест, в том числе 10 мест за счет государственного бюджета.</Span>
				<P className='mb-4'>Прием документов – с 20 июня по 10 июля.</P>
				<Span></Span>
			</div>
		</Container>
	)
}
