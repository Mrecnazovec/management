'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextType = {
	theme: string
	setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType>({
	theme: 'new',
	setTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const BodyProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setThemeState] = useState('new')

	useEffect(() => {
		const cookieMap = document.cookie
			.split('; ')
			.map((c) => c.split('='))
			.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {} as Record<string, string>)

		setThemeState(cookieMap.theme || 'new')
	}, [])

	useEffect(() => {
		document.body.className = `antialiased pt-[90px] max-[390px]:pt-[70px] ${theme}`
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	const setTheme = (newTheme: string) => {
		document.cookie = `theme=${newTheme}; path=/; max-age=31536000` // 1 год
		setThemeState(newTheme)
	}

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<body className={`antialiased pt-[90px] max-[390px]:pt-[70px] ${theme}`} data-theme={theme}>
				{children}
			</body>
		</ThemeContext.Provider>
	)
}
