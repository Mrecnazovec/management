import { axiosClassic } from '@/api/api.interceptors'
import { API_URL } from '@/config/api.config'
import { IContactFormInput } from '@/shared/types/telegram.interface'

class TelegramService {
	async sendMessage(data: IContactFormInput) {
		const { data: telegramMessage } = await axiosClassic<IContactFormInput>({
			url: API_URL.telegram(),
			method: 'POST',
			data,
		})

		return telegramMessage
	}
}

export const telegramService = new TelegramService()
