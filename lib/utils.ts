/**
 * Utility functions for the landing page
 */

/**
 * Parse a date string like "Oct 2025" or "Mar 2018" into a Date object
 */
export function parseMonthYear(dateStr: string): Date {
    const months: { [key: string]: number } = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    }

    const parts = dateStr.trim().split(' ')
    if (parts.length === 2) {
        const month = months[parts[0]]
        const year = parseInt(parts[1])
        if (month !== undefined && !isNaN(year)) {
            return new Date(year, month, 1)
        }
    }

    // Fallback: try parsing as year only (e.g., "2017")
    const yearOnly = parseInt(dateStr)
    if (!isNaN(yearOnly)) {
        return new Date(yearOnly, 0, 1)
    }

    return new Date()
}

/**
 * Calculate duration between two dates and return a human-readable string
 * @param startDateStr - Start date string (e.g., "Oct 2025")
 * @param endDateStr - End date string (e.g., "Present" or "Sep 2025")
 * @returns Duration string (e.g., "5 mos", "1 yr 9 mos", "2 yrs")
 */
export function calculateDuration(startDateStr: string, endDateStr: string): string {
    const start = parseMonthYear(startDateStr)
    const end = endDateStr.toLowerCase() === 'present' ? new Date() : parseMonthYear(endDateStr)

    // Calculate total months difference
    const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())

    // Add 1 to include the start month
    const months = Math.max(1, totalMonths + 1)

    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years === 0) {
        return `${months} mos`
    }

    if (remainingMonths === 0) {
        return years === 1 ? '1 yr' : `${years} yrs`
    }

    const yearStr = years === 1 ? '1 yr' : `${years} yrs`
    return `${yearStr} ${remainingMonths} mos`
}

/**
 * Extract start and end dates from a period string
 * @param period - Period string (e.g., "Oct 2025 - Present" or "Jan 2024 - Sep 2025")
 * @returns Object with startDate and endDate
 */
export function parsePeriod(period: string): { startDate: string; endDate: string } {
    const parts = period.split(' - ')
    return {
        startDate: parts[0]?.trim() || '',
        endDate: parts[1]?.trim() || 'Present'
    }
}

/**
 * Get dynamic duration for a position
 * Uses calculated duration for current positions, static for past positions
 */
export function getDynamicDuration(period: string, staticDuration: string): string {
    if (period.toLowerCase().includes('present')) {
        const { startDate } = parsePeriod(period)
        return calculateDuration(startDate, 'Present')
    }
    return staticDuration
}
