'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { careerTimeline } from '@/lib/data'
import { sections } from '@/lib/content'
import { getDynamicDuration } from '@/lib/utils'

/**
 * Career Timeline Component
 * 
 * Features:
 * - Vertical timeline
 * - Expandable position details
 * - Smooth animations
 */

interface TimelineItemProps {
    position: typeof careerTimeline[0]
    index: number
    isExpanded: boolean
    onClick: () => void
}

function TimelineItem({ position, index, isExpanded, onClick }: TimelineItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
        >
            {/* Timeline dot */}
            <div className="flex items-start mb-4">
                <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center shadow-lg shadow-accent-cyan/30">
                        <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-accent-cyan"></div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="ml-4 flex-1">
                    <button
                        onClick={onClick}
                        aria-expanded={isExpanded}
                        aria-controls={`timeline-content-${index}`}
                        className="text-left w-full glass-card p-4 hover:bg-accent-cyan/5 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-foreground">
                                {position.company}
                            </h3>
                            <span className="text-sm text-accent-cyan font-mono">
                                {getDynamicDuration(position.period, position.duration)}
                            </span>
                        </div>

                        <p className="text-accent-purple font-semibold mb-1">
                            {position.role}
                        </p>

                        <p className="text-sm text-foreground-muted mb-2">
                            {position.location} • {position.period}
                        </p>

                        {/* Expand indicator */}
                        <div className="flex items-center text-sm text-accent-cyan mt-2">
                            <span>{isExpanded ? 'Hide details' : 'View details'}</span>
                            <svg
                                className={`w-4 h-4 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                id={`timeline-content-${index}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-4 glass-card p-4 space-y-4">
                                    <p className="text-foreground-muted">
                                        {position.description}
                                    </p>

                                    {position.achievements.length > 0 && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-accent-cyan mb-2">
                                                Key Achievements:
                                            </h4>
                                            <ul className="space-y-1">
                                                {position.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-sm text-foreground-muted flex items-start">
                                                        <svg className="w-4 h-4 mt-0.5 mr-2 text-accent-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {position.technologies && position.technologies.length > 0 && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-accent-cyan mb-2">
                                                Technologies:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {position.technologies.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-xs rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple/30"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Connecting line (except for last item) */}
            {index < careerTimeline.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-accent-cyan/50 to-transparent"></div>
            )}
        </motion.div>
    )
}

export function CareerTimeline() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    return (
        <section id="timeline" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {sections.career.title}
                    </h2>
                    <p className="text-xl text-foreground-muted">
                        {sections.career.subtitle}
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {careerTimeline.map((position, index) => (
                        <TimelineItem
                            key={`${position.company}-${position.period}`}
                            position={position}
                            index={index}
                            isExpanded={expandedIndex === index}
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
