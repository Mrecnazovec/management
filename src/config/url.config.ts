export const APP_URL = process.env.APP_URL as string

export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,

	home: () => PUBLIC_URL.root('/'),
	applicant: (url = '') => PUBLIC_URL.root(`/applicant${url ? url : ''}`),
	contacts: () => PUBLIC_URL.root(`/applicant/contacts`),
	university: (url = '') => PUBLIC_URL.root(`/university/${url ? url : ''}`),
	news: (url = '') => PUBLIC_URL.root(`/university/news/${url ? url : ''}`),
	students: (url = '') => PUBLIC_URL.root(`/students/${url ? url : ''}`),
	agreement: (url = '') => PUBLIC_URL.root(`/PDPAgreement/${url ? url : ''}`),
}

export const DASHBOARD_URL = {
	root: (url = '') => `/dashboard${url ? url : ''}`,

	home: () => DASHBOARD_URL.root('/'),
}

export const PATH_URL = {
	root: (url = '') => `${url ? url : ''}`,

	jpg: (filename = '') => PATH_URL.root(`/jpg/${filename ? filename : ''}`),
	png: (filename = '') => PATH_URL.root(`/png/${filename ? filename : ''}`),
	svg: (filename = '') => PATH_URL.root(`/svg/${filename ? filename : ''}`),
}
