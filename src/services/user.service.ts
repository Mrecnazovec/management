import { axiosClassic, axiosWithAuth } from '@/api/api.interceptors'
import { API_URL } from '@/config/api.config'
import { IAuthForm } from '@/shared/types/auth.interface'
import { IUser } from '@/shared/types/user.interface'

class UserService {
	async getAll() {
		const { data } = await axiosWithAuth<IUser[]>({
			url: API_URL.users('all'),
			method: 'GET',
		})

		return data
	}

	async getById(id: string) {
		const { data } = await axiosWithAuth<IUser>({
			url: API_URL.users(`by-id/${id}`),
			method: 'GET',
		})

		return data
	}

	async getProfile() {
		const { data } = await axiosWithAuth<IUser>({
			url: API_URL.users('profile'),
			method: 'GET',
		})

		return data
	}

	async delete(id: string) {
		const { data } = await axiosWithAuth<IUser>({
			url: API_URL.users(`${id}`),
			method: 'DELETE',
		})

		return data
	}

	async update(id: string, data: IAuthForm) {
		const { data: updatedUser } = await axiosWithAuth<IUser>({
			url: API_URL.users(`${id}`),
			method: 'PUT',
			data,
		})

		return updatedUser
	}

	async create(data: IAuthForm) {
		const { data: updatedUser } = await axiosWithAuth<IUser>({
			url: API_URL.users(``),
			method: 'POST',
			data,
		})

		return updatedUser
	}
}

export const userService = new UserService()
