export const SERVER_URL = process.env.SERVER_URL as string

export const API_URL = {
	root: (url = '') => `${url ? url : ''}`,

	auth: (url = '') => API_URL.root(`/auth/${url}`),
	users: (url = '') => API_URL.root(`/users/${url}`),
	subjects: (url = '') => API_URL.root(`/subjects/${url}`),
	persons: (url = '') => API_URL.root(`/persons/${url}`),
	files: (url = '') => API_URL.root(`/files/${url}`),
}