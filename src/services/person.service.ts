import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'
import { API_URL } from '@/config/api.config'
import { IPerson, IPersonForm } from '@/shared/types/person.interface'

class PersonService {
	async getAll() {
		const { data } = await axiosClassic<IPerson[]>({
			url: API_URL.persons(),
			method: 'GET',
		})

		return data
	}

	async getByRole(role: string) {
		const { data } = await axiosClassic<IPerson[]>({
			url: API_URL.persons(`${role}`),
			method: 'GET',
		})

		return data
	}

	async getOne(slug: string) {
		const { data } = await axiosClassic<IPerson>({
			url: API_URL.persons(`by-slug/${slug}`),
			method: 'GET',
		})

		return data
	}

	async create(data: IPersonForm) {
		const { data: createdPerson } = await axiosWithAuth<IPerson>({
			url: API_URL.persons(),
			method: 'POST',
			data,
		})

		return createdPerson
	}

	async update(slug: string, data: IPersonForm) {
		const { data: updatedPerson } = await axiosWithAuth<IPerson>({
			url: API_URL.persons(`${slug}`),
			method: 'PUT',
			data,
		})

		return updatedPerson
	}

	async delete(slug: string) {
		const { data: deletedPerson } = await axiosWithAuth<IPerson>({
			url: API_URL.persons(`${slug}`),
			method: 'DELETE',
		})

		return deletedPerson
	}
}

export const personService = new PersonService()
