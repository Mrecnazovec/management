import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME } from '@/constants/seo.constants'
import { Toaster } from 'react-hot-toast'
import NextTopLoader from 'nextjs-toploader'
import Script from 'next/script'

const interSans = Inter({
	variable: '--font-inter-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	keywords: SITE_KEYWORDS,
	authors: SITE_AUTHOR,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<head>
				<meta property='og:title' content={SITE_NAME} />
				<meta property='og:description' content={SITE_DESCRIPTION} />
				<meta property='og:image' content='/images/logo.svg' />
				<meta property='og:url' content='https:/msu-store.com' />
				<meta property='og:type' content='website' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={SITE_NAME} />
				<meta name='twitter:description' content={SITE_DESCRIPTION} />
				<meta name='twitter:image' content='/images/logo.svg' />

				{/* Yandex Metrika */}
				<Script id='yandex-metrika' strategy='afterInteractive'>
					{`
					(function(m,e,t,r,i,k,a){
						m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
						m[i].l=1*new Date();
						for (var j = 0; j < document.scripts.length; j++) {
							if (document.scripts[j].src === r) { return; }
						}
						k=e.createElement(t),a=e.getElementsByTagName(t)[0],
						k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
					})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

					ym(102155357, "init", {
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						webvisor:true
					});
					`}
				</Script>

				<noscript>
					<div>
						<img src='https://mc.yandex.ru/watch/102155357' style={{ position: 'absolute', left: '-9999px' }} alt='' />
					</div>
				</noscript>
				
			</head>
			<body className={`${interSans.variable} antialiased`}>
				<NextTopLoader />
				<Toaster />
				{children}
			</body>
		</html>
	)
}
