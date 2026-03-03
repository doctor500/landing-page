import { render, screen } from '@testing-library/react'
import { ThemeToggle } from '@/components/theme-toggle'

// Mock next-themes
jest.mock('next-themes', () => ({
    ThemeProvider: ({ children }: any) => <>{children}</>,
    useTheme: () => ({
        theme: 'dark',
        setTheme: jest.fn(),
        resolvedTheme: 'dark',
    }),
}))

// Mock window.matchMedia for jsdom
beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    })
})

describe('ThemeToggle Component', () => {
    it('renders without crashing', () => {
        render(<ThemeToggle />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('has correct aria-label', () => {
        render(<ThemeToggle />)
        const button = screen.getByRole('button')
        expect(button).toHaveAttribute('aria-label')
    })

    it('is keyboard accessible', () => {
        render(<ThemeToggle />)
        const button = screen.getByRole('button')
        button.focus()
        expect(button).toHaveFocus()
    })
})
