'use client'

import { Container } from '@/components/ui/Container'
import { useGetEduPageData } from '@/hooks/queries/edu-page/useGetEduPageData'
import { useGetEduPageTimeTable } from '@/hooks/queries/edu-page/useGetEduPageTimeTable'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import { format, parseISO, parse, areIntervalsOverlapping, addDays, formatISO, startOfWeek, endOfWeek } from 'date-fns'
import { TimetableItem } from '@/shared/types/edu-page-timetable.interface'
import { ru } from 'date-fns/locale'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { getEndOfWeek, getStartOfWeek } from '@/lib/eduPageGetDate'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { Button } from '@/components/ui/Button'
import { Calendar } from '@/components/ui/Calendar'
import { Calendar1, MonitorX } from 'lucide-react'

import { Skeleton } from '@/components/ui/Skeleton'

import Cookies from 'js-cookie'
import Link from 'next/link'
import { LoaderSkeleton } from './LoaderSkeleton'
import { SubjectLink } from './SubjectLink'

export function TimeTable() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const groupId = Cookies.get('group_id') ?? '-143'
	const id = groupId ?? searchParams.get('id') ?? '-143'

	const { eduPageData, isLoading } = useGetEduPageData()
	const { eduPageTimeTable, isLoading: isLoadingTimeTable } = useGetEduPageTimeTable()

	const currentFrom = parseISO(searchParams.get('datefrom') ?? getStartOfWeek())
	const currentTo = parseISO(searchParams.get('dateto') ?? getEndOfWeek())

	const [calendarDate, setCalendarDate] = useState<Date | undefined>(currentFrom)

	const periods = [
		{ number: 1, start: '09:00', end: '10:30' },
		{ number: 2, start: '10:45', end: '12:15' },
		{ number: 3, start: '13:15', end: '14:45' },
		{ number: 4, start: '15:00', end: '16:30' },
		{ number: 5, start: '16:45', end: '18:15' },
	]

	const groupSelector = [
		{ groupName: 'Эк1-23', id: '-143' },
		{ groupName: 'Эк2-23', id: '-144' },
		{ groupName: 'Эк1-24', id: '-141' },
		{ groupName: 'Эк2-24', id: '-142' },
	]

	const classShortName = useMemo(() => {
		if (!eduPageData) return null
		const classesSection = eduPageData.r.tables.find((section) => section.id === 'classes')
		const targetRow = classesSection?.data_rows?.find((row) => row.id === id)
		return targetRow?.short ?? null
	}, [eduPageData, id])

	const weekDates = useMemo(() => {
		const days = []
		for (let i = 0; i < 7; i++) {
			const date = addDays(currentFrom, i)
			days.push(formatISO(date, { representation: 'date' }))
		}
		return days
	}, [currentFrom])

	function getSubjectName(id: string) {
		const section = eduPageData?.r.tables.find((s) => s.id === 'subjects')
		return section?.data_rows?.find((row) => row.id === id)?.short ?? null
	}

	function getClassroomsName(id: string) {
		const section = eduPageData?.r.tables.find((s) => s.id === 'classrooms')
		return section?.data_rows?.find((row) => row.id === id)?.short ?? null
	}

	function getTeachersName(id: string) {
		const section = eduPageData?.r.tables.find((s) => s.id === 'teachers')
		return section?.data_rows?.find((row) => row.id === id)?.short ?? null
	}

	function splitIntoPeriodCards(item: TimetableItem) {
		const startTime = parse(item.starttime, 'HH:mm', new Date())
		const endTime = parse(item.endtime, 'HH:mm', new Date())

		return periods
			.filter((period) => {
				const periodStart = parse(period.start, 'HH:mm', new Date())
				const periodEnd = parse(period.end, 'HH:mm', new Date())
				return areIntervalsOverlapping({ start: startTime, end: endTime }, { start: periodStart, end: periodEnd })
			})
			.map((period) => ({
				...item,
				uniperiod: period.number.toString(),
				starttime: period.start,
				endtime: period.end,
			}))
	}

	function handleGroupChange(newId: string) {
		const newParams = new URLSearchParams(searchParams)
		newParams.set('id', newId)
		Cookies.set('group_id', newId, { expires: 30 })
		router.push(`?${newParams.toString()}`)
	}

	function handleDateChange(date: Date | undefined) {
		if (!date) return
		setCalendarDate(date)

		const newFrom = startOfWeek(date, { locale: ru, weekStartsOn: 1 })
		const newTo = endOfWeek(date, { locale: ru, weekStartsOn: 1 })

		const params = new URLSearchParams(searchParams.toString())
		params.set('datefrom', formatISO(newFrom, { representation: 'date' }))
		params.set('dateto', formatISO(newTo, { representation: 'date' }))

		router.push(`?${params.toString()}`)
	}

	function changeWeek(direction: 'prev' | 'next') {
		const delta = direction === 'prev' ? -7 : 7
		const newFrom = addDays(currentFrom, delta)
		const newTo = addDays(currentTo, delta)

		const params = new URLSearchParams(searchParams.toString())
		params.set('datefrom', formatISO(newFrom, { representation: 'date' }))
		params.set('dateto', formatISO(newTo, { representation: 'date' }))

		setCalendarDate(newFrom)

		router.push(`?${params.toString()}`)
	}

	const scheduleGrid = useMemo(() => {
		if (!eduPageTimeTable?.r?.ttitems) return {}

		const items = eduPageTimeTable.r.ttitems.filter((item) => item.classids.includes(id))
		const grid: Record<string, Record<number, TimetableItem[]>> = {}

		for (const item of items) {
			const splitItems = splitIntoPeriodCards(item)
			for (const split of splitItems) {
				const date = split.date
				const period = Number(split.uniperiod)
				if (!grid[date]) grid[date] = {}
				if (!grid[date][period]) grid[date][period] = []
				grid[date][period].push(split)
			}
		}

		return grid
	}, [eduPageTimeTable, id])

	return (
		<Container>
			<div className='flex flex-wrap items-center lg:flex-row flex-col lg:justify-between justify-center gap-4 mb-4'>
				<div className='flex items-center gap-4'>
					<h1 className='xs:text-3xl text-2xl'>Расписание: {classShortName ?? '...'}</h1>
					<div className='max-w-xs'>
						<Select value={id} onValueChange={handleGroupChange}>
							<SelectTrigger className='w-full'>
								<SelectValue placeholder='Выберите группу' />
							</SelectTrigger>
							<SelectContent>
								{groupSelector.map((group) => (
									<SelectItem key={group.id} value={group.id}>
										{group.groupName}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className='flex gap-2'>
					<button onClick={() => changeWeek('prev')} className='px-3 py-1 text-sm rounded-md border bg-white hover:bg-gray-100 transition'>
						← <span className='hidden sm:inline'>Пред. неделя</span>
					</button>
					<Popover>
						<PopoverTrigger asChild>
							<Button variant='outline' className='text-sm'>
								<Calendar1 /> {calendarDate ? format(calendarDate, 'dd.MM.yyyy') : 'Выбрать дату'}
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0'>
							<Calendar mode='single' selected={calendarDate} onSelect={handleDateChange} locale={ru} weekStartsOn={1} initialFocus />
						</PopoverContent>
					</Popover>
					<button onClick={() => changeWeek('next')} className='px-3 py-1 text-sm rounded-md border bg-white hover:bg-gray-100 transition'>
						<span className='hidden sm:inline'>След. неделя</span> →
					</button>
				</div>
			</div>

			{isLoading || isLoadingTimeTable ? (
				<LoaderSkeleton />
			) : !eduPageData || !eduPageTimeTable ? (
				<div className='h-[80vh] flex flex-col items-center justify-center text-danger text-center'>
					<MonitorX className='size-20' />
					<p>Ошибка при загрузке данных попробуйте позже</p>
					<Link className='text-main underline' href={'https://msu2006.edupage.org/timetable/'}>
						Или проверьте расписание здесь
					</Link>
				</div>
			) : (
				<>
					{' '}
					<Table className='hidden md:block'>
						<TableHeader>
							<TableRow>
								<TableHead>День</TableHead>
								{periods.map((period) => (
									<TableHead key={period.number} className='text-center'>
										{period.number}
										<br />
										{period.start} – {period.end}
									</TableHead>
								))}
							</TableRow>
						</TableHeader>
						<TableBody>
							{weekDates.map((date) => {
								const dayPeriods = scheduleGrid[date] || {}
								const dayName = format(parseISO(date), 'EEEE', { locale: ru })
								const formattedDate = format(parseISO(date), 'dd.MM')

								return (
									<TableRow key={date}>
										<TableCell className='font-semibold'>
											{dayName.charAt(0).toUpperCase() + dayName.slice(1)}
											<br />
											{formattedDate}
										</TableCell>
										{periods.map((period) => (
											<TableCell key={period.number} className='align-top'>
												{dayPeriods[period.number]?.map((item, idx) => (
													<div key={idx} className='mb-2 p-1 rounded border shadow-sm bg-gray-50 max-w-full text-wrap'>
														<div className='font-medium'>
															<SubjectLink subjectTitleFromSchedule={getSubjectName(item.subjectid)} />
														</div>
														<div className='text-xs'>{item.classroomids.map(getClassroomsName).filter(Boolean).join(', ') || '—'}</div>
														<div className='text-xs italic'>{item.teacherids.map(getTeachersName).filter(Boolean).join(', ') || '—'}</div>
													</div>
												)) || null}
											</TableCell>
										))}
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
					<div className='block md:hidden space-y-6'>
						{weekDates.map((date) => {
							const dayPeriods = scheduleGrid[date] || {}
							const dayName = format(parseISO(date), 'EEEE', { locale: ru })
							const formattedDate = format(parseISO(date), 'dd.MM')

							return (
								<div key={date} className='border rounded-lg shadow-sm p-4 bg-white'>
									<div className='font-bold text-lg mb-2'>
										{dayName.charAt(0).toUpperCase() + dayName.slice(1)}, {formattedDate}
									</div>
									{periods.map((period) => {
										const lessons = dayPeriods[period.number]
										if (!lessons || lessons.length === 0) {
											return (
												<div key={period.number} className='mb-4'>
													<div className='text-sm font-semibold mb-1'>
														{period.number}-пара ({period.start} – {period.end})
													</div>
													<div className='text-xs text-gray-500 italic'>Нет занятий</div>
												</div>
											)
										}

										return (
											<div key={period.number} className='mb-4'>
												<div className='text-sm font-semibold mb-1'>
													{period.number}-пара ({period.start} – {period.end})
												</div>
												{lessons.map((item, idx) => (
													<div key={idx} className='mb-2 p-2 rounded border bg-gray-50'>
														<div className='font-medium'>
															<SubjectLink subjectTitleFromSchedule={getSubjectName(item.subjectid)} />
														</div>
														<div className='text-xs'>{item.classroomids.map(getClassroomsName).filter(Boolean).join(', ') || '—'}</div>
														<div className='text-xs italic'>{item.teacherids.map(getTeachersName).filter(Boolean).join(', ') || '—'}</div>
													</div>
												))}
											</div>
										)
									})}
								</div>
							)
						})}
					</div>
				</>
			)}
		</Container>
	)
}
