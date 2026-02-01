'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VideoEmbed from '../components/VideoEmbed'
import FAQItem from '../components/FAQItem'
import ApplicationForm from '../components/ApplicationForm'
import SuccessModal from '../components/SuccessModal'

// Metadata moved to layout or static generation
// This is a client component for form interactivity

export default function ManagedChannelPage() {
    const [showForm, setShowForm] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const handleApplyClick = (e) => {
        e.preventDefault()
        setShowForm(true)
    }

    const handleFormSuccess = () => {
        setShowForm(false)
        setShowSuccess(true)
    }

    const howItWorksSteps = [
        {
            number: '01',
            title: 'Apply & Pay Setup Fee',
            description: 'Submit your application and pay a one-time ₹10,000 setup fee to reserve your slot in the program.',
            icon: '📝'
        },
        {
            number: '02',
            title: 'Voxzen Builds & Manages',
            description: 'Our team creates your channel, develops content strategy, and handles all uploads, SEO, and optimization.',
            icon: '🚀'
        },
        {
            number: '03',
            title: 'Revenue Sharing Begins',
            description: 'After monetization, you keep 80% of all revenue. No revenue share before monetization is achieved.',
            icon: '💰'
        }
    ]

    const whatVoxzenDoes = [
        {
            category: 'Channel Foundation',
            items: [
                'Channel creation & branding',
                'Niche research & validation',
                'Content strategy & planning'
            ]
        },
        {
            category: 'Content Production',
            items: [
                'AI dubbing with premium voices',
                'Video editing & optimization',
                'Thumbnail design & testing'
            ]
        },
        {
            category: 'Growth & Optimization',
            items: [
                'SEO (titles, descriptions, tags)',
                'Uploading & scheduling',
                'Growth tracking & analytics',
                'Monetization setup & management'
            ]
        }
    ]

    const forWhom = {
        goodFor: [
            'Busy professionals who want passive income',
            'Entrepreneurs building multiple revenue streams',
            'Anyone who wants execution handled by experts',
            'People without time to learn YouTube'
        ],
        notFor: [
            'Hobby creators who enjoy DIY',
            'People learning YouTube as a skill',
            'Anyone expecting instant guaranteed results',
            'Those unwilling to invest ₹10,000 upfront'
        ]
    }

    const faqs = [
        {
            question: 'Who owns the YouTube channel?',
            answer: 'You own the channel 100%. It\'s created under your name and email. You have full access and control. Voxzen manages the operations, but ownership always remains with you.'
        },
        {
            question: 'When does the 20% revenue sharing start?',
            answer: 'Revenue sharing begins ONLY after your channel is monetized by YouTube (1,000 subscribers + 4,000 watch hours). Before monetization, you pay nothing beyond the initial ₹10,000 setup fee. There are no monthly fees.'
        },
        {
            question: 'Is monetization guaranteed?',
            answer: 'No. While we use proven strategies and have experienced managers, YouTube monetization depends on multiple factors including content quality, niche competition, and platform policies. We cannot guarantee monetization timelines or amounts.'
        },
        {
            question: 'How many clients do you accept?',
            answer: 'We accept a limited number of managed channel clients to ensure quality. Each channel gets a dedicated manager, so we cap intake based on our team capacity. Slots are filled on a first-come, first-served basis.'
        },
        {
            question: 'Can I exit the program?',
            answer: 'Yes. You can exit anytime since you own the channel. If you exit before monetization, the ₹10,000 setup fee is non-refundable. If you exit after monetization, existing revenue-share agreements may apply for a transition period. Contact us for details.'
        },
        {
            question: 'What makes this different from your SaaS plans?',
            answer: 'SaaS plans are DIY tools where YOU create and manage content. The Managed Channel Program is done-FOR-you — we create, upload, optimize, and manage everything. You simply own the channel and receive revenue reports.'
        },
        {
            question: 'Do I get a dedicated channel manager?',
            answer: 'Yes! Every managed channel client gets a dedicated channel manager. This is ONLY available for Managed Channel Program clients, not for SaaS plans. Your manager handles strategy, uploads, SEO, and provides monthly performance updates.'
        },
        {
            question: 'What happens to the ₹10,000 setup fee?',
            answer: 'The setup fee covers initial channel creation, branding, niche research, content strategy development, and first month of management. This is a one-time non-refundable fee to ensure serious commitment from both sides.'
        }
    ]

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-900">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center bg-primary-600/20 text-primary-400 border border-primary-600/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            ✨ Done-For-You YouTube Channel Management
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-cream-100 mb-6 leading-tight">
                            We Build & Run YouTube Channels <span className="gradient-text">for You</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-cream-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                            From channel creation to monetization — Voxzen handles everything.
                            You earn without managing YouTube.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <button onClick={handleApplyClick} className="btn-primary text-center text-lg px-8 py-4">
                                Apply for Managed Channel Program
                            </button>
                            <a href="#demo" className="btn-secondary text-center text-lg px-8 py-4">
                                Watch Demo
                            </a>
                        </div>

                        <p className="text-sm text-cream-300">
                            ⚡ Limited Slots Available • 💼 Dedicated Channel Manager • 🎯 Revenue Share Model
                        </p>
                    </div>

                    {/* Demo Video */}
                    <div id="demo" className="mt-16 max-w-4xl mx-auto">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl opacity-20 blur-2xl"></div>
                            <VideoEmbed
                                videoId="_jCd3Vq3bFI"
                                title="See How Voxzen Manages YouTube Channels"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-container bg-dark-900">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-cream-100 mb-4">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                    <p className="text-xl text-cream-200 max-w-3xl mx-auto">
                        Three simple steps to your fully managed YouTube channel
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {howItWorksSteps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="card-dark rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-primary-600/20 transition-all duration-300">
                                <div className="text-6xl mb-4">{step.icon}</div>
                                <div className="text-primary-400 font-bold text-sm mb-2">STEP {step.number}</div>
                                <h3 className="text-2xl font-bold text-cream-100 mb-4">{step.title}</h3>
                                <p className="text-cream-300 leading-relaxed">{step.description}</p>
                            </div>
                            {index < howItWorksSteps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* What Voxzen Does */}
            <section className="section-container bg-dark-800">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-cream-100 mb-4">
                        What Voxzen <span className="gradient-text">Does for You</span>
                    </h2>
                    <p className="text-xl text-cream-200 max-w-3xl mx-auto">
                        Complete end-to-end YouTube channel management
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {whatVoxzenDoes.map((section, index) => (
                        <div key={index} className="card-dark rounded-xl p-8 hover:shadow-xl hover:shadow-primary-600/20 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-cream-100 mb-6 border-b border-dark-600 pb-4">
                                {section.category}
                            </h3>
                            <ul className="space-y-4">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-cream-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dedicated Channel Manager - CRITICAL SECTION */}
            <section className="section-container bg-gradient-to-r from-primary-600 to-accent-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        👤 Exclusive to Managed Channel Program
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Your Channel. Our Manager.
                    </h2>

                    <div className="card-dark bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-left">
                        <p className="text-xl mb-6 leading-relaxed">
                            Each managed channel gets a <strong>dedicated channel manager</strong> — your single point of contact who knows your channel inside out.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="font-bold text-lg mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    What Your Manager Does
                                </h3>
                                <ul className="space-y-2 text-white/90">
                                    <li>• Content planning & strategy</li>
                                    <li>• Video uploads & optimization</li>
                                    <li>• SEO & keyword research</li>
                                    <li>• Monthly performance updates</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Your Benefits
                                </h3>
                                <ul className="space-y-2 text-white/90">
                                    <li>• Direct communication channel</li>
                                    <li>• Personalized strategy adjustments</li>
                                    <li>• Analytics-driven decisions</li>
                                    <li>• Proactive problem-solving</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-accent-700/30 border-l-4 border-white p-6 rounded-lg">
                            <p className="font-semibold text-lg mb-2">
                                ⚠️ Important Distinction
                            </p>
                            <p className="text-white/90 leading-relaxed">
                                Dedicated managers are provided <strong>ONLY for Managed Channel Program clients</strong>.
                                SaaS plans do NOT include a dedicated manager — those are self-service tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing & Revenue Model */}
            <section id="pricing" className="section-container bg-dark-900">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-cream-100 mb-4">
                        Pricing & <span className="gradient-text">Revenue Model</span>
                    </h2>
                    <p className="text-xl text-cream-200 max-w-3xl mx-auto">
                        Simple, transparent pricing with performance-based revenue sharing
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="card-dark rounded-2xl p-8 sm:p-12 border-2 border-primary-600 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-gradient-to-br from-primary-600 to-accent-600 text-white px-6 py-2 rounded-bl-lg font-semibold">
                            Limited Slots
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-cream-100 mb-4">One-Time Setup Fee</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-5xl font-bold gradient-text">₹10,000</span>
                                </div>
                                <p className="text-cream-300 leading-relaxed mb-6">
                                    Covers channel creation, branding, niche research, content strategy, and first month of management.
                                </p>
                                <div className="bg-dark-700 rounded-lg p-4">
                                    <p className="text-sm text-cream-400">
                                        <strong>Non-refundable</strong> • Secures your slot • One-time payment
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-cream-100 mb-4">Revenue Share</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-5xl font-bold gradient-text">20%</span>
                                    <span className="text-2xl text-cream-300 ml-2">to Voxzen</span>
                                </div>
                                <p className="text-cream-300 leading-relaxed mb-6">
                                    After monetization, Voxzen takes 20% of revenue. You keep 80%. No revenue share before monetization.
                                </p>
                                <div className="bg-dark-700 rounded-lg p-4">
                                    <p className="text-sm text-cream-400">
                                        <strong>After monetization only</strong> • You keep 80% • No monthly fees
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-dark-600 pt-8">
                            <h4 className="font-bold text-lg text-cream-100 mb-4">Important Notes:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-cream-300">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    No revenue share before monetization
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    No monthly SaaS fees ever
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    Monetization is not guaranteed
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    Limited slots available
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For / Not For */}
            <section className="section-container bg-dark-800">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-cream-100 mb-4">
                        Is This <span className="gradient-text">Right for You?</span>
                    </h2>
                    <p className="text-xl text-cream-200 max-w-3xl mx-auto">
                        Be honest with yourself — this program isn&apos;t for everyone
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* This Is For */}
                    <div className="card-dark rounded-xl p-8 border-2 border-green-600/50">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-cream-100">This Is For You If:</h3>
                        </div>
                        <ul className="space-y-4">
                            {forWhom.goodFor.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-cream-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* This Is NOT For */}
                    <div className="card-dark rounded-xl p-8 border-2 border-red-600/50">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-cream-100">This Is NOT For You If:</h3>
                        </div>
                        <ul className="space-y-4">
                            {forWhom.notFor.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-cream-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-container bg-dark-900">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-cream-100 mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-xl text-cream-200 max-w-3xl mx-auto">
                        Everything you need to know about the Managed Channel Program
                    </p>
                </div>

                <div className="max-w-4xl mx-auto card-dark rounded-2xl shadow-lg p-8">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </section>

            {/* Final CTA Section */}
            <section id="apply" className="section-container bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Let Voxzen Build Your YouTube Business
                    </h2>
                    <p className="text-xl mb-8 opacity-90 leading-relaxed">
                        Join the select group of entrepreneurs who chose execution over education.
                        Limited slots ensure every channel gets the attention it deserves.
                    </p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold mb-2">₹10,000</div>
                                <div className="text-sm opacity-75">One-time setup</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">20%</div>
                                <div className="text-sm opacity-75">Revenue share</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">100%</div>
                                <div className="text-sm opacity-75">Channel ownership</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleApplyClick}
                            className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                        >
                            Apply Now — Limited Slots
                        </button>
                        <Link
                            href="/#pricing"
                            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors text-lg"
                        >
                            Compare with SaaS Plans
                        </Link>
                    </div>

                    <p className="text-sm mt-8 opacity-75">
                        Questions? Email us at support@voxzenai.in or call +91-XXXXXXXXXX
                    </p>
                </div>
            </section>

            <Footer />

            {/* Application Form Modal */}
            {showForm && (
                <ApplicationForm
                    onClose={() => setShowForm(false)}
                    onSuccess={handleFormSuccess}
                />
            )}

            {/* Success Modal */}
            {showSuccess && (
                <SuccessModal onClose={() => setShowSuccess(false)} />
            )}
        </div>
    )
}
