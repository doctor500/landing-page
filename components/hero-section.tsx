'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { stats } from '@/lib/data'
import { personal } from '@/lib/content'
import { PortfolioModal } from './modals/PortfolioModal'
import { ContactModal } from './modals/ContactModal'

/**
 * Hero Section Component
 * 
 * Features:
 * - Split layout (60/40) for text and stats
 * - Animated stat counters
 * - Glassmorphism stat cards
 * - Responsive design
 * - Modal popups for CTA buttons
 */

const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number
        let animationFrame: number

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            setCount(Math.floor(progress * end))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration])

    return count
}

interface StatCardProps {
    value: string
    label: string
    sublabel: string
    index: number
}

function StatCard({ value, label, sublabel, index }: StatCardProps) {
    const isPercentage = value.includes('%')
    const isPlus = value.includes('+')
    const hasDecimal = value.includes('.')
    // For decimals like 99.9%, don't animate - just show the value
    const numericValue = hasDecimal ? 0 : parseInt(value.replace(/[^0-9]/g, ''))
    const animatedValue = useCounter(numericValue, 2000)

    // For decimal values, show static; otherwise animate
    const displayValue = hasDecimal
        ? value  // Show original value for decimals
        : isPercentage
            ? `${animatedValue}${isPlus ? '+' : ''}%`
            : isPlus
                ? `${animatedValue}+`
                : animatedValue.toString()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="stat-card group"
        >
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {displayValue}
            </div>
            <div className="text-lg font-semibold text-foreground mb-1">
                {label}
            </div>
            <div className="text-sm text-foreground-muted">
                {sublabel}
            </div>
        </motion.div>
    )
}

export function HeroSection() {
    const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false)
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    return (
        <>
            <section className="min-h-screen flex items-center justify-center px-4 py-20">
                <div className="max-w-7xl w-full">
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        {/* Left side - Text content (60% / 3 columns) */}
                        <div className="lg:col-span-3 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-accent-cyan text-lg mb-2">{personal.greeting}</p>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                                    {personal.name}
                                </h1>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-muted mb-6">
                                    {personal.role}
                                </h2>
                                <p className="text-xl md:text-2xl text-accent-purple font-semibold mb-6">
                                    {personal.tagline}
                                </p>
                                <p className="text-lg text-foreground-muted max-w-2xl">
                                    {personal.heroBio}
                                </p>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="flex flex-wrap gap-4 mt-8"
                            >
                                <button
                                    onClick={() => setIsPortfolioModalOpen(true)}
                                    className="px-8 py-3 bg-accent-cyan text-bg-primary font-semibold rounded-lg hover:bg-accent-cyan/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-cyan/50"
                                >
                                    View My Work
                                </button>
                                <button
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="px-8 py-3 glass-card-gradient font-semibold rounded-lg hover:scale-105 transition-all duration-300"
                                >
                                    Let&apos;s Connect
                                </button>
                            </motion.div>
                        </div>

                        {/* Right side - Stats cards (40% / 2 columns) */}
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-2 gap-4">
                                {stats.slice(0, 4).map((stat, index) => (
                                    <StatCard
                                        key={stat.label}
                                        value={stat.value}
                                        label={stat.label}
                                        sublabel={stat.sublabel}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modals */}
            <PortfolioModal
                isOpen={isPortfolioModalOpen}
                onClose={() => setIsPortfolioModalOpen(false)}
            />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    )
}

