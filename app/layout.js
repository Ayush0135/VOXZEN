import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Voxzen AI — AI Dubbing for YouTube Creators',
    description: 'Transform your YouTube content with premium AI dubbing that beats YouTube Auto-Dub. Reach global audiences with studio-quality voice dubbing in multiple languages. Start your 7-day free trial today.',
    keywords: 'AI dubbing, YouTube dubbing, video translation, voice dubbing, multilingual content, YouTube auto-dub alternative',
    authors: [{ name: 'Voxzen AI' }],
    openGraph: {
        title: 'Voxzen AI — AI Dubbing for YouTube Creators',
        description: 'Premium AI dubbing for YouTube creators. Better than YouTube Auto-Dub with studio-quality voices.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Voxzen AI',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Voxzen AI — AI Dubbing for YouTube Creators',
        description: 'Premium AI dubbing for YouTube creators. Better than YouTube Auto-Dub.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
