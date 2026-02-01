'use client'

import { useState } from 'react'

export default function ApplicationForm({ onClose, onSuccess }) {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        current_occupation: '',
        investment_readiness: 'yes_immediately',
        youtube_experience: '',
        goals: '',
        preferred_niche: '',
        how_heard: '',
        additional_info: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')
    const [fieldErrors, setFieldErrors] = useState({})

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const validatePhone = (phone) => {
        const cleaned = phone.replace(/\D/g, '')
        return cleaned.length >= 10
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Clear field error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleBlur = (e) => {
        const { name, value } = e.target
        const errors = {}

        if (name === 'email' && value && !validateEmail(value)) {
            errors.email = 'Please enter a valid email address'
        }
        if (name === 'phone' && value && !validatePhone(value)) {
            errors.phone = 'Please enter a valid phone number (10+ digits)'
        }

        setFieldErrors(prev => ({ ...prev, ...errors }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        // Validate required fields
        const errors = {}
        if (!formData.full_name.trim()) errors.full_name = 'Name is required'
        if (!formData.email.trim()) errors.email = 'Email is required'
        if (!validateEmail(formData.email)) errors.email = 'Invalid email address'
        if (!formData.phone.trim()) errors.phone = 'Phone is required'
        if (!validatePhone(formData.phone)) errors.phone = 'Invalid phone number'

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors)
            setIsSubmitting(false)
            setError('Please fix the errors above')
            return
        }

        try {
            const response = await fetch('/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit application')
            }

            // Success!
            if (onSuccess) {
                onSuccess(data)
            }

            // Reset form
            setFormData({
                full_name: '',
                email: '',
                phone: '',
                current_occupation: '',
                investment_readiness: 'yes_immediately',
                youtube_experience: '',
                goals: '',
                preferred_niche: '',
                how_heard: '',
                additional_info: ''
            })

        } catch (err) {
            setError(err.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="card-dark max-w-3xl w-full rounded-2xl shadow-2xl my-8 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-cream-300 hover:text-cream-100 transition-colors bg-dark-700 hover:bg-dark-600 rounded-full p-2"
                    aria-label="Close"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-cream-100">
                                    Quick Application
                                </h2>
                                <p className="text-sm text-cream-400">Takes less than 2 minutes</p>
                            </div>
                        </div>
                        <p className="text-cream-300 text-sm">
                            Fill in your details below. We&apos;ll contact you within 48 hours to discuss the program.
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 bg-red-600/20 border-l-4 border-red-600 text-red-400 px-4 py-3 rounded">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">{error}</span>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Contact Information Section */}
                        <div className="bg-dark-700/50 rounded-xl p-5 space-y-4">
                            <h3 className="text-lg font-semibold text-cream-100 flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Contact Details
                            </h3>

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-cream-200 mb-1.5">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="full_name"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className={`w-full px-4 py-2.5 bg-dark-700 border-2 ${fieldErrors.full_name ? 'border-red-500' : 'border-dark-600'
                                        } rounded-lg text-white placeholder-cream-400/50 focus:outline-none focus:border-primary-500 transition-colors`}
                                    placeholder="Your full name"
                                />
                                {fieldErrors.full_name && (
                                    <p className="mt-1 text-xs text-red-400">{fieldErrors.full_name}</p>
                                )}
                            </div>

                            {/* Email & Phone in grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-cream-200 mb-1.5">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        className={`w-full px-4 py-2.5 bg-dark-700 border-2 ${fieldErrors.email ? 'border-red-500' : 'border-dark-600'
                                            } rounded-lg text-white placeholder-cream-400/50 focus:outline-none focus:border-primary-500 transition-colors`}
                                        placeholder="you@example.com"
                                    />
                                    {fieldErrors.email && (
                                        <p className="mt-1 text-xs text-red-400">{fieldErrors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-cream-200 mb-1.5">
                                        Phone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        className={`w-full px-4 py-2.5 bg-dark-700 border-2 ${fieldErrors.phone ? 'border-red-500' : 'border-dark-600'
                                            } rounded-lg text-white placeholder-cream-400/50 focus:outline-none focus:border-primary-500 transition-colors`}
                                        placeholder="+91 9876543210"
                                    />
                                    {fieldErrors.phone && (
                                        <p className="mt-1 text-xs text-red-400">{fieldErrors.phone}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Program Details Section */}
                        <div className="bg-dark-700/50 rounded-xl p-5 space-y-4">
                            <h3 className="text-lg font-semibold text-cream-100 flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Quick Details
                            </h3>

                            {/* Investment Readiness */}
                            <div>
                                <label className="block text-sm font-medium text-cream-200 mb-1.5">
                                    Ready to invest ₹10,000 setup fee?
                                </label>
                                <select
                                    name="investment_readiness"
                                    value={formData.investment_readiness}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-dark-700 border-2 border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                                >
                                    <option value="yes_immediately">✅ Yes, ready now</option>
                                    <option value="yes_within_week">📅 Yes, within a week</option>
                                    <option value="need_more_info">❓ Need more information</option>
                                    <option value="not_ready">⏳ Not ready yet</option>
                                </select>
                            </div>

                            {/* Goals - Simplified */}
                            <div>
                                <label className="block text-sm font-medium text-cream-200 mb-1.5">
                                    What&apos;s your main goal? (Optional)
                                </label>
                                <textarea
                                    name="goals"
                                    value={formData.goals}
                                    onChange={handleChange}
                                    rows="2"
                                    maxLength="200"
                                    className="w-full px-4 py-2.5 bg-dark-700 border-2 border-dark-600 rounded-lg text-white placeholder-cream-400/50 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                    placeholder="E.g., Build passive income, Learn YouTube monetization..."
                                />
                                <p className="mt-1 text-xs text-cream-400/70 text-right">
                                    {formData.goals.length}/200
                                </p>
                            </div>
                        </div>

                        {/* Optional Section - Collapsible */}
                        <details className="bg-dark-700/30 rounded-xl overflow-hidden">
                            <summary className="px-5 py-3 cursor-pointer hover:bg-dark-700/50 transition-colors text-sm font-medium text-cream-200 flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Additional Info (Optional)
                                </span>
                                <span className="text-xs text-cream-400">Click to expand</span>
                            </summary>
                            <div className="p-5 pt-0 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-cream-200 mb-1.5">
                                            Current Occupation
                                        </label>
                                        <input
                                            type="text"
                                            name="current_occupation"
                                            value={formData.current_occupation}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-dark-700 border-2 border-dark-600 rounded-lg text-white placeholder-cream-400/50 focus:outline-none focus:border-primary-500 transition-colors"
                                            placeholder="Engineer, Business Owner..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-cream-200 mb-1.5">
                                            Preferred Niche
                                        </label>
                                        <input
                                            type="text"
                                            name="preferred_niche"
                                            value={formData.preferred_niche}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-dark-700 border-2 border-dark-600 rounded-lg text-white placeholder-cream-400/50 focus:outline-none focus:border-primary-500 transition-colors"
                                            placeholder="Tech, Finance, Education..."
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-cream-200 mb-1.5">
                                            YouTube Experience
                                        </label>
                                        <select
                                            name="youtube_experience"
                                            value={formData.youtube_experience}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-dark-700 border-2 border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        >
                                            <option value="">Select...</option>
                                            <option value="no_experience">No experience</option>
                                            <option value="viewer_only">Viewer only</option>
                                            <option value="tried_creating">Tried creating</option>
                                            <option value="active_creator">Active creator</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-cream-200 mb-1.5">
                                            How did you find us?
                                        </label>
                                        <select
                                            name="how_heard"
                                            value={formData.how_heard}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-dark-700 border-2 border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        >
                                            <option value="">Select...</option>
                                            <option value="google_search">Google</option>
                                            <option value="social_media">Social Media</option>
                                            <option value="youtube">YouTube</option>
                                            <option value="referral">Referral</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* Submit Buttons */}
                        <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-3 bg-dark-600 hover:bg-dark-500 text-cream-100 font-semibold rounded-lg transition-colors text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base font-semibold shadow-lg shadow-primary-600/20"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Submit Application
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* Privacy Note */}
                        <p className="text-xs text-cream-400/70 text-center">
                            By submitting, you agree to be contacted about the Voxzen Managed Channel Program.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
