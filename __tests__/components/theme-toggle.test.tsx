import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from '@/components/theme-toggle'

// Mock next-themes
jest.mock('next-themes', () => ({
    ...jest.requireActual('next-themes'),
    useTheme: () => ({
        theme: 'dark',
        setTheme: jest.fn(),
    }),
}))

describe('ThemeToggle Component', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider attribute="class">
                <ThemeToggle />
            </ThemeProvider>
        )

        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('has correct aria-label', () => {
        render(
            <ThemeProvider attribute="class">
                <ThemeToggle />
            </ThemeProvider>
        )

        const button = screen.getByRole('button')
        expect(button).toHaveAttribute('aria-label')
    })

    it('applies glass-card styling', () => {
        render(
            <ThemeProvider attribute="class">
                <ThemeToggle />
            </ThemeProvider>
        )

        const button = screen.getByRole('button')
        expect(button).toHaveClass('glass-card')
    })

    it('is keyboard accessible', () => {
        render(
            <ThemeProvider attribute="class">
                <ThemeToggle />
            </ThemeProvider>
        )

        const button = screen.getByRole('button')
        button.focus()
        expect(button).toHaveFocus()
    })
})
