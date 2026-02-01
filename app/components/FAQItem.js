'use client'

import { useState } from 'react'

export default function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-dark-600 last:border-b-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-cream-100 group-hover:text-primary-400 transition-colors">
                    {question}
                </span>
                <svg
                    className={`w-6 h-6 text-primary-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="pb-6 text-cream-300 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    )
}
