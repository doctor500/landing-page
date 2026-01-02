import { render, screen } from '@testing-library/react'
import { StatsDashboard } from '@/components/stats-dashboard'
import { stats } from '@/lib/data'

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
}))

describe('StatsDashboard Component', () => {
    it('renders section heading', () => {
        render(<StatsDashboard />)
        expect(screen.getByText('Impact Dashboard')).toBeInTheDocument()
    })

    it('renders all stat cards', () => {
        render(<StatsDashboard />)
        stats.forEach((stat) => {
            expect(screen.getByText(stat.label)).toBeInTheDocument()
            expect(screen.getByText(stat.sublabel)).toBeInTheDocument()
        })
    })

    it('displays all stat values', () => {
        render(<StatsDashboard />)
        stats.forEach((stat) => {
            expect(screen.getByText(stat.value)).toBeInTheDocument()
        })
    })

    it('has correct grid layout classes', () => {
        const { container } = render(<StatsDashboard />)
        const grid = container.querySelector('.grid')
        expect(grid).toHaveClass('lg:grid-cols-3')
    })

    it('applies stat-card styling to each card', () => {
        const { container } = render(<StatsDashboard />)
        const cards = container.querySelectorAll('.stat-card')
        expect(cards.length).toBe(stats.length)
    })

    it('renders with correct section ID for anchor navigation', () => {
        const { container } = render(<StatsDashboard />)
        const section = container.querySelector('section')
        expect(section).toHaveAttribute('id', 'stats')
    })

    it('displays icons for each stat', () => {
        const { container } = render(<StatsDashboard />)
        const icons = container.querySelectorAll('svg')
        // Should have one icon per stat
        expect(icons.length).toBeGreaterThanOrEqual(stats.length)
    })
})
