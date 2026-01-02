import { HeroSection } from '@/components/hero-section'
import { CareerTimeline } from '@/components/career-timeline'
import { StatsDashboard } from '@/components/stats-dashboard'
import { Testimonials } from '@/components/testimonials'
import { ThemeToggle } from '@/components/theme-toggle'
import { FloatingNav } from '@/components/floating-nav'

/**
 * Main Landing Page
 * 
 * Sections:
 * - Hero with animated stats
 * - Stats dashboard with metrics
 * - Career timeline with positions
 * - Testimonials carousel
 */

export default function Home() {
    return (
        <main className="min-h-screen container-padding">
            {/* Floating Navigation with integrated theme toggle */}
            <FloatingNav />

            {/* Hero Section */}
            <section id="hero">
                <HeroSection />
            </section>

            {/* Stats Dashboard */}
            <StatsDashboard />

            {/* Career Timeline */}
            <CareerTimeline />

            {/* Testimonials */}
            <Testimonials />

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-border-muted">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-foreground-muted mb-4">
                        &copy; {new Date().getFullYear()} David Layardi. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/davidlayardi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-cyan hover:text-accent-purple transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/doctor500"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-cyan hover:text-accent-purple transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
}
