import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'
import { API_URL } from '@/config/api.config'
import { ISubject, ISubjectForm } from '@/shared/types/subject.interface'

class SubjectService {
	async getAll() {
		const { data } = await axiosClassic<ISubject[]>({
			url: API_URL.subjects(),
			method: 'GET',
		})

		return data
	}

	async getByCourse(courseNumber: string, semesterNumber: string) {
		const { data } = await axiosClassic<ISubject[]>({
			url: API_URL.subjects(`by-course/${courseNumber}/${semesterNumber}`),
			method: 'GET',
		})

		return data
	}

	async getOne(slug: string) {
		const { data } = await axiosClassic<ISubject>({
			url: API_URL.subjects(`${slug}`),
			method: 'GET',
		})

		return data
	}

	async create(data: ISubjectForm) {
		const { data: createdSubject } = await axiosWithAuth<ISubject>({
			url: API_URL.subjects(),
			method: 'POST',
			data,
		})

		return createdSubject
	}

	async update(slug: string, data: ISubjectForm) {
		const { data: updatedSubject } = await axiosWithAuth<ISubject>({
			url: API_URL.subjects(`${slug}`),
			method: 'PUT',
			data,
		})

		return updatedSubject
	}

	async delete(slug: string) {
		const { data: deletedSubject } = await axiosWithAuth<ISubject>({
			url: API_URL.subjects(`${slug}`),
			method: 'DELETE',
		})

		return deletedSubject
	}
}

export const subjectService = new SubjectService()
