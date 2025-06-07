import { ISubjectForm } from './subject.interface'

export interface ILink {
	title: string
	url: string
	image: string
}

export interface IPersonForm {
	name: string
	bio: string
	slug: string
	photo: string
	roles: string[]
	types: string[]
	subjectSlugs: string[]
	links: ILink[]
}

export interface IPerson extends IPersonForm {
	subjects: ISubjectForm[]
	order: number
	id: string
}
