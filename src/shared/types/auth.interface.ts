import { IUser } from "./user.interface"

export interface IAuthForm {
	name: string
	login: string
	password: string
	role: string
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}