'use client'

import { useState } from 'react'

export default function ApplicationForm({ onClose, onSuccess }) {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        current_occupation: '',
        investment_readiness: '',
        youtube_experience: '',
        goals: '',
        preferred_niche: '',
        how_heard: '',
        additional_info: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

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
                investment_readiness: '',
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
            <div className="card-dark max-w-2xl w-full rounded-2xl shadow-2xl my-8 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-cream-300 hover:text-cream-100 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-cream-100 mb-2">
                            Apply for Managed Channel Program
                        </h2>
                        <p className="text-cream-300">
                            Fill out the form below to reserve your slot. We'll contact you within 48 hours.
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 bg-red-600/20 border border-red-600/50 text-red-400 px-4 py-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-cream-100 font-semibold mb-2 text-lg">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-dark-700 border-2 border-dark-600 rounded-lg text-white font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-cream-100 font-semibold mb-2 text-lg">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-dark-700 border-2 border-dark-600 rounded-lg text-white font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-cream-100 font-semibold mb-2 text-lg">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-dark-700 border-2 border-dark-600 rounded-lg text-white font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                                placeholder="+91 XXXXXXXXXX"
                            />
                        </div>

                        {/* Current Occupation */}
                        <div>
                            <label className="block text-cream-100 font-semibold mb-2">
                                Current Occupation
                            </label>
                            <input
                                type="text"
                                name="current_occupation"
                                value={formData.current_occupation}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-dark-700 border-2 border-dark-600 rounded-lg text-white font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                                placeholder="e.g., Software Engineer, Business Owner"
                            />
                        </div>

                        {/* Investment Readiness */}
                        <div>
                            <label className="block text-cream-100 font-semibold mb-2">
                                Are you ready to invest ₹10,000 setup fee?
                            </label>
                            <select
                                name="investment_readiness"
                                value={formData.investment_readiness}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-dark-700 border-2 border-dark-600 rounded-lg text-white font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                            >
                                <option value="">Select an option</option>
                                <option value="yes_immediately">Yes, immediately</option>
                                <option value="yes_within_week">Yes, within a week</option>
                                <option value="need_more_info">Need more information</option>
                                <option value="not_ready">Not ready yet</option>
                            </select>
                        </div>

                        {/* YouTube Experience */}
                        <div>
                            <label className="block text-cream-100 font-semibold mb-2">
                                YouTube Experience
                            </label>
                            <select
                                name="youtube_experience"
                                value={formData.youtube_experience}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-dark-700 border-2 border-dark-600 rounded-lg text-white font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                            >
                                <option value="">Select an option</option>
                                <option value="no_experience">No experience</option>
                                <option value="viewer_only">Viewer only</option>
                                <option value="tried_creating">Tried creating content</option>
                                <option value="active_creator">Active creator</option>
                                <option value="monetized_creator">Monetized creator</option>
                            </select>
                        </div>

                        {/* Goals */}
                        <div>
                            <label className="block text-cream-100 font-semibold mb-2">
                                What are your goals with this channel?
                            </label>
                            <textarea
                                name="goals"
                                value={formData.goals}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-4 py-3 bg-dark-700 border-2 border-dark-600 rounded-lg text-white font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                                placeholder="e.g., Passive income, Building personal brand, Testing YouTube business model..."
                            />
                        </div>

                        {/* Preferred Niche */}
                        <div>
                            <label className="block text-cream-100 font-semibold mb-2">
                                Preferred Niche/Content Type
                            </label>
                            <input
                                type="text"
                                name="preferred_niche"
                                value={formData.preferred_niche}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-dark-700 border-2 border-dark-600 rounded-lg text-white font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                                placeholder="e.g., Tech, Finance, Education, Entertainment (or let us decide)"
                            />
                        </div>

                        {/* How Heard */}
                        <div>
                            <label className="block text-cream-100 font-semibold mb-2">
                                How did you hear about us?
                            </label>
                            <select
                                name="how_heard"
                                value={formData.how_heard}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-dark-700 border-2 border-dark-600 rounded-lg text-white font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                            >
                                <option value="">Select an option</option>
                                <option value="google_search">Google Search</option>
                                <option value="social_media">Social Media</option>
                                <option value="youtube">YouTube</option>
                                <option value="referral">Friend/Referral</option>
                                <option value="advertisement">Advertisement</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Additional Info */}
                        <div>
                            <label className="block text-cream-100 font-semibold mb-2">
                                Additional Information
                            </label>
                            <textarea
                                name="additional_info"
                                value={formData.additional_info}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-4 py-3 bg-dark-700 border-2 border-dark-600 rounded-lg text-white font-medium focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 transition-all"
                                placeholder="Any questions or additional details you'd like to share..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    'Submit Application'
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-3 bg-dark-600 hover:bg-dark-500 text-cream-100 font-semibold rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
