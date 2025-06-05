import { IPerson } from './person.interface'

export interface ISubjectForm {
	title: string
	duration: string
	description: string
	result: string
	image: string
	slug: string
	courseNumber: number[]
	semesterNumber: number[]
}

export interface ISubject extends ISubjectForm {
	teachers: IPerson[]
}
