import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: 'David Layardi | Infrastructure Engineer',
    description: '6+ years of infrastructure engineering excellence. Specializing in cloud architecture, DevOps automation, and cost optimization. 90%+ cost reduction achieved, 99.9% uptime maintained.',
    keywords: ['DevOps', 'Infrastructure Engineer', 'Cloud Architecture', 'GCP', 'AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    authors: [{ name: 'David Layardi' }],
    creator: 'David Layardi',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://doctor500.github.io',
        title: 'David Layardi | Infrastructure  Engineer',
        description: 'Infrastructure Engineer specializing in cloud architecture and DevOps automation',
        siteName: 'David Layardi Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'David Layardi | Infrastructure Engineer',
        description: '6+ years driving infrastructure modernization across E-commerce, GovTech, and Fintech',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            data-light-theme="light"
            data-dark-theme="dark"
        >
            <head>
                <link rel="stylesheet" href="https://design-token.layardi.com/v1.1/tokens.css" />
            </head>
            <body className={`${inter.variable} font-sans`}>
                <ThemeProvider
                    attribute="data-color-mode"
                    defaultTheme="dark"
                    themes={['light', 'dark']}
                    enableSystem={false}
                    storageKey="theme"
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
