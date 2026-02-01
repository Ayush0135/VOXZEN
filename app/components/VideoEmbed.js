'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function VideoEmbed({ videoId, title = "Video", autoplay = false }) {
    const [isPlaying, setIsPlaying] = useState(autoplay)

    // YouTube thumbnail URL (maxresdefault for highest quality, fallback to hqdefault)
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

    const handlePlay = () => {
        setIsPlaying(true)
    }

    return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900">
            {!isPlaying ? (
                // Thumbnail Preview with Play Button
                <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={handlePlay}
                >
                    {/* Thumbnail Image */}
                    <img
                        src={thumbnailUrl}
                        alt={title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loading="lazy"
                    />

                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                            <svg
                                className="w-10 h-10 sm:w-12 sm:h-12 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Video Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white font-semibold text-sm sm:text-base">{title}</p>
                    </div>
                </div>
            ) : (
                // Actual YouTube Embed
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    )
}
