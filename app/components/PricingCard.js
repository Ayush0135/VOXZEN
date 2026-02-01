'use client'

export default function PricingCard({
    name,
    price,
    period = "month",
    tagline,
    features,
    popular = false,
    cta = "Get Started",
    isFree = false
}) {
    return (
        <div className={`relative card-dark rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/20 hover:-translate-y-1 ${popular ? 'ring-2 ring-primary-600 scale-105' : 'border border-dark-600'
            }`}>
            {popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                    </span>
                </div>
            )}

            <div className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-cream-100 mb-2">{name}</h3>
                    {tagline && (
                        <p className="text-sm text-cream-300 mb-4">{tagline}</p>
                    )}
                    <div className="flex items-baseline justify-center">
                        {isFree ? (
                            <span className="text-5xl font-bold gradient-text">Free</span>
                        ) : (
                            <>
                                <span className="text-3xl font-bold text-cream-100">₹</span>
                                <span className="text-5xl font-bold gradient-text">{price.toLocaleString()}</span>
                                <span className="text-cream-300 ml-2">/{period}</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-cream-200">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className={`block w-full text-center font-semibold px-6 py-3 rounded-lg transition-all duration-200 ${popular
                        ? 'btn-primary'
                        : 'bg-dark-600 hover:bg-dark-500 text-cream-100 border border-dark-500'
                        }`}
                >
                    {cta}
                </a>
            </div>
        </div>
    )
}
