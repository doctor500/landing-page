'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contactLinks, type ContactLink } from '@/lib/data'

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

// Icon components
function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

function EmailIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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

function getIcon(icon: ContactLink['icon']) {
    switch (icon) {
        case 'linkedin':
            return <LinkedInIcon />
        case 'email':
            return <EmailIcon />
        default:
            return null
    }
}

function getHref(link: ContactLink): string {
    if (link.type === 'mailto' && link.email) {
        return `mailto:${link.email}`
    }
    return link.url || '#'
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
                        aria-labelledby="contact-modal-title"
                        tabIndex={-1}
                    >
                        <div className="glass-card p-6 md:p-8">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 id="contact-modal-title" className="text-2xl font-bold gradient-text">
                                    Let&apos;s Connect
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
                                {contactLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={getHref(link)}
                                        target={link.type === 'link' ? '_blank' : undefined}
                                        rel={link.type === 'link' ? 'noopener noreferrer' : undefined}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-border-muted hover:border-accent-purple/50 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 text-accent-purple group-hover:scale-110 transition-transform duration-300">
                                            {getIcon(link.icon)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-foreground group-hover:text-accent-purple transition-colors">
                                                {link.name}
                                            </h3>
                                            <p className="text-sm text-foreground-muted truncate">
                                                {link.description}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 text-foreground-muted group-hover:text-accent-purple group-hover:translate-x-1 transition-all duration-300">
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
