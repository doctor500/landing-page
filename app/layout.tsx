import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://www.layardi.com'),
    title: 'David Layardi | Infrastructure & Agentic AI Engineer',
    description: '8+ years of infrastructure engineering excellence. Specializing in cloud architecture, DevOps automation, and Agentic AI for operations. 90%+ cost reduction achieved, 99.9% uptime maintained.',
    keywords: ['DevOps', 'Infrastructure Engineer', 'Cloud Architecture', 'GCP', 'AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Agentic AI'],
    authors: [{ name: 'David Layardi' }],
    creator: 'David Layardi',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.layardi.com',
        title: 'David Layardi | Infrastructure & Agentic AI Engineer',
        description: 'Infrastructure & Agentic AI Engineer specializing in cloud architecture and DevOps automation',
        siteName: 'David Layardi Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'David Layardi - Infrastructure & Agentic AI Engineer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'David Layardi | Infrastructure & Agentic AI Engineer',
        description: '8+ years driving infrastructure modernization across E-commerce, GovTech, and Fintech',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
}

// JSON-LD structured data for SEO
const jsonLd = [
    {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'David Layardi',
        url: 'https://www.layardi.com',
        jobTitle: 'Infrastructure & Agentic AI Engineer',
        worksFor: {
            '@type': 'Organization',
            name: 'Rakuten',
        },
        sameAs: [
            'https://www.linkedin.com/in/david-lay/',
            'https://github.com/doctor500',
            'https://davidlayardi.medium.com/',
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'David Layardi Portfolio',
        url: 'https://www.layardi.com',
    },
]

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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
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
