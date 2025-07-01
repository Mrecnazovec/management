// components/edu-page/PrintableSchedule.tsx

import { FC } from 'react'
import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'
import { TimetableItem } from '@/shared/types/edu-page-timetable.interface'

interface Props {
	weekDates: string[]
	groupName: string | null
	periods: { number: number; start: string; end: string }[]
	scheduleGrid: Record<string, Record<number, TimetableItem[]>>
	getSubjectName: (id: string) => string | null
	getClassroomsName: (id: string) => string | null
	getTeachersName: (id: string) => string | null
	id?: string | ''
}

export const PrintableSchedule: FC<Props> = ({
	weekDates,
	periods,
	scheduleGrid,
	groupName,
	getSubjectName,
	getClassroomsName,
	getTeachersName,
	id,
}) => {
	return (
		<div id={id} className='p-4 pb-10'>
			<h1 className='text-center mb-4 text-4xl'>{groupName}</h1>
			<table className='w-full border border-collapse text-sm'>
				<thead>
					<tr>
						<th className='border px-2 py-1 text-left'><p className='text-2xl'>День</p></th>
						{periods.map((period) => (
							<th key={period.number} className='border px-2 py-1 text-center'>
								<p className='text-3xl mb-0'>{period.number}</p>({period.start}–{period.end})
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{weekDates.map((date) => {
						const dayPeriods = scheduleGrid[date] || {}
						const dayName = format(parseISO(date), 'EEE', { locale: ru })
						const formattedDate = format(parseISO(date), 'dd.MM')

						return (
							<tr key={date}>
								<td className='border px-2 py-1 font-medium'>
									<p className='text-3xl'>{dayName.charAt(0).toUpperCase() + dayName.slice(1)}</p>
									<br />
									{formattedDate}
								</td>
								{periods.map((period) => {
									const lessons = dayPeriods[period.number] || []
									return (
										<td key={period.number} className='border px-2 py-1 align-center w-[20%] h-[150px]'>
											{lessons.map((item, idx) => (
												<div key={idx} className='mb-1 text-center py-4 relative h-full flex items-center justify-center'>
													<div className='font-semibold text-xl'>{getSubjectName(item.subjectid)}</div>
													<div className='text-base absolute left-0 top-0'>{item.classroomids.map(getClassroomsName).filter(Boolean).join(', ')}</div>
													<div className='text-base italic absolute right-0 bottom-0'>
														{item.teacherids.map(getTeachersName).filter(Boolean).join(', ')}
													</div>
												</div>
											))}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
