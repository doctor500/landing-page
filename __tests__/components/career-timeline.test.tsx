import { render, screen, fireEvent } from '@testing-library/react'
import { CareerTimeline } from '@/components/career-timeline'
import { careerTimeline } from '@/lib/data'

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('CareerTimeline Component', () => {
    it('renders section heading', () => {
        render(<CareerTimeline />)
        expect(screen.getByText('Career Journey')).toBeInTheDocument()
    })

    it('renders all career positions', () => {
        render(<CareerTimeline />)
        careerTimeline.forEach((position) => {
            expect(screen.getByText(position.company)).toBeInTheDocument()
            expect(screen.getByText(position.role)).toBeInTheDocument()
        })
    })

    it('displays duration for each position', () => {
        render(<CareerTimeline />)
        careerTimeline.forEach((position) => {
            expect(screen.getByText(position.duration)).toBeInTheDocument()
        })
    })

    it('shows View details button for each position', () => {
        render(<CareerTimeline />)
        const viewDetailsButtons = screen.getAllByText('View details')
        expect(viewDetailsButtons).toHaveLength(careerTimeline.length)
    })

    it('expands position details on click', () => {
        render(<CareerTimeline />)

        // Find first "View details" button
        const firstButton = screen.getAllByText('View details')[0]

        // Click to expand
        fireEvent.click(firstButton)

        // Should show "Hide details" after click
        expect(screen.getByText('Hide details')).toBeInTheDocument()
    })

    it('displays achievements when expanded', () => {
        render(<CareerTimeline />)

        // Find a position with achievements (GoTo Group)
        const gotoButton = screen.getAllByText('View details')[2] // Index 2 is GoTo Group
        fireEvent.click(gotoButton)

        // Check if achievement is displayed
        expect(screen.getByText(/90%\+ infrastructure cost reduction/)).toBeInTheDocument()
    })

    it('displays technologies when expanded', () => {
        render(<CareerTimeline />)

        // Expand first position (Rakuten)
        const firstButton = screen.getAllByText('View details')[0]
        fireEvent.click(firstButton)

        // Check for technologies section
        expect(screen.getByText('Technologies:')).toBeInTheDocument()
    })

    it('only one position is expanded at a time', () => {
        render(<CareerTimeline />)

        const buttons = screen.getAllByText('View details')

        // Expand first
        fireEvent.click(buttons[0])
        expect(screen.getByText('Hide details')).toBeInTheDocument()

        // Expand second
        fireEvent.click(buttons[1])

        // First should collapse, second should expand
        const hideDetailsButtons = screen.getAllByText('Hide details')
        expect(hideDetailsButtons).toHaveLength(1)
    })
})
