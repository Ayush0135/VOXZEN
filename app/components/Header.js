'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Managed Channel', href: '/managed-channel' },
        { name: 'Video Demo', href: '/#demo' },
        { name: 'FAQ', href: '/#faq' },
        { name: 'Contact', href: '/#contact' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-700 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">V</span>
                            </div>
                            <span className="text-2xl font-bold gradient-text">Voxzen AI</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-cream-200 hover:text-primary-400 font-medium transition-colors duration-200"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="/managed-channel"
                            className="btn-primary"
                        >
                            Apply Now
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="text-cream-200 hover:text-primary-400 p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open menu</span>
                            {mobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden pb-4">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-cream-200 hover:text-primary-400 font-medium transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="/managed-channel"
                                className="btn-primary text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
