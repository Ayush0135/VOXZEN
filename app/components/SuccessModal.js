'use client'

export default function SuccessModal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="card-dark max-w-md w-full rounded-2xl shadow-2xl p-8 text-center relative">
                <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-cream-100 mb-2">
                        Application Submitted!
                    </h2>
                    <p className="text-cream-300 leading-relaxed">
                        Thank you for applying to the Voxzen Managed Channel Program.
                        We've received your application and will review it carefully.
                    </p>
                </div>

                <div className="bg-dark-700 rounded-lg p-6 mb-6 text-left">
                    <h3 className="font-bold text-cream-100 mb-3">What happens next?</h3>
                    <ul className="space-y-2 text-cream-300 text-sm">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>We'll review your application within <strong>48 hours</strong></span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Our team will contact you via email or phone</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>We'll discuss your goals and answer any questions</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>If approved, we'll guide you through the next steps</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-primary-600/20 border border-primary-600/30 rounded-lg p-4 mb-6">
                    <p className="text-sm text-cream-300">
                        <strong className="text-primary-400">Pro Tip:</strong> Check your spam folder and add support@voxzenai.in to your contacts to ensure you receive our email.
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="btn-primary w-full"
                >
                    Close
                </button>
            </div>
        </div>
    )
}
