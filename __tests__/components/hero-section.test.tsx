import { render, screen } from '@testing-library/react'
import { HeroSection } from '@/components/hero-section'

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}))

describe('HeroSection Component', () => {
    it('renders hero heading with name', () => {
        render(<HeroSection />)
        expect(screen.getByText('David Layardi')).toBeInTheDocument()
    })

    it('renders role title', () => {
        render(<HeroSection />)
        expect(screen.getByText('Infrastructure Engineer')).toBeInTheDocument()
    })

    it('renders tagline', () => {
        render(<HeroSection />)
        expect(screen.getByText('Building Scalable Cloud Systems')).toBeInTheDocument()
    })

    it('renders experience description', () => {
        render(<HeroSection />)
        expect(screen.getByText(/6\+ years driving infrastructure modernization/)).toBeInTheDocument()
    })

    it('renders CTA buttons', () => {
        render(<HeroSection />)
        expect(screen.getByText('View My Work')).toBeInTheDocument()
        expect(screen.getByText("Let's Connect")).toBeInTheDocument()
    })

    it('renders all stat cards', () => {
        render(<HeroSection />)
        // First 4 stats are displayed in hero
        expect(screen.getByText('Cost Reduction')).toBeInTheDocument()
        expect(screen.getByText('Uptime')).toBeInTheDocument()
        expect(screen.getByText('Services')).toBeInTheDocument()
        expect(screen.getByText('Years')).toBeInTheDocument()
    })

    it('has correct structure with responsive classes', () => {
        const { container } = render(<HeroSection />)
        const section = container.querySelector('section')
        expect(section).toHaveClass('min-h-screen')
    })

    it('CTA buttons have correct links', () => {
        render(<HeroSection />)
        const viewWorkButton = screen.getByText('View My Work')
        const connectButton = screen.getByText("Let's Connect")

        expect(viewWorkButton.closest('a')).toHaveAttribute('href', '#projects')
        expect(connectButton.closest('a')).toHaveAttribute('href', '#contact')
    })
})
