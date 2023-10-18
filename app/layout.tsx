import Navbar from '@/components/Navbar/Navbar'
import { Manrope } from 'next/font/google'
import MainContent from '@/components/MainContent'
import './globals.css'
import { Providers } from '@/providers'
import Footer from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { type PropsWithChildren } from 'react'
import { Metadata } from 'next'
// import { Analytics } from '@vercel/analytics/react';

const manrope = Manrope({
	subsets: ['latin'],
	variable: '--font-man',
})

export const metadata: Metadata = {
	title: 'Anubhav Ajmera - Software Engineer @ SaaS Labs | Product Enthusiast',
	description:
		'Software Engineer @ SaaS Labs. Passionate about creating innovative solutions for complex problems. Explore my portfolio now!',
	applicationName: 'Anubhav Ajmera',
	authors: [{ name: 'Anubhav Ajmera', url: 'https://www.anubhavajmera.com' }],
	keywords: [
		'anubhav ajmera',
		'ajmera',
		'anubhavajmera',
		'nextjs',
		'react',
		'webdesign',
		'tailwindcss',
		'tailwind',
		'html',
		'css',
		'javascript',
		'typescript',
		'figma',
		'uidesign',
		'product',
		'product management',
		'product-management',
		'uxdesign',
	],
	referrer: 'origin',
	creator: 'Anubhav Ajmera',
	publisher: 'Anubhav Ajmera',
	openGraph: {
		type: 'website',
		description:
			'Software Engineer @ SaaS Labs. Passionate about creating innovative solutions for complex problems. Explore my portfolio now!',
		title: 'Anubhav Ajmera - Software Engineer @ SaaS Labs | Product Enthusiast',
		locale: 'en_US',
		siteName: 'Anubhav Ajmera',
		url: 'https://www.anubhavajmera.com/',
		images: [
			{
				url: '/assets/anubhavajmera.jpg',
				alt: 'Anubhav Ajmera - Software Engineer @ SaaS Labs | Product Enthusiast',
				width: '1200',
				height: '630',
			},
		],
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
		},
	},
	twitter: {
		card: 'summary_large_image',
		site: '@anubhavajmera',
		creator: '@anubhavajmera',
		title: 'Anubhav Ajmera - Software Engineer @ SaaS Labs | Product Enthusiast',
		description:
			'Software Engineer @ SaaS Labs. Passionate about creating innovative solutions for complex problems. Explore my portfolio now!',
		images: ['/assets/anubhavajmera.jpg'],
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
		other: {
			rel: 'apple-touch-icon-precomposed',
			url: '/apple-touch-icon.png',
		},
	},
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body
				className={`${manrope.variable} font-sans bg-background-primary-light dark:bg-background-primary-dark min-h-screen`}
			>
				<Providers>
					<Navbar />
					<MainContent>{children}</MainContent>
					<Footer />
					<BackToTop />
					{/* <Analytics /> */}
				</Providers>
			</body>
		</html>
	)
}
