import Header from './components/Header'
import Footer from './components/Footer'
import VideoEmbed from './components/VideoEmbed'
import PricingCard from './components/PricingCard'
import FAQItem from './components/FAQItem'

export default function Home() {
    const features = [
        {
            icon: '🎙️',
            title: 'Creator Voice Quality',
            description: 'Premium AI voices that sound natural and engaging, far superior to YouTube\'s auto-dub feature. Your audience will love the authentic feel.'
        },
        {
            icon: '🇮🇳',
            title: 'Indian Language Mastery',
            description: 'Reach millions across India with authentic dubbing in English, Hindi, Telugu, and Tamil. Our AI understands regional accents and cultural nuances perfectly.'
        },
        {
            icon: '⚡',
            title: 'Auto-Fetch & Process',
            description: 'Automatically fetch your latest YouTube uploads and process them with AI dubbing. Set it and forget it - we handle everything.'
        },
        {
            icon: '📊',
            title: 'Advanced Analytics',
            description: 'Track performance across languages and regions. Understand which dubbed versions drive the most engagement and revenue.'
        },
        {
            icon: '🎯',
            title: 'Auto-Dub Toggle',
            description: 'Control which videos get dubbed automatically. Perfect for creators who want selective dubbing for specific content types.'
        },
        {
            icon: '⚙️',
            title: 'Team Collaboration',
            description: 'Manage multiple channels and team members. Perfect for agencies and multi-channel networks with centralized control.'
        },
    ]

    const pricingPlans = [
        {
            name: 'Free',
            price: 0,
            tagline: 'Try better than YouTube auto-dub',
            isFree: true,
            features: [
                '1 video per month',
                '1 language translation',
                'Standard AI voice quality',
                'Basic analytics',
                'Email support',
            ],
            cta: 'Start Free',
        },
        {
            name: 'Creator Plan',
            price: 6999,
            tagline: 'Perfect for growing creators',
            features: [
                '10 videos per month',
                '2 language translations',
                'Premium creator voice',
                'Advanced analytics dashboard',
                'Priority email support',
                'Custom voice options',
            ],
            cta: 'Start 7-Day Trial',
        },
        {
            name: 'Pro Creator',
            price: 11999,
            tagline: 'For serious content creators',
            popular: true,
            features: [
                '30 videos per month',
                '4 language translations',
                'Premium creator voice',
                'Auto-dub toggle feature',
                'Priority processing',
                'Advanced analytics',
                'Dedicated support',
                'Custom branding options',
            ],
            cta: 'Start 7-Day Trial',
        },
        {
            name: 'Agency Plan',
            price: 16999,
            tagline: 'Enterprise-grade solution',
            features: [
                'Unlimited videos',
                'Unlimited languages',
                'Team access & collaboration',
                'Multi-channel management',
                'White-label options',
                'API access',
                'Custom integrations',
                'Dedicated account manager',
            ],
            cta: 'Contact Sales',
        },
    ]

    const addOns = [
        {
            name: 'Lip-Sync Technology',
            options: [
                '₹499 per video',
                '₹2,999 per month (unlimited)',
            ],
            description: 'Advanced lip-sync matching for perfect video-audio synchronization',
        },
        {
            name: 'Extra Language Pack',
            price: '₹1,499/month',
            description: 'Add one additional language to your plan',
        },
        {
            name: 'Extra YouTube Channel',
            price: '₹2,499/month',
            description: 'Connect and manage additional YouTube channels',
        },
    ]

    const faqs = [
        {
            question: 'How does the 7-day free trial work?',
            answer: 'Start with full access to your chosen plan for 7 days completely free. No credit card required upfront. After the trial, you\'ll be automatically enrolled in the monthly subscription. You can cancel anytime during the trial with no charges.',
        },
        {
            question: 'How is Voxzen AI better than YouTube Auto-Dub?',
            answer: 'YouTube Auto-Dub uses basic text-to-speech technology that often sounds robotic and unnatural. Voxzen AI uses advanced AI voice models trained on professional voice actors, delivering studio-quality dubbing that maintains the emotion, tone, and energy of your original content. Our creator voices sound authentic and engaging, leading to better viewer retention and engagement.',
        },
        {
            question: 'What happens after the free trial ends?',
            answer: 'After your 7-day trial, you\'ll be automatically charged for your selected plan on a monthly basis. You\'ll receive an email reminder 2 days before the trial ends. You can cancel anytime before the trial ends to avoid charges, or upgrade/downgrade your plan as needed.',
        },
        {
            question: 'Can I change my plan later?',
            answer: 'Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle, and you keep your current plan benefits until then.',
        },
        {
            question: 'What languages are supported?',
            answer: 'We currently support English, Hindi, Telugu, and Tamil - the most widely spoken languages in India. Our AI is specifically trained on Indian accents and regional nuances, ensuring your dubbed content sounds natural and authentic to native speakers. Each plan comes with a specific number of language slots, and you can add more languages through our add-on packs.',
        },
        {
            question: 'How does auto-fetch work?',
            answer: 'Once connected, Voxzen AI monitors your YouTube channel for new uploads. When you publish a video, our system automatically fetches it, processes the dubbing in your selected languages, and uploads the dubbed versions. You can control this with the auto-dub toggle feature available in Pro Creator and Agency plans.',
        },
        {
            question: 'Is there a limit on video length?',
            answer: 'Free plan: up to 15 minutes | Creator: up to 30 minutes | Pro Creator: up to 60 minutes | Agency: unlimited. For videos longer than these limits, contact our sales team for custom pricing.',
        },
        {
            question: 'How do add-ons work with my plan?',
            answer: 'Add-ons are purchased separately and billed monthly alongside your base plan. They can be added or removed at any time. For example, if you need lip-sync for just a few videos, you can pay per video (₹499 each), or if you need it regularly, the monthly unlimited option (₹2,999) is more cost-effective.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. All payments are processed securely through industry-standard payment gateways.',
        },
        {
            question: 'Can I get a refund?',
            answer: 'We offer a satisfaction guarantee. If you\'re not happy with the service within the first 7 days of your paid subscription, contact our support team for a full refund. After 7 days, refunds are evaluated on a case-by-case basis.',
        },
    ]

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-900">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-cream-100 mb-6 leading-tight">
                                Premium AI Dubbing for{' '}
                                <span className="gradient-text">YouTube Creators</span>
                            </h1>
                            <p className="text-xl text-cream-200 mb-8 leading-relaxed">
                                Transform your content with studio-quality AI dubbing that beats YouTube Auto-Dub.
                                Reach global audiences with authentic voices that sound natural and engaging.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#pricing" className="btn-primary text-center">
                                    Try 7-Day Free Trial
                                </a>
                                <a href="#demo" className="btn-secondary text-center">
                                    Watch Demo
                                </a>
                            </div>
                            <p className="text-sm text-cream-300 mt-4">
                                ✓ No credit card required • ✓ Cancel anytime • ✓ Full feature access
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl opacity-20 blur-2xl"></div>
                            <VideoEmbed
                                videoId="_jCd3Vq3bFI"
                                title="See Voxzen AI in Action"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="section-container bg-dark-900">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-cream-100 mb-4">
                        Why Choose <span className="gradient-text">Voxzen AI</span>?
                    </h2>
                    <p className="text-xl text-cream-200 max-w-3xl mx-auto">
                        Everything you need to create professional multilingual content and maximize your global reach
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card-dark rounded-xl p-8 hover:shadow-xl hover:shadow-primary-600/20 transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-cream-100 mb-3">{feature.title}</h3>
                            <p className="text-cream-300 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="section-container bg-dark-800">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-cream-100 mb-4">
                        Simple, <span className="gradient-text">Transparent Pricing</span>
                    </h2>
                    <p className="text-xl text-cream-200 max-w-3xl mx-auto mb-4">
                        Choose the perfect plan for your content creation needs
                    </p>
                    <div className="inline-flex items-center bg-primary-600/20 text-primary-400 border border-primary-600/30 px-4 py-2 rounded-full text-sm font-semibold">
                        🎉 7-day free trial on all paid plans - No credit card required
                    </div>
                </div>

                {/* Main Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>

                {/* Add-Ons Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-cream-100 mb-12">
                        Optional <span className="gradient-text">Add-Ons</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {addOns.map((addon, index) => (
                            <div key={index} className="card-dark rounded-xl p-6 hover:border-primary-600 transition-colors border border-dark-600">
                                <h4 className="text-xl font-bold text-cream-100 mb-3">{addon.name}</h4>
                                {addon.options ? (
                                    <div className="mb-4">
                                        {addon.options.map((option, i) => (
                                            <p key={i} className="text-primary-400 font-semibold">{option}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-2xl font-bold gradient-text mb-4">{addon.price}</p>
                                )}
                                <p className="text-cream-300 text-sm">{addon.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trial Info */}
                <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">How the Free Trial Works</h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Start with full access to any paid plan for 7 days. No credit card required.
                        After the trial, your subscription begins automatically at the monthly rate.
                        Cancel anytime during the trial with zero charges.
                    </p>
                    <a href="#contact" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block">
                        Start Your Free Trial
                    </a>
                </div>
            </section>

            {/* Demo Video Section */}
            <section id="demo" className="section-container bg-dark-900">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-cream-100 mb-4">
                        See Voxzen AI <span className="gradient-text">In Action</span>
                    </h2>
                    <p className="text-xl text-cream-200 max-w-3xl mx-auto">
                        Watch how our AI dubbing transforms YouTube content with premium voice quality
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <VideoEmbed
                        videoId="_jCd3Vq3bFI"
                        title="Voxzen AI Product Demo"
                    />
                </div>
                <div className="mt-12 text-center">
                    <a href="#pricing" className="btn-primary">
                        Get Started Today
                    </a>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="section-container bg-dark-800">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-cream-100 mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-xl text-cream-200 max-w-3xl mx-auto">
                        Everything you need to know about Voxzen AI
                    </p>
                </div>

                <div className="max-w-4xl mx-auto card-dark rounded-2xl shadow-lg p-8">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </section>

            {/* Contact/CTA Section */}
            <section id="contact" className="section-container bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Ready to Transform Your Content?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of creators already using Voxzen AI to reach global audiences
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#pricing"
                            className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                        >
                            Start 7-Day Free Trial
                        </a>
                        <a
                            href="mailto:support@voxzenai.in"
                            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors text-lg"
                        >
                            Contact Sales
                        </a>
                    </div>
                    <p className="text-sm mt-6 opacity-75">
                        Questions? Email us at support@voxzenai.in
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
}
