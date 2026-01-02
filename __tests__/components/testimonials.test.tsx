import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Testimonials } from '@/components/testimonials'
import { testimonials } from '@/lib/data'

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Testimonials Component', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })

    it('renders section heading', () => {
        render(<Testimonials />)
        expect(screen.getByText('What People Say')).toBeInTheDocument()
    })

    it('renders first testimonial by default', () => {
        render(<Testimonials />)
        expect(screen.getByText(testimonials[0].name)).toBeInTheDocument()
        expect(screen.getByText(testimonials[0].title)).toBeInTheDocument()
    })

    it('displays testimonial quote', () => {
        render(<Testimonials />)
        const quote = screen.getByText((content, element) => {
            return content.includes('unflappable')
        })
        expect(quote).toBeInTheDocument()
    })

    it('displays company name', () => {
        render(<Testimonials />)
        expect(screen.getByText(testimonials[0].company)).toBeInTheDocument()
    })

    it('has LinkedIn link', () => {
        render(<Testimonials />)
        const linkedInLink = screen.getByText('View Profile')
        expect(linkedInLink.closest('a')).toHaveAttribute('href', testimonials[0].linkedIn)
        expect(linkedInLink.closest('a')).toHaveAttribute('target', '_blank')
        expect(linkedInLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders navigation dots', () => {
        const { container } = render(<Testimonials />)
        const dots = container.querySelectorAll('button[aria-label^="Go to testimonial"]')
        expect(dots.length).toBe(testimonials.length)
    })

    it('changes testimonial on dot click', () => {
        const { container } = render(<Testimonials />)

        // Click second dot
        const dots = container.querySelectorAll('button[aria-label^="Go to testimonial"]')
        fireEvent.click(dots[1])

        // Should show second testimonial
        waitFor(() => {
            expect(screen.getByText(testimonials[1].name)).toBeInTheDocument()
        })
    })

    it('auto-rotates after 8 seconds', () => {
        render(<Testimonials />)

        // Initially shows first testimonial
        expect(screen.getByText(testimonials[0].name)).toBeInTheDocument()

        // Fast-forward 8 seconds
        jest.advanceTimersByTime(8000)

        // Should advance to next testimonial
        waitFor(() => {
            expect(screen.getByText(testimonials[1].name)).toBeInTheDocument()
        })
    })

    it('has correct section ID for anchor navigation', () => {
        const { container } = render(<Testimonials />)
        const section = container.querySelector('section')
        expect(section).toHaveAttribute('id', 'testimonials')
    })
})
