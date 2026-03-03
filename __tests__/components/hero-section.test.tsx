import { render, screen } from '@testing-library/react'
import { HeroSection } from '@/components/hero-section'

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}))

// Mock modal components
jest.mock('@/components/modals/PortfolioModal', () => ({
    PortfolioModal: () => null,
}))
jest.mock('@/components/modals/ContactModal', () => ({
    ContactModal: () => null,
}))

describe('HeroSection Component', () => {
    it('renders hero heading with name', () => {
        render(<HeroSection />)
        expect(screen.getByText('David Layardi')).toBeInTheDocument()
    })

    it('renders role title', () => {
        render(<HeroSection />)
        expect(screen.getByText('Infrastructure & Agentic AI Engineer')).toBeInTheDocument()
    })

    it('renders tagline', () => {
        render(<HeroSection />)
        expect(screen.getByText('Cloud-Native Automation with AI-Powered Operations')).toBeInTheDocument()
    })

    it('renders experience description', () => {
        render(<HeroSection />)
        expect(screen.getByText(/~8 years driving infrastructure modernization/)).toBeInTheDocument()
    })

    it('renders CTA buttons', () => {
        render(<HeroSection />)
        expect(screen.getByText('View My Work')).toBeInTheDocument()
        expect(screen.getByText("Let's Connect")).toBeInTheDocument()
    })

    it('renders all stat cards', () => {
        render(<HeroSection />)
        // First 4 stats are displayed in hero
        expect(screen.getByText('Cost Savings')).toBeInTheDocument()
        expect(screen.getByText('Availability')).toBeInTheDocument()
        expect(screen.getByText('Doc Automation')).toBeInTheDocument()
        expect(screen.getByText('Faster Response')).toBeInTheDocument()
    })

    it('has correct structure with responsive classes', () => {
        const { container } = render(<HeroSection />)
        const section = container.querySelector('section')
        expect(section).toHaveClass('min-h-screen')
    })

    it('CTA buttons are interactive', () => {
        render(<HeroSection />)
        const viewWorkButton = screen.getByText('View My Work')
        const connectButton = screen.getByText("Let's Connect")

        // Buttons should be <button> elements (not <a> tags)
        expect(viewWorkButton.closest('button')).toBeInTheDocument()
        expect(connectButton.closest('button')).toBeInTheDocument()
    })
})
