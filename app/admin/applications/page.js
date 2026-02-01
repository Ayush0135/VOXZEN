'use client'

import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AdminApplicationsPage() {
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filter, setFilter] = useState('all') // all, pending, reviewed

    useEffect(() => {
        fetchApplications()
    }, [])

    const fetchApplications = async () => {
        try {
            setLoading(true)
            const response = await fetch('/api/applications')
            const data = await response.json()

            if (response.ok) {
                setApplications(data.applications)
            } else {
                setError('Failed to fetch applications')
            }
        } catch (err) {
            setError('Error loading applications')
        } finally {
            setLoading(false)
        }
    }

    const filteredApplications = applications.filter(app => {
        if (filter === 'all') return true
        return app.status === filter
    })

    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        return date.toLocaleString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div className="min-h-screen">
            <Header />

            <section className="pt-32 pb-20 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-900 min-h-screen">
                <div className="section-container">
                    <div className="mb-8">
                        <h1 className="text-4xl sm:text-5xl font-bold text-cream-100 mb-4">
                            Manage Channel Applications
                        </h1>
                        <p className="text-xl text-cream-200">
                            View and manage all application submissions
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-4 mb-8">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${filter === 'all'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-dark-700 text-cream-300 hover:bg-dark-600'
                                }`}
                        >
                            All Applications ({applications.length})
                        </button>
                        <button
                            onClick={() => setFilter('pending')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${filter === 'pending'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-dark-700 text-cream-300 hover:bg-dark-600'
                                }`}
                        >
                            Pending ({applications.filter(a => a.status === 'pending').length})
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="card-dark rounded-xl p-6">
                            <div className="text-cream-300 text-sm mb-2">Total Applications</div>
                            <div className="text-3xl font-bold text-cream-100">{applications.length}</div>
                        </div>
                        <div className="card-dark rounded-xl p-6">
                            <div className="text-cream-300 text-sm mb-2">Pending</div>
                            <div className="text-3xl font-bold text-yellow-500">
                                {applications.filter(a => a.status === 'pending').length}
                            </div>
                        </div>
                        <div className="card-dark rounded-xl p-6">
                            <div className="text-cream-300 text-sm mb-2">Today</div>
                            <div className="text-3xl font-bold text-green-500">
                                {applications.filter(a => {
                                    const today = new Date().toDateString()
                                    const appDate = new Date(a.created_at).toDateString()
                                    return today === appDate
                                }).length}
                            </div>
                        </div>
                        <div className="card-dark rounded-xl p-6">
                            <div className="text-cream-300 text-sm mb-2">Investment Ready</div>
                            <div className="text-3xl font-bold text-primary-400">
                                {applications.filter(a =>
                                    a.investment_readiness === 'yes_immediately' ||
                                    a.investment_readiness === 'yes_within_week'
                                ).length}
                            </div>
                        </div>
                    </div>

                    {/* Applications Table */}
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-cream-300 mt-4">Loading applications...</p>
                        </div>
                    ) : error ? (
                        <div className="card-dark rounded-xl p-8 text-center">
                            <p className="text-red-400 text-lg">{error}</p>
                            <button
                                onClick={fetchApplications}
                                className="btn-primary mt-4"
                            >
                                Retry
                            </button>
                        </div>
                    ) : filteredApplications.length === 0 ? (
                        <div className="card-dark rounded-xl p-8 text-center">
                            <p className="text-cream-300 text-lg">No applications found</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredApplications.map((app) => (
                                <div
                                    key={app.id}
                                    className="card-dark rounded-xl p-6 hover:shadow-xl hover:shadow-primary-600/20 transition-all"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {/* Left Column - Contact Info */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                    {app.full_name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-cream-100">{app.full_name}</h3>
                                                    <span className="text-xs text-cream-400">ID: #{app.id}</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex items-center text-cream-300">
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                    </svg>
                                                    {app.email}
                                                </div>
                                                <div className="flex items-center text-cream-300">
                                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>
                                                    {app.phone}
                                                </div>
                                                {app.current_occupation && (
                                                    <div className="flex items-center text-cream-300">
                                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                                        </svg>
                                                        {app.current_occupation}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Middle Column - Application Details */}
                                        <div className="space-y-3">
                                            {app.investment_readiness && (
                                                <div>
                                                    <span className="text-xs text-cream-400">Investment Readiness:</span>
                                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ml-2 ${app.investment_readiness === 'yes_immediately' ? 'bg-green-600 text-white' :
                                                            app.investment_readiness === 'yes_within_week' ? 'bg-yellow-600 text-white' :
                                                                'bg-gray-600 text-white'
                                                        }`}>
                                                        {app.investment_readiness.replace(/_/g, ' ').toUpperCase()}
                                                    </div>
                                                </div>
                                            )}
                                            {app.youtube_experience && (
                                                <div>
                                                    <span className="text-xs text-cream-400">YouTube Experience:</span>
                                                    <p className="text-cream-200 text-sm">{app.youtube_experience.replace(/_/g, ' ')}</p>
                                                </div>
                                            )}
                                            {app.preferred_niche && (
                                                <div>
                                                    <span className="text-xs text-cream-400">Preferred Niche:</span>
                                                    <p className="text-cream-200 text-sm">{app.preferred_niche}</p>
                                                </div>
                                            )}
                                            {app.goals && (
                                                <div>
                                                    <span className="text-xs text-cream-400">Goals:</span>
                                                    <p className="text-cream-200 text-sm line-clamp-2">{app.goals}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Column - Meta Info */}
                                        <div className="space-y-3">
                                            <div>
                                                <span className="text-xs text-cream-400">Submitted:</span>
                                                <p className="text-cream-200 text-sm">{formatDate(app.created_at)}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-cream-400">Status:</span>
                                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ml-2 ${app.status === 'pending' ? 'bg-yellow-600 text-white' :
                                                        app.status === 'reviewed' ? 'bg-blue-600 text-white' :
                                                            'bg-green-600 text-white'
                                                    }`}>
                                                    {app.status.toUpperCase()}
                                                </div>
                                            </div>
                                            {app.how_heard && (
                                                <div>
                                                    <span className="text-xs text-cream-400">Source:</span>
                                                    <p className="text-cream-200 text-sm">{app.how_heard.replace(/_/g, ' ')}</p>
                                                </div>
                                            )}
                                            {app.additional_info && (
                                                <details className="mt-2">
                                                    <summary className="text-xs text-primary-400 cursor-pointer hover:text-primary-300">
                                                        Show Additional Info
                                                    </summary>
                                                    <p className="text-cream-300 text-sm mt-2">{app.additional_info}</p>
                                                </details>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    )
}
