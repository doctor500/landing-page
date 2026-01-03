'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/lib/data'

/**
 * Testimonials Carousel Component
 * 
 * Features:
 * - Auto-rotating carousel
 * - Manual navigation via dots
 * - Smooth transitions
 */

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isPlaying, setIsPlaying] = useState(true)
    const [progress, setProgress] = useState(0)

    // Auto-rotation - respects both pause states
    useEffect(() => {
        if (isPaused || !isPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
            setProgress(0) // Reset progress on change
        }, 8000)

        return () => clearInterval(interval)
    }, [isPaused, isPlaying])

    // Progress bar animation
    useEffect(() => {
        if (isPaused || !isPlaying) return

        setProgress(0)
        const startTime = Date.now()
        const duration = 8000

        const updateProgress = () => {
            const elapsed = Date.now() - startTime
            const newProgress = Math.min((elapsed / duration) * 100, 100)
            setProgress(newProgress)

            if (newProgress < 100) {
                requestAnimationFrame(updateProgress)
            }
        }

        const animation = requestAnimationFrame(updateProgress)
        return () => cancelAnimationFrame(animation)
    }, [currentIndex, isPaused, isPlaying])

    const current = testimonials[currentIndex]

    // Get initials for avatar
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
    }

    return (
        <section id="testimonials" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What People Say
                    </h2>
                    <p className="text-xl text-foreground-muted">
                        Testimonials from industry leaders
                    </p>
                </motion.div>

                <div className="glass-card-gradient p-8 md:p-12 relative">
                    {/* Quote icon */}
                    <div className="absolute top-6 left-6 text-accent-cyan/20">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                    </div>

                    {/* Pause/Play button */}
                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="absolute top-6 right-6 p-3 rounded-lg glass-card hover:bg-accent-cyan/10 transition-all duration-300"
                        aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
                    >
                        {isPlaying ? (
                            // Pause icon
                            <svg className="w-5 h-5 text-accent-cyan" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            // Play icon
                            <svg className="w-5 h-5 text-accent-cyan" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>

                    {/* Testimonial content */}
                    <div className="relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <blockquote className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-8 whitespace-pre-line">
                                    &quot;{current.quote}&quot;
                                </blockquote>

                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                    {/* Avatar */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center shadow-lg">
                                            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
                                                <span className="text-lg font-bold text-accent-cyan">
                                                    {getInitials(current.name)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Author info */}
                                    <div className="text-center md:text-left">
                                        <div className="text-xl font-bold text-foreground mb-1">
                                            {current.name}
                                        </div>
                                        <div className="text-accent-purple font-semibold mb-2">
                                            {current.title}
                                        </div>
                                        <div className="text-sm text-foreground-muted mb-2">
                                            {current.company}
                                        </div>
                                        <a
                                            href={current.linkedIn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm text-accent-cyan hover:underline"
                                        >
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                            View Profile
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index)
                                    setIsPaused(true)
                                    setProgress(0)
                                    setTimeout(() => setIsPaused(false), 10000) // Resume after 10s
                                }}
                                aria-label={`Go to testimonial ${index + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-accent-cyan'
                                    : 'w-2 bg-foreground-muted hover:bg-accent-cyan/50'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Progress bar */}
                    {isPlaying && !isPaused && (
                        <div
                            className="mt-4 h-1.5 rounded-full overflow-hidden relative"
                            style={{
                                backgroundColor: 'rgba(0, 217, 255, 0.1)',
                                boxShadow: 'inset 0 0 10px rgba(0, 217, 255, 0.2)'
                            }}
                        >
                            <div
                                className="h-full rounded-full transition-all ease-linear"
                                style={{
                                    width: `${progress}%`,
                                    background: 'linear-gradient(90deg, #00d9ff, #7c3aed)',
                                    boxShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
                                    transitionDuration: '100ms'
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
