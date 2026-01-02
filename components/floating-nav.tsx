'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Floating Navigation Component - Bottom Center
 * 
 * Features:
 * - Bottom-centered position (safe from browser UI)
 * - Collapsed state (menu button only)
 * - Expands to show navigation items
 * - Integrated theme toggle
 * - Design system compliant
 */

const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'stats', label: 'Impact', icon: '📊' },
    { id: 'timeline', label: 'Journey', icon: '📅' },
    { id: 'testimonials', label: 'Testimonials', icon: '💬' },
]

export function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    // Show nav after scrolling down
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Track active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id)
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 200 && rect.bottom >= 200
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                    exit={{ y: 100, x: "-50%", opacity: 0 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-8 left-1/2 z-50"
                >
                    <nav
                        className="glass-card px-3 py-3 rounded-full shadow-xl flex items-center gap-1"
                        style={{
                            backdropFilter: 'blur(12px)',
                        }}
                    >
                        {/* Navigation Items */}
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`
                                    px-3 md:px-4 py-2 rounded-full transition-all duration-300
                                    flex items-center gap-2 min-w-[44px]
                                    ${activeSection === item.id
                                        ? 'bg-accent-cyan text-bg-primary font-semibold'
                                        : 'text-foreground-muted hover:text-foreground hover:bg-foreground/5'
                                    }
                                `}
                                aria-label={`Navigate to ${item.label}`}
                                aria-current={activeSection === item.id ? 'page' : undefined}
                                title={item.label}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="hidden md:inline text-sm whitespace-nowrap">{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
