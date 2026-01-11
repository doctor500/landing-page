'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioLinks, type PortfolioLink } from '@/lib/data'

interface PortfolioModalProps {
    isOpen: boolean
    onClose: () => void
}

// Icon components
function GitHubIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    )
}

function MediumIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
    )
}

function CloseIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

function ArrowRightIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
    )
}

function getIcon(icon: PortfolioLink['icon']) {
    switch (icon) {
        case 'github':
            return <GitHubIcon />
        case 'medium':
            return <MediumIcon />
        default:
            return null
    }
}

export function PortfolioModal({ isOpen, onClose }: PortfolioModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    // Focus trap
    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.focus()
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Modal */}
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="portfolio-modal-title"
                        tabIndex={-1}
                    >
                        <div className="glass-card p-6 md:p-8">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 id="portfolio-modal-title" className="text-2xl font-bold gradient-text">
                                    View My Work
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-foreground-muted hover:text-foreground"
                                    aria-label="Close modal"
                                >
                                    <CloseIcon />
                                </button>
                            </div>

                            {/* Links */}
                            <div className="space-y-4">
                                {portfolioLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-border-muted hover:border-accent-cyan/50 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                                            {getIcon(link.icon)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-foreground group-hover:text-accent-cyan transition-colors">
                                                {link.name}
                                            </h3>
                                            <p className="text-sm text-foreground-muted truncate">
                                                {link.description}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-foreground-muted group-hover:text-accent-cyan group-hover:translate-x-1 transition-all duration-300">
                                            <ArrowRightIcon />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
