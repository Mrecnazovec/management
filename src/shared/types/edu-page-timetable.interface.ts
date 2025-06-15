export interface EduPageTimeTable {
	r: {
		ttitems: TimetableItem[]
		week_name: string
	}
}

export interface TimetableItem {
	type: 'card'
	date: string
	uniperiod: string
	starttime: string
	endtime: string
	subjectid: string

	classids: string[]
	groupnames: string[]
	igroupid: string
	teacherids: string[]
	classroomids: string[]
	studentids: string[]
	colors: string[]

	durationperiods?: number
}
