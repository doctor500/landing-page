'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/data'
import { sections } from '@/lib/content'

/**
 * Stats Dashboard Component - System Monitoring Style
 * 
 * Features:
 * - System status header with operational indicator
 * - Progress bar visualizations for percentage metrics
 * - Grid layout with responsive design
 * - Animated on scroll
 */

const iconMap: Record<string, JSX.Element> = {
    chart: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    ),
    shield: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    cloud: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
    ),
    rocket: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    projects: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
    ),
    quote: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
}

// Get progress value from stat value
function getProgressValue(value: string): number | null {
    const match = value.match(/(\d+)/)
    if (match) {
        const num = parseInt(match[1])
        // Only return progress for percentage-like values
        if (value.includes('%') || value.includes('+')) {
            return Math.min(num, 100)
        }
    }
    return null
}

// Check if value should show as counter (large number) vs progress
function isCounterValue(value: string): boolean {
    const num = parseInt(value.replace(/[^0-9]/g, ''))
    return num > 100 || value.includes('600') || value.includes('7+')
}

interface DashboardCardProps {
    stat: typeof stats[0]
    index: number
}

function DashboardCard({ stat, index }: DashboardCardProps) {
    const progressValue = getProgressValue(stat.value)
    const showProgress = progressValue !== null && !isCounterValue(stat.value)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="monitoring-card group"
        >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="text-accent-cyan opacity-80">
                        {iconMap[stat.icon]}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-foreground-muted">
                        {stat.label}
                    </span>
                </div>
            </div>

            {/* Value Display */}
            <div className="mb-3">
                {showProgress ? (
                    <div className="space-y-2">
                        <div className="text-3xl md:text-4xl font-bold gradient-text font-mono">
                            {stat.value}
                        </div>
                        {/* Progress Bar */}
                        <div className="progress-bar-container">
                            <motion.div
                                className="progress-bar-fill"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${progressValue}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="text-3xl md:text-4xl font-bold gradient-text font-mono">
                        {stat.value}
                    </div>
                )}
            </div>

            {/* Sublabel */}
            <div className="text-sm text-foreground-muted">
                {stat.sublabel}
            </div>
        </motion.div>
    )
}

export function StatsDashboard() {
    return (
        <section id="stats" className="py-20 px-4" style={{ backgroundColor: 'var(--bgColor-muted)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Status Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-8 pb-4 border-b"
                    style={{ borderColor: 'var(--borderColor-muted)' }}
                >
                    <div className="flex items-center gap-3">
                        <div className="status-indicator-pulse" />
                        <span className="text-sm font-mono uppercase tracking-wider" style={{ color: 'var(--fgColor-muted)' }}>
                            System Status
                        </span>
                    </div>
                    <span className="text-sm font-mono font-semibold" style={{ color: 'var(--fgColor-success)' }}>
                        OPERATIONAL
                    </span>
                </motion.div>

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--fgColor-default)' }}>
                        {sections.stats?.title || 'Infrastructure Metrics'}
                    </h2>
                    <p className="text-xl" style={{ color: 'var(--fgColor-muted)' }}>
                        {sections.stats?.subtitle || 'Real-time achievements from infrastructure engineering'}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <DashboardCard key={stat.label} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
