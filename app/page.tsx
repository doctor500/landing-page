import { HeroSection } from '@/components/hero-section'
import { CareerTimeline } from '@/components/career-timeline'
import { StatsDashboard } from '@/components/stats-dashboard'
import { ArticlesSection } from '@/components/articles-section'
import { Testimonials } from '@/components/testimonials'
import { ThemeToggle } from '@/components/theme-toggle'
import { FloatingNav } from '@/components/floating-nav'

/**
 * Main Landing Page
 * 
 * Sections:
 * - Hero with animated stats
 * - Stats dashboard with metrics (monitoring style)
 * - Latest articles from Medium
 * - Career timeline with positions
 * - Testimonials carousel
 */

export default function Home() {
    return (
        <main className="min-h-screen container-padding">
            {/* Theme Toggle - Fixed Top Right */}
            <div className="fixed top-6 right-6 z-50">
                <ThemeToggle />
            </div>

            {/* Floating Navigation */}
            <FloatingNav />

            {/* Hero Section */}
            <section id="hero">
                <HeroSection />
            </section>

            {/* Stats Dashboard */}
            <StatsDashboard />

            {/* Latest Articles */}
            <ArticlesSection />

            {/* Career Timeline */}
            <CareerTimeline />

            {/* Testimonials */}
            <Testimonials />

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-border-muted">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-foreground-muted">
                        Made with ❤️ using{' '}
                        <a
                            href="https://github.com/doctor500/landing-page"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-cyan hover:text-accent-purple transition-colors underline underline-offset-4"
                        >
                            GitHub Pages
                        </a>
                    </p>
                </div>
            </footer>
        </main>
    )
}
